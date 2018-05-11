    // Tipeanding.com
    //
    // Design by : Gonzalo Rascón
    // Web layout: Gonzalo Rascón
    // Web programming: Gonzalo Rascónav
    //
    // Contact: gonzarascon@gmail.com



$(document).ready(function() {

    let anchors = $('#content-nav').children('a');
    let articles = $('#content-cont').find('article[data-article]');

    $('#content-cont').find('article[data-article="0"]').css("display", "flex").hide().fadeIn('300');

    anchors.click(function(event) {
      let dataManager = $(this).attr('data-manager');
      anchors.removeClass('active-content');
      $(this).addClass('active-content');
      articles.hide();
      $('#content-cont').find('article[data-article="'+ dataManager +'"]').css("display", "flex").hide().fadeIn('1000');
      $('body').css('background-image', "url('assets/img/bg"+dataManager+".jpg')");

    });


    let menuIcon = $('#menu');

    menuIcon.click(function(event) {

      let menuState = $('#main-menu');
      // console.log(menuState);
      let menuFA = menuIcon.children('#menu-icon');
      if(menuState.attr('data-menu-visible') === 'false'){
        console.log('hi');
        menuFA.removeClass("fa-bars");
        menuFA.addClass('fa-times');
        menuFA.css('color', 'black');
        $('body').css('overflow','hidden');

        menuState.attr('data-menu-visible','true');

        menuState.css('display', 'grid').hide().fadeIn('300');

      } else{
        menuFA.removeClass('fa-times');
        menuFA.addClass("fa-bars");
        menuFA.css('color', 'white');
        $('body').css('overflow','auto');
        menuState.attr('data-menu-visible','false');
        menuState.fadeOut('300');
      }
    });

    let actionButton = $('#action-button');
    let newsForm = $('#news-form');
    actionButton.click(function(event) {


      newsForm.css('display','grid').hide().fadeIn('300');

    });

    let closeForm = $('#close-form');

    closeForm.click(function(event) {
      newsForm.fadeOut('300');

    });
});
