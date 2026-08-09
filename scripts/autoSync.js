import { exec } from 'child_process';
import { promisify } from 'util';
import chokidar from 'chokidar';

const execAsync = promisify(exec);

// ANSI Color Codes
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m'
};

const log = {
  success: (msg) => console.log(`${colors.green}✓ ${msg}${colors.reset}`),
  error: (msg) => console.log(`${colors.red}✗ ${msg}${colors.reset}`),
  info: (msg) => console.log(`${colors.blue}ℹ ${msg}${colors.reset}`),
  warn: (msg) => console.log(`${colors.yellow}⚠ ${msg}${colors.reset}`),
  text: (msg) => console.log(msg)
};

async function checkGitSetup() {
  try {
    await execAsync('git rev-parse --is-inside-work-tree');
  } catch (error) {
    log.error('Git is not initialized in this directory.');
    log.info('To fix this, run: git init');
    process.exit(1);
  }

  try {
    const { stdout } = await execAsync('git remote -v');
    if (!stdout.trim()) {
      throw new Error('No remote repository');
    }
  } catch (error) {
    log.error('No remote repository found.');
    log.info('To fix this, add a remote repository by running: git remote add origin <your-repo-url>');
    process.exit(1);
  }
}

async function getCurrentBranch() {
  try {
    const { stdout } = await execAsync('git branch --show-current');
    const branch = stdout.trim();
    return branch || 'main';
  } catch (error) {
    return 'main';
  }
}

let syncTimeout = null;
let isSyncing = false;

async function syncChanges() {
  if (isSyncing) return;
  isSyncing = true;
  
  try {
    await execAsync('git add .');

    try {
      await execAsync('git diff --cached --quiet');
      log.success('No changes to commit');
      isSyncing = false;
      return;
    } catch (error) {
      // Exit code 1 means there are changes, proceed to commit
    }

    log.success('Committing...');
    const date = new Date().toLocaleString();
    await execAsync(`git commit -m "Auto Update - ${date}"`);
    
    log.success('Pushing...');
    const branch = await getCurrentBranch();
    await execAsync(`git push origin ${branch}`);
    
    log.success('Push successful');
  } catch (error) {
    log.error(`Push failed:`);
    log.text(error.stderr || error.message);
  } finally {
    isSyncing = false;
  }
}

async function start() {
  await checkGitSetup();
  
  const watcher = chokidar.watch('.', {
    ignored: [
      '**/node_modules/**',
      '**/.git/**',
      '**/dist/**',
      '**/build/**',
      '**/.vercel/**',
      '**/.next/**'
    ],
    persistent: true,
    ignoreInitial: true
  });

  log.success('Watching for changes...');

  watcher.on('all', (event, path) => {
    log.success(`Change detected`);
    
    if (syncTimeout) {
      clearTimeout(syncTimeout);
    }
    
    syncTimeout = setTimeout(() => {
      syncChanges();
    }, 2000);
  });
}

start();
