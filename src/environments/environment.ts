// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseApiUrl:'http://localhost:3000/',
  APIKey:'test-key',
  firebaseConfig :{
    apiKey: "AIzaSyDkrm08aGGDSWUW2mjzo9LAohLssDFE9cE",
    authDomain: "forte-305505.firebaseapp.com",
    databaseURL: "https://forte-305505-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "forte-305505",
    storageBucket: "forte-305505.appspot.com",
    messagingSenderId: "618124719662",
    appId: "1:618124719662:web:33b0022e46283893d491bf"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
