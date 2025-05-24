# Troubleshooting

This page provides solutions to common issues you might encounter while using MJ-AHMAD OVERVIEW. If you don't find a solution to your problem here, please ask for help in our [GitHub Discussions](https://github.com/MJ-AHMAD/MJ-AHMAD-OVERVIEW/discussions) or [Discord community](https://discord.gg/wQkqJw3Y).

## Table of Contents

- [Installation Issues](#installation-issues)
- [Environment Variables](#environment-variables)
- [Performance Issues](#performance-issues)
- [Data Persistence](#data-persistence)
- [UI and Display Issues](#ui-and-display-issues)
- [Feature-Specific Issues](#feature-specific-issues)
- [Mobile Device Issues](#mobile-device-issues)
- [Browser Compatibility](#browser-compatibility)
- [Development Issues](#development-issues)

## Installation Issues

### Error: Cannot find module 'next'

**Problem**: When running `npm run dev` or `yarn dev`, you get an error saying the module 'next' cannot be found.

**Solution**:
1. Make sure you've installed all dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`
2. If that doesn't work, try deleting the `node_modules` folder and reinstalling:
   \`\`\`bash
   rm -rf node_modules
   npm install
   # or
   yarn install
   \`\`\`

### Error: Port 3000 is already in use

**Problem**: When starting the development server, you get an error saying port 3000 is already in use.

**Solution**:
1. Find and close the process using port 3000, or
2. Start the server on a different port:
   \`\`\`bash
   PORT=3001 npm run dev
   # or
   PORT=3001 yarn dev
   \`\`\`

### Error: Node.js version is not supported

**Problem**: You get an error about an unsupported Node.js version.

**Solution**:
1. Check your Node.js version:
   \`\`\`bash
   node -v
   \`\`\`
2. If it's below v18.x, install a newer version:
   - Using nvm (recommended):
     \`\`\`bash
     nvm install 18
     nvm use 18
     \`\`\`
   - Or download from [nodejs.org](https://nodejs.org/)

## Environment Variables

### Error: Cannot read environment variables

**Problem**: The application can't access environment variables, resulting in features not working correctly.

**Solution**:
1. Make sure you've created a `.env.local` file in the root directory
2. Ensure the variable names are correct:
   \`\`\`
   NEXT_PUBLIC_NOTES_PASSWORD=your_password_here
   NEXT_PUBLIC_NOTES_PASSWORD_2=your_second_password_here
   \`\`\`
3. Restart the development server after making changes to environment variables

### Password protection not working

**Problem**: You can't access password-protected sections even with the correct password.

**Solution**:
1. Check that your environment variables are set correctly
2. Make sure you're using the exact password (passwords are case-sensitive)
3. Clear your browser's localStorage and try again:
   - Open browser DevTools (F12)
   - Go to Application > Local Storage
   - Clear the storage for your domain
   - Refresh the page

## Performance Issues

### Application runs slowly

**Problem**: The application is sluggish or unresponsive.

**Solution**:
1. Close unused browser tabs and applications
2. Clear your browser cache:
   - Chrome: Settings > Privacy and security > Clear browsing data
   - Firefox: Options > Privacy & Security > Cookies and Site Data > Clear Data
3. Reduce the amount of data stored in the application
4. Try a different browser (Chrome or Firefox recommended)
5. If using a development build, switch to a production build:
   \`\`\`bash
   npm run build
   npm start
   # or
   yarn build
   yarn start
   \`\`\`

### High memory usage

**Problem**: The application uses a lot of memory, causing your system to slow down.

**Solution**:
1. Close and reopen the browser
2. Disable browser extensions that might be interfering
3. If using 3D visualizations, try disabling them temporarily
4. Reduce the amount of data stored in the application

## Data Persistence

### Data not saving

**Problem**: Your data isn't being saved between sessions.

**Solution**:
1. Make sure you're not using incognito/private browsing mode
2. Check if your browser allows localStorage:
   - Open browser DevTools (F12)
   - Go to Application > Local Storage
   - Verify you can add items
3. Check if your browser's storage is full:
   - Clear some localStorage data from other sites
   - Export and backup your data, then clear the application's storage

### Data disappeared after browser update

**Problem**: Your data is gone after updating your browser.

**Solution**:
1. Check if your browser has a backup feature
2. In the future, regularly export your data as a backup
3. If using Chrome, check if your data is still available in an older user profile

## UI and Display Issues

### Layout appears broken

**Problem**: The layout is misaligned, overlapping, or otherwise broken.

**Solution**:
1. Try resizing your browser window
2. Clear your browser cache and reload
3. Try a different browser
4. Check if you have custom CSS or zoom settings that might be interfering

### Dark mode not working correctly

**Problem**: Dark mode doesn't apply properly or has visual glitches.

**Solution**:
1. Toggle dark mode off and on again
2. Check if your browser or OS has a forced dark mode setting that might be interfering
3. Clear your browser cache and reload
4. Check if you have browser extensions that modify page styles

### Images not loading

**Problem**: Images are missing or show as broken links.

**Solution**:
1. Check your internet connection
2. Clear your browser cache and reload
3. Try a different browser
4. If you're running the application locally, make sure all image files are in the correct locations

## Feature-Specific Issues

### Water Tracker not updating

**Problem**: The Water Tracker doesn't update when adding water intake.

**Solution**:
1. Check if localStorage is enabled in your browser
2. Try clicking the button multiple times
3. Refresh the page and try again
4. Clear the application's localStorage and start fresh

### ISS Tracker not showing the current position

**Problem**: The ISS Tracker doesn't show the current position of the International Space Station.

**Solution**:
1. Check your internet connection
2. The API might be temporarily unavailable; try again later
3. Check if your browser blocks third-party requests
4. Try a different browser

### Focus Timer stops when switching tabs

**Problem**: The Focus Timer pauses or behaves incorrectly when switching browser tabs.

**Solution**:
1. This is expected behavior in some browsers to save resources
2. Keep the tab visible or use a separate timer
3. Some browsers allow background processes; check your browser settings

## Mobile Device Issues

### Features not working on mobile

**Problem**: Some features don't work correctly on mobile devices.

**Solution**:
1. Make sure you're using a modern mobile browser
2. Try landscape orientation for better layout
3. Some features may have limited functionality on mobile due to screen size or browser capabilities
4. Try using the desktop version of the site if your mobile browser supports it

### Touch interactions not working

**Problem**: Touch interactions (swipe, pinch, etc.) don't work as expected.

**Solution**:
1. Make sure your device and browser support touch events
2. Try updating your mobile browser
3. Some features may require mouse interaction and don't have touch equivalents yet

## Browser Compatibility

### Application doesn't work in Internet Explorer

**Problem**: The application doesn't load or behaves incorrectly in Internet Explorer.

**Solution**:
Internet Explorer is not supported. Please use a modern browser like:
- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari

### Visual glitches in specific browsers

**Problem**: You see visual glitches or layout issues in specific browsers.

**Solution**:
1. Try updating your browser to the latest version
2. Clear your browser cache and reload
3. Try disabling browser extensions
4. Report the issue on our [GitHub Issues page](https://github.com/MJ-AHMAD/MJ-AHMAD-OVERVIEW/issues) with details about your browser and OS

## Development Issues

### Build fails with TypeScript errors

**Problem**: The build process fails with TypeScript type errors.

**Solution**:
1. Make sure you're using the correct TypeScript version
2. Run `npx tsc --noEmit` to see all type errors
3. Fix the errors one by one, starting with the most critical ones
4. If you're having trouble with third-party library types, check if you need to install `@types/` packages

### Component styles not applying

**Problem**: Tailwind CSS styles are not being applied to components.

**Solution**:
1. Make sure Tailwind is properly configured
2. Check if you're using the correct class names
3. Make sure the component is properly imported and rendered
4. Try running `npm run build:css` or equivalent to rebuild the CSS

### Server Actions not working

**Problem**: Next.js Server Actions are not working as expected.

**Solution**:
1. Make sure you're using the 'use server' directive at the top of your server action files
2. Check if you're using the correct import paths
3. Verify that your Next.js version supports Server Actions
4. Check the server logs for any errors

### Changes not reflecting in development server

**Problem**: Your code changes are not reflected when running the development server.

**Solution**:
1. Make sure you saved the file
2. Check if the development server is watching for changes
3. Try restarting the development server
4. Clear your browser cache and reload

## Still Having Issues?

If you're still experiencing problems after trying these solutions:

1. Search for similar issues in our [GitHub Issues](https://github.com/MJ-AHMAD/MJ-AHMAD-OVERVIEW/issues)
2. Ask for help in our [GitHub Discussions](https://github.com/MJ-AHMAD/MJ-AHMAD-OVERVIEW/discussions)
3. Join our [Discord community](https://discord.gg/wQkqJw3Y) for real-time support
4. Contact the project maintainer at [mjahmad2024@outlook.com](mailto:mjahmad2024@outlook.com)

When reporting issues, please provide:
- Detailed description of the problem
- Steps to reproduce
- Browser and OS information
- Screenshots or videos if applicable
- Any error messages from the console
\`\`\`
