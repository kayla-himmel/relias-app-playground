# React Native Playground App for Relias Project

This project is based off the RN Project template, with a few mocked screens and navigation to create a playground for the Relias project. From here, we can try out additional libraries and features to see if they are a good fit for the project. (Ex. Maestro or Detox for E2E testing.)

## Included Features

- originally based on Expo's [Blank (Typescript) template](https://github.com/expo/expo/tree/main/templates/expo-template-blank-typescript)
- includes [ESLint](https://eslint.org) + [Prettier](https://prettier.io)
- includes [VSCode](https://code.visualstudio.com) / [Cursor](https://www.cursor.com) extensions
- includes [Jest](https://jestjs.io) + [React Native Testing Library](https://testing-library.com/docs/react-native-testing-library/intro/) for unit testing
- includes [Maestro](https://maestro.mobile.dev) for E2E testing
- includes [Storybook](https://storybook.js.org) for component development
- includes GitHub Action for PR Checks

> [!NOTE]
> This template is set up to use [Continuous Native Generation](https://docs.expo.dev/workflow/continuous-native-generation/)

## Getting started

- find & replace `my-app` with your app name
- find & replace `com.jpmigueldriver.myapp` with your app id
- run `npm install` to install the dependencies
- run `npm run ios` or `npm run android` to start the app
- run `npm start:storybook` to start the storybook UI

## (Optional) Steps for further customization

- Adding additional ESLint rules

  - [import/no-default-export](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-default-export.md)

    - can be desirable to simplify refactoring

      ```sh
      npm install eslint-plugin-import --save-dev
      ```

      ```js
      // in eslintrc.js

      rules: {
        // ...other rules...
        "import/no-default-export": "error", // <-- add the rule
      }
      ```

  - [unused-imports/no-unused-imports](https://github.com/sweepline/eslint-plugin-unused-imports)

    - can automatically remove unused imports

      ```sh
      npm install eslint-plugin-unused-imports --save-dev
      ```

      ```js
      // in eslintrc.js

      rules: {
        // ...other rules...
        "unused-imports/no-unused-imports": "warn", // <-- add the rule
      }
      ```

  - [no-nested-ternary](https://eslint.org/docs/latest/rules/no-nested-ternary)

    - can enforce simpler logic

      ```js
      // in eslintrc.js

      rules: {
        // ...other rules...
        "no-nested-ternary": "error", // <-- add the rule
      }
      ```

- Customizing Jest

  - to collect Code Coverage add the following to your `jest.config.js`

  ```js
  "collectCoverage": true,
  "collectCoverageFrom": [
    "**/*.{ts,tsx,js,jsx}",
    "!**/coverage/**",
    "!**/node_modules/**",
    "!**/babel.config.js",
    "!**/expo-env.d.ts",
    "!**/.expo/**"
  ]
  ```

- Add more GitHub workflows

  - if you are using EAS Update you can use the following GitHub Action to show a QR code to scan for iOS and Android
    - [EAS Update GitHub Actions](https://docs.expo.dev/eas-update/github-actions/)

- Add [Husky](https://typicode.github.io/husky/get-started.html) for pre-commit hooks

## Next steps

### Adding Navigation

You have several options for adding navigation to your app:

- [React Navigation](https://reactnavigation.org)
- [Expo Router](https://expo.dev/router)

### Add Apple Team ID

- You should add the following to your `app.config.js`
  - see [Apple Team ID docs](https://docs.expo.dev/versions/latest/config/app/#appleteamid)
  - see [here](https://willowtree.atlassian.net/wiki/spaces/PD/pages/3056861513/WillowTree-Owned+Developer+Accounts) for a list of our internal Apple Teams you may wish to use

```js
ios: {
  bundleIdentifier: "com.jpmigueldriver.myapp",
  appleTeamId: "7UMFPW78PV", // <-- add your Team ID
}
```

### Configure EAS

- EAS is a suite of tools for building, deploying, and maintaining your app
- see [EAS documentation](https://docs.expo.dev/eas/)

## Notes

- `react-native-web` support has been removed
  - see [this link](https://willowtree.atlassian.net/wiki/spaces/SD/pages/2732916827/React+Native+Web) for more
