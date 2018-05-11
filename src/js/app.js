import "./../sass/style.scss";
import "animate.css";
import "jquery";

import {
    TimelineMax,
    TweenMax
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
    tl.add(TweenMax.from(".profil", 1, {
        opacity: 0,
        top: -100,
        left: 600,
        rotation: 180,
        scale: .5
    }));
    tl.add(TweenMax.staggerFrom(".social-links a", .5, {
        opacity: 0,
        scale: .1,
        rotation: "180deg",
        top: -40
    }, .2));


    // Home ScrollView
    new ScrollMagic.Scene({
            duration: 150, // the scene should last for a scroll distance of 100px
            offset: 0,
            triggerElement: $("#home")[0]
        })
        // .setPin(".social-links")
        .setTween(tl)
        .addIndicators()
        .addTo(controller);


    // intro scene
    new ScrollMagic.Scene({
            duration: 100,
            offset: 0,
            triggerElement: $(".social-links")[0]
        })
        .on("enter", () => {
            $(".intro").css("opacity", 1);
            $(".intro").addClass("jackInTheBox");
        })
        .on("leave", () => {
            $(".intro").removeClass("jackInTheBox");
            $(".intro").animate({
                opacity: 0
            }, 500);
        })
        .addIndicators()
        .addTo(controller);



    // portfolio projects timeline
    tl = new TimelineMax();
    tl.add(TweenMax.from($("#portfolio ul li")[0], 1, {
        opacity: 0,
        rotation:180,
        right: 400
    }));
    tl.add(TweenMax.from($("#portfolio ul li")[1], 1, {
        opacity: 0,
        rotation:180,
        left: 400
    }));
    tl.add(TweenMax.from($("#portfolio ul li")[2], 1, {
        opacity: 0,
        rotation:180,
        right: 400
    }));
    tl.add(TweenMax.from($("#portfolio ul li")[3], 1, {
        opacity: 0,
        rotation:180,
        left: 400
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







    // end of onReady
});