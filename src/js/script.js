import Swiper from "swiper/swiper-bundle";
import AOS from "aos";
import MicroModal from "micromodal";

/* -------- МОДАЛЬНЫЕ ОКНА-------- */

MicroModal.init({
  openTrigger: 'data-custom-open', // [3]
  closeTrigger: 'data-custom-close', // [4]
  disableScroll: true, // [6]
  disableFocus: true, // [7]
  awaitOpenAnimation: true, // [8]
  awaitCloseAnimation: true, // [9]
});




// $('.modal__content, .modal__container').click(function(e){
//   if(e.target == this) e.stopPropagation();
// });

/* -------- МОДАЛЬНЫЕ ОКНА КОНЕЦ-------- */



/* -------- АНИМАЦИИ ПРИ СКРОЛЛЕ-------- */

  $('.animate-heading').attr({'data-aos':'animate__fadeInDown'});

  let animation_on_scroll = AOS.init({
    useClassNames: true,
    initClassName: false,
    animatedClassName: 'animate__animated',
    mirror: false,
  });

/* -------- END  АНИМАЦИИ ПРИ СКРОЛЛЕ-------- */


/* -------- ОТЛАДОЧНАЯ СЕТКА-------- */

  $('.grid').click(function(){$(this).next().toggleClass('active')});

/* -------- END  ОТЛАДОЧНАЯ СЕТКА-------- */



const swiper_arguments = new Swiper('.main-arguments .swiper', {
    loop: true,
    slidesPerView: 'auto',
    mousewheel: true,

    breakpoints: {       
      320: {
        spaceBetween: 20,
      },

      992:{
        spaceBetween: 40,
      } 
    },
    navigation: {
      nextEl: '.arguments .swiper-button-next',
      prevEl: '.arguments .swiper-button-prev',
    },
    on: {
      click(){
        this.slideTo(this.clickedIndex);
      }
    }
});

const swiper_automation = new Swiper('#automation .swiper', {

  breakpoints: {    
    992:{
      loop: false,
      grid: {
        rows: 6,
        fill: 'row',
      },
    },

    320: {
      loop: true,
      grid: false,
      slidesPerView: "auto",
      spaceBetween: 5,
    } 
  }, 

  navigation: {
    nextEl: '#automation .swiper-button-next',
    prevEl: '#automation .swiper-button-prev',
  },

  on: {
    click(){
      this.slideTo(this.clickedIndex);
      this.updateSize()
    }
  }
});

const swiper_joinUs = new Swiper('#join-us .swiper', {
  slidesPerView: 'auto',
  loop: true,
  spaceBetween: 30,
  mousewheel: true,
  breakpoints: {       
    320: {
      spaceBetween: 15,
    } 
  },
  navigation: {
    nextEl: '#join-us .swiper-button-next',
    prevEl: '#join-us .swiper-button-prev',
  },
  on: {
    click(){
      this.slideTo(this.clickedIndex);
    }
  }
});

const swiper_blog = new Swiper('.news.swiper', { 
      loop: true,
      slidesPerView: 1,
      spaceBetween: 15,
      on: {
        init(){
          if(document.body.clientWidth > 767){
            this.destroy(false, true);
            this.wrapperEl.classList.remove('swiper-wrapper');
          }
          else{
            // document.querySelector('.first-news').classList.remove('first-news');
            $('.first-news').removeClass('first-news');
          }
        }
      },

      navigation: {
        nextEl: '.news .swiper-button-next',
        prevEl: '.news .swiper-button-prev',
      },
    
});

const swiper_command = new Swiper('.about-command .swiper', {
  // loop: true,
  slidesPerView: 'auto',
  mousewheel: true,

  breakpoints: {       
    320: {
      spaceBetween: 20,
    },

    992:{
      spaceBetween: 35,
    } 
  },
  navigation: {
    nextEl: '.about-command .swiper-button-next',
    prevEl: '.about-command .swiper-button-prev',
  },
  on: {
    click(){
      this.slideTo(this.clickedIndex);
    }
  }
});




/* -------- 1С ФРЕШ -------- */

  let swiper_fs_fresh = new Swiper('.fresh .swiper', {
    spaceBetween: 20,
    slidesPerView: 'auto',

    on:{
      init(){
        if(document.body.clientWidth > 992){
          this.disable();
        }
      },

      resize(){
        if(document.body.clientWidth > 992){
          this.disable();
        }else{
          this.enable();
        }
      }
    },

    breakpoints:{
      320:{
        slidesOffsetBefore: 10,
      },

      576:{
        slidesOffsetBefore: 10,
      }, 

      720:{
        slidesOffsetBefore: 0,
      }
    }
  });

  const swiper_fresh_include = new Swiper('#what-include .swiper', {
    loop: true,
    slidesPerView: 'auto',
    mousewheel: true,
    slidesOffsetBefore: 15,

    breakpoints: {
      320: {
        spaceBetween: 8,
        slidesOffsetBefore: 10,
      },

      577: {
        slidesOffsetBefore: 15,
      },

      721: {
        spaceBetween: 20,
      },

      992: {
        spaceBetween: 40,
      }
    },

    on: {
      click(){
          this.slideTo(this.clickedIndex);
        }
    },

    navigation: {
      nextEl: '#what-include .swiper-button-next',
      prevEl: '#what-include .swiper-button-prev',
    },
  });


/* -------- END  1С ФРЕШ -------- */


/* -------- 1С БУХГАЛТЕРИЯ -------- */
  $('.product-info-bkp .read-more').click(function(){
      $(this).toggleClass('active');
      $('.detailed-descript').slideToggle();
  });
/* -------- END  1С БУХГАЛТЕРИЯ -------- */


/* --------  ПРОГРАММНОЕ ОБЕСПЕЧЕНИЕ -------- */

const swiper_why_introduction = new Swiper('.why-introduction .swiper', {
  spaceBetween: 10,

  breakpoints: {
    320:  {
            loop: true,
            slidesPerView: "auto",
          }
  },

  on: {
    init(){
      if(document.body.clientWidth > 767){
        this.destroy(false, true);
        this.wrapperEl.classList.remove('swiper-wrapper');
        this.wrapperEl.classList.add('row');
      }
    },

    click(){
      this.slideTo(this.clickedIndex);
    }
  },
  

  navigation: {
    nextEl: '.why-introduction .swiper-button-next',
    prevEl: '.why-introduction .swiper-button-prev',
  },
    
});

const swiper_useful = new Swiper('.useful-slider', {
  spaceBetween: 15,
  slidesPerView: "auto",
  loop: true,
  slidesOffsetBefore: 10,  

  on: {
    init(){
      if(document.body.clientWidth > 993){
        this.destroy(false, true);
        this.wrapperEl.classList.remove('swiper-wrapper');
      }
    },

    click(){
      this.slideTo(this.clickedIndex);
    }

  },  

  navigation: {
    nextEl: '.useful .swiper-button-next',
    prevEl: '.useful .swiper-button-prev',
  },
    
});
/* -------- END  ПРОГРАММНОЕ ОБЕСПЕЧЕНИЕ -------- */


/* -------- 1С ИТС -------- */

  const swiper_its = new Swiper('#what-include-its .swiper', {
    spaceBetween: 20,
    slidesPerView: "auto",
    loop: true,
    slidesOffsetBefore: 10,  

    on: {
      init(){
        if(document.body.clientWidth > 992){
          this.destroy(false, true);
          this.wrapperEl.classList.add('row');
          this.wrapperEl.classList.remove('swiper-wrapper');
        }
      },

      click(){
        this.slideTo(this.clickedIndex);
      }

    },  

    navigation: {
      nextEl: '#what-include-its .swiper-button-next',
      prevEl: '#what-include-its .swiper-button-prev',
    },
      
  });
  const swiper_its_stages = new Swiper('.stages-its .swiper', {
    spaceBetween: 15,
    slidesPerView: "auto",
    loop: true,
    slidesOffsetBefore: 10,  

    on: {
      init(){
        if(document.body.clientWidth > 992){
          this.destroy(false, true);
          this.wrapperEl.classList.remove('swiper-wrapper');
        }
      },

      click(){
        this.slideTo(this.clickedIndex);
      }

    },  

    navigation: {
      nextEl: '.stages-its .swiper-button-next',
      prevEl: '.stages-its .swiper-button-prev',
    },
      
  });

  $('.tarif-items-its .btn-switch').click(function(){
    $(this).toggleClass('active').closest('.tarif-content').find('.switch-content').slideToggle();
  });

  $('.stages-its .item, .why-introduction .item, .include-list.bkp li').hover(function(){
    $(this).toggleClass('animate__animated animate__headShake');
  })

/* -------- END  1С ИТС -------- */


/* -------- УСЛУГИ -------- */

  let service_list_items = $('#page-services .services-list > li');

  if(service_list_items.length > 0){
    if(document.body.clientWidth > 992){

      let service_active_HTML = document.querySelector('#page-services .services-list > li.active .service-descript').outerHTML;
      $('#page-services .descript-box').html(service_active_HTML);
      
      service_list_items.click(function(){
        if($(this).hasClass('active')) return;
        service_list_items.removeClass('active');
        $(this).addClass('active');
        let activeHtml = document.querySelector('#page-services .services-list > li.active .service-descript').outerHTML;
        $('#page-services .descript-box').html(activeHtml);
        $('#page-services .descript-box .service-descript').addClass('animate__animated animate__fadeIn');
      });
    
    }
    else{
      service_list_items.removeClass('active');
      service_list_items.click(function(){   
        $(this).toggleClass('active').find('.service-descript').slideToggle();
      });
    }
  }

  const swiper_services_partners = new Swiper('.services-partners .swiper', {
    
    slidesPerView: "auto",
    slidesOffsetBefore: 15,
    loop: true,
    mousewheel: true,
    breakpoints: {
      320:{
        spaceBetween: 7,
      },

      721:{
        spaceBetween: 15,
      }, 

      993:{
        spaceBetween: 45,
      }
    },

    on: {
      click(){
        this.slideTo(this.clickedIndex);
      }
    },  

    navigation: {
      nextEl: '.services-partners .swiper-button-next',
      prevEl: '.services-partners .swiper-button-prev',
    },
      
  });
/* -------- END  УСЛУГИ -------- */

/* -------- БЛОГ-------- */
  const blog_news_categories = new Swiper('.page-blog .news-categories .swiper', {
    slidesPerView: "auto",

    breakpoints:{
      320:{
        spaceBetween: 10,
        slidesOffsetBefore: 10,
      }, 

      993:{
        slidesOffsetBefore: 0,
      }
    },

    on:{
      reachEND (){
        this.update();
      }
    }
  });

  $('.news-categories-list a.btn').click(function(e){
    e.preventDefault();
    $('.news-categories-list .news__category').removeClass('active');
    $(this).parent('.news__category').addClass('active');
  })

/* -------- END  БЛОГ -------- */


/* -------- НОВОСТИ-------- */
// $('aside article').hover(function(){$(this).toggleClass('animate__animated animate__shakeX')});
/* -------- END  НОВОСТИ -------- */

/* -------- СОЦИАЛЬНЫЕ ССЫЛКИ ПОДЕЛИТЬСЯ-------- */
$('.social-share-list li').hover(function(){
  $(this).toggleClass('animate__animated animate__headShake');
})

/* -------- END  СОЦИАЛЬНЫЕ ССЫЛКИ -------- */

/* -------- О КОМПАНИИ-------- */
  const swiper_about_fs = new Swiper('.first-screen.about .swiper', {
    slidesPerView: 'auto',
    mousewheel: true,

    on: {
      click(){
          this.slideTo(this.clickedIndex);
        }
    },

    breakpoints: {
      320: {
        spaceBetween: 20,
        slidesOffsetBefore: 10,
      },

      993: {
        spaceBetween: 0,
      },

    },

    navigation: {
      nextEl: '.first-screen.about .swiper-button-next',
      prevEl: '.first-screen.about .swiper-button-prev',
    },
  });

  $('.first-screen.about .swiper-slide').hover(function(){
    $(this).toggleClass('animate__animated animate__headShake');
  })
/* --------  О КОМПАНИИ END  -------- */



const tabs = document.querySelector('#automation .tabs');
const tablinks = Array.from(document.querySelectorAll('#automation .tablinks'));
const helpContainers = Array.from(document.querySelectorAll('.help-container'));

if(tabs && tablinks.length > 0){
  tabs.addEventListener('click', function(e){
    let target = e.target;
    if(target.classList.contains('tablinks')){
        tablinks.forEach((elem, i) => {
          elem.classList.remove('active');
      })

      target.classList.add('active');
      let tabData = $(target).data('tab');
      $(helpContainers).removeClass('active animate__animated animate__fadeIn');
      $(`#${tabData}`).addClass('active animate__animated animate__fadeIn');
    }
    
  });
}

let crm_bonus_tabs = $('.bonus__crm .bonus-tabs');
let crm_bonus_tablinks = $('.bonus__crm .tablinks');
let crm_bonus_content_lists = $('.bonus-list');

if(crm_bonus_tabs && crm_bonus_tablinks.length > 0){
  crm_bonus_tabs.click(function(e){
    let target = $(e.target);
    if(target.hasClass('tablinks')){
      crm_bonus_tablinks.each((i, elem) => {
          $(elem).removeClass('active');
      })
        $(target).addClass('active');
        let tabData = $(target).data('tab_bonus');
        $(crm_bonus_content_lists).removeClass('active animate__animated animate__fadeIn');
        $(`#${tabData}`).addClass('active animate__animated animate__fadeIn');
    }
    
  });
}


let towns_tabs = $('.towns-tabs');
let towns_tabs_tablinks = $('.towns-tabs .tablinks');
let contacts_content = $('.contacts__content .contacts-box');

if(towns_tabs && towns_tabs_tablinks.length > 0){
  towns_tabs.click(function(e){
    let target = $(e.target);
    if(target.hasClass('tablinks')){
      towns_tabs_tablinks.each((i, elem) => {
          $(elem).removeClass('active');
      })
        $(target).addClass('active');
        let tabData = $(target).data('tab_town');
        $(contacts_content).removeClass('active animate__animated animate__fadeIn');
        $(`#${tabData}`).addClass('active animate__animated animate__fadeIn');
    }    
  });
}

$('.pane-title').click(function(e){$(this).toggleClass('active').closest('.pane').toggleClass('active').find('.pane-content').slideToggle()});


//-------- МЕНЮ --------//

$('.icon-menu-burger').click(function(){
  $('.header-nav').toggleClass('active');
  $('body').toggleClass('scroll-lock');
});

$('.pseudo-icon, a.noclick').click(function(e){
  if($(e.target).hasClass('pseudo-icon')){
    e.stopPropagation();
  }
  e.preventDefault();
  $(this).closest('li').toggleClass('active').find('.sub-menu:first').slideToggle();
});

$('.menu-item-has-children').click(function(e){
  if(e.target == this){
    $(this).toggleClass('active').find('.sub-menu:first').slideToggle();
  }
});

// -------- МЕНЮ END -------- //


//------- КАРТА В КОНТАКТАХ ------- //

    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    if(typeof ymaps !== 'undefined'){
      function init(){
          // Создание карты.
          let map = undefined;

          const spb_desktop = {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [59.931868850192295,30.420029098381836],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 18
          }
          const spb_mobile = {
            center: [59.932420662084176,30.421083526821604],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 18            
          };
          
          const vologda_desktop = {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [59.931868850192295,30.420029098381836],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 18
          }
          const vologda_mobile = {
            center: [59.932420662084176,30.421083526821604],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 18            
          };
          


          if(document.body.clientWidth > 720){
            map = new ymaps.Map("contacts__content-map", spb_desktop);
          }
          else{
            map = new ymaps.Map("contacts__content-map", spb_mobile);
          }

          let placemark = new ymaps.Placemark([59.932076155000516,30.421123439659908], {}, {
            iconLayout: 'default#image',
            iconImageHref: './img/marker.svg',
            iconImageSize: [45, 95],
            iconImageOffset: [-25, -80],

          });

          map.geoObjects.add(placemark);

          map.controls.remove('geolocationControl'); // удаляем геолокацию
          map.controls.remove('searchControl'); // удаляем поиск
          map.controls.remove('trafficControl'); // удаляем контроль трафика
          map.controls.remove('typeSelector'); // удаляем тип
          map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
          map.controls.remove('zoomControl'); // удаляем контрол зуммирования
          map.controls.remove('rulerControl'); // удаляем контрол правил

      }
      ymaps.ready(init);
    }

//------- КАРТА В КОНТАКТАХ END ------- //




