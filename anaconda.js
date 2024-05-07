var menubutton = document.querySelector('.pratik1');
var midnav = document.querySelector('.mid');

menubutton.addEventListener("click", function() {
    midnav.classList.toggle('down');
})    

var p=gsap.timeline();

p.from('.left i',{
    y: -100,
    duration:.3,
    opacity:0,
    delay:0.1,
})


p.from('.left h1',{
    y: -100,
    duration:.3,
    opacity:0,
    delay:0.1
})
p.from('.upper',{
    y: -100,
    duration:.3,
    opacity:0,
    delay:0.1,
})
p.from('.mid a',{
    y: -100,
    duration:.3,
    opacity:0,
    delay:.1,
    stagger:.3
})

p.from('.right button',{
    y: -100,
    duration:.3,
    opacity:0,
    delay:.1,
    stagger:.3
})

p.from('.l',{
    duration:.3,
    scale:0,
    opacity:0,
    scrollTrigger:{
    trigger:'.l',
    scroller:'body',
    scrub:2,
    //markers:true,
    end:"0 50%"
    }
})

p.from('.m',{
    duration:.3,
    scale:0,
    opacity:0,
    scrollTrigger:{
    trigger:'.m',
    scroller:'body',
    scrub:2,
    //markers:true,
    end:"0 50%"
    }
})

p.from('.r',{
    duration:.3,
    scale:0,
    opacity:0,
    scrollTrigger:{
    trigger:'.r',
    scroller:'body',
    scrub:2,
   // markers:true,
    end:"0 50%"
    }
})

p.from('.photo',{
    x:-100,
    duration:.3,
    opacity:0,
    scrollTrigger:{
    trigger:'.photo',
    scroller:'body',
    scrub:2,
   // markers:true,
    end:"0 50%"
    }
})

p.from('.repo',{
    x:100,
    duration:.3,
    opacity:0,
    scrollTrigger:{
    trigger:'.photo',
    scroller:'body',
    scrub:2,
   // markers:true,
    end:"0 50%"
    }
})

p.from('.rightlower h1',{
    scale:0,
    duration:.1,
    opacity:0,
    scrollTrigger:{
    trigger:'.rightlower',
    scroller:'body',
    scrub:2,
  //  markers:true,
    end:"0 50%"
    }
})

p.from('.rightlower p',{
    scale:0,
    duration:.1,
    opacity:0,
    scrollTrigger:{
    trigger:'.rightlower p',
    scroller:'body',
    scrub:2,
   // markers:true,
    end:"0 50%"
    }
})

p.from('.leftlower img',{
   scale:0,
    duration:.1,
    opacity:0,
    scrollTrigger:{
    trigger:'.leftlower img',
    scroller:'body',
    scrub:2,
    //markers:true,
    end:"0 50%"
    }
})
p.from('.leftcontainer img',{
    x:-300,
    duration:.3,
    opacity:0,
    scrollTrigger:{
    trigger:'.leftcontainer img',
    scroller:'body',
    scrub:2,
   // markers:true,
    end:"0 40%"
    }
})

p.from('.rightcontainer',{
    x:100,
    duration:.3,
    opacity:0,
    scrollTrigger:{
    trigger:'.rightcontainer',
    scroller:'body',
    scrub:2,
   // markers:true,
    end:"0 50%"
    }
})
p.from('.leftcloud',{
    scale:0,
    duration:.3,
    opacity:0,
    scrollTrigger:{
    trigger:'.leftcloud',
    scroller:'body',
    scrub:2,
   // markers:true,
    end:"0 50%"
}
})
p.from('.rightcloud',{
    scale:0,
    duration:.3,
    opacity:0,
    scrollTrigger:{
    trigger:'.rightcloud',
    scroller:'body',
    scrub:2,
   // markers:true,
    end:"0 50%"
}
})
p.from('.card1',{
    x:-300,
    duration:.2,
    opacity:0,
    scrollTrigger:{
    trigger:'.card1',
    scroller:'body',
    scrub:2,
    // markers:true,
    end:"0 50%"
    }
})
p.from('.card2',{
    y:-100,
    duration:.2,
    opacity:0,
    scrollTrigger:{
    trigger:'.card2',
    scroller:'body',
    scrub:2,
    // markers:true,
    end:"0 50%"
    }
})
p.from('.card3',{
    x:300,
    duration:.2,
    opacity:0,
    scrollTrigger:{
    trigger:'.card3',
    scroller:'body',
    scrub:2,
    // markers:true,
    end:"0 50%"
    }
})
p.from('.card21',{
    x:-300,
    duration:.2,
    opacity:0,
    scrollTrigger:{
    trigger:'.card21',
    scroller:'body',
    scrub:2,
    // markers:true,
    end:"0 50%"
    }
})
p.from('.card22',{
    y:-100,
    duration:.2,
    opacity:0,
    scrollTrigger:{
    trigger:'.card22',
    scroller:'body',
    scrub:2,
    // markers:true,
    end:"0 50%"
    }
})
p.from('.card23',{
    x:300,
    duration:.2,
    opacity:0,
    scrollTrigger:{
    trigger:'.card23',
    scroller:'body',
    scrub:2,
    // markers:true,
    end:"0 50%"
    }
})
p.from('.twoleft',{
    x:-300,
    duration:.2,
    opacity:0,
    scrollTrigger:{
    trigger:'.twoleft',
    scroller:'body',
    scrub:2,
     // markers:true,
     end:"0 50%"
}
})
p.from('.tworight',{
    x:-300,
    duration:.2,
    opacity:0,
    scrollTrigger:{
    trigger:'.tworight',
    scroller:'body',
    scrub:2,
     // markers:true,
     end:"0 50%"
}
})
p.from('.left-foot',{
    x:-300,
    duration:.2,
    opacity:0,
    scrollTrigger:{
    trigger:'.left-foot',
    scroller:'body',
    scrub:2,
     // markers:true,
     end:"0 50%"
}
})
p.from('.right-foot-one',{
    y:-100,
    duration:.7,
    opacity:0,
    scrollTrigger:{
    trigger:'.right-foot-one',
    scroller:'body',
    scrub:2,
     // markers:true,
     end:"0 50%"
}
})
p.from('.right-foot-two',{
    y:-100,
    duration:.7,
    opacity:0,
    scrollTrigger:{
    trigger:'.right-foot-two',
    scroller:'body',
    scrub:2,
     // markers:true,
     end:"0 50%"
}
})
p.from('.right-foot-three',{
    x:300,
    duration:.2,
    opacity:0,
    scrollTrigger:{
    trigger:'.right-foot-three',
    scroller:'body',
    scrub:2,
     // markers:true,
     end:"0 50%"
}
})
p.from('.right-foot-four',{
    x:300,
    duration:.2,
    opacity:0,
    scrollTrigger:{
    trigger:'.right-foot-four',
    scroller:'body',
    scrub:2,
     // markers:true,
     end:"0 50%"
}
})
