import { copyFileSync } from 'fs';

const src = "C:\\Users\\aradh\\.gemini\\antigravity-ide\\brain\\84faeb65-19d0-4ca8-95f5-20395a9205e6\\aradhya_raj_portfolio_banner_1786475889858.png";
const dest = "C:\\Users\\aradh\\OneDrive\\Desktop\\aradhya_raj_portfolio_banner.png";

copyFileSync(src, dest);
console.log("✅ Banner saved to Desktop!");
