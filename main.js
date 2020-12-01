$(document).ready(function() {
  $('.slider').slick( {
    arrows:false,
    dots:true,
    speed:1000,
    autoplay: true,
    autoplaySpeed:3000,
    pauseOnFocus:true,
    pauseOnDotsHover:true,
    pauseOnHover:true,
  });

    $('.tab_block li a:not(:first)').addClass('inactive');
    $('.tab_block_text').hide();
    $('.tab_block_text:first').show();
    $('.tab_block li a').click(function(e) {
        e.preventDefault();
        var t = $(this).attr('id');
      if($(this).hasClass('inactive'))  {
        $('.tab_block li a').addClass('inactive');           
        $(this).removeClass('inactive');
        
        $('.tab_block_text').hide();
        $('#'+ t + 'C').fadeIn('slow');
     }
    });
   
    $('.fas.fa-search-plus').click((e) => { 
      e.preventDefault(); 
      $('.modal_img').css({"display":"flex"});
       $('.slider_img').slick({
           speed:1000
      });
    })
    $('.modal_img .close').click(() => {
      $('.modal_img').css({"display":"none"});
    })
  });

