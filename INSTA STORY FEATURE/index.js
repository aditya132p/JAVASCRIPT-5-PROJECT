var arr = [{
    dp: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
    story: "https://images.unsplash.com/photo-1693924336223-867179381c70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
},
{
    dp: "https://images.unsplash.com/photo-1576438112307-db9c736ff392?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    story: "https://images.unsplash.com/photo-1694456860343-3ae050d93b0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
},
{
    dp: "https://images.unsplash.com/photo-1611601679655-7c8bc197f0c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    story: "https://images.unsplash.com/photo-1693937719030-3a7dff2bdab6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
},
{
    dp: "https://images.unsplash.com/photo-1567360425618-1594206637d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1768&q=80",
    story: "https://images.unsplash.com/photo-1564779341696-f8d69a82cd9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
}
]
var story = document.querySelector(".story");


var clutter ="";
arr.forEach(function (elem, idx) {
    clutter +=` <div class="status">
    <img id="${idx}" src="${elem.dp}" alt="" >
</div>`
    
})

 story.innerHTML = clutter;
 
 story.addEventListener("click",function (dets) {
    document.querySelector(".screen").style.display="block";
    document.querySelector(".screen").style.backgroundImage =`url(${arr[dets.target.id].story})`
    
    setTimeout(function () {
        document.querySelector(".screen").style.display="none";
    },2000)

    
 })
