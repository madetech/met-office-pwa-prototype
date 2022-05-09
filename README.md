- [Requirements](#requirements)
- [Running the App Locally](#running-the-app-locally)
- [Running Tests](#running-tests)
- [Running Production Build Locally](#running-production-build-locally)
- [Automated Formatting (in VSCode)](#automated-formatting-in-vscode)
- [Environment Variables and Secrets](#environment-variables-and-secrets)

## Requirements

- Node >= 12.22.0
- NPM

## Running the App Locally

Clone the repository:

```bash
git clone git@github.com:JohnFarrellDev/met-office-demo.git
```

Go into the project:

```bash
cd met-office-demo
```

Install dependencies:

```bash
npm i
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running Tests

In watch mode:

```bash
npm run test
```

Run all tests:

```bash
npm run test:ci
```

## Running Production Build Locally

You can run the production build locally

First build the app:

```bash
npm run build
```

Then run the build output:

```bash
npm run start
```

## Automated Formatting (in VSCode)

- Open the command pallette in VSCode (ctrl + shift + p)
- Search settings and open "Preferences: Open Settings (JSON)"
- Add the following sections to your settings JSON

```json
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
},
"editor.formatOnSave": true,
"editor.defaultFormatter": "esbenp.prettier-vscode"
```

- You will also benefit from installing two VSCode extensions (with these installed VSCode will highlight any linting issues):
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- (you might need to restart VSCode for changes to be applied)

## Environment Variables and Secrets

Copy .env.sample to .env.local, .env.local is where your environment variables should live for local deployment. The copied file will contain all the required environment variables but not contain the required key values.

```bash
cp .env.sample .env.local
```

- MET_OFFICE_API_BASE_URL - URL required to call met office API for weather data - Set in .env.local and Vercel Environment Variables
- MET_OFFICE_API_CLIENT_ID - Client ID for calling the API - Set in .env.local and Vercel Environment
- MET_OFFICE_API_CLIENT_SECRET - Client secret for calling the met office API - Set in .env.local and Vercel Environment
- CHROMATIC_PROJECT_TOKEN - Token to allow chromatic to pull changes from our repo for visual regression testing - Set in Github secrets
- YOUTUBE_API_KEY - Client secret for calling the YouTube Data API (allows fetching latest uploaded video by the Met Office) - Set in .env.local and Vercel Environment
