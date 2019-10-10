import $ from 'jquery';

export let handleScroll = function() {
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
