var tl = gsap . timeline({
    scrolltrigger: {
        trigger: "#s1",
        start:"0% 80%",
        end: "50% 50%",
        markers: true,
    
        scrub: true,
    }
})

var t2 = gsap . timeline({
    scrolltrigger: {
        trigger: "#s2",
        start:"0% 80%",
        end: "50% 50%",
        markers: true,
        scrub: true,
    }
})
tl.to(".hero-center-image", {
    top: "123%",

    left: "49%",
    width: "30vw",
    rotate: "0",
})


  //tl.to(".hero-center-image",{
   // top: "100%",
   // left: "52.5%",
   // width: "20vw",
    // rotate: "0",

  //}
//)
  ////t2.to(".hero-center-image",{
   // top: "210%",
    //left: "28.5%",
    //width: "28vw",
     //rotate: "0",
