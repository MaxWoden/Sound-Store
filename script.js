menu.onclick = function menuClick(){
    if(aside.className === "")
        aside.className = "asideOFF";
    else
        aside.className = "";
}
follow.onclick = function followClick(){
    var like = document.getElementById("like");
    if(like.className === "likeOFF")
        like.className = "likeON";
    else
        like.className = "likeOFF";
    
}