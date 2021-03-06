import $ from 'jquery';

const handleScroll = function() {
    console.log("handler");
    let lastScrollTop = 0;

    $(window).on("scroll", () => {
        console.log("tets");
        let st = $(this).scrollTop();
        if (st > lastScrollTop){
         console.log($('.carousel'));
        } else {
     console.log($('.carousel'));
        }
        lastScrollTop = st;
    });
};

const capitalize = (s) => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
};

const randomArrElement = (arr) => {
    if (Array.isArray(arr)) {
        return arr[Math.floor(Math.random() * arr.length)];
    } else{
        console.log("argument is not an arr");
    }
};

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

const velocityTransitions = [
    "transition.fade",
    "transition.flipX",
    "transition.flipY",
    "transition.flipBounceX",
    "transition.flipBounceY",
    "transition.swoop",
    "transition.whirl",
    "transition.shrink",
    "transition.expand",
    "transition.bounce",
    "transition.bounceUp",
    "transition.bounceDown",
    "transition.bounceLeft",
    "transition.bounceRight",
    "transition.slideUp",
    "transition.slideDown",
    "transition.slideLeft",
    "transition.slideRight",
    "transition.slideUpBig",
    "transition.slideDownBig",
    "transition.slideLeftBig",
    "transition.slideRightBig",
    "transition.perspectiveUp",
    "transition.perspectiveDown",
    "transition.perspectiveLeft",
    "transition.perspectiveRight"
];

export { shuffle, handleScroll, capitalize, randomArrElement, velocityTransitions };
