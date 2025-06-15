const button = document.querySelectorAll('.box');
const body = document.querySelector('body');

button.forEach(function(box) {
box.addEventListener('click', function(color){
    if(color.target.id==='box1'){
        body.style.background = 'red';

} if(color.target.id==='box2'){
    body.style.background = 'green';
}
if(color.target.id==='box3'){
    body.style.background = 'blue';
}
if(color.target.id==='box4'){
    body.style.background = 'yellow';
}
if(color.target.id==='box5'){
    body.style.background = 'purple';
}


})    
});