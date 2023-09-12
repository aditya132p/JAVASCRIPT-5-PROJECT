var cursor =document.querySelector('.cursor');
var main = document.querySelector(".main")
var text = document.querySelector(".h1")

main.addEventListener("mousemove", function (dets) {
    cursor.style.left = dets.x+ "px";
    cursor.style.top = dets.y+ "px";
    
    
})

text.addEventListener("mouseenter", function () {
    cursor.style.width = "60px";
    cursor.style.height = "60px";  
})
text.addEventListener("mouseleave", function () {
    cursor.style.width = "25px";
    cursor.style.height = "25px";
})
