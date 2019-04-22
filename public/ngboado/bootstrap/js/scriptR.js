$(document).ready(function () {
    var foo = ["sans-serif", 'Enchanted', 'Sketch Gothic School', 'Arapey', 'Boulevard', 'mexcellent', 'CHOCD TRIAL', 'Double_Bubble_shadow', 'Raleway', 'Gummy', 'ALBA', 'PAC-FONT', 'heavy heap', 'KeeponTruckin', 'Neon', 'Shocking', 'Consolas', "Arial Black", "Helvetica","Lucida Sans Unicode", 'Lucida Sans', 'Lucida Grande',  'Verdana', 'serif', 'monospace', 'cursive', 'fantasy'];
    var moo = ['linear-gradient(0deg, #bc3fcc, #3f48cc)', 'linear-gradient(180deg,#1a237E, #8C9d)', 'linear-gradient(180deg,#304, #4A148C)', '#304', 'linear-gradient(270deg,#ef9a9a, #f44336)', "#A0F9", "linear-gradient(to right, #c120d6, #f046c6)", "sans-serif",'linear-gradient(180deg,#d50000, #B71C1C)', 'linear-gradient(180deg,#a0f, #d500f9)', '#ad95f9', '#e86f84','#88001b', '#12ad2f', '#00a8f3','#222', '#ff7f27bb', "#E5FCC2", "#594F4F", "#9DE0AD", "#45ADA8", "#CC527A","#474747", "#363636", "#ABA7A7", "#EB175D", "#581845", "#900C3F", "#2B7A78", "#E91E63", "#7CB342", "#BA68C8", "#7B1FA2", "#AEEA00", "#827717", "#750D01", "#004D40"];
    var journ = true;
    var gale = false; //la gellery
    var about = false;
    var aucune = false;
    var monthFr = ['Jan', 'Fev', 'Mars', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sept', 'Oct', 'Nov', 'Dec']
    var edit;
    var currentExt = "";
    var socket = io();
    var mv = 9;
    var finish = false;
    var id= 1;
    var indexFont = 1;
    var indexBack = 1;


    //tactikeRT();
    function horo(date) {
        var post = new Date(date).getTime();
        var month = new Date(date).getMonth();
        month = parseInt(month, 10) + 1;
        var day = new Date(date).getDate();
        var year = new Date(date).getFullYear();
        var hour = new Date(date).getHours();
        var min = new Date(date).getMinutes();
        var atMoment = new Date().getTime();
        post /= 1000;
        atMoment /= 1000;
        var fior = parseInt((atMoment - post), 10);
        if (fior >= 86400) {
            if (parseInt((fior/86400), 10) == 1){
                return "Hier, " + hour + "H:"+ min +"min";
            }
            else{
                return "Le " + day +"-"+ month +"-"+ year +", "+ hour + "H:"+ min +"min";
            }
        }
        else if(fior >= 3600 && fior < 86400){
            if(parseInt((fior/3600), 10) == 1){
                return "il y a " + parseInt((fior/3600), 10) + " Hr";
            }
            else{
                return  "il y a " + parseInt((fior/3600), 10) + " Hrs";
            }
        }
        else if(fior >= 60 && fior < 3600){
            if(parseInt((fior/60), 10) == 1)
                return  "il y a " + parseInt((fior/60), 10) + " Min";
            else
                return "il y a " + parseInt((fior/60), 10) + " Mins";
        }
        else{
            if (fior == 0){
                return "A l'instant";
            }
            return "il y a " + fior + " Sec";
        }
    }
    $('.bloc1').on('click', '.userStatus', function(){
        var trol = $(this).attr('data-ryu-c');
        var mrol = $(this).attr('data-ryu-k');
        console.log(mrol + ' '+ trol);
        socket.emit('viewStatu', {e:trol, k:mrol});
    });
    $('.bloc2').on('click', '#textEnter', function () {
        $('#intent_stat').html('<div class="enter_statuts">\n' +
            '                                <div align="center" class="textEnter">\n' +
            '                                    <textarea name="" id="statText" onkeyup="limit(this)"></textarea>\n' +
            '                                </div>\n' +
            '                            </div>');
        $('.bloc2').find('#textEnter').css('display', 'none');
        $('.bloc2').find('#FileEnter').css('display' , 'none');
        $('.bloc2').find('#TrashEnter').css('display' , 'none');
        $('.bloc2').prepend('<img src="assets/img/icon/backnan.jpg" id="BackTextEnter" alt=""><img src="assets/img/icon/police.png" id="PoliceTextEnter" alt=""><img src="assets/img/icon/sent1.png" id="sendTextEnter" alt=""><img src="assets/img/icon/close.png" id="AnnulerStatutEnter" alt="">');
    });
    $('.bloc2').on('click', '#PoliceTextEnter', function(){
        if (indexFont >= foo.length){
            indexFont = 0;
        }
        else{
            $('.bloc2').find('#statText').css('font-family', foo[indexFont]);
            indexFont++;
        }
    });
    $('.bloc2').on('click', '#BackTextEnter', function(){
        if (indexBack >= moo.length){
            indexBack = 0;
        }
        else{
            $('.bloc2').find('.enter_statuts').css('background', moo[indexBack]);
            indexBack++;
        }
    });
    $('.inbox-block').on('click', '#sendM', function () {
        var message = $('#tchatInt').val();
        message = message.replace(/<script>/g,"");
        if (message == "") return false;
        else{
            var client = $("#unless").val();
            var wap = $("#del").val();
            client = client.replace(/<script>/g,"");
            wap = wap.replace(/<script>/g,"");
            socket.emit('sendSMS', {e:wap, k:client, mes: message});
            $('#tchatInt').val('');
            $('#core').append("<div class=\"team1 animated flash\">\n" +
                "                                        <div class=\"col-xs-8 team-info1\" data-animate-scroll='{\"x\": \"100\",\"y\":\"100\",\"rotation\":\"-25\",\"alpha\": \"0\",\"duration\": \"1.5\", \"scaleX\": \"0\", \"scaleY\": \"0\"}'>\n" +
                "                                            <p>"+ message +"</p>\n" +
                "                                            <div class=\"social-icons\">\n" +
                "                                                <a href=\"#\"><i class=\"fa fa-dashcube\" aria-hidden=\"true\"></i></a>\n" +
                "                                            </div>\n" +
                "                                            <div class=\"timesTchat\" align=\"right\">\n" +
                "                                                <small>à l'instant</small>\n" +
                "                                            </div>\n" +
                "                                        </div>\n" +
                "                                        <div class=\"col-xs-4 team-img1\">\n" +
                "                                            <img src=\"../medias/icon/user%20profil/africa/{{ profil.profil }}\" alt=\"\" />\n" +
                "                                        </div>\n" +
                "                                        <div class=\"clearfix\"></div>\n" +
                "                                    </div>")
            return false;
        }
    });
    $('#contactez').submit(function () {
        var name = $('#FirstName').val();
        var firstname = $('#LastName').val();
        var email = $('#EmailSend').val();
        var Message = $('#Message').val();
        name = name.replace(/<script>/g,'');
        email = email.replace(/<script>/g,'');
        firstname = firstname.replace(/<script>/g,'');
        Message = Message.replace(/<script>/g,'');
        Message = Message.replace(/(\r\n|\n|\r)/g,"<br />");
        if (Message == "" || firstname == "" || name == "" || email == ""){
            $.notify({
                position: 8,
                type: 'warning',
                autoClose: false,
                message: "Aucun contenue entré !!!"
            });
            return false;
        }
        else{
            socket.emit('messageContact', {name:name, firstname:firstname, Message:Message, email:email});
            $.notify({
                position: 3,
                type: 'success',
                message: "Message Envoyé !!!",
                duration: 3000
            });
            $('#directive').removeClass('slideInUp').addClass('flipOutX');
            return false;
        }

    })
    $('.bloc2').on('click', '#AnnulerStatutEnter', function () {
        var main = $('#del').val(); //mail
        main = main.replace(/<script>/g,"");
        var tain = $('#pel').val(); //config
        tain = tain.replace(/<script>/g,"");
        $('#sendTextEnter').remove();
        $('#AnnulerStatutEnter').remove();
        $('#PoliceTextEnter').remove();
        $('#BackTextEnter').remove();
        socket.emit('viewStatu', {e:main, k:tain});
    });
    $('.bloc2').on('click', '#TrashEnter', function () {
        var ele = $('.callbacks1_on').attr('data-ryu-status');
        var main = $('#del').val(); //mail
        main = main.replace(/<script>/g,"");
        ele = ele.replace(/<script>/g,"");
        var tain = $('#pel').val(); //config
        tain = tain.replace(/<script>/g,"");
        socket.emit('deleStatu', {ele:ele, e:main, k:tain});

    });
    $('.bloc2').on('click', '#FileEnter', function () {
        $('#stusFile').click();

    });

    function imageTrue(_data){
        let image = false;
        const re = /(?:\.([^.]+))?$/;
        let ext = re.exec(_data)[1];
        if(ext == "jpeg" || ext == "jpg" || ext == "png" || ext == "gif" || ext == "JPEG" || ext == "JPG" || ext == "PNG" || ext == "GIF"){
            image = true;
        }
        return image;
    }

    function videoTrue(_data){
        let image = false;
        const re = /(?:\.([^.]+))?$/;
        let ext = re.exec(_data)[1];
        currentExt = ext;
        if(ext == "mp4" || ext == "avi" || ext == "mkv" || ext == "webm" || ext == "MP4" || ext == "AVI" || ext == "MKV" || ext == "WEBM"){
            image = true;
        }
        return image;
    }

    function pdfTrue(_data){
        let image = false;
        const re = /(?:\.([^.]+))?$/;
        let ext = re.exec(_data)[1];
        if(ext == "pdf" || ext == "docx" || ext == "exec" || ext == "PDF" || ext == "DOCX" || ext == "EXEC"){
            image = true;
        }
        return image;
    }

    $('#modifP').on('click', function () {
        var meta = $('#ancienPass').val();
        meta = meta.replace(/<script>/g,"");
        if(meta == ''){
            return false;
        }
        else{
            $(this).html('<i class="fa fa-spinner"></i>');
            var main = $('#del').val(); //mail
            main = main.replace(/<script>/g,"");
            var tain = $('#pel').val(); //config
            tain = tain.replace(/<script>/g,"");
            setTimeout(function(){
                socket.emit('ancienPass', {e:main,k:tain,ans:meta})
            }, 700);
            return false;
        }
    });
    socket.on('newPass', function(data){
        $('#modifP').html('<i class="fa fa-check"></i>');
        if(data == 0){
            $('#modifP').parent().parent().find('li').addClass('none');
            $('.editP').removeClass('none');
            return false;
        }
        else{
            $.notify({
                position: 8,
                type: 'error',
                message: "Mot de Passe Incorrecte",
                duration: 6000
            });
            return false;
        }
    });

    $('#confP').on('click', function () {
        var news = $('#nouveauPass').val();
        var conf = $('#confirmPass').val();
        news = news.replace(/<script>/g,"");
        conf = conf.replace(/<script>/g,"");
        if(news == "" || news !== conf){
            $.notify({
                position: 3,
                type: 'error',
                message: "Mot de Passe different de sa Confirmation",
                duration: 6000
            });
            return false;
        }
        else{
            var main = $('#del').val(); //mail
            main = main.replace(/<script>/g,"");
            var tain = $('#pel').val(); //config
            tain = tain.replace(/<script>/g,"");
            var meta = $('#ancienPass').val();
            meta = meta.replace(/<script>/g,"");
            socket.emit('confPass', {news:news, ans:meta, e:main, k:tain});
            $('#confP').parent().parent().find('li').addClass('none');
            $('#break').removeClass('none');
            return false;
        }
    });

    $(window).on("scroll", function(){
        var scrollHeight = $(document).height();
        var scrollPosition = $(window).height() + $(window).scrollTop();
        if((scrollHeight - scrollPosition)/ scrollHeight === 0){
            var micro = $('#microLan').val();
            if(micro == "false" && !finish){
                //setTimeout(function () { $('#loadingP').css('display', 'block'); }, 600);
                var del = $('#del').val();
                socket.emit('inf', {mv:mv, e:del});
                mv += 6;
            }
            if(micro == "true" && !finish){
                //setTimeout(function () { $('#loadingP').css('display', 'block'); }, 600);
                var del = $('#del').val();
                socket.emit('infM', {mv:mv, e:del});
                mv += 6;
            }
        }
    });

    $('#send_forum').on('click', function(){
        var nom = $('#form3').val();
        var key = $('#form34').val();
        var categorie = $('#categorie').val();
        var title = $('#form32').val();
        var subject = $('#form9').val();
        var language = $('#language').val();
        if(language !== 0){
            var code = $('#form8').val();
            code = code.replace(/(\r\n|\n|\r)/g,"<br />");
            code = '<pre><code class="language-'+language+ '">'+ code +'</code></pre>';
            socket.emit('newForumWithInCode', {nom:nom, key:key, cat:categorie, title:title, sub:subject, code:code});
            console.log(nom + ' '+ key + ' '+ categorie + ' '+ title + ' ' + subject+ ' ');
            console.log('code: ' + code);
            return false;
        }else{
            socket.emit('newForumWithOutCode', {nom:nom, key:key, cat:categorie, title:title, sub:subject});
            console.log(nom + ' '+ key + ' '+ categorie + ' '+ title + ' ' + subject+ ' ');
            return false;
        }
    });

    $('.form-tchat').submit(function () {
        box();
        return false;
    });
    $('.content_scroll').on('submit','.commentFormLike', function () {
        var pub_id = $(this).find(".pub").val();
        var user_id = $(this).find(".user").val();
        socket.emit("likePub", {user_id:user_id, pub_id:pub_id});
        return false;
    });
    $('.content_scroll').on('submit', '.commentFormDoute', function () {
        var pub_id = $(this).find(".pub").val();
        var user_id = $(this).find(".user").val();
        socket.emit("doutePub", {user_id:user_id, pub_id:pub_id});
        return false;
    });

    $('#send_Date').on('click', function () {
        var moment = $('#datepicker2').val();
        if(moment == ""){
            $.notify({
                position: 8,
                type: 'error',
                message: "Aucune Date n'a été rentré !!!",
                duration: 6000
            });
            return false;
        }
        else{
            var main = $('#del').val(); //mail
            main = main.replace(/<script>/g,"");
            var tain = $('#pel').val(); //config
            tain = tain.replace(/<script>/g,"");
            socket.emit('newDateNaiss', {date:moment, e:main, k:tain});
            $('.close').click();
        }
    })
    $('.content_scroll').on('submit', '#blink', function () {
        var main = $('#del').val(); //mail
        main = main.replace(/<script>/g,"");
        var tain = $('#pel').val(); //config
        tain = tain.replace(/<script>/g,"");
        var cont = $(this).find('input').val();
        cont = cont.replace(/<script>/g,"");
        socket.emit("biblio", {e:main, k:tain, ct:cont});
        $(this).find('input').val('');
        return false;
    });
    $('.content_scroll').on('submit', '.comment',function () {
        var pub_id = $(this).find(".pub").val();
        pub_id = pub_id.replace(/<script>/g,"");
        var user_id = $(this).find(".user").val();
        user_id = user_id.replace(/<script>/g,"");
        var comment_pub = $(this).find("textarea").val();
        comment_pub = comment_pub.replace(/<script>/g,"");
        socket.emit("commentaire", {user_id:user_id, pub_id:pub_id, comment_pub:comment_pub});
        $(this).find("textarea").val('');
        var notif = new Audio('pages/open-ended.mp3');
        notif.play();
        return false;
    });
    socket.on("getLike", function (getLike) {
        $('#'+ getLike.id).find(".social-meta span.r1").html("<img src=\"assets/img/icon/lik_uniforme.gif\" alt=\"Accord\" class=\"reaction\"> " + getLike.NumberLike);
        $('#'+ getLike.id).find(".social-meta span.r2").html("<img src=\"assets/img/icon/doute_uniforme.gif\" alt=\"Accord\" class=\"reaction\"> " + getLike.comment.NumberDoute);
    });
    socket.on("getDoute", function (getDoute) {
        $('#'+ getDoute.id).find(".social-meta span.r2").html("<img src=\"assets/img/icon/doute_uniforme.gif\" alt=\"Accord\" class=\"reaction\"> " + getDoute.NumberDoute);
        $('#'+ getDoute.id).find(".social-meta span.r1").html("<img src=\"assets/img/icon/lik_uniforme.gif\" alt=\"Accord\" class=\"reaction\"> " + getDoute.like.NumberLike);
    });

    socket.on('newDateNaiss_res', function(data){
        var day = new Date(data.birth_day).getDate();
        var month = new Date(data.birth_day).getMonth();
        $('#dateInner').html( day + ' '+ monthFr[month]);
        $.notify({
            position: 3,
            type: 'success',
            message: "Date de naissance mise à jour avec succès",
            duration: 6000
        });
    });
    socket.on('confPass_res', function (data) {
        if(data == 0){
            $.notify({
                position: 3,
                type: 'success',
                message: "Mot de passe mise à jour avec succès",
                duration: 6000
            });
        }
        else{
            $.notify({
                position: 3,
                type: 'error',
                message: "Vous avez tenté de piraté le réseau",
                duration: 6000
            });
        }
    })
    socket.on("newcomment", function (Lastcomment) {
        $('#'+ Lastcomment[0].pub).find("section .mdb-feed").html("<div class=\"news animated fadeInUp slow\">\n" +
            "\n" +
            "                                                <!-- Label -->\n" +
            "                                                <div class=\"label\">\n" +
            "                                                    <img src=\"assets/img/profil/"+ Lastcomment[0].profilComment + "\" class=\"img_comment z-depth-1-half\">\n" +
            "                                                </div>\n" +
            "\n" +
            "                                                <!-- Excerpt -->\n" +
            "                                                <div class=\"excerpt\">\n" +
            "\n" +
            "                                                    <!-- Brief -->\n" +
            "                                                    <div class=\"brief\">\n" +
            "                                                        <a href=\"/profil/"+ Lastcomment[0].emailComment + "\" class=\"name_comment\">"+ Lastcomment[0].nomComment + "</a>\n" +
            "                                                        <div class=\"date\">"+ horo(Lastcomment[0].date) + "</div>\n" +
            "                                                    </div>\n" +
            "                                                    <br>\n" +
            "                                                    <div class=\"added-text\"><p>"+ Lastcomment[0].contentComment.replace(/ /g," ")  + "</p></div>\n" +
            "\n" +
            "                                                </div>\n" +
            "                                                <!-- Excerpt -->\n" +
            "\n" +
            "                                            </div>\n" +
            "                                            <div class=\"clearfix\"></div>");

        $('.new').delay(1000).slideUp("slow");
    });

    socket.on('newuser', function (data) {
        $('.content-connect').prepend('<div class="animated rubberBand slow newuser"><span></span><img src="assets/img/profil/'+ data.profil + '" class="img_tchat"> <small class="name_tchat">'+ data.nom +'</small></div><div class="clearfix"></div><br>')
    });

    socket.on('outbox', function (data) {
        var main = $('#del').val();
        main = main.replace(/<script>/g,"");
        if(data.email == main){
            $('.message_int').append('<li class="int animated jackInTheBox slow">\n' +
                '                                                                                    <div align="right" class="card message_perso message_tchat purple-gradient color-block mb-3 mx-auto z-depth-1">\n' +
                '                                                                                        <div class="card-body">\n' +
                '                                                                                            <p class="card-text text-right text-justify pattern-5 p-2 white-text">'+ data.content +'</p>\n' +
                '                                                                                            <div class="flex-row">\n' +
                '                                                                                                <a class="card-link right">'+ horo(data.register_date)+'</script></a>\n' +
                '                                                                                            </div>\n' +
                '                                                                                        </div>\n' +
                '                                                                                    </div>\n' +
                '                                                                                </li>');
            document.getElementById("history").scrollTop = document.getElementById("history").scrollHeight;
        }
        else{
            $('.message_int').append('<li class="int animated lightSpeedIn slower">\n' +
                '<div align="left" class="card message_autre message_tchat cloudy-knoxville-gradient color-block mb-3 mx-auto z-depth-1-half">\n' +
                '                                                                                    <div class="card-header deep-orange lighten-1 white-text">'+ data.nom + ' \|'+ data.promo +' </div>\n' +
                '                                                                                    <div class="card-body">\n' +
                '                                                                                        <p class="card-text text-justify pattern-5 p-2">'+ data.content +'</p>\n' +
                '                                                                                        <div class="flex-row">\n' +
                '                                                                                            <a class="card-link right">'+ horo(data.register_date)+'</script></a>\n' +
                '                                                                                        </div>\n' +
                '                                                                                    </div>\n' +
                '                                                                                </div>\n' +
                '                                                                            </li>');
            document.getElementById("history").scrollTop = document.getElementById("history").scrollHeight;
        }
    });
    socket.on('logged', function(data){
        $('#userConnect').find('label').html(data);
    });
    $(".notif-btn").click(function () {
        const del = $('#del').val();
        socket.emit("updateDateNotif", {drop: del});
        $(".notif-btn").find("span").html("");
    });

    //methode pour signaler qu'il y a nv use
    /*function tactikeRT() {
        var main = $('#del').val(); //mail
        main = main.replace(/<script>/g,"");
        var tain = $('#pel').val(); //config
        tain = tain.replace(/<script>/g,"");
        socket.emit('login',{e:main,k:tain});
    }*/
    function box() {
        var main = $('#del').val(); //mail
        main = main.replace(/<script>/g,"");
        var tain = $('#pel').val(); //config
        tain = tain.replace(/<script>/g,"");
        var boxE = $('#intent').val();
        boxE = boxE.replace(/<script>/g,"");
        if (box === ""){
            //push de notif;
        }
        socket.emit("inbox", {e:main, k:tain, context:boxE});
        $('#intent').val('');
    }

    $('.changeContent').on('click', '.btn-outline-primary.a_demo_four', function () {
        var client = $("#unless").val();
        var wap = $("#del").val();
        client = client.replace(/<script>/g,"");
        wap = wap.replace(/<script>/g,"");
        socket.emit('newFollow', {cl:client,e:wap});
        $(this).removeClass('btn-outline-primary').addClass('btn-primary').html("Annuler");
    });

    $('.changeContent').on('click', '.btn-primary.a_demo_four', function () {
        var client = $("#unless").val();
        var wap = $("#del").val();
        client = client.replace(/<script>/g,"");
        wap = wap.replace(/<script>/g,"");
        socket.emit('DelFollow', {cl:client,e:wap});
        $(this).removeClass('btn-primary').addClass('btn-outline-primary').html("Suivre");
    });
    $('.changeContent').on('click', '.btn-danger.a_demo_four', function () {
        var client = $("#unless").val();
        var wap = $("#del").val();
        client = client.replace(/<script>/g,"");
        wap = wap.replace(/<script>/g,"");
        socket.emit('DelFollow', {cl:client,e:wap});
        $(this).removeClass('btn-danger').addClass('btn-outline-primary').html("Suivre");
    });

    $('.changeContent').on('click', '.a_demo_fours', function () {
        var client = $("unless").val();
        var wap = $("del").val();
        client = client.replace(/<script>/g,"");
        wap = wap.replace(/<script>/g,"");
        socket.emit('DelFollow', {cl:client,e:wap});
        $(this).removeClass('a_demo_fours').addClass('a_demo_four').html("Suivre");
    });

    $('#srch-term').keyup(function () {
        $("#filter").html('');
        var itemSearch = $(this);
        var userEnter = itemSearch.val();
        var regexp = new RegExp(userEnter, "i");
        $.getJSON('../../usersSearch.txt', function (data) {
            $.each(data, function (key, value) {
                if (value.nom.search(regexp) != -1) {
                    $("#filter").append('<li class="list-group-item waves-effect"><a href="/profil/' + value.emailcryp + '"><img src="assets/img/profil/' + value.profil + '" class="img-circle" style="width:35px;height:35px; box-shadow: 0px 0px 10px #444; float:left"><small style="font-weight:bold">' + value.nom + '</small></a></li>');
                }
            });
        });
    });

    socket.on('InBiblio', function(data){
        $('#biblioTech').html('<p class="card-text text-center" id="dd">'+ data +'</p><button id="bib"><i class="glyphicon glyphicon-pencil"></i></button>');
        $('#bibliographie').html(data);
        $('#divBib').removeClass('animated fadeInUp slower').addClass('none');
    });
    $('#cursusForm').on('submit', function(){
        var main = $('#del').val(); //mail
        main = main.replace(/<script>/g,"");
        var tain = $('#pel').val(); //config
        tain = tain.replace(/<script>/g,"");
        var begin = $(this).find('#datepicker').val();
        var last = $(this).find('#datepicker1').val();
        var link = $(this).find('#link').val();
        var str = $(this).find('#struc').val();
        var desc = $(this).find('#Descr').val();
        socket.emit('expOn', {e:main, k: tain, beg:begin, str:str, desc:desc, last:last, link:link});
        $(this).find('#datepicker').val('');
        $(this).find('#datepicker1').val('');
        $(this).find('#link').val('');
        $(this).find('#struc').val('');
        $(this).find('#Descr').val('');
        $('#newCur').css('display','none');
        $('#cur').removeClass('animated bounceOutRight slower').delay(500).fadeIn(1000);
        return false;
    });
    $('#cursusForm').on('change', function(){
        ($('#encours').is(':checked')) ? $('#date_fin').addClass('none') : $('#date_fin').removeClass('none').fadeIn(1000);
    });

    socket.on('expOnBack', function(data){
        var link = (data.link !== "") ? data.link : "#";
        var last = (data.date_end !== "") ? data.date_end : "En cours...";
        setTimeout(function(){
            $('#cur').prepend('<div class="animated zoomInDown slower education p-4 my-4 "><span>' + data.date_begin + ' <i class="fas fa-arrow-circle-right"></i>' + last + '</span><p><i class="fas fa-quote-left mr-2"></i>' + data.describ + '<i class="fas fa-quote-right ml-2"></i></p><a href="' + link + '" class="mt-3 font-weight-bold text-right blockquote-footer">' + data.title + '</a></div>');
        }, 2000);
        setTimeout(function(){
            $('.education.p-4.my-4').removeClass('animated zoomInDown slower');
        }, 1500);
    });
    socket.on('infR', function (dataR) {
        var main = $('#del').val();
        if(dataR.length == 0){

            finish = true;
            //setTimeout(function () { $('#loadingP').css('display', 'none'); }, 1500);
        }else{
            for(var i in dataR){
                var fil1 = fil2 = fil3 = fil4 = fil5 = fil6 = fil7 = fil8 = fil9 = fil10 = comment = '';
                var isTrue; var isDoute;
                //comment = (dataR[i].comment[0] !== undefined) ? '<div class="news"><!-- Label --><div class="label"><img src="assets/img/profil/'+ dataR[i].comment[0].profilComment +'" class="img_comment z-depth-1-half"></div><!-- Excerpt --><div class="excerpt"><!-- Brief --><div class="brief"><a href="/profil/'+ dataR[i].comment[0].emailcryp +'" class="name_comment">'+ dataR[i].comment[0].nomComment +'</a><div class="date">'+ horo(dataR[i].comment[0].date)+'</div></div><div class="added-text"><p>'+ dataR[i].comment[0].contentComment +'</p></div></div><!-- Excerpt --></div>' : '';
                if(dataR[i].file1 != null){
                    if(imageTrue(dataR[i].file1)){
                        fil1 = '<div class="swiper-slide"><a class="viewEngine" data-big="medias/images/'+ dataR[i].file1 +'" href=""><img src="medias/images/'+ dataR[i].file1 +'" class="img_publication"></a></div>';
                    }
                    else if(pdfTrue(dataR[i].file1)){
                        fil1 = '<div class="swiper-slide"><a src="medias/images/'+ dataR[i].file1 +'"><img src="medias/images/71.jpg" class="img-responsive"/></a></div>';
                    }
                    else if(videoTrue(dataR[i].file1)){
                        fil1 = '<div class="swiper-slide"><video src="medias/images/'+ dataR[i].file1 +'" width="95%" height="310" controls style=""></video></div>';
                    }
                }
                if(dataR[i].file2 != null){
                    if(imageTrue(dataR[i].file2)){
                        fil2 = '<div class="swiper-slide"><a class="viewEngine" data-big="medias/images/'+ dataR[i].file2 +'" href=""><img src="medias/images/'+ dataR[i].file2 +'" class="img_publication"></a></div>';
                    }
                    else if(pdfTrue(dataR[i].file2)){
                        fil2 = '<div class="swiper-slide"><a src="medias/images/'+ dataR[i].file2 +'"><img src="medias/images/71.jpg" class="img-responsive"/></a></div>';
                    }
                    else if(videoTrue(dataR[i].file2)){
                        fil2 = '<div class="swiper-slide"><video src="medias/images/'+ dataR[i].file2 +'" width="95%" height="310" controls style=""></video></div>';
                    }
                }
                if(dataR[i].file3 != null){
                    if(imageTrue(dataR[i].file3)){
                        fil3 = '<div class="swiper-slide"><a class="viewEngine" data-big="medias/images/'+ dataR[i].file3 +'" href=""><img src="medias/images/'+ dataR[i].file3 +'" class="img_publication"></a></div>';
                    }
                    else if(pdfTrue(dataR[i].file3)){
                        fil3 = '<div class="swiper-slide"><a src="medias/images/'+ dataR[i].file3 +'"><img src="medias/images/71.jpg" class="img-responsive"/></a></div>';
                    }
                    else if(videoTrue(dataR[i].file3)){
                        fil3 = '<div class="swiper-slide"><video src="medias/images/'+ dataR[i].file3 +'" width="95%" height="310" controls style=""></video></div>';
                    }
                }
                // FAIRE CECI POUR LES jusqu'au 19 files
                var day = dataR[i].jour;
                var month = new Date(dataR[i].register_date).getMonth();
                var year = new Date(dataR[i].register_date).getFullYear();
                var hour = new Date(dataR[i].register_date).getHours();
                var min = new Date(dataR[i].register_date).getMinutes();
                isTrue = (dataR[i].isTrue == 1) ? '<img src="medias/icon/reactions/like1.png" alt="like icon" height="25" class="Comments reaction true">' : '<img src="medias/icon/reactions/like1.png" alt="like icon" height="25" class="Comments reaction des">';
                isDoute = (dataR[i].isDoute == 1) ? '<img src="medias/icon/reactions/sad.png" alt="sad icon" height="25" class="reaction true">' : '<img src="medias/icon/reactions/sad.png" alt="sad icon" height="25" class="reaction des">';
                var comm = '<div class="row">\n' +
                    '                                                          <div class="col-xs-1">\n' +
                    '                                                              <form action="" class="form-horizontal commentForm commentFormLike" role="form">\n' +
                    '                                                                  <div class="form-group" style="padding:14px;">\n' +
                    '                                                                      <input type="hidden" class="user" value="'+ dataR[i].std_id+'" readonly disabled>\n' +
                    '                                                                      <input type="hidden" class="pub" value="'+ dataR[i].id+'" readonly disabled>\n' + isTrue +
                    '                                                                  </div>\n' +
                    '                                                              </form>\n' +
                    '                                                              <form action="" class="form-horizontal commentForm commentFormDoute" role="form">\n' +
                    '                                                                  <div class="form-group" style="padding:14px;">\n' +
                    '                                                                      <input type="hidden" class="user" value="'+ dataR[i].std_id+'" readonly disabled>\n' +
                    '                                                                      <input type="hidden" class="pub" value="'+ dataR[i].id+'" readonly disabled>\n' + isDoute +
                    '                                                                  </div>\n' +
                    '                                                              </form>\n' +
                    '                                                          </div>\n' +
                    '                                                          <div class="col-xs-11">\n' +
                    '                                                              <form action="" class="form-horizontal comment" role="form" id="form">\n' +
                    '                                                                  <div class="row">\n' +
                    '                                                                      <div class="col-xs-10">\n' +
                    '                                                                          <div class="md-form mb-4 pink-textarea active-pink-textarea-2">\n' +
                    '                                                                              <input type="hidden" class="pub" value="'+ dataR[i].id+'" readonly disabled>\n' +
                    '                                                                              <input type="hidden" class="user" value="'+ dataR[i].std_id+'" readonly disabled>\n' +
                    '                                                                              <textarea class="md-textarea form-control" placeholder="Commenter cette publication" rows="2" ></textarea>\n' +
                    '                                                                          </div>\n' +
                    '                                                                      </div>\n' +
                    '                                                                      <div class="col-xs-1">\n' +
                    '                                                                          <button class="pull-right" type="submit">\n' +
                    '                                                                              <img src="assets/img/icon/send.png" alt=""></button>\n' +
                    '                                                                      </div>\n' +
                    '                                                                  </div>\n' +
                    '                                                              </form>\n' +
                    '                                                          </div>\n' +
                    '                                                      </div>\n' +
                    '                                                      </div>\n' +
                    '                                                  </div>\n' +
                    '                                              <div class="clearfix"></div>';
               // var promo = (dataR[i].promotion_name  == null) ? "Aucune": dataR[i].promotion_name;
               // var ide = (main != "nouse" && main == dataR[i].email) ? '<ul class="nav" id="nav"> <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle inline" href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-sitemap"></i></a><div class="dropdown-menu ryu_drop" aria-labelledby="navbarDropdownMenuLink" data-ryu-select="'+ dataR[i].id +'"><a class="dropdown-item" href="/view/'+ dataR[i].id +'"><i class="fa fa-eye"></i></a> <a class="dropdown-item editItem" data-toggle="modal" data-target="#edition"><i class="fa fa-edit"></i></a> <a class="dropdown-item dropItem" data-toggle="modal" data-target="#dropShare"><i class="fa fa-archive"></i></a> </div> </li> </ul>' : '<a class="dropdown-item right_float m-r-20" href="/view/'+ dataR[i].id +'"><i class="fa fa-eye"></i></a>';
                var content = (dataR[i].file1 == null && dataR[i].file2 == null && dataR[i].file3 == null && dataR[i].file4 == null && dataR[i].file5 == null && dataR[i].file6 == null && dataR[i].file7 == null && dataR[i].file8 == null && dataR[i].file9 == null && dataR[i].file10 == null) ? '' : '<div class="swiper-container"><div class="swiper-wrapper">'+ fil1 +''+ fil2 +'' + fil3 +'' + fil4 +'' + fil5 +'' + fil6 +'' + fil7 +'' + fil8 +'' + fil9 +'' + fil10 + '</div><div class="swiper-pagination"></div></div>';
                $('#again').append("<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\" style=\"padding-top: 15px; background-color: white;  padding-bottom: 15px; margin-bottom: 30px;\">\n" +
                    "\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t<!--======-- media container (image) --======-->\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t\t<center>\n" + content + "</center>\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t<!--======-- poster's profil picture and name container--======-->\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\" style=\"margin-top: 10px;\">\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4\" style=\"margin-top: 13px; cursor: pointer;\">\n" +
                    "                                                            <a href=\"/ownL/"+ dataR[i].emailcrypt +"\"><img src=\"medias/icon/user profil/africa/"+ dataR[i].profil +"\" height=\"40\" width=\"40\" style=\"border-radius: 50%;\"></a>\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                    "\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"name-profils-infos col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 col-xs-pull-2 col-sm-pull-2 col-md-pull-2 col-lg-pull-2 col-xl-pull-2\" style=\"margin-top: 4px; margin-left: -70px;\">\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<blockquote>\n" +
                    "                                                                <a href=\"/ownL/"+ dataR[i].emailcrypt +"\"><p style=\"font-weight: bold; font-size: 12px;\">"+ dataR[i].nom +"</p></a>\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small style=\"font-size: 10px;\">"+ horo(dataR[i].register_date) +"</small>\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</blockquote>\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                    "\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3 col-xs-push-4 col-sm-push-4 col-md-push-4 col-lg-push-4 col-xl-push-4\" style=\"margin-top: 4px; margin-left: 6px; cursor: pointer;\">\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"medias/icon/logo/menu.png\" height=\"40\" width=\"40\">\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                    "\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t<!--======-- text container --======-->\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t\t<p style=\"font-size: 13px;\">\n" + dataR[i].content +
                    "\t\t\t\t\t\t\t\t\t\t\t\t\t</p>\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                    "\n" +
                    "                                                <!--======-- reactions icons --======-->\n" +
                    "                                                <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n" +
                    "                                                    <div class=\"row\">\n" +
                    "                                                        <div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-8 col-xs-push-7 col-sm-push-7 col-md-push-8 col-lg-push-8 col-xl-push-8\">\n" +
                    "                                                            <div class=\"row\">\n" +
                    "                                                                <div class=\"coments col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1 position-relative\" >\n" +
                    "                                                                    <span class=\"mont\">"+ dataR[i].commentCount +"</span>\n" +
                    "                                                                    <img src=\"medias/icon/reactions/coment.png\" alt=\"coment icon\" height=\"25\" class=\"reaction Comments\" >\n" +
                    "                                                                </div>\n" +
                    "\n" +
                    "                                                                <div class=\"com col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1 position-relative\">\n" +
                    "                                                                    <span class=\"mont\">"+ dataR[i].numberLike +"</span>\n" + isTrue +
                    "                                                                </div>\n" +
                    "\n" +
                    "                                                                <div class=\"ford col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1 position-relative\">\n" +
                    "                                                                    <span class=\"mont\">"+ dataR[i].numberDoute +"</span>\n" + isDoute +
                    "                                                                </div>\n" +
                    "                                                            </div>\n" +
                    "                                                        </div>\n" +
                    "                                                    </div>\n" +
                    "                                                    <!--======-- reactions icons end --======-->\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                    "\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t<!--======-- row article one block end --======-->\n" +
                    "\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                    "\n" +
                    "\t\t\t\t\t\t\t\t\t\t<!--------------------------------------------->\n" +
                    "\t\t\t\t\t\t\t\t\t\t<!--  \t\t\t ARTICLE ONE BLOCK END \t\t -->\n" +
                    "\t\t\t\t\t\t\t\t\t\t<!--------------------------------------------->\n" +
                    "\t\t\t\t\t\t\t\t\t\t</div>")
                continue;
            }
            $('#again').find('.viewEngine').pan();
            var swiper = new Swiper('.swiper-container', {
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '">' + (index + 1) + '</span>';
                    },
                },
            });
        }
        return false;
    });
    socket.on('infRM', function (dataR) {
        var main = $('#del').val();
        if(dataR.length == 0){

            finish = true;
            setTimeout(function () { $('#loadingP').css('display', 'none'); }, 1500);
        }else{

            for(var i in dataR){
                var fil1 = fil2 = fil3 = fil4 = fil5 = fil6 = fil7 = fil8 = fil9 = fil10 = comment = '';
                var isTrue; var isDoute;
                comment = (dataR[i].comment[0] !== undefined) ? '<div class="news"><!-- Label --><div class="label"><img src="assets/img/profil/'+ dataR[i].comment[0].profilComment +'" class="img_comment z-depth-1-half"></div><!-- Excerpt --><div class="excerpt"><!-- Brief --><div class="brief"><a href="/profil/'+ dataR[i].comment[0].emailcryp +'" class="name_comment">'+ dataR[i].comment[0].nomComment +'</a><div class="date">'+ horo(dataR[i].comment[0].date)+'</div></div><div class="added-text"><p>'+ dataR[i].comment[0].contentComment +'</p></div></div><!-- Excerpt --></div>' : '';
                if(dataR[i].file1 != null){
                    if(imageTrue(dataR[i].file1)){
                        fil2 = '<div class="swiper-slide"><a class="viewEngine" data-big="/assets/img/publication/'+ dataR[i].file1 +'" href=""><img src="assets/img/publication/min/min'+ dataR[i].file1 +'" class="img_publication"></a></div>';
                    }
                    else if(pdfTrue(dataR[i].file1)){
                        fil2 = '<div class="swiper-slide"><iframe src="assets/img/publication/'+ dataR[i].file1 +'" width="600" height="400" align="middle" alt="Foo: {{ foo1 }} Ensuite {{ foo1[foo1|length - 1] }}"></iframe></div>';
                    }
                    else if(videoTrue(dataR[i].file1)){
                        fil2 = '<div class="swiper-slide"><video class="video-js viedo_publication"controls preload="auto" poster="assets/img/icon/logo-nan.png" data-setup="{}"><source src="assets/img/publication/'+ dataR[i].file1 +'" type="video/'+ currentExt +'"></video></div>';
                    }
                }
                if(dataR[i].file2 != null){
                    if(imageTrue(dataR[i].file2)){
                        fil2 = '<div class="swiper-slide"><a class="viewEngine" data-big="/assets/img/publication/'+ dataR[i].file2 +'" href=""><img src="assets/img/publication/min/min'+ dataR[i].file2 +'" class="img_publication"></a></div>';
                    }
                    else if(pdfTrue(dataR[i].file2)){
                        fil2 = '<div class="swiper-slide"><iframe src="assets/img/publication/'+ dataR[i].file2 +'" width="600" height="400" align="middle" alt="Foo: {{ foo1 }} Ensuite {{ foo1[foo1|length - 1] }}"></iframe></div>';
                    }
                    else if(videoTrue(dataR[i].file2)){
                        fil2 = '<div class="swiper-slide"><video class="video-js viedo_publication"controls preload="auto" poster="assets/img/icon/logo-nan.png" data-setup="{}"><source src="assets/img/publication/'+ dataR[i].file2 +'" type="video/'+ currentExt +'"></video></div>';
                    }
                }
                if(dataR[i].file3 != null){
                    if(imageTrue(dataR[i].file3)){
                        fil3 = '<div class="swiper-slide"><a class="viewEngine" data-big="/assets/img/publication/'+ dataR[i].file3 +'" href=""><img src="assets/img/publication/min/min'+ dataR[i].file3 +'" class="img_publication"></a></div>';
                    }
                    else if(pdfTrue(dataR[i].file3)){
                        fil3 = '<div class="swiper-slide"><iframe src="assets/img/publication/'+ dataR[i].file3 +'" width="600" height="400" align="middle" alt="Foo: {{ foo1 }} Ensuite {{ foo1[foo1|length - 1] }}"></iframe></div>';
                    }
                    else if(videoTrue(dataR[i].file3)){
                        fil1 = '<div class="swiper-slide"><video class="video-js viedo_publication"controls preload="auto" poster="assets/img/icon/logo-nan.png" data-setup="{}"><source src="assets/img/publication/'+ dataR[i].file3 +'" type="video/'+ currentExt +'"></video></div>';
                    }
                }
                if(dataR[i].file4 != null){
                    if(imageTrue(dataR[i].file4)){
                        fil4 = '<div class="swiper-slide"><a class="viewEngine" data-big="/assets/img/publication/'+ dataR[i].id +'" href="""><img src="assets/img/publication/min/min'+ dataR[i].file4 +'" class="img_publication"></a></div>';
                    }
                    else if(pdfTrue(dataR[i].file4)){
                        fil4 = '<div class="swiper-slide"><iframe src="assets/img/publication/'+ dataR[i].file4 +'" width="600" height="400" align="middle" alt="Foo: {{ foo1 }} Ensuite {{ foo1[foo1|length - 1] }}"></iframe></div>';
                    }
                    else if(videoTrue(dataR[i].file4)){
                        fil4 = '<div class="swiper-slide"><video class="video-js viedo_publication"controls preload="auto" poster="assets/img/icon/logo-nan.png" data-setup="{}"><source src="assets/img/publication/'+ dataR[i].file4 +'" type="video/'+ currentExt +'"></video></div>';
                    }
                }
                if(dataR[i].file5 != null){
                    if(imageTrue(dataR[i].file5)){
                        fil5 = '<div class="swiper-slide"><a class="viewEngine" data-big="/assets/img/publication/'+ dataR[i].file5 +'" href=""><img src="assets/img/publication/min/min'+ dataR[i].file5 +'" class="img_publication"></a></div>';
                    }
                    else if(pdfTrue(dataR[i].file5)){
                        fil5 = '<div class="swiper-slide"><iframe src="assets/img/publication/'+ dataR[i].file5 +'" width="600" height="400" align="middle" alt="Foo: {{ foo1 }} Ensuite {{ foo1[foo1|length - 1] }}"></iframe></div>';
                    }
                    else if(videoTrue(dataR[i].file5)){
                        fil5 = '<div class="swiper-slide"><video class="video-js viedo_publication"controls preload="auto" poster="assets/img/icon/logo-nan.png" data-setup="{}"><source src="assets/img/publication/'+ dataR[i].file5 +'" type="video/'+ currentExt +'"></video></div>';
                    }
                }
                if(dataR[i].file6 != null){
                    if(imageTrue(dataR[i].file6)){
                        fil6 = '<div class="swiper-slide"><a class="viewEngine" data-big="/assets/img/publication/'+ dataR[i].file6 +'" href=""><img src="assets/img/publication/min/min'+ dataR[i].file6 +'" class="img_publication"></a></div>';
                    }
                    else if(pdfTrue(dataR[i].file6)){
                        fil6 = '<div class="swiper-slide"><iframe src="assets/img/publication/'+ dataR[i].file6 +'" width="600" height="400" align="middle" alt="Foo: {{ foo1 }} Ensuite {{ foo1[foo1|length - 1] }}"></iframe></div>';
                    }
                    else if(videoTrue(dataR[i].file1)){
                        fil6 = '<div class="swiper-slide"><video class="video-js viedo_publication"controls preload="auto" poster="assets/img/icon/logo-nan.png" data-setup="{}"><source src="assets/img/publication/'+ dataR[i].file6 +'" type="video/'+ currentExt +'"></video></div>';
                    }
                }
                if(dataR[i].file7 != null){
                    if(imageTrue(dataR[i].file7)){
                        fil7 = '<div class="swiper-slide"><a class="viewEngine" data-big="/assets/img/publication/'+ dataR[i].file7 +'" href=""><img src="assets/img/publication/min/min'+ dataR[i].file7 +'" class="img_publication"></a></div>';
                    }
                    else if(pdfTrue(dataR[i].file7)){
                        fil7 = '<div class="swiper-slide"><iframe src="assets/img/publication/'+ dataR[i].file7 +'" width="600" height="400" align="middle" alt="Foo: {{ foo1 }} Ensuite {{ foo1[foo1|length - 1] }}"></iframe></div>';
                    }
                    else if(videoTrue(dataR[i].file7)){
                        fil7 = '<div class="swiper-slide"><video class="video-js viedo_publication"controls preload="auto" poster="assets/img/icon/logo-nan.png" data-setup="{}"><source src="assets/img/publication/'+ dataR[i].file7 +'" type="video/'+ currentExt +'"></video></div>';
                    }
                }
                if(dataR[i].file8 != null){
                    if(imageTrue(dataR[i].file8)){
                        fil8 = '<div class="swiper-slide"><a class="viewEngine" data-big="/assets/img/publication/'+ dataR[i].file8 +'" href=""><img src="assets/img/publication/min/min'+ dataR[i].file8 +'" class="img_publication"></a></div>';
                    }
                    else if(pdfTrue(dataR[i].file8)){
                        fil8 = '<div class="swiper-slide"><iframe src="assets/img/publication/'+ dataR[i].file8 +'" width="600" height="400" align="middle" alt="Foo: {{ foo1 }} Ensuite {{ foo1[foo1|length - 1] }}"></iframe></div>';
                    }
                    else if(videoTrue(dataR[i].file8)){
                        fil8 = '<div class="swiper-slide"><video class="video-js viedo_publication"controls preload="auto" poster="assets/img/icon/logo-nan.png" data-setup="{}"><source src="assets/img/publication/'+ dataR[i].file8 +'" type="video/'+ currentExt +'"></video></div>';
                    }
                }
                if(dataR[i].file9 != null){
                    if(imageTrue(dataR[i].file9)){
                        fil9 = '<div class="swiper-slide"><a class="viewEngine" data-big="/assets/img/publication/'+ dataR[i].file9 +'" href=""><img src="assets/img/publication/min/min'+ dataR[i].file9 +'" class="img_publication"></a></div>';
                    }
                    else if(pdfTrue(dataR[i].file9)){
                        fil9 = '<div class="swiper-slide"><iframe src="assets/img/publication/'+ dataR[i].file9 +'" width="600" height="400" align="middle" alt="Foo: {{ foo1 }} Ensuite {{ foo1[foo1|length - 1] }}"></iframe></div>';
                    }
                    else if(videoTrue(dataR[i].file9)){
                        fil9 = '<div class="swiper-slide"><video class="video-js viedo_publication"controls preload="auto" poster="assets/img/icon/logo-nan.png" data-setup="{}"><source src="assets/img/publication/'+ dataR[i].file9 +'" type="video/'+ currentExt +'"></video></div>';
                    }
                }
                if(dataR[i].file10 != null){
                    if(imageTrue(dataR[i].file10)){
                        fil10 = '<div class="swiper-slide"><a class="viewEngine" data-big="/assets/img/publication/'+ dataR[i].file10 +'" href=""><img src="assets/img/publication/min/min'+ dataR[i].file10 +'" class="img_publication"></a></div>';
                    }
                    else if(pdfTrue(dataR[i].file10)){
                        fil10 = '<div class="swiper-slide"><iframe src="assets/img/publication/'+ dataR[i].file10 +'" width="600" height="400" align="middle" alt="Foo: {{ foo1 }} Ensuite {{ foo1[foo1|length - 1] }}"></iframe></div>';
                    }
                    else if(videoTrue(dataR[i].file10)){
                        fil10 = '<div class="swiper-slide"><video class="video-js viedo_publication"controls preload="auto" poster="assets/img/icon/logo-nan.png" data-setup="{}"><source src="assets/img/publication/'+ dataR[i].file10 +'" type="video/'+ currentExt +'"></video></div>';
                    }
                }
                var day = dataR[i].jour;
                var month = new Date(dataR[i].register_date).getMonth();
                var year = new Date(dataR[i].register_date).getFullYear();
                var hour = new Date(dataR[i].register_date).getHours();
                var min = new Date(dataR[i].register_date).getMinutes();
                isTrue = (dataR[i].isTrue == 1) ? '<button class="btnDeft" type="submit"><img src="assets/img/icon/lik_uniforme.gif" alt="Accord" class="reaction true"></button>' : '<button class="btnDeft" id="" type="submit"><img src="assets/img/icon/lik_uniforme.gif" alt="Accord" class="reaction des"></button>';
                isDoute = (dataR[i].isDoute == 1) ? '<button class="btnDeft" type="submit"><img src="assets/img/icon/doute_uniforme.gif" alt="Accord" class="reaction true"></button>' : '<button class="btnDeft" type="submit"><img src="assets/img/icon/doute_uniforme.gif" alt="Accord" class="reaction des"></button>';
                var comm = '<div class="row">\n' +
                    '                                                          <div class="col-xs-1">\n' +
                    '                                                              <form action="" class="form-horizontal commentForm commentFormLike" role="form">\n' +
                    '                                                                  <div class="form-group" style="padding:14px;">\n' +
                    '                                                                      <input type="hidden" id="unknow_id" class="user" value="'+ dataR[i].std_id+'" readonly disabled>\n' +
                    '                                                                      <input type="hidden" id="pub_id" class="pub" value="'+ dataR[i].id+'" readonly disabled>\n' + isTrue +
                    '                                                                  </div>\n' +
                    '                                                              </form>\n' +
                    '                                                              <form action="" class="form-horizontal commentForm commentFormDoute" role="form">\n' +
                    '                                                                  <div class="form-group" style="padding:14px;">\n' +
                    '                                                                      <input type="hidden" id="unknow_id" class="user" value="'+ dataR[i].std_id+'" readonly disabled>\n' +
                    '                                                                      <input type="hidden" id="pub_id" class="pub" value="'+ dataR[i].id+'" readonly disabled>\n' + isDoute +
                    '                                                                  </div>\n' +
                    '                                                              </form>\n' +
                    '                                                          </div>\n' +
                    '                                                          <div class="col-xs-11">\n' +
                    '                                                              <form action="" class="form-horizontal comment" role="form" id="form">\n' +
                    '                                                                  <div class="row">\n' +
                    '                                                                      <div class="col-xs-10">\n' +
                    '                                                                          <div class="md-form mb-4 pink-textarea active-pink-textarea-2">\n' +
                    '                                                                              <input type="hidden" id="pub_id" class="pub" value="'+ dataR[i].id+'" readonly disabled>\n' +
                    '                                                                              <input type="hidden" id="unknow_id" class="user" value="'+ dataR[i].std_id+'" readonly disabled>\n' +
                    '                                                                              <textarea class="md-textarea form-control" placeholder="Commenter cette publication" rows="2" ></textarea>\n' +
                    '                                                                          </div>\n' +
                    '                                                                      </div>\n' +
                    '                                                                      <div class="col-xs-1">\n' +
                    '                                                                          <button class="pull-right" type="submit">\n' +
                    '                                                                              <img src="assets/img/icon/send.png" alt=""></button>\n' +
                    '                                                                      </div>\n' +
                    '                                                                  </div>\n' +
                    '                                                              </form>\n' +
                    '                                                          </div>\n' +
                    '                                                      </div>\n' +
                    '                                                      </div>\n' +
                    '                                                  </div>\n' +
                    '                                              <div class="clearfix"></div>';
                var promo = (dataR[i].promotion_name  == null) ? "Aucune": dataR[i].promotion_name;
                var ide = (main != "nouse" && main == dataR[i].email) ? '<ul class="nav" id="nav"> <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle inline" href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-sitemap"></i></a><div class="dropdown-menu ryu_drop" aria-labelledby="navbarDropdownMenuLink" data-ryu-select="'+ dataR[i].id +'"><a class="dropdown-item" href="/view/'+ dataR[i].id +'"><i class="fa fa-eye"></i></a> <a class="dropdown-item editItem" data-toggle="modal" data-target="#edition"><i class="fa fa-edit"></i></a> <a class="dropdown-item dropItem" data-toggle="modal" data-target="#dropShare"><i class="fa fa-archive"></i></a> </div> </li> </ul>' : '<a class="dropdown-item right_float m-r-20" href="/view/'+ dataR[i].id +'"><i class="fa fa-eye"></i></a>';
                var content = (dataR[i].file1 == null && dataR[i].file2 == null && dataR[i].file3 == null && dataR[i].file4 == null && dataR[i].file5 == null && dataR[i].file6 == null && dataR[i].file7 == null && dataR[i].file8 == null && dataR[i].file9 == null && dataR[i].file10 == null) ? '' : '<div class="swiper-container"><div class="swiper-wrapper">'+ fil1 +''+ fil2 +'' + fil3 +'' + fil4 +'' + fil5 +'' + fil6 +'' + fil7 +'' + fil8 +'' + fil9 +'' + fil10 + '</div><div class="swiper-pagination"></div><div class="swiper-button-prev"></div><div class="swiper-button-next"></div></div>';
                $('#journal').append('<div class="panel panel-default zoom_publication post" align="left" id="'+ dataR[i].id + '"><div class="panel-heading"><span>'+ day + ' ' + monthFr[month] + ' ' + year + '. à ' + hour +':'+ min +'</span><a href="/profil/'+ dataR[i].emailcryp + '" class="pull-right"><img src="assets/img/profil/'+ dataR[i].profil + '" class="img-circle pull-right img_profile"></a><h4>'+ dataR[i].nom + '</h4>Promotion : <a href="#">'+ promo + '</a> | Spécialités : Auncune'+ ide +'</div></a><div class="panel-body card-body" id="'+ dataR[i].id + '"><p class="cont">'+ dataR[i].content + '<br></p>'+ content +'<div class="social-meta text-center"><span class="r1"><img src="assets/img/icon/lik_uniforme.gif" alt="Accord" class="reaction">'+ dataR[i].numberLike +'</span><span class="r2"><img src="assets/img/icon/doute_uniforme.gif" alt="Accord" class="reaction">'+ dataR[i].numberDoute +'</span><span><img src="assets/img/icon/comments.gif" alt="Comment" class="reaction">'+ dataR[i].commentCount +'</span></div><!-- Section: Social newsfeed v.1 --><hr><section><!-- Grid row --><div class="row"><!-- Grid column --><div class="col-md-12"><!-- Newsfeed --><div class="mdb-feed"><!-- First news -->'+ comment +'</div></div></div><br></section>'+ comm);
                continue;
            }
            $('.content_scroll').find('.viewEngine').pan();
            var swiper = new Swiper('.swiper-container', {
                effect: 'flip',
                grabCursor: true,
                pagination: {
                    el: '.swiper-pagination',
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        }
        return false;
    });
    socket.on('infRv', function (dataR) {
        var main = $('#del').val();
        if(dataR.length == 0){

            finish = true;
            setTimeout(function () { $('#loadingP').css('display', 'none'); }, 1500);
        }else{
            for(var i in dataR){
                var fil1 = fil2 = fil3 = fil4 = fil5 = fil6 = fil7 = fil8 = fil9 = fil10 = comment = '';
                var isTrue; var isDoute;
                comment = (dataR[i].comment[0] !== undefined) ? '<div class="news"><!-- Label --><div class="label"><img src="assets/img/profil/'+ dataR[i].comment[0].profilComment +'" class="img_comment z-depth-1-half"></div><!-- Excerpt --><div class="excerpt"><!-- Brief --><div class="brief"><a href="/profil/'+ dataR[i].comment[0].emailComment +'" class="name_comment">'+ dataR[i].comment[0].nomComment +'</a><div class="date">'+ horo(dataR[i].comment[0].date)+'</div></div><div class="added-text"><p>'+ dataR[i].comment[0].contentComment +'</p></div></div><!-- Excerpt --></div>' : '';
                if(dataR[i].file1 != null){
                    if(imageTrue(dataR[i].file1)){
                        fil2 = '<div class="swiper-slide"><a class="viewEngine" data-big="/assets/img/publication/'+ dataR[i].file1 +'" href=""><img src="assets/img/publication/min/min'+ dataR[i].file1 +'" class="img_publication"></a></div>';
                    }
                    else if(pdfTrue(dataR[i].file1)){
                        fil2 = '<div class="swiper-slide"><iframe src="assets/img/publication/'+ dataR[i].file1 +'" width="600" height="400" align="middle" alt="Foo: {{ foo1 }} Ensuite {{ foo1[foo1|length - 1] }}"></iframe></div>';
                    }
                    else if(videoTrue(dataR[i].file1)){
                        fil2 = '<div class="swiper-slide"><video class="video-js viedo_publication"controls preload="auto" poster="assets/img/icon/logo-nan.png" data-setup="{}"><source src="assets/img/publication/'+ dataR[i].file1 +'" type="video/'+ currentExt +'"></video></div>';
                    }
                }
                if(dataR[i].file2 != null){
                    if(imageTrue(dataR[i].file2)){
                        fil2 = '<div class="swiper-slide"><a class="viewEngine" data-big="/assets/img/publication/'+ dataR[i].file2 +'" href=""><img src="assets/img/publication/min/min'+ dataR[i].file2 +'" class="img_publication"></a></div>';
                    }
                    else if(pdfTrue(dataR[i].file2)){
                        fil2 = '<div class="swiper-slide"><iframe src="assets/img/publication/'+ dataR[i].file2 +'" width="600" height="400" align="middle" alt="Foo: {{ foo1 }} Ensuite {{ foo1[foo1|length - 1] }}"></iframe></div>';
                    }
                    else if(videoTrue(dataR[i].file2)){
                        fil2 = '<div class="swiper-slide"><video class="video-js viedo_publication"controls preload="auto" poster="assets/img/icon/logo-nan.png" data-setup="{}"><source src="assets/img/publication/'+ dataR[i].file2 +'" type="video/'+ currentExt +'"></video></div>';
                    }
                }
                if(dataR[i].file3 != null){
                    if(imageTrue(dataR[i].file3)){
                        fil3 = '<div class="swiper-slide"><a class="viewEngine" data-big="/assets/img/publication/'+ dataR[i].file3 +'" href=""><img src="assets/img/publication/min/min'+ dataR[i].file3 +'" class="img_publication"></a></div>';
                    }
                    else if(pdfTrue(dataR[i].file3)){
                        fil3 = '<div class="swiper-slide"><iframe src="assets/img/publication/'+ dataR[i].file3 +'" width="600" height="400" align="middle" alt="Foo: {{ foo1 }} Ensuite {{ foo1[foo1|length - 1] }}"></iframe></div>';
                    }
                    else if(videoTrue(dataR[i].file3)){
                        fil1 = '<div class="swiper-slide"><video class="video-js viedo_publication"controls preload="auto" poster="assets/img/icon/logo-nan.png" data-setup="{}"><source src="assets/img/publication/'+ dataR[i].file3 +'" type="video/'+ currentExt +'"></video></div>';
                    }
                }
                if(dataR[i].file4 != null){
                    if(imageTrue(dataR[i].file4)){
                        fil4 = '<div class="swiper-slide"><a class="viewEngine" data-big="/assets/img/publication/'+ dataR[i].id +'" href="""><img src="assets/img/publication/min/min'+ dataR[i].file4 +'" class="img_publication"></a></div>';
                    }
                    else if(pdfTrue(dataR[i].file4)){
                        fil4 = '<div class="swiper-slide"><iframe src="assets/img/publication/'+ dataR[i].file4 +'" width="600" height="400" align="middle" alt="Foo: {{ foo1 }} Ensuite {{ foo1[foo1|length - 1] }}"></iframe></div>';
                    }
                    else if(videoTrue(dataR[i].file4)){
                        fil4 = '<div class="swiper-slide"><video class="video-js viedo_publication"controls preload="auto" poster="assets/img/icon/logo-nan.png" data-setup="{}"><source src="assets/img/publication/'+ dataR[i].file4 +'" type="video/'+ currentExt +'"></video></div>';
                    }
                }
                if(dataR[i].file5 != null){
                    if(imageTrue(dataR[i].file5)){
                        fil5 = '<div class="swiper-slide"><a class="viewEngine" data-big="/assets/img/publication/'+ dataR[i].file5 +'" href=""><img src="assets/img/publication/min/min'+ dataR[i].file5 +'" class="img_publication"></a></div>';
                    }
                    else if(pdfTrue(dataR[i].file5)){
                        fil5 = '<div class="swiper-slide"><iframe src="assets/img/publication/'+ dataR[i].file5 +'" width="600" height="400" align="middle" alt="Foo: {{ foo1 }} Ensuite {{ foo1[foo1|length - 1] }}"></iframe></div>';
                    }
                    else if(videoTrue(dataR[i].file5)){
                        fil5 = '<div class="swiper-slide"><video class="video-js viedo_publication"controls preload="auto" poster="assets/img/icon/logo-nan.png" data-setup="{}"><source src="assets/img/publication/'+ dataR[i].file5 +'" type="video/'+ currentExt +'"></video></div>';
                    }
                }
                if(dataR[i].file6 != null){
                    if(imageTrue(dataR[i].file6)){
                        fil6 = '<div class="swiper-slide"><a class="viewEngine" data-big="/assets/img/publication/'+ dataR[i].file6 +'" href=""><img src="assets/img/publication/min/min'+ dataR[i].file6 +'" class="img_publication"></a></div>';
                    }
                    else if(pdfTrue(dataR[i].file6)){
                        fil6 = '<div class="swiper-slide"><iframe src="assets/img/publication/'+ dataR[i].file6 +'" width="600" height="400" align="middle" alt="Foo: {{ foo1 }} Ensuite {{ foo1[foo1|length - 1] }}"></iframe></div>';
                    }
                    else if(videoTrue(dataR[i].file1)){
                        fil6 = '<div class="swiper-slide"><video class="video-js viedo_publication"controls preload="auto" poster="assets/img/icon/logo-nan.png" data-setup="{}"><source src="assets/img/publication/'+ dataR[i].file6 +'" type="video/'+ currentExt +'"></video></div>';
                    }
                }
                if(dataR[i].file7 != null){
                    if(imageTrue(dataR[i].file7)){
                        fil7 = '<div class="swiper-slide"><a class="viewEngine" data-big="/assets/img/publication/'+ dataR[i].file7 +'" href=""><img src="assets/img/publication/min/min'+ dataR[i].file7 +'" class="img_publication"></a></div>';
                    }
                    else if(pdfTrue(dataR[i].file7)){
                        fil7 = '<div class="swiper-slide"><iframe src="assets/img/publication/'+ dataR[i].file7 +'" width="600" height="400" align="middle" alt="Foo: {{ foo1 }} Ensuite {{ foo1[foo1|length - 1] }}"></iframe></div>';
                    }
                    else if(videoTrue(dataR[i].file7)){
                        fil7 = '<div class="swiper-slide"><video class="video-js viedo_publication"controls preload="auto" poster="assets/img/icon/logo-nan.png" data-setup="{}"><source src="assets/img/publication/'+ dataR[i].file7 +'" type="video/'+ currentExt +'"></video></div>';
                    }
                }
                if(dataR[i].file8 != null){
                    if(imageTrue(dataR[i].file8)){
                        fil8 = '<div class="swiper-slide"><a class="viewEngine" data-big="/assets/img/publication/'+ dataR[i].file8 +'" href=""><img src="assets/img/publication/min/min'+ dataR[i].file8 +'" class="img_publication"></a></div>';
                    }
                    else if(pdfTrue(dataR[i].file8)){
                        fil8 = '<div class="swiper-slide"><iframe src="assets/img/publication/'+ dataR[i].file8 +'" width="600" height="400" align="middle" alt="Foo: {{ foo1 }} Ensuite {{ foo1[foo1|length - 1] }}"></iframe></div>';
                    }
                    else if(videoTrue(dataR[i].file8)){
                        fil8 = '<div class="swiper-slide"><video class="video-js viedo_publication"controls preload="auto" poster="assets/img/icon/logo-nan.png" data-setup="{}"><source src="assets/img/publication/'+ dataR[i].file8 +'" type="video/'+ currentExt +'"></video></div>';
                    }
                }
                if(dataR[i].file9 != null){
                    if(imageTrue(dataR[i].file9)){
                        fil9 = '<div class="swiper-slide"><a class="viewEngine" data-big="/assets/img/publication/'+ dataR[i].file9 +'" href=""><img src="assets/img/publication/min/min'+ dataR[i].file9 +'" class="img_publication"></a></div>';
                    }
                    else if(pdfTrue(dataR[i].file9)){
                        fil9 = '<div class="swiper-slide"><iframe src="assets/img/publication/'+ dataR[i].file9 +'" width="600" height="400" align="middle" alt="Foo: {{ foo1 }} Ensuite {{ foo1[foo1|length - 1] }}"></iframe></div>';
                    }
                    else if(videoTrue(dataR[i].file9)){
                        fil9 = '<div class="swiper-slide"><video class="video-js viedo_publication"controls preload="auto" poster="assets/img/icon/logo-nan.png" data-setup="{}"><source src="assets/img/publication/'+ dataR[i].file9 +'" type="video/'+ currentExt +'"></video></div>';
                    }
                }
                if(dataR[i].file10 != null){
                    if(imageTrue(dataR[i].file10)){
                        fil10 = '<div class="swiper-slide"><a class="viewEngine" data-big="/assets/img/publication/'+ dataR[i].file10 +'" href=""><img src="assets/img/publication/min/min'+ dataR[i].file10 +'" class="img_publication"></a></div>';
                    }
                    else if(pdfTrue(dataR[i].file10)){
                        fil10 = '<div class="swiper-slide"><iframe src="assets/img/publication/'+ dataR[i].file10 +'" width="600" height="400" align="middle" alt="Foo: {{ foo1 }} Ensuite {{ foo1[foo1|length - 1] }}"></iframe></div>';
                    }
                    else if(videoTrue(dataR[i].file10)){
                        fil10 = '<div class="swiper-slide"><video class="video-js viedo_publication"controls preload="auto" poster="assets/img/icon/logo-nan.png" data-setup="{}"><source src="assets/img/publication/'+ dataR[i].file10 +'" type="video/'+ currentExt +'"></video></div>';
                    }
                }
                var day = dataR[i].jour;
                var month = new Date(dataR[i].register_date).getMonth();
                var year = new Date(dataR[i].register_date).getFullYear();
                var hour = new Date(dataR[i].register_date).getHours();
                var min = new Date(dataR[i].register_date).getMinutes();
                var promo = (dataR[i].promotion_name  == null) ? "Aucune": dataR[i].promotion_name;
                var ide = '<a class="dropdown-item right_float m-r-20" href="/view/'+ dataR[i].id +'"><i class="fa fa-eye"></i></a>';
                var content = (dataR[i].file1 == null && dataR[i].file2 == null && dataR[i].file3 == null && dataR[i].file4 == null && dataR[i].file5 == null && dataR[i].file6 == null && dataR[i].file7 == null && dataR[i].file8 == null && dataR[i].file9 == null && dataR[i].file10 == null) ? '' : '<div class="swiper-container"><div class="swiper-wrapper">'+ fil1 +''+ fil2 +'' + fil3 +'' + fil4 +'' + fil5 +'' + fil6 +'' + fil7 +'' + fil8 +'' + fil9 +'' + fil10 + '</div><div class="swiper-pagination"></div><div class="swiper-button-prev"></div><div class="swiper-button-next"></div></div>';
                $('.content_scroll').append('<div class="panel panel-default zoom_publication post" id="'+ dataR[i].id + '"><div class="panel-heading"><span>'+ day + ' ' + monthFr[month] + ' ' + year + '. à ' + hour +':'+ min +'</span><a href="/profil/'+ dataR[i].emailcryp + '" class="pull-right"><img src="assets/img/profil/'+ dataR[i].profil + '" class="img-circle pull-right img_profile"></a><h4>'+ dataR[i].nom + '</h4>Promotion : <a href="#">'+ promo + '</a> | Spécialités : Auncune'+ ide +'</div></a><div class="panel-body card-body" id="'+ dataR[i].id + '"><p class="cont">'+ dataR[i].content + '<br></p>'+ content +'<div class="social-meta text-center"><span class="r1"><img src="assets/img/icon/lik_uniforme.gif" alt="Accord" class="reaction">'+ dataR[i].numberLike +'</span><span class="r2"><img src="assets/img/icon/doute_uniforme.gif" alt="Accord" class="reaction">'+ dataR[i].numberDoute +'</span><span><img src="assets/img/icon/comments.gif" alt="Comment" class="reaction">'+ dataR[i].commentCount +'</span></div><!-- Section: Social newsfeed v.1 --><hr><section><!-- Grid row --><div class="row"><!-- Grid column --><div class="col-md-12"><!-- Newsfeed --><div class="mdb-feed"><!-- First news -->'+ comment +'</div></div></div><br></section></div></div><div class="clearfix"></div>');
                continue;
            }
            $('.content_scroll').find('.viewEngine').pan();
            var swiper = new Swiper('.swiper-container', {
                effect: 'flip',
                grabCursor: true,
                pagination: {
                    el: '.swiper-pagination',
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        }
    });
    $('.content_scroll').on('click','.editItem', function () {
        edit = $(this).parent().attr('data-ryu-select');
        console.log(edit);
        socket.emit('editPub', edit);
    });
    socket.on('editPubResponse', function (e) {
        var fil1 = fil2 = fil3 = fil4 = fil5 = fil6 = fil7 = fil8 = fil9 = fil10 = comment = '';
        if (e.file1 != null) {
            if (imageTrue(e.file1)) {
                fil1 = '<div class="chip"><img src="assets/img/publication/min/min' + e.file1 + '">FICHIERS 1 <i class="fas fa-archive"></i></div>';
            }
            else if (pdfTrue(e.file1)) {
                fil1 = '<div class="chip"><img src="assets/img/icon/ico_doc.png">FICHIERS 1 <i class="fas fa-archive"></i></div>';
            }
            else if (videoTrue(e.file1)) {
                fil1 = '<div class="chip"><img src="assets/img/icon/video.png">FICHIERS 1 <i class="fas fa-archive"></i></div>';
            }
        }
        if (e.file2 != null) {
            if (imageTrue(e.file2)) {
                fil2 = '<div class="chip"><img src="assets/img/publication/min/min' + e.file2 + '">FICHIERS 2 <i class="fas fa-archive"></i></div>';
            }
            else if (pdfTrue(e.file2)) {
                fil2 = '<div class="chip"><img src="assets/img/icon/ico_doc.png">FICHIERS 2 <i class="fas fa-archive"></i></div>';
            }
            else if (videoTrue(e.file2)) {
                fil2 = '<div class="chip"><img src="assets/img/icon/video.png">FICHIERS 2 <i class="fas fa-archive"></i></div>';
            }
        }
        if (e.file3 != null) {
            if (imageTrue(e.file3)) {
                fil3 = '<div class="chip"><img src="assets/img/publication/min/min' + e.file3 + '">FICHIERS 3 <i class="fas fa-archive"></i></div>';
            }
            else if (pdfTrue(e.file3)) {
                fil3 = '<div class="chip"><img src="assets/img/icon/ico_doc.png">FICHIERS 3 <i class="fas fa-archive"></i></div>';
            }
            else if (videoTrue(e.file3)) {
                fil3 = '<div class="chip"><img src="assets/img/icon/video.png">FICHIERS 3 <i class="fas fa-archive"></i></div>';
            }
        }
        if (e.file4 != null) {
            if (imageTrue(e.file4)) {
                fil4 = '<div class="chip"><img src="assets/img/publication/min/min' + e.file4 + '">FICHIERS 4 <i class="fas fa-archive"></i></div>';
            }
            else if (pdfTrue(e.file4)) {
                fil4 = '<div class="chip"><img src="assets/img/icon/ico_doc.png">FICHIERS 4 <i class="fas fa-archive"></i></div>';
            }
            else if (videoTrue(e.file4)) {
                fil4 = '<div class="chip"><img src="assets/img/icon/video.png">FICHIERS 4 <i class="fas fa-archive"></i></div>';
            }
        }
        if (e.file5 != null) {
            if (imageTrue(e.file5)) {
                fil5 = '<div class="chip"><img src="assets/img/publication/min/min' + e.file5 + '">FICHIERS 5 <i class="fas fa-archive"></i></div>';
            }
            else if (pdfTrue(e.file5)) {
                fil5 = '<div class="chip"><img src="assets/img/icon/ico_doc.png">FICHIERS 5 <i class="fas fa-archive"></i></div>';
            }
            else if (videoTrue(e.file5)) {
                fil5 = '<div class="chip"><img src="assets/img/icon/video.png">FICHIERS 5 <i class="fas fa-archive"></i></div>';
            }
        }
        if (e.file6 != null) {
            if (imageTrue(e.file)) {
                fil6 = '<div class="chip"><img src="assets/img/publication/min/min' + e.file6 + '">FICHIERS 6 <i class="fas fa-archive"></i></div>';
            }
            else if (pdfTrue(e.file6)) {
                fil6 = '<div class="chip"><img src="assets/img/icon/ico_doc.png">FICHIERS 6 <i class="fas fa-archive"></i></div>';
            }
            else if (videoTrue(e.file6)) {
                fil6 = '<div class="chip"><img src="assets/img/icon/video.png">FICHIERS 6 <i class="fas fa-archive"></i></div>';
            }
        }
        if (e.file7 != null) {
            if (imageTrue(e.file7)) {
                fil7 = '<div class="chip"><img src="assets/img/publication/min/min' + e.file7 + '">FICHIERS 7 <i class="fas fa-archive"></i></div>';
            }
            else if (pdfTrue(e.file7)) {
                fil7 = '<div class="chip"><img src="assets/img/icon/ico_doc.png">FICHIERS 7 <i class="fas fa-archive"></i></div>';
            }
            else if (videoTrue(e.file7)) {
                fil7 = '<div class="chip"><img src="assets/img/icon/video.png">FICHIERS 7 <i class="fas fa-archive"></i></div>';
            }
        }
        if (e.file8 != null) {
            if (imageTrue(e.file8)) {
                fil8 = '<div class="chip"><img src="assets/img/publication/min/min' + e.file8 + '">FICHIERS 8 <i class="fas fa-archive"></i></div>';
            }
            else if (pdfTrue(e.file8)) {
                fil8 = '<div class="chip"><img src="assets/img/icon/ico_doc.png">FICHIERS 8 <i class="fas fa-archive"></i></div>';
            }
            else if (videoTrue(e.file8)) {
                fil8 = '<div class="chip"><img src="assets/img/icon/video.png">FICHIERS 8 <i class="fas fa-archive"></i></div>';
            }
        }
        if (e.file9 != null) {
            if (imageTrue(e.file9)) {
                fil9 = '<div class="chip"><img src="assets/img/publication/min/min' + e.file9 + '">FICHIERS 1 <i class="fas fa-archive"></i></div>';
            }
            else if (pdfTrue(e.file9)) {
                fil9 = '<div class="chip"><img src="assets/img/icon/ico_doc.png">FICHIERS 9 <i class="fas fa-archive"></i></div>';
            }
            else if (videoTrue(e.file9)) {
                fil9 = '<div class="chip"><img src="assets/img/icon/video.png">FICHIERS 9 <i class="fas fa-archive"></i></div>';
            }
        }
        if (e.file10 != null) {
            if (imageTrue(e.file10)) {
                fil10 = '<div class="chip"><img src="assets/img/publication/min/min' + e.file10 + '">FICHIERS 10 <i class="fas fa-archive"></i></div>';
            }
            else if (pdfTrue(e.file10)) {
                fil10 = '<div class="chip"><img src="assets/img/icon/ico_doc.png">FICHIERS 10 <i class="fas fa-archive"></i></div>';
            }
            else if (videoTrue(e.file10)) {
                fil10 = '<div class="chip"><img src="assets/img/icon/video.png">FICHIERS 10 <i class="fas fa-archive"></i></div>';
            }
        }
        $('#edition').find('.modal-body').html(fil1 + fil2 + fil3 + fil4 + fil5 + fil6 + fil7 + fil8 + fil9 + fil10 + '<hr><div align="center"><div class="md-form"><textarea id="editText" class="md-textarea">'+ e.content +'</textarea></div></div>')
    });

    $('.editP').on('click', function () {
        var content = $('#editText').val();
        $.post('/edit', {content:content, edit:edit});
        var pb = 'div.panel#'+edit;
        $(pb).find('.cont').html(content);
        $('.close').click();
        return false;
    });
    $('#tabs_one').on('click', function(){

        if(journ){
            return false;
        }
        else{
            $('#galler').removeClass('animated slideInLeft slower').addClass('none');
            $('#abou').removeClass('animated slideInUp slower').addClass('none');
            $('#aucune').removeClass('animated slideInUp slower').addClass('none');
            $('#journal').removeClass('none').addClass('animated slideInRight slower');
            gale = about = aucune = false;
            journ = true;
            finish = false;
        }
    });
    $('#tabs_two').on('click', function(){

        if(gale){
            return false;
        }
        else{
            $('#journal').removeClass('animated slideInRight slower').addClass('none');
            $('#abou').removeClass('animated slideInUp slower').addClass('none');
            $('#aucune').removeClass('animated slideInUp slower').addClass('none');
            $('#galler').removeClass('none').addClass('animated slideInLeft slower');
            journ = about = aucune = false;
            finish = true;
            gale = true;
        }
    });
    $('#tabs_three').on('click', function(){

        if(about){
            return false;
        }
        else{
            $('#journal').removeClass('animated slideInRight slower').addClass('none');
            $('#galler').removeClass('animated slideInLeft slower').addClass('none');
            $('#aucune').removeClass('animated slideInLeft slower').addClass('none');
            $('#abou').removeClass('none').addClass('animated slideInUp slower');
            journ = gale = aucune = false;
            finish = true;
            about = true;
        }
    });
    socket.on('newStatut', function(data){
        $('.bloc2 #slider4').html('');
        $('.bloc2').find('.callbacks_nav').remove();
        $('.bloc2').find('.callbacks_tabs').remove();
        if(data.length == 0){
            console.log('vide')
            $('.bloc2 #slider4').html('<li><div class="none_statuts"><div align="center" class="textNone"><h1>Aucun status Enregistré Pour le moment</h1></div></div><li>');
        }
        else{
            for(let i in data){
                var intent = "";
                if(data[i].files == null){
                    intent = '<div class="banner-top2" style="background: '+ data[i].back +'; background-size: 100% 100%"><span>'+ horo(data[i].register_date)+'</span><div class="int_stat" align="center"><p style="color: #fff; font-family:'+ data[i].font +'">'+ data[i].content +'</p></div></div>';
                }
                else{
                    intent = '<div class="banner-top2" style="background: url(assets/img/StatutsFiles/'+ data[i].files +'); background-size: 100% 100%"><span>'+ horo(data[i].register_date)+'</span><div class="int_stat" align="center"><div class="banner-info-wthree"><h3>'+ data[i].content +'</h3></div></div></div>';
                }
                $('.bloc2 #slider4').append('<li data-ryu-status="'+ data[i].id +'">'+ intent +'</li>');
                continue;
            }
            $("#slider4").responsiveSlides({
                auto: true,
                pager: true,
                nav: true,
                speed: 1000,
                namespace: "callbacks",
                before: function () {
                    $('.events').append("<li>before event fired.</li>");
                },
                after: function () {
                    $('.events').append("<li>after event fired.</li>");
                }
            });
        }
    });
    socket.on('newStatutO', function(data){
        var tain = $('#pel').val();
        $('.bloc2 #intent_stat').remove('.enter_statuts');
        $('.bloc2').find('.callbacks_nav').remove();
        $('.bloc2').find('.callbacks_tabs').remove();
        if(data.statut.length == 0){
            $('.bloc2 #intent_stat').html('<div class="none_statuts"><div align="center" class="textNone"><h1>Aucun status Enregistré Pour le moment</h1></div></div>');
            if(data.k == tain){
                $('#TrashEnter').fadeIn(2000);
                $('#FileEnter').fadeIn(4000);
                $('#textEnter').fadeIn(6000);
            }
            else {
                $('#TrashEnter').css('display', 'none');
                $('#FileEnter').css('display', 'none');
                $('#textEnter').css('display', 'none');
            }
        }
        else{
            $('.bloc2 #intent_stat').html('<div class="slider"><div class="callbacks_container"><ul class="rslides callbacks callbacks1" id="slider4"></ul></div><div class="clearfix"> </div></div>');
            for(let i in data.statut){
                var intent;
                if(data.statut[i].files == null){
                    intent = '<div class="banner-top2" style="background: '+ data.statut[i].back +'; background-size: 100% 100%"><span>'+ horo(data.statut[i].register_date)+'</span><div class="int_stat" align="center"><p style="color: #fff; font-family:'+ data.statut[i].font +'">'+ data.statut[i].content +'</p></div></div>';
                }
                else{
                    intent = '<div class="banner-top2" style="background: url(assets/img/StatutsFiles/'+ data.statut[i].files +'); background-size: 100% 100%"><span>'+ horo(data.statut[i].register_date)+'</span><div class="int_stat" align="center"><div class="banner-info-wthree"><h3>'+ data.statut[i].content +'</h3></div></div></div>';
                }
                $('.bloc2').find('#slider4').append('<li data-ryu-status="'+ data.statut[i].id +'">'+ intent +'</li>');
                continue;
            }
            $("#slider4").responsiveSlides({
                auto: true,
                pager: true,
                nav: true,
                speed: 1000,
                namespace: "callbacks",
                before: function () {
                    $('.events').append("<li>before event fired.</li>");
                },
                after: function () {
                    $('.events').append("<li>after event fired.</li>");
                }
            });
            if(data.k == tain){
                $('#TrashEnter').fadeIn(2000);
                $('#FileEnter').fadeIn(4000);
                $('#textEnter').fadeIn(6000);
            }
            else {
                $('#TrashEnter').css('display', 'none');
                $('#FileEnter').css('display', 'none');
                $('#textEnter').css('display', 'none');
            }
        }
    });
});