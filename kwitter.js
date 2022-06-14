const firebaseConfig = {
    apiKey: "AIzaSyDnP6vvfQpLGJ2Ws23HaS4nH01bL5M4R50",
    authDomain: "classtest-acdc6.firebaseapp.com",
    databaseURL: "https://classtest-acdc6-default-rtdb.firebaseio.com",
    projectId: "classtest-acdc6",
    storageBucket: "classtest-acdc6.appspot.com",
    messagingSenderId: "135363348060",
    appId: "1:135363348060:web:588c8dbb84ea5370c64899"
  };
  
  const app = initializeApp(firebaseConfig);
function addUser() {
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name",user_name);

    window.location = "kwitter_room.html";
}
function addroom()
{
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({ purpose : "adding room name"
});

localStorage.setItem("room_name",room_name);

window.location = "kwitter_page.html";
}

