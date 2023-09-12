 var img = document.querySelector('.img');
 var like =document.querySelector('.love');

 img.addEventListener('dblclick', function () {
   
    setTimeout(function() { like.style.transform =  "scale(4)";
like.style.color ="red";
},100);
    setTimeout(function() { like.style.opacity = "0"; },900);
 });
