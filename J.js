const buOne = document.querySelector('.buOne')
// const buTwo= document.querySelector('.buTWO')
const jou1 = document.querySelector('.jou1 .n')
const f= document.querySelector('.theOne ')
const main = document.querySelector('main')
const buPlay = document.querySelector('.eee')
const imgs =document.querySelectorAll('.imgs img')
const ggg = document.querySelector('.jeyu1')
const ggg2 = document.querySelector('.jeyu2')
const resut = document.querySelector('.hi')
const s1 = document.querySelector('.sroc1')
const s2 = document.querySelector('.sroc2')

const i = document.querySelector(' .ok div i')
const p = document.querySelector('.ok div p')
const d = document.querySelector('.ok ')
const h = document.querySelector('.hh ')
const mai = document.querySelector('main')
 const hi = document.querySelector('.chi')

let o=0,g=0;

    buOne.onclick = (()=>{
   jou1.innerHTML = prompt(' your Name ')

    f.remove()
    buPlay.style = 'display:Block'
})
  for(let i=0;i<imgs.length ;i++) {
  
     imgs[i].onclick =(()=>{
         imgs.forEach((e)=>{
             e.classList.remove('ar')
         })
        imgs[i].classList.add('ar')
        ggg.src = imgs[i].src
        ggg.setAttribute('data-in',i)
     })
     
} 
buPlay.onclick= (()=>{
let rand
    rand = Math.floor(Math.random()*imgs.length)
    ggg2.src = imgs[rand].src

     if(ggg2.src  === ggg.src){
        resut.innerHTML = 'equal'
        resut.style = 'color:Orange;'
     }
     else if(ggg.src === imgs[0].src && ggg2.src === imgs[2].src) {
           resut.innerHTML = 'win'
        resut.style = 'color:green;'
        o++
     }
     else if(ggg.src === imgs[1].src && ggg2.src === imgs[0].src) {
           resut.innerHTML = 'win'
        resut.style = 'color:green;'
        o++
     }
     else {
             resut.innerHTML = 'loset'
        resut.style = 'color:red;'
        g++
     }
     s1.innerHTML = o
     s2.innerHTML = g

 if(o>5 || g>5){
    r(o,g)
 }
 
})

function r(p,s) {
      if(p  > 5){
       resut.innerHTML = 'you Win bro'
       s1.innerHTML = 0
     s2.innerHTML = 0
      ggg.src = ''
     ggg2.src = ''
     o=0
     g=0
     }
      if(s > 5){
       resut.innerHTML = 'you Lost bro'
         s1.innerHTML = 0
     s2.innerHTML = 0
     ggg.src = ''
     ggg2.src = ''
       o=0
     g=0
     }
     
}

d.onclick =(()=>{
         if( p.innerHTML === 'On'){
          h.innerHTML = ' '
           p.innerHTML = "Off"
           h.innerHTML = `<i class="fa-solid fa-moon"></i>` 
            mai.style  = 'background-color: rgb(35, 35, 35); transition: background-color 1.5s;'
            hi.style = 'color:white';

         }
         else {
          h.innerHTML = ' '
           p.innerHTML = "On";
           h.innerHTML = `<i class="fa-solid fa-sun"></i>` 
          mai.style  = 'background-color: #f3d7c0; transition: background-color 1.5s;'
 hi.style = 'color:balck';
        }
})