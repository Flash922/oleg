
  
  

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


//start slider section m-slider
      $(document).ready(function(){

      //this vars add page number for slider
      var $status = $('.snav__paging-info');
      var $slickElement = $('.m-slider__box');

      //this vars add page number for slider
      $slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i + '/' + slick.slideCount);
      });
      //this body slider
      $slickElement.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: true,
        dots: true,

        // add customs dost from class html .snav__dots-list
        appendDots: $('.snav__dots-list'),

        //add customs arrows from class html .snav__next and .snav__prev
        nextArrow: document.querySelector('.snav__prev'),
        prevArrow: document.querySelector('.snav__next'),
    });
  });
  //end slider section m-slider

  
  //start slider section portfolio
  $(document).ready(function(){
    var $status = $('.pnav__paging-info');
    var $slickElement = $('.p-slider__box');

  //thid remove button and numbre dots and add class for dots
    $slickElement.on('init', function(event, slick){
      var $items = slick.$dots.find('li');
      $items.addClass('pnav__dots');
      $items.find('button').remove();
      });

    //this vars add page number for slider
    $slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      var i = (currentSlide ? currentSlide : 0) + 1;
      $status.text(i + '/' + slick.slideCount);
    });

  
    $slickElement.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true,
        // add customs dost from class html .snav__dots-list
        appendDots: $('.pnav'),
    });
});
//end slider section portfolio