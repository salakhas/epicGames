 /*--------------*/

  // Main/Product image slider for product page
  $("#detail .main-img-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 300,
    lazyLoad: "ondemand",
    asNavFor: ".thumb-nav",
    prevArrow:
      '<div class="slick-prev"><i class="i-prev"></i><span class="sr-only sr-only-focusable">Previous</span></div>',
    nextArrow:
      '<div class="slick-next"><i class="i-next"></i><span class="sr-only sr-only-focusable">Next</span></div>',
  });
  // Thumbnail/alternates slider for product page
  $(".thumb-nav").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    centerPadding: "0px",
    asNavFor: ".main-img-slider",
    dots: false,
    centerMode: false,
    draggable: true,
    speed: 200,
    focusOnSelect: true,
    prevArrow:
      '<div class="slick-prev"><i class="i-prev"></i><span class="sr-only sr-only-focusable">Previous</span></div>',
    nextArrow:
      '<div class="slick-next"><i class="i-next"></i><span class="sr-only sr-only-focusable">Next</span></div>',
  });

  //keeps thumbnails active when changing main image, via mouse/touch drag/swipe
  $(".main-img-slider").on(
    "afterChange",
    function (event, slick, currentSlide, nextSlide) {
      //remove all active class
      $(".thumb-nav .slick-slide").removeClass("slick-current");
      //set active class for current slide
      $(".thumb-nav .slick-slide:not(.slick-cloned)")
        .eq(currentSlide)
        .addClass("slick-current");
    }
  );