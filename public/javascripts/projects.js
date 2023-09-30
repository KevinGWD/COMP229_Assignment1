//   projects_javascripts   projects.js
//   Kevin Gao   
//   301289601
//   September 30, 2023

const img1=document.getElementById('img1');
const project1_left=document.getElementById('project1_left');


img1.src= 'images/project1.png' ;
var n=2;


// function to change image//
function ChangeImage(){
    img1.src= "images/project"+n+".png";// change image source to change image
    n+=1;
    if(n>3){
        n=1
    }
}

window.setInterval(ChangeImage,2000); // changeImage is a callback funtion




