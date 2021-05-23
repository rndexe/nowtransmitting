
var likeBut = document.getElementById("likeButton");
var page=location.pathname;
var liked=false;
if (localStorage.getItem(page)) {
    
    if(page) {
        likeButton.classList.add("bg-red-650");
    }
}
likeBut.addEventListener("click", function() {
    console.log(page + "liked");
    localStorage.setItem(page,true)
    likeButton.classList.toggle("bg-red-650");


});


