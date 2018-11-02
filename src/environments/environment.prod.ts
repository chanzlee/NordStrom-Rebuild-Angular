
import { masterFirebaseConfig } from "src/app/api-keys";

export const environment = {
  production: true,
  firebase: {
    apiKey: masterFirebaseConfig.apiKey,
    authDomain: masterFirebaseConfig.authDomain,
    databaseURL: masterFirebaseConfig.databaseURL,
    storageBucket: masterFirebaseConfig.storageBucket
  }
};
