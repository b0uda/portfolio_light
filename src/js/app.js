import "./../sass/style.scss";
import "animate.css";
import "jquery";

import {
    TimelineMax,
    TweenMax,
    TweenLite,
    Linear ,Elastic
} from 'gsap';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

$(document).ready(function (params) {

 
    
    
    // init controller
    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: "onLeave"
        }
    });

    // home Timeline animation
    var tl = new TimelineMax();
    tl.add(TweenLite.to(".absolute-intro .inner span", 1, {
        text: "My name is",
        ease: Linear.easeNone
    } ));
    tl.add(TweenLite.to(".absolute-intro .inner span", 1, {
        opacity: 0,
    }));
    tl.add(TweenMax.from(".profil", 1, {
        opacity: 0,
        top: -400,
        // left: 600,
        rotation: 180,
        scale: 0,
        // ease: Elastic.easeOut.config(1, 0.3)
    }));
    tl.add(TweenMax.staggerFrom(".social-links a", .5, {
        opacity: 0,
        scale: .1,
        rotation: "180deg",
        top: -40
    }, .2));


    // Home ScrollView
    new ScrollMagic.Scene({
            duration: 100, // the scene should last for a scroll distance of 100px
            offset: 0,
            triggerElement: $("#home")[0]
        })
        // .setPin(".social-links")
        .setTween(tl)
        .addIndicators()
        .addTo(controller);


    // intro scene 
    new ScrollMagic.Scene({
            duration: "55%",
            offset: -150,
            triggerElement: $(".social-links")[0]
        })
        .on("enter", () => {
            $(".intro").css("opacity", 1);
            $(".intro").removeClass("fadeOutUp");
            $(".intro").addClass("fadeInDown");
        })
        .on("leave", () => {
            $(".intro").removeClass("fadeInDown");
            $(".intro").addClass("fadeOutUp");
           
        })
        .addIndicators()
        .addTo(controller);



    // portfolio projects timeline
    tl = new TimelineMax();
    tl.add(TweenMax.from($("#portfolio ul li")[0], 1, {
        opacity: 0,
        // rotation: 180,
        right: 200
    }));
    tl.add(TweenMax.from($("#portfolio ul li")[1], 1, {
        opacity: 0,
        // rotation: 180,
        left: 200
    }));
    tl.add(TweenMax.from($("#portfolio ul li")[2], 1, {
        opacity: 0,
        // rotation: 180,
        right: 200
    }));
    tl.add(TweenMax.from($("#portfolio ul li")[3], 1, {
        opacity: 0,
        // rotation: 180,
        left: 200
    }));

    // portfolio projects scrollmagic 
    new ScrollMagic.Scene({
            duration: 150,
            offset: 0,
            triggerElement: $("#portfolio")[0]
        })
        .setTween(tl)
        .addIndicators()
        .addTo(controller);




        // skills 1 projects timeline
        tl = new TimelineMax();
        tl.staggerFrom(".skills ul li", 1, {opacity: 0 }, 0.5);


    // portfolio projects scrollmagic 
    new ScrollMagic.Scene({
            duration: 100,
            offset: -80,
            triggerElement: $(".skills")[0]
        })
        .setTween(tl)
        .addIndicators()
        .addTo(controller);


      

        // skills 2 projects timeline
        tl = new TimelineMax();
        tl.staggerFrom(".skills ul li ul li", 1, {width: '0%' }, 0.5);


    // portfolio projects scrollmagic 
    new ScrollMagic.Scene({
            duration: 100,
            offset: -80,
            triggerElement: $(".skills")[0]
        })
        .setTween(tl)
        .addIndicators()
        .addTo(controller);



        



    // end of onReady
});