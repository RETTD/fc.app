# Few things from Dominik

I decide to focus on React Navigation with React Hook Form with Native Base components.
Few things in design wasn't clear to me, and in this situation I will ask designer or backend developer (about API).
I don't ask about this right now, because in email you write about fast finish task. If you want this from me, let me know.
List of this not 100% clear things I will describe in email.
If you want check preview I add few screenshots below.
# Table of Contents <!-- omit in toc -->

- [🔥🔥🔥 Upgraded to the latest React-Native (> 0.69.x) with brand New Architecture (Fabric) 🔥🔥🔥](#-upgraded-to-the-latest-react-native--069x-with-brand-new-architecture-fabric-)
- [Installation :inbox_tray:](#installation-inbox_tray)
- [Rename project and bundles :memo: :package:](#rename-project-and-bundles-memo-package)
  - [iOS & Android](#ios--android)
- [Environment Setup :globe_with_meridians:](#environment-setup-globe_with_meridians)
- [Scripts :wrench:](#scripts-wrench)
  - [Run the app](#run-the-app)
  - [Generate app icons](#generate-app-icons)
  - [Generate Splashscreen](#generate-splashscreen)
  - [To enabled React-Native (Fabric) new architecture](#to-enabled-react-native-fabric-new-architecture)
  - [Setup iOS](#setup-ios)
  - [Typescript (optional)](#typescript-optional)
- [Roadmap :running:](#roadmap-running)
- [Screenshots](#screenshots)
- [Contributors :sparkles:](#contributors-sparkles)
- [License :scroll:](#license-scroll)

---

## Installation :inbox_tray:

```bash
# Setup your project
> npx degit IronTony/react-native-react-query-starter-app your-new-app

> cd your-new-app

# Install dependencies
> yarn

# if needed, setup iOS development environment
yarn setup:ios
```

See [`environment`](#environment-setup-:globe_with_meridians:) section for how to configure env variables.

See [`scripts`](#scripts-:wrench:) section for how to run the app.

---

## Rename project and bundles :memo: :package:

To rename the project and bundles, just follow these steps:

### iOS & Android

Run `npx react-native-rename [name] -b [bundle-identifier]` from the project root

Example:
`npx react-native-rename "Test New App" -b com.testnewapp`

---

## Environment Setup :globe_with_meridians:

`React Native Starter App` environments variables management is based on a custom script and the `app.json` config file.

Define your environment variables inside `app.json` inside the `environments` object under the desired
environment key (such as `development`, `staging` or `production`) and then run the app for the required env
using one of the available run scripts (e.g. `ios:dev`).

If you want to use IDEs such Xcode or Android Studio, you have to set up the ENV variables with these commands:

- `yarn env:dev`, to set the development ENV variables
- `yarn env:stage`, to set the staging ENV variables
- `yarn env:prod`, to set the production ENV variables

---

## Scripts :wrench:

### Run the app

To run the app use one of the following scripts:

- `yarn android:dev`, to start the app on Android with the `development` environment variables.
- `yarn android:stage`, to start the app on Android with the `staging` environment variables.
- `yarn android:prod`, to start the app on Android with the `production` environment variables.

- `yarn ios:dev`, to start the app on iOS with the `development` environment variables.
- `yarn ios:stage`, to start the app on iOS with the `staging` environment variables.
- `yarn ios:prod`, to start the app on iOS with the `production` environment variables.

### Generate app icons

To setup the app icons:

- create an image at least `1024x1024px`
- place it under `/assets` folder as `icon.png`
- run

```sh
yarn assets:icons
```

### Generate Splashscreen

To setup the app splashscreen:

- create an image at least `1242x2208px`
- place it under `/assets` folder as `splashscreen.png`
- run

```sh
yarn assets:splashscreen
```

### To enabled React-Native (Fabric) new architecture

Check the official documentation [here](https://reactnative.dev/docs/new-architecture-intro)

### Setup iOS

To setup the environment to run on iOS, run

```sh
yarn setup:ios
```

this will run `cocoapods` to install all the required dependencies.






## Screenshots

<div align="center">
    <img src="./screenshots/screenshot1.jpg" width="50%" />
</div>

<div align="center">
    <img src="./screenshots/screenshot2.jpg" width="50%" /> 
</div>

<div align="center">
    <img src="./screenshots/screenshot3.jpg" width="50%" />
</div>

<div align="center">
    <img src="./screenshots/screenshot4.jpg" width="50%" />
</div>
---

## Contributors :sparkles:

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/IronTony"><img src="https://avatars3.githubusercontent.com/u/3645225?v=4" width="100px;" alt=""/><br /><sub><b>IronTony</b></sub></a><br /><a href="#ideas-IronTony" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/IronTony/react-native-react-query-starter-app/commits?author=IronTony" title="Code">💻</a> <a href="https://github.com/IronTony/react-native-react-query-starter-app/commits?author=IronTony" title="Documentation">📖</a> <a href="https://github.com/IronTony/react-native-react-query-starter-app/issues?q=author%3AIronTony" title="Bug reports">🐛</a> <a href="#maintenance-IronTony" title="Maintenance">🚧</a> <a href="#platform-IronTony" title="Packaging/porting to new platform">📦</a> <a href="#question-IronTony" title="Answering Questions">💬</a> <a href="https://github.com/IronTony/react-native-react-query-starter-app/pulls?q=is%3Apr+reviewed-by%3AIronTony" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/IronTony/react-native-react-query-starter-app/commits?author=IronTony" title="Tests">⚠️</a> <a href="#example-IronTony" title="Examples">💡</a></td>
    <td align="center"><a href="http://panz3r.dev"><img src="https://avatars3.githubusercontent.com/u/1754457?v=4" width="100px;" alt=""/><br /><sub><b>Mattia Panzeri</b></sub></a><br /><a href="#ideas-panz3r" title="Ideas, Planning, & Feedback">🤔</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

---

## License :scroll:

Licensed under [Mozilla Public License Version 2.0](LICENSE)