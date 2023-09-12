var addbtn = document.querySelector('.add');
var  removebtn = document.querySelector('.remove');
var text = document.querySelector('h2');

addbtn.addEventListener("click", function (add) {
  
    text.style.color = "green";
    text.innerHTML = 'Friend';
});

removebtn.addEventListener("click", function (remove) {
  
    text.style.color = "red";
    text.innerHTML = 'Stranger';
})