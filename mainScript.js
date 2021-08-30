let colors = ['#ffffff','#aec3b0', '#ddd8c4', '#caf0f8','#9bf6ff', '#e6ccb2'];

let buttons = document.getElementById('bgColor');

buttons.addEventListener('click', function(){

    var randomColor = colors[Math.floor(Math.random() * colors.length)]

let body = document.getElementById('mainBody');

    body.style.background = randomColor;

}
)

let color = ['#ffffff','#d00000', '#fb5607', '#7400b8','#723c70', '#deff0a'];
let buttons2 = document.getElementById('fColor');
buttons2.addEventListener('click', function(){
 var changeFColor = color[Math.floor(Math.random() * color.length)]
 let h2 = document.getElementById('topHeader');
 h2.style.color = changeFColor;

})

function myFunction(){
    window.location="DomainMainPage2.html";
}
function myFunction2(){
    window.location="AboutUs.html"
}
function myFunction3(){
    window.location="ServicesPage.html"
}
function myFunction4(){
    window.location="contact.html"
}
function myFunction5(){
    window.location="Location.html"
}