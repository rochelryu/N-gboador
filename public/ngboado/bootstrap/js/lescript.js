$(document).ready(function() {

    //CODE DE LA PAGE DE WELCOME

    /*premier effet*/
    $('.btnInfo1').click(function() {
        $('.textInfo1').hide(500, function() {
            $('.textInfo2').fadeToggle(500);
            $('.loading-level-one').toggle(2500)
        });
    });

    /*deuxième effet*/
    $('.btnInfo2').click(function() {
        $('.textInfo2').hide(500, function() {
            $('.textInfo3').fadeToggle(500);
            $('.loading-level-two').toggle(2500)
        });
    });

    /*troisième effet*/
    $('.btnInfo3').click(function() {
        $('.textInfo3').hide(500, function() {
            $('.textInfo4').fadeToggle(500);
            $('.loading-level-three').toggle(2500)
        });
    });

    /*troisième effet*/
    $('.btnInfo4').click(function() {
        $('.textInfo4').hide(500, function() {
            $('.textInfo5').fadeToggle(500);
            $('.loading-level-four').toggle(2500)
            $('.btnNext').css("display", "block");
        });
    });

    //CODE DE LA PAGE DE ACTUALITE

    $(".notification-parent").click(function() {
        $(".notification-enfant").fadeToggle(1000);
    });

    $(".shopping-parent").click(function() {
        $(".shopping-enfant").fadeToggle(1000);
    });

    $(".service-parent").click(function() {
        $(".service-enfant").fadeToggle(1000);
    });

    $(".coment").click(function() {
        $(".couverture-du-commentaire").fadeIn(1000);
        $(".boite-de-commantaires").fadeIn(1000);
    });

    $(".couverture-du-commentaire").click(function() {
        $(".couverture-du-commentaire").fadeOut(1000);
        $(".boite-de-commantaires").fadeOut(1000);
    });

    $(".un-container-d-un-ami-connecte").click(function() {
        $(".grand-block-du-chat").fadeIn(1000);
    });

    $(".button-fermer").click(function() {
        $(".grand-block-du-chat").fadeOut(1000);
    });

    //CODE DE LA PAGE DE ACTUALITE : LES COMMUNAUTES
    $(".communauteOne").mouseover(function() {
        $(".cover-communauteOne").show();
    });
    $(".communauteOne").mouseleave(function() {
        $(".cover-communauteOne").hide();
    });


    $(".communauteSecond").mouseover(function() {
        $(".cover-communauteTwo").show();
    });
    $(".communauteSecond").mouseleave(function() {
        $(".cover-communauteTwo").hide();
    });


    $(".communauteThree").mouseover(function() {
        $(".cover-communauteThree").show();
    });
    $(".communauteThree").mouseleave(function() {
        $(".cover-communauteThree").hide();
    });



    $(".communauteFour").mouseover(function() {
        $(".cover-communauteFour").show();
    });
    $(".communauteFour").mouseleave(function() {
        $(".cover-communauteFour").hide();
    });



    $(".communauteFive").mouseover(function() {
        $(".cover-communauteFive").show();
    });
    $(".communauteFive").mouseleave(function() {
        $(".cover-communauteFive").hide();
    });


    $(".voirPlus").mouseover(function() {
        $(".cover-communauteVoirPlus").show();
    });
    $(".voirPlus").mouseleave(function() {
        $(".cover-communauteVoirPlus").hide();
    });

    //MENU MOBILE
    $(".mobile-menu").click(function() {
        $(".dropdownOfMenu").toggle(500);
    });

    $(".container-des-notifications-mobile").click(function() {
        $(".dropdownOfNotifications").toggle(500);
    });

});