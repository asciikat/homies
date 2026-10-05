// Cloud sync settings for The Hood. Same Firebase project as Mission Board and Ezycal, so one
// Google sign-in covers all three.
//
// Set to null to switch sync off; The Hood then works on each device on its own.
// These values are not secret. Your Hood stays private because of the Firestore
// security rules (see README.md): only your Google account can read or write it.
window.MISSION_BOARD_FIREBASE = {
  apiKey: 'AIzaSyCy_5de4xxemB2J7a_t2q7OgEaGOW6y2bI',
  authDomain: 'todo-d2b10.firebaseapp.com',
  projectId: 'todo-d2b10',
  storageBucket: 'todo-d2b10.firebasestorage.app',
  messagingSenderId: '289567867545',
  appId: '1:289567867545:web:7fcd38264da0ff98be6e08',
};
