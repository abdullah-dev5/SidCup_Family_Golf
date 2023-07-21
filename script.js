
var crsr= document.querySelector("#cursor");
var blur_crsr= document.querySelector("#cursor-blur");


document.addEventListener("mousemove",function(dets)
// dets => x And y values
{
    console.log(dets);
    crsr.style.left = dets.x + "px" ;
    crsr.style.top = dets.y + "px" ;

    blur_crsr.style.left = dets.x -150 + "px" ;
    blur_crsr.style.top = dets.y -150 + "px" ;

});


//Gsap is a JS liberary used for movie animations.
gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "100px",
    scrollTrigger: {
      trigger: "#nav",
      scroller: "body",
      // markers:true,
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    }, 
  });

  gsap.to("#main",
  {
    backgroundColor:"#000",
    
    scrollTrigger:{
        trigger : "main",
        scroller:"body",

        start: "top -25%",
        end: "top -70%",
        scrub: 2,
    }





  });
