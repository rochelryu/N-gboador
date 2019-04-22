

$(document).ready(function () {


setInterval(function() {

  $(".CoverContainer .Cover:first-child").slideUp(1000, function() {
    $(this).css({display:'block'}).appendTo(".CoverContainer");
    // body...
  })


  /*animate({display : 'none'}, 
    function() {

    $(this).css({display:'block'}).appendTo(".CoverContainer"); 

  });*/

  console.log('mon')

},10000);




	
});
new WOW().init();