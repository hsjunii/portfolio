// 이미지로드 & isotope

$('#portfolio').imagesLoaded(function () {
  $('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    filter: '*'
  });
});

$('#all').click(function () {
  $('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    filter: '*'
  });
})

$('#renewal').click(function () {
  $('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    filter: '.renewal'
  });
})

$('#graphic').click(function () {
  $('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    filter: '.graphic'
  });
})

$('#app').click(function () {
  $('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    filter: '.app'
  });
})

$('#icon').click(function () {
  $('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    filter: '.icon'
  });
})

// 메뉴 토글
$("#nav-btn").click(function () {
  $(".depth1").toggleClass("show");
});
$(window).scroll(function () {
  var st = $(window).scrollTop();
  if (st > 50) {
    $('.depth1').removeClass('show')
  }
})

// skills btn
$(".skl_btn").click(function () {
  $(".hide_skill").toggleClass("look");
});
$(window).scroll(function () {
  var vt = $(window).scrollTop();
  if (vt > 50) {
    $('.hide_skill').removeClass('look')
  }
})


// auto type
$(function () {
  var h2 = document.querySelector('.type');
  var text = h2.getAttribute('data-text');
  var text_array = text.split('.')
  var agent = navigator.userAgent.toLowerCase();

  if ((navigator.appName == 'Netscape' && agent.indexOf('trident') != -1) || (agent.indexOf("msie") != -1)) {
    h2.innerHTML = text_array[0] + '<br>' + text_array[1] + '<br>' + '<br>' + text_array[2] + '<br>' + text_array[3];
  } else {
    var el = '.type';
    typeIt = new TypeIt(el, {
      loop: true
    });
    typeIt
      .type(text_array[0])
      .pause(700)
      .break()
      .type(text_array[1])
      .pause(700)
      .break()
      .break()
      .type(text_array[2])
      .pause(700)
      .break()
      .type(text_array[3])
      .pause(8000)
      .go();
  }
});

// 앵커태그 선택시 부드러운 스크롤링(해쉬)
$('.depth1 li a, #contact .iconTop, .portA_btn').on('click', function () {
  var hash = this.hash;
  var top = $(hash).offset().top;
  $('html, body').animate({
    scrollTop: top
  }, 600)
  return false;
})

// 스크롤 페이드 효과
$(window).scroll(function() {
  $('.profile_img, .skill').each(function (i) {
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    if (bottom_of_window > 1000) {
      $(this).css({'opacity':'1'})
    }
  })  
  $('.port_img').each(function (i) {
    var bottom_of_window1 = $(window).scrollTop() + $(window).height();
    if (bottom_of_window1 > 2000) {
      $(this).css({'opacity':'1'})
    }
  })  
})

// fancybox
$('[data-fancybox]').fancybox({
  selector: '[data-fancybox="gallery"]',
  loop: true
});

// portfolio img 효과의 호버클래스 remove
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);