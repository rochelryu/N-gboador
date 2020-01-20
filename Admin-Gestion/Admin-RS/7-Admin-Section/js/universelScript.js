$(document).ready(function() {

    //CODE DE LA PAGE AUTHENTIFICATION

    $(".btn-inscript").click(function() {
        $(".btn-inscript").css("display", "none");
        $(".btn-connect").css("display", "block");
        $(".container-connexion").slideUp(200);
        $(".container-inscription").slideDown(500);
        $(".container-text-et-image").css("padding-top", "25px");

    });

    $(".loginButton").click(function() {
        $(".loginButton").css("display", "none");
        $(".signUpButton").css("display", "block");
        $(".signup-form-container").slideUp(200);
        $(".login-form-container").slideDown(500);
    });


    $(".btn-connect").click(function() {
        $(".btn-connect").css("display", "none");
        $(".btn-inscript").css("display", "block");
        $(".container-inscription").slideUp(200);
        $(".container-connexion").slideDown(500);
        $(".container-text-et-image").css("padding-top", "65px");

    });




    //CODE DE LA PAGE CREATION DE BUREAU

    $(".bureaux-existants-btn").click(function() {
        $(".container-creation-form").slideUp(200);
        $(".container-affichage-bureaux-existants").slideDown(500);

    });

    $(".bureaux-create-btn").click(function() {
        $(".container-affichage-bureaux-existants").slideUp(200);
        $(".container-creation-form").slideDown(500);
    });


    //CODE DE LA PAGE CREATION D'ADMINISTRATEUR
    $(".admins-existants-btn").click(function() {
        $(".container-creation-form").slideUp(200);
        $(".container-affichage-des-admins").slideDown(500);

    });

    $(".admin-create-btn").click(function() {
        $(".container-affichage-des-admins").slideUp(200);
        $(".container-creation-form").slideDown(500);
    });



    //CODE DE LA PAGE VOIR ADMIN
    $(".edit-display-1").click(function() {
        $(".block-display-1").css("display", "none");
        $(".block-display-2").css("display", "block");

    });

    $(".btn-vu").click(function() {
        $(".block-display-2").css("display", "none");
        $(".block-display-1").css("display", "block");

    });

    //CODE DE LA PAGE NOUVEAU MESSAGE
    $(".choix-display").click(function() {
        $(".select-display").css("display", "block");
    });

    $(".choix-hide").click(function() {
        $(".select-display").css("display", "none");
    });


    //CODE DE LA PAGE COMMUNAUTES
    $(".btn-second").click(function() {
        $(".communaute-1").slideUp(500);
        $(".communaute-2").slideDown(700);

    });

    $(".btn-three").click(function() {
        $(".communaute-2").slideUp(500);
        $(".communaute-1").slideDown(700);

    });



});