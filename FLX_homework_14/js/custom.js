$(document).on('ready', function () {

  /*-------------------------------------------------------------------------------
    PRE LOADER
  -------------------------------------------------------------------------------*/

  $(window).load(function () {
    $('.preloader').fadeOut(1000);
  });

  /*-------------------------------------------------------------------------------
    jQuery Parallax
  -------------------------------------------------------------------------------*/

  function initParallax() {
    $('#home').parallax('50%', 0.3);

  }

  initParallax();

  /*-------------------------------------------------------------------------------
    LazyLoad
  -------------------------------------------------------------------------------*/

  function changeMobileBg(selector, value) {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
      selector.setAttribute('data-bg', value);
    }
  }

  const lazyLoadInstance = new LazyLoad({
    elements_selector: '.lazy',
    load_delay: 300,
    callback_enter: () => {
      const bg = document.getElementById('home');
      changeMobileBg(bg, 'url(img/home-bg-sm.jpg)');
    }
  });

  /*-------------------------------------------------------------------------------
    Back top
  -------------------------------------------------------------------------------*/

  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('.go-top').fadeIn(200);
    } else {
      $('.go-top').fadeOut(200);
    }
  });

  // Animate the scroll to top
  $('.go-top').click(function (event) {
    event.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 300);
  });

});
