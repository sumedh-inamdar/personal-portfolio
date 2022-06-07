// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyClK3SvvFU_FMdBhy4EUI6Udt_2dKL_PaY',
  authDomain: 'portfolio-contact-bb658.firebaseapp.com',
  projectId: 'portfolio-contact-bb658',
  storageBucket: 'portfolio-contact-bb658.appspot.com',
  messagingSenderId: '1052337582274',
  appId: '1:1052337582274:web:57d7dbdf87982484c60b5b'
};

export function getFirebaseConfig() {
  if (!firebaseConfig || !firebaseConfig.apiKey) {
    throw new Error(
      'No Firebase configuration object provided.' +
        '\n' +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return firebaseConfig;
  }
}
