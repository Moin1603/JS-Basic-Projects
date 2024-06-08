const colors = ["green", "red", "rgba(133,122,200)", "#f15025","blue","black","cyan","grey","skyblue"];
const btn=document.querySelector(".btn");
const color=document.querySelector(".color");
const container=document.querySelector(".container");
let min=0,max=7;
btn.addEventListener('click',function(){
    const random=colors[Math.floor(Math.random()*colors.length)];
    color.textContent=random;
    container.style.backgroundColor=random;
})