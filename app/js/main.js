
  
  

  // //код автозакрытия выпадающих меню
  // $(".all__product-page").on("click", function(e) {
  //   e.preventDefault();
  //   $(".all__products").slideToggle(200);
  //   $(document).mouseup(function(e) {
  //     // событие клика по веб-документу
  //     let div = $(".all__product-page"); // тут указываем ID элемента
  //     if (
  //       !div.is(e.target) && // если клик был не по нашему блоку
  //       div.has(e.target).length === 0
  //     ) {
  //       $(".all__products").hide(100); // скрываем его
  //     }
  //   });
  // });




    // var $status = $('.pagingInfo');
    // var $slickElement = $('.m-slider__box');

    // $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //     //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    //     var i = (currentSlide ? currentSlide : 0) + 1;
    //     $status.text(i + '/' + slick.slideCount);
    // });

    // $slickElement.slick({
    //     slide: 'slide',
    //     // slidesToShow:1,
    //     // slidesToScroll:1,
    //     autoplay: false,
    //     dots: true
    // });
    var $status = $('.snav__paging-info');
    var $slickElement = $('.m-slider__box');

    $slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      var i = (currentSlide ? currentSlide : 0) + 1;
      $status.text(i + '/' + slick.slideCount);
    });
    $slickElement.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      arrows: true,
      dots: true,
      appendDots: $('.snav__dots-list'),
      nextArrow: document.querySelector('.snav__next'),
      prevArrow: document.querySelector('.snav__prev'),
  });