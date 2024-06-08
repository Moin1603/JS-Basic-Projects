const count=document.querySelector(".count");
const btns=document.querySelectorAll('button');
let counter=0;
btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        if(e.currentTarget.classList.contains('increment')){
            counter++;
        }
        else if(e.currentTarget.classList.contains('decrement')){
            counter--;
        }
        else{
            counter=0;
        }
        count.textContent=counter;
        if(counter>0)
        count.style.color='green';
        else if(counter==0)
        count.style.color='black';
        else
        count.style.color='red';
    })
});
