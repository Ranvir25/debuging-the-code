const firebaseConfig = {
      apiKey: "AIzaSyDnP6vvfQpLGJ2Ws23HaS4nH01bL5M4R50",
      authDomain: "classtest-acdc6.firebaseapp.com",
      projectId: "classtest-acdc6",
      storageBucket: "classtest-acdc6.appspot.com",
      messagingSenderId: "135363348060",
      appId: "1:135363348060:web:824d8d0c077ca8e6c64899"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("roomname-" + Room_names);
       row = "<div class='room_name'id="+Room_names+" onclick='redirectTonameroomname(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();
function redirectTonameroomname(name)
{
      console.log(name);
      localStorage.setitem("room_name", name);
       window.location = "kitter_page.html";
}