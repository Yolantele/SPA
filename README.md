## SPA React Bubble App

This is a mobile-first Web App, but please see my wip wireframes for [Native App in Figma](https://www.figma.com/file/rzoqrRow3dL2NpcRtpZmpz/%F0%9F%93%B2Bubble-Wireframes-for-web-portal-mobile-UI?node-id=35%3A4472) that were created to fully appreciate the task at hand before coding began.

### How to start

1. To start the application clone this Git repo
2. Install dependencies `yarn`
3. Start the App `yarn start`
4. For your testing convenience the .env file is not ignored in .gitignore so that the app can be run immediately

### App features

- Log in / log out screen with sign-in to Bubble form handling and guiding error messages
- Authenticated data calls for user, nearby sitters and active bookings
- User's Landing Page with overview of active bookings (past and present)
- Sider view controls for changing pages
- A test suit setup with start of tests for components and views

### Considerations

- This App uses Ant Design system for rapid prototyping
- The code is structured around the principle of separation of concerns: cells that contain tests, constants, styles and components not shared across the app: each hierarchical level contains resources that are required for well encompassed component / hooks / view.
- to further separation of concern data fetching logic is extracted into react [hooks](https://reactjs.org/docs/hooks-intro.html)
- Shared resources that are used in multiple components and views are taken to shared levels (such as ui / images folders)

- For testing suit Jest and Enzyme is used with some examples (run `yarn test` to test the app). With more time tests would be developed further an addition of Codecept.JS test suit would be added to enable User Story / Snapshot testing to align with product design UIX expectations

### Further development focus

- Enriching existing views, extending new views
- Refining on UIX feedback
- PWA / more mobile-first development
- Accessibility, ARIA, a11y
- User story testing - snapshots with Codecept.js
