

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBX5_1-cBP_ZZ_An_wpXssegfm1cqLZoJg",
    authDomain: "kwitter-a91e8.firebaseapp.com",
    projectId: "kwitter-a91e8",
    storageBucket: "kwitter-a91e8.appspot.com",
    messagingSenderId: "797333851226",
    appId: "1:797333851226:web:17cbabc71dc9f6342a5c63"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
