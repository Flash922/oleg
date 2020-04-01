
  
  

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

  $('.m-slider__box').slick({
    rtl: true
  });