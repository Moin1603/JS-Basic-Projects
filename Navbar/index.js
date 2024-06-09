const link=document.querySelector('.links');
const toggle=document.querySelector('.nav-toggle');
toggle.addEventListener('click',function(){
    
    link.classList.toggle("show-links");
    
    console.log(link.classList)
})