# Setup Instructions

It appears that **Node.js** and **npm** might be missing or not configured in your environment, which causes the app to appear blank or show errors in `package.json`.

## Step 1: Install Node.js
1. Download Node.js (LTS version) from [nodejs.org](https://nodejs.org/).
2. Install it.
3. Restart your terminal/computer.

## Step 2: Install Dependencies
Once Node.js is installed, run these commands in your terminal inside this folder (`advising-ui`):

```bash
# Install libraries
npm install
```

## Step 3: Run the App
```bash
# Start the development server
npm run dev
```

## Why is `package.json` showing an error?
If you see a red error on `package.json`, it is likely because your editor detects that the packages listed (like `react`, `vite`) are not actually installed in the `node_modules` folder yet. Running `npm install` will fix this.
