# Installation Guide

This guide provides detailed instructions for setting up MJ-AHMAD OVERVIEW locally for development or personal use.

## System Requirements

- **Node.js**: Version 18.x or higher
- **npm** (6.x or higher) or **yarn** (1.22.x or higher)
- **Git**: For cloning the repository
- **Modern web browser**: Chrome, Firefox, Safari, or Edge

## Basic Installation

### 1. Clone the Repository

\`\`\`bash
git clone https://github.com/MJ-AHMAD/MJ-AHMAD-OVERVIEW.git
cd MJ-AHMAD-OVERVIEW
\`\`\`

### 2. Install Dependencies

Using npm:
\`\`\`bash
npm install
\`\`\`

Or using yarn:
\`\`\`bash
yarn install
\`\`\`

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory with the following variables:

\`\`\`
NEXT_PUBLIC_NOTES_PASSWORD=your_password_here
NEXT_PUBLIC_NOTES_PASSWORD_2=your_second_password_here
\`\`\`

### 4. Run the Development Server

Using npm:
\`\`\`bash
npm run dev
\`\`\`

Or using yarn:
\`\`\`bash
yarn dev
\`\`\`

### 5. Access the Application

Open your browser and navigate to:
\`\`\`
http://localhost:3000
\`\`\`

## Production Deployment

### Building for Production

Using npm:
\`\`\`bash
npm run build
\`\`\`

Or using yarn:
\`\`\`bash
yarn build
\`\`\`

### Running in Production Mode

Using npm:
\`\`\`bash
npm start
\`\`\`

Or using yarn:
\`\`\`bash
yarn start
\`\`\`

## Deployment Options

### Vercel (Recommended)

1. Fork the repository to your GitHub account
2. Sign up for [Vercel](https://vercel.com)
3. Import your forked repository
4. Set the environment variables in the Vercel dashboard
5. Deploy

### Netlify

1. Fork the repository to your GitHub account
2. Sign up for [Netlify](https://netlify.com)
3. Import your forked repository
4. Set the build command to `npm run build` or `yarn build`
5. Set the publish directory to `out`
6. Set the environment variables in the Netlify dashboard
7. Deploy

### Docker Deployment

A Dockerfile is provided for containerized deployment:

1. Build the Docker image:
\`\`\`bash
docker build -t mj-ahmad-overview .
\`\`\`

2. Run the container:
\`\`\`bash
docker run -p 3000:3000 -e NEXT_PUBLIC_NOTES_PASSWORD=your_password_here -e NEXT_PUBLIC_NOTES_PASSWORD_2=your_second_password_here mj-ahmad-overview
\`\`\`

## Troubleshooting Installation Issues

### Common Issues

1. **Node.js version incompatibility**
   - Solution: Use nvm (Node Version Manager) to install and use the correct Node.js version

2. **Port 3000 already in use**
   - Solution: Change the port by using `PORT=3001 npm run dev` or edit the package.json scripts

3. **Missing dependencies**
   - Solution: Run `npm install` or `yarn install` again

4. **Build errors**
   - Solution: Check the console for specific error messages and refer to the [Troubleshooting](Troubleshooting) page

For more detailed troubleshooting, see the [Troubleshooting](Troubleshooting) page.

## Updating the Application

To update to the latest version:

\`\`\`bash
git pull origin main
npm install
# or
yarn install
\`\`\`

## Next Steps

After installation:
- Follow the [Getting Started](Getting-Started) guide
- Explore the [Features](Features) documentation
- Learn about the [Architecture](Architecture)
\`\`\`

Now, let's create the Features documentation:
