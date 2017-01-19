$(function(){
    //Menu
    $("nav a", ".nav-menu").click(function(event) {
        event.preventDefault();
    });
    $(".dropdown").hover(function() {
        var subMenu =  $(this).children("ul");
        subMenu.slideToggle(500);
    });

    //Carousel
    $('.owl-carousel').owlCarousel({
        // items: 3,
        loop:true, //Зацикливаем слайдер
        margin:5, //Отступ от элемента справа в 5px
        nav:true, //Отключение навигации
        autoplay:true, //Автозапуск слайдера
        smartSpeed:1000, //Время движения слайда
        autoplayTimeout:4500, //Время смены слайда
        responsive:{ //Адаптация в зависимости от разрешения экрана
      			0:{
              items:1
      			},
      			720:{
      				items:2
      			},
            1200: {
              items:3
            }
      	}
    });

    //Select
    $('.select-box').SumoSelect({

    });

    //Check-Box
    $('.check-box, select').styler();

    //End
});
