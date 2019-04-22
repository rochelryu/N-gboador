$(document).ready(function () {

  $('.ConcernedInfo').hide()

  $('.myself').click(function() {
    $('#otherpeoplevalidate').hide(200)
    $('#myselfValidate').show(200)

    $('.ConcernedInfo').hide(200)

    $('.legalAssistanceRequest').css({'height': '700px'})

      if ($('.preocupationDetailsDIV').is(':visible')) {
         $('.legalAssistanceRequest').css({'height': '750px'})
      } else {
         $('.legalAssistanceRequest').css({'height': '700px'})
      }

      if ($('.AffaireDetailsDIV').is(':visible')) {
         $('.legalAssistanceRequest').css({'height': '850px'})
      } else {
         $('.legalAssistanceRequest').css({'height': '700px'})
      }

  });

  $('.otherpeople').click(function() {
    $('#myselfValidate').hide(200)
    $('#otherpeoplevalidate').show(200)

    $('.ConcernedInfo').show(200);

    $('.legalAssistanceRequest').css({'height': '1020px'})

  })









  $('.preocupationDetailsDIV').hide()


   $('.preocupation').click(function() {

      $('#Affairevalidate').hide(200)
      $('#preocupationValidate').show(200)

      $('.AffaireDetailsDIV').hide()
      $('.preocupationDetailsDIV').show(200)

      $('.requestImage').css({'background':'url("medias/adult-brainstorming-business-935977.jpg")',
        'background-position': 'center',
        'background-size': 'cover',
        'height': '100%',
      })

      if ($('.ConcernedInfo').is(':visible')) {
         $('.legalAssistanceRequest').css({'height': '940px'})
      } else {
         $('.legalAssistanceRequest').css({'height': '720px'})
      }


  });

  $('.Affaire').click(function() {
      $('#preocupationValidate').hide(200)
      $('#Affairevalidate').show(200)

      $('.preocupationDetailsDIV').hide()
      $('.AffaireDetailsDIV').show(200)
      $('.legalAssistanceRequest').css({'height': '830px'})

      $('.requestImage').css({'background':'url("medias/adult-banking-blonde-1059119.jpg")',
        'background-position': 'center',
        'background-size': 'cover',
        'height': '100%',
      })


      if ($('.ConcernedInfo').is(':visible')) {
         $('.legalAssistanceRequest').css({'height': '1020px'})
      } else {
         $('.legalAssistanceRequest').css({'height': '830px'})
      }



  })



});

 new WOW().init();
