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
- (you might need to restart VSCode for changes to be applied)

```json
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
},
"editor.formatOnSave": true,
"editor.defaultFormatter": "esbenp.prettier-vscode"
```
