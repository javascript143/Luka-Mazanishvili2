var logo = document.querySelector('.container');
var menu = document.querySelector('.menu');

logo.addEventListener('click',function(){
    menu.classList.toggle('showmenu');
});
var x = document.getElementById("location");
function getPreciseLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showExactPosition)
    }else{
        x.innerHTML = "Geolocation is not supported" 
    }
}
function showExactPosition(position){
    x.innerHTML = "Latitude: "+position.coords.latitude+
    "<br>Longitude: "+position.coords.longitude;
}
