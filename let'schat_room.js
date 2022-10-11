
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBCMAmazsVCg0nLBfHkOjVizKPKH_mXfiU",
    authDomain: "kwitter-22d17.firebaseapp.com",
    databaseURL: "https://kwitter-22d17-default-rtdb.firebaseio.com",
    projectId: "kwitter-22d17",
    storageBucket: "kwitter-22d17.appspot.com",
    messagingSenderId: "664297794396",
    appId: "1:664297794396:web:45ee803b7d4479a28e2f99"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                //Start code
                console.log("Room_names - " + Room_names);
                row = "<div class = 'room_name' id = " + Room_names + " onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>"
                document.getElementById("output").innerHTML = row;
                //End code
          });
    });
}
getData();

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_room.html";
}

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_room.html";
}