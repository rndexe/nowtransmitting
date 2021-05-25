
var likeBut = document.getElementById("likeButton");
var paths=location.pathname.split("/");
var page = paths.pop() || paths.pop();
var liked = localStorage.getItem(page);
var firebaseConfig = {
    apiKey: "AIzaSyDyy4xakFHsL2ujgOnutxSOaWjFqe9KvXg",
    authDomain: "nowtransmitting-3980f.firebaseapp.com",
    databaseURL: "https://nowtransmitting-3980f-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "nowtransmitting-3980f",
    storageBucket: "nowtransmitting-3980f.appspot.com",
    messagingSenderId: "9644691228",
    appId: "1:9644691228:web:166c8816dac2df1340f4d9"
 };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
if (liked){
        likeButton.classList.add("bg-red-650");
} else {
    liked = false;
}

likeBut.addEventListener("click", function() {
    
    liked = !liked;
    localStorage.setItem(page,liked)
    likeButton.classList.toggle("bg-red-650");
    updateCounter(liked);
});

function updateCounter(liked) {
    
    var dbRef = firebase.database().ref('/likes/' + page);
    if (liked) {
        dbRef.transaction( function (currentCount){
            return currentCount + 1;
        });


        //updates[page] = firebase.database.ServerValue.increment(1);
    } else {
        dbRef.transaction( function (currentCount){
            return currentCount - 1;
        });
        //updates[page] = firebase.database.ServerValue.increment(-1);
    }    
    //return db.ref().update(updates);
}


