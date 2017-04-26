// (window.onload = function() {
//     // Initialize Firebase
//     var config = {
//         apiKey: "AIzaSyA-skdWc_527h3H8zWBht2XTgOaFPRJNkU",
//         authDomain: "sampleapp-81133.firebaseapp.com",
//         databaseURL: "https://sampleapp-81133.firebaseio.com",
//         projectId: "sampleapp-81133",
//         storageBucket: "sampleapp-81133.appspot.com",
//         messagingSenderId: "877596979865"
//     };
//     firebase.initializeApp(config);

//     var uid = "some-uid";

//     admin.auth().createCustomToken(uid)
//     .then(function(customToken) {
//         // Send token back to client
//     })
//     .catch(function(error) {
//         console.log("Error creating custom token:", error);
//     });


//     firebase.auth().signInAnonymously().catch(function(error) {
//     // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         alert("signInAnonymously error");
//     // ...
//     }); 
// })();


function loadFunction() {
    var config = {
        apiKey: "AIzaSyA-skdWc_527h3H8zWBht2XTgOaFPRJNkU",
        authDomain: "sampleapp-81133.firebaseapp.com",
        databaseURL: "https://sampleapp-81133.firebaseio.com",
        projectId: "sampleapp-81133",
        storageBucket: "sampleapp-81133.appspot.com",
        messagingSenderId: "877596979865"
    };
    firebase.initializeApp(config);

    var uid = "some-uid";

    var admin = require("firebase-admin");

    admin.auth().createCustomToken(uid)
    .then(function(customToken) {
        // Send token back to client
    })
    .catch(function(error) {
        console.log("Error creating custom token:", error);
    });


    firebase.auth().signInAnonymously().catch(function(error) {
    // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("signInAnonymously error");
    // ...
    }); 
}

loadFunction();
