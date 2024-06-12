const aside=document.querySelector('aside');
const menu=document.querySelector('.sidebar-toggle');
const closeBtn=document.querySelector('.close-btn');
menu.addEventListener('click',function(){
    aside.classList.toggle('show-sidebar');
})
closeBtn.addEventListener('click',function(){
    
        aside.classList.toggle('show-sidebar');
    
})