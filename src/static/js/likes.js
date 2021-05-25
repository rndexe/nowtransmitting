
var likeBut = document.getElementById("likeButton");
var page=location.pathname.split("/").pop();
var liked = localStorage.getItem(page);

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
    const db = firebase.database();
    const updates = {};
    if (liked) {
        update[`likes/${page}/`] = firebase.database.ServerValue.increment(1);
    } else {
        update[`likes/${page}/`] = firebase.database.ServerValue.increment(-1);
    }    
    return db.ref().update(updates);
}


