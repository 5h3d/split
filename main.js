const content = document.querySelector(".content");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const rotate = document.querySelector(".basketball");
let tl = gsap.timeline();
let tl2 = gsap.timeline();
let load = gsap.timeline();
load.from(".first-load",{
  duration: 3,
  y: -500,
  opacity: 0,
  ease: Bounce.easeOut ,
  stagger: .5
})
gsap.from(".load-second",{
  duration: 3,
  scale: .2,
  opacity: 0,
  ease: Elastic.easeOut ,
  stagger: .5
})


left.addEventListener('mouseenter', () => {
  content.classList.add('hover-left');

  
  tl.play()
  tl.to(".basketball",{
    duration: 10,
    ease: Power2,
    rotation: "+=360",
    repeat: -1,
    transformOrigin: "center center",
    force3D: true
  })
  gsap.to(".left-text",{
    scale: 1
  })
  gsap.to(".logo",
  {
    color: "#fff"
  })
  

  

})

left.addEventListener('mouseleave', () => {
  content.classList.remove('hover-left');


  tl.pause();
  gsap.to(".left-text",{
    scale: 0.8

  })
  gsap.to(".logo",
  {
    color: "#0192cc"
  })
  
  
  
})

right.addEventListener('mouseenter', () => {
  content.classList.add('hover-right');
  gsap.to(".right-text",{
    scale: 1
  })
  tl2.play()
  tl2.to(".shoes",{
    duration: 2,
    ease: Power2,
    x: "-50px",
    force3D: true,
    
  })
  gsap.to(".search, .cart",
  {
    color: "#0192cc"
  })
  
})

right.addEventListener('mouseleave', () => {
  content.classList.remove('hover-right');
  gsap.to(".right-text",{
    scale: 0.8

  })
  gsap.to(".search, .cart",
  {
    color: "#fff"
  })
  tl2.reverse()
  
})


  
