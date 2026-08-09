# Portfolio

This is a React + TypeScript + Vite portfolio project.

## Auto-Sync Feature

This project includes a file watcher that automatically commits and pushes your changes to GitHub whenever you save a file.

### Prerequisites

Before using the auto-sync feature, ensure that:
1. Git is initialized in your project (`git init`)
2. You have added a remote repository (`git remote add origin <your-repo-url>`)
3. You have committed and pushed at least once initially (`git push -u origin main`)

### How to use

First, install the required dependencies:
```bash
npm install
```

Run the following command in a new terminal window to start watching for changes:
```bash
npm run auto-sync
```

The script will:
- Watch your project directory for any file changes (ignoring `node_modules`, `.git`, `dist`, etc).
- Wait 2 seconds after you save a file to prevent multiple commits while typing.
- Automatically stage all changes (`git add .`).
- Check if there are actual changes to commit.
- Create a commit with the message: `Auto Update - <current date & time>`.
- Automatically detect your current branch and push the changes.
- Show colored console logs indicating the progress (Change detected -> Committing -> Pushing -> Push successful).
