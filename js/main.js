
$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});


$(function () {

  $(document).click(function () {
    $('.adem-drop-submenu.show').removeClass('show');
  })

  $(".adem-drop").click(function (e) {
    e.stopPropagation();
    $('.adem-drop-submenu.show').removeClass('show');
    var $this = $(this);
    $this.find(".adem-drop-submenu").addClass('show')
  });
});


$('#tabmenu1').owlCarousel({
  dots: true,
  loop: false,
  margin:1,
  responsive: {
    320: {

      dots: true,
      items: 2
     
    },
    768: {
      dots: true,
      items: 4
    },
    1400: {
      dots: true,
      items: 6
    }
  }
})

$('#tabmenu2').owlCarousel({
  dots: true,
  loop: false,
  margin:1,


  responsive: {
    320: {
      dots: true,
      items: 2
    },
    768: {
      items: 4
    },
    1400: {
      items: 6
    }
  }
})
$('#tabmenu3').owlCarousel({
  dots: true,
  loop: false,
  margin:1,

  responsive: {
    320: {
      items: 2
    },
    768: {
      items: 4
    },
    1400: {
      items: 6
    }
  }
})

$('#slider').owlCarousel({
  loop: true,
  dots: true,
  animateIn: 'fadeInDown',
  mouseDrag: false,
  autoplayTimeout: true,

  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
})

$(document).ready(function () {
  var owl_slider = $('#slider');

  $('.bir_bir').addClass('animate__animated animate__fadeIn');
  $('.bir_iki').addClass('animate__animated animate__fadeIn');
  $('.bir_uc').addClass('animate__animated animate__fadeIn');
  $('.bir_dort').addClass('animate__animated animate__fadeIn');
  $('.bir_bes').addClass('animate__animated animate__fadeIn');
  $('.owl_img_main').addClass('my_anim_img_main');
  $('.owl_img').addClass('my_anim_img');


  // owl_slider.owlCarousel({
  //   loop: true,
  //   dots: false,
  //   animateOut: 'fadeOut',
  //   autoplay: true,
  //   autoplayTimeout: 10000,
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     1200: {
  //       items: 1,
  //       dots: true
  //     }
  //   }
  // })

  owl_slider.on("changed.owl.carousel", function (event) {
    var itemNumber = event.page.index;

    // $('.bir_bir').removeClass('animate__animated animate__fadeIn');
    $('.birincislider_bir').removeClass('animate__animated animate__fadeInDownBig');
    $('.birincislider_iki').removeClass('animate__animated animate__backInUp');
    $('.birincislider_üc').removeClass('animate__animated animate__backInUp');
    $('.animesin').removeClass('my_animasyon5');
    $('.birincislider_dört').removeClass('my_animasyon4');


    $('.ikincislider_bir').removeClass('my_animasyon');
    $('.ikincislider_iki').removeClass('animate__animated animate__fadeInDownBig');
    $('.ikincislider_üc').removeClass('animate__animated animate__fadeInDown');
    $('.ikincislider_dört').removeClass('animate__animated animate__backInUp');
    $('.ikincislider_bes').removeClass('my_animasyon2');

    $('.ücüncüslider_bir').removeClass('animate__animated animate__fadeInDownBig');
    $('.ücüncüslider_iki').removeClass('animate__animated animate__backInUp');
    $('.ücüncüslider_üc').removeClass('animate__animated animate__backInUp');
    $('.ücüncüslider_dört').removeClass('my_animasyon3');

    switch (itemNumber) {
      case 0:

        $('.birincislider_bir').addClass('animate__animated animate__fadeInDownBig');
        $('.birincislider_iki').addClass('animate__animated animate__backInUp');
        $('.birincislider_üc').addClass('animate__animated animate__backInUp');
        $('.animesin').addClass('my_animasyon5');
        $('.birincislider_dört').addClass('my_animasyon4');


        break;
      case 1:

        $('.ikincislider_bir').addClass('my_animasyon');
        $('.ikincislider_iki').addClass('animate__animated animate__fadeInDownBig');
        $('.ikincislider_üc').addClass('animate__animated animate__fadeInDown');
        $('.ikincislider_dört').addClass('animate__animated animate__backInUp');
        $('.ikincislider_bes').addClass('my_animasyon2');



        break;
      case 2:

        $('.ücüncüslider_bir').addClass('animate__animated animate__fadeInDownBig');
        $('.ücüncüslider_iki').addClass('animate__animated animate__backInUp');
        $('.ücüncüslider_üc').addClass('animate__animated animate__backInUp');
        $('.ücüncüslider_dört').addClass('my_animasyon3');

        break;
      default:

        break;
    }

  })
})
$('#tvslider').owlCarousel({
  loop:false,
  margin:10,
  nav:true,
  dots:true,
  mouseDrag: false,
  responsive:{
      320:{
          items:1
      }
  }
})

$('#laptop').owlCarousel({
  
  dots:true,
  nav:true,
  responsive:{
    320:{
        items:1
    }
}
})
$('#trend').owlCarousel({
  loop:false,
  nav:true,
  responsive:{
      320:{
          items:1
      }
  }
})
$('#recomme').owlCarousel({
  loop:false,
  nav:true,
  responsive:{
      320:{
          items:7
      }
  }
})
