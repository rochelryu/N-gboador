﻿const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
let Jimp = require('jimp');
const twig = require('twig');
const {isErr, strinfToDate} = require('./src/utilities');
const fs = require('fs');
const config = require('./setting/config')
let bodyParser = require('body-parser');
const morgan = require('morgan')('dev');
const crypto = require('crypto');
const session = require('express-session');
const expressValidator = require('express-validator');
const cookieParser = require('cookie-parser');
const ent = require('ent');
const mysql = require('promise-mysql');

mysql.createConnection({
    host: config.db.host,
    database: config.db.database,
    user: config.db.user,
    password: config.db.password
}).then((db) => {
    console.log(`CONNEXION ETABLIE AVEC LA BD`);
    const app = express();
    const https = require('http').createServer(app);
    let io = require('socket.io')(https);
    const User = require('./Model/User')(db, config);

    const storagePublish = multer.diskStorage({
        destination: './public/ngboado/medias/images/',
        filename: function (req, file, cb) {
            cb(null, req.session.nanNew.keyconfirm + '_' + Date.now() + '_' +file.originalname);
        }
    });
    let uploadPublish = multer({
        storage: storagePublish,
    }).array("filepond", 19);

    // utilisation du middlewar
    app.use(expressValidator());
    app.use(session({
        secret: config.session.secret,
        resave: config.session.resave,
        saveUninitialized: config.session.saveUninitialized
    }));
    app.use(express.static(`${__dirname}/public/ngboado`));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(morgan);

    app.get('/', async (req, res) =>{
        if(req.session.ngboador){
            res.redirect('/Accueil');
        }
        res.redirect('/login')
    });
    app.get('/login', async (req, res) =>{
        if(req.query.e == "1"){
            //const error = req.session.errors;
            //req.session.errors = null;
            //console.log(error + ' ' + req.session.errors);
            let error;
            (req.session.errors !== null) ? error = req.session.errors : error = null;
            req.session.errors = null;
            res.render(`${__dirname}/public/ngboado/index.twig`, { user: "nil", errors: error })
        }
        else{
            console.log('ici sans e')
            res.render(`${__dirname}/public/ngboado/index.twig`, { user: "nil" })
        }
    });
    app.post('/login', async (req, res) =>{
        req.check('user', "Email invalide").isEmail();
        req.check('pass', "Mot de pass ne doit pas être vide").notEmpty();

        const error = req.validationErrors();
        if(error){
            res.render(`${__dirname}/public/ngboado/index.twig`, { errors: error })
        }
        else{
           let user = req.body.user;
           let pass = req.body.pass;
           let password = crypto.createHmac('sha256', pass).update('I love cupcakes').digest('hex');
            const personC = await User.userExist(user, password);
           if (!isErr(personC)){
               console.log(password)
               req.session.ngboador = personC;
               res.redirect('/Accueil');
           }
           else{
               res.render(`${__dirname}/public/ngboado/index.twig`, { error: 'Identification Echoué. Veuillez verifier vos cordonnées ou Inscrivez-vous' })
           }
        }
    });
    app.post('/signin', async (req, res)=>{
        req.check('name', "Le nom ne doit pas être vide").notEmpty();
        req.check('firstname', "Le prénom ne doit pas être vide").notEmpty();
        req.check('passS', "Le mot de passe doit avoir 6 Caractères minimum").isLength({min:6});
        req.check('conf_pass', "Le mot de passe et sa confirmation ne sont pas identique").equals(req.body.passS);
        req.check('firstname', "Le prénom ne doit pas être vide").notEmpty();
        req.check('email', "Email invalide").isEmail();
        req.check('local', "La localité ne doit pas être vide").notEmpty();
        let error = req.validationErrors();
        if(error){
            req.session.errors = error;
            res.redirect('/login?e=1')
        }
        else{
            let element = req.body;
            element.birth = element.annee+ '-'+element.mois+'-'+element.jour;
            element.birth = strinfToDate(element.birth);
            element.age = new Date().getFullYear() - parseInt(element.annee, 10);
            element.emaycrypt = crypto.createHmac('sha256', element.email).update('I love cupcakes').digest('hex');
            element.passS = crypto.createHmac('sha256', element.passS).update('I love cupcakes').digest('hex');
            if(element.sexe == "Femme"){
                element.profil = (element.age > 21)? 'userGirl05.jpg': 'userGirl28.png';
                const confirm = Math.floor(Math.random() * Math.floor(999999999999999));
                const users = await User.setUser(element,1,confirm);
                if(!isErr(users)){
                    req.session.ngboador = users;
                    res.redirect('/Accueil');
                }
                console.log("problème de user"+ users)
                res.redirect('/login?e=1')
            }
            else {
                element.profil = (element.age > 21) ? 'userBoy18.png' : 'userChild01.jpg';
                const confirm = Math.floor(Math.random() * Math.floor(999999999999999));
                const users = await User.setUser(element, 1, confirm);
                if(!isErr(users)){
                    req.session.ngboador = users;
                    res.redirect('/Accueil');
                }
                console.log("problème de user"+ users)
                res.redirect('/login?e=1');
            }
        }
    });
    // End validation formulaire signin
    app.get('/Community/:id', async (req, res) => {
        console.log("identifiant demandé : " + req.params.id);
        if( req.session.ngboador ){
            let info = {};
            let id = req.params.id;
            let getPictureProfileOfUser = await User.getPictureProfileOfUser(id);
            let getCoverOfGroupOfUser = await User.getCoverOfGroupOfUser(id)
            info.profil = getPictureProfileOfUser.profil;
            info.cover = getCoverOfGroupOfUser.couverture;
             console.log(info);
             console.log("Lien photo de couverture : " + info.cover);
            // let getAllMemberOfThisGroup = await User.getAllMemberOfThisGroup();
            // let getCoverPictureOfThisGroup = await User.getCoverPictureOfThisGroup();
            // info.getLoadPictureProfile = {}
            // info.getPictureProfileOfUser();
            
            res.render(`${__dirname}/public/ngboado/groupes.twig`, {user: req.session.ngboador, info : info})
        }
        else{
            res.redirect('/login')
        }
    });

    app.get('/Accueil', async (req, res)=>{
        if(req.session.ngboador){
            let info = {}
            let ll = req.session.ngboador.lieu.split(',');
            let NumberPublication = await User.getAllPublicationUsers(0,9);
            let sugl = await User.getAllSuggest(ll[0], req.session.ngboador.id, 0, 3);
            let sugl2 = await User.getAllSuggest(ll[0], req.session.ngboador.id, 3, 3);
            /*for(let i = 0; i< 6; i++){
                const ele = Math.floor(Math.random() * Math.floor(sugTotal.length));
                console.log(sugTotal[ele - 1]);
                (sugl.length < 3) ? sugl.push(sugTotal[ele - 1]) : sugl2.push(sugTotal[ele - 1]);
            }*/
            for(let i in NumberPublication){
                const NombreLike = await User.getNumberLike(NumberPublication[i].id);
                const NombreDoute = await User.getNumberDoute(NumberPublication[i].id);
                const NombreComment = await User.getNumberComment(NumberPublication[i].id);
                NumberPublication[i].comment = await User.getAllCommentByPublicationId(NumberPublication[i].id);
                const sad = await User.getInfoUserLike(req.session.ngboador.emailcrypt, NumberPublication[i].id);
                const doute = await User.getInfoUserDoute(req.session.ngboador.emailcrypt, NumberPublication[i].id);
                NumberPublication[i].isLike = sad.isLike;
                NumberPublication[i].nombreFolie = NombreLike.NumberLike;
                NumberPublication[i].nombreLike = NombreDoute.NumberDoute;
                NumberPublication[i].nombreComment = NombreComment.NumberComment;
                NumberPublication[i].isDoute = doute.isDoute;
                continue;
            }
            info.published = NumberPublication;
            info.sug = sugl;
            info.sug2 = sugl2;
            let totalSearch = await User.getAllUserLocal(ll[0], req.session.ngboador.id);
            const userSearch = JSON.stringify(totalSearch);
            fs.writeFile(__dirname + "/public/ngboado/part/"+ req.session.ngboador.emailcrypt +".txt", userSearch, "UTF-8", (err, file) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log("user ready to Search");
                }
            });
            res.render(`${__dirname}/public/ngboado/actualite.twig`, {user: req.session.ngboador, info:info});
        }
        else res.redirect('/login')
    });

    /////////ACCOUNT
    app.post('/profil', uploadPublish, async(req, res)=>{
        let contents = req.body.comment;
            contents = contents.replace(/(\r\n|\n|\r)/g,"<br />");
            contents = ent.encode(contents)
            let shareTab = new Array();
                for (let file in req.files){
                    shareTab.push(req.files[file].filename);
                    if(req.files[file].mimetype === "image/jpeg" || req.files[file].mimetype === "image/jpg" || req.files[file].mimetype === "image/png" || req.files[file].mimetype === "image/gif"){
                        const minFileName = "min"+ req.files[file].filename;
                        console.log(minFileName)
                         Jimp.read(`./public/ngboado/medias/images/${req.files[file].filename}`)
                            .then(image => {
                                return image
                                    .resize(Jimp.AUTO,450)
                                    .quality(100)
                                    .write(`${__dirname}/public/ngboado/medias/images/min/${minFileName}`);
                            })
                            .catch((err)=>{
                                console.log(`MINATURISATION ECHOUé du fichier ${err}`)
                            });
                    }
                    continue;
                }
                /*switch (shareTab.length){
                    case 0:
                        const publishedContent = await User.setPublicationUniqueContent(contents, req.session.nanNew.id);
                        req.session.nanNew.send = true;
                        break;
                    case 1:
                        const publishedfile1 = await User.setPublishedOnFiles(contents, shareTab[0], req.session.nanNew.id);
                        req.session.nanNew.send = true;
                        break;
m                    case 2:
                        const publishedfile2 = await User.setPublishedTwoFiles(contents, shareTab[0], shareTab[1], req.session.nanNew.id);
                        req.session.nanNew.send = true;
                        break;
                    case 3:
                        const publishedfile3 = await User.setPublishedThreeFiles(contents, shareTab[0], shareTab[1], shareTab[2], req.session.nanNew.id);
                        req.session.nanNew.send = true;
                        break;
                    case 4:
                        const publishedfile4 = await User.setPublishedFourFiles(contents, shareTab[0], shareTab[1], shareTab[2], shareTab[3], req.session.nanNew.id);
                        req.session.nanNew.send = true;
                        break;
                    case 5:
                        const publishedfile5 = await User.setPublishedFiveFiles(contents, shareTab[0], shareTab[1], shareTab[2], shareTab[3], shareTab[4], req.session.nanNew.id);
                        req.session.nanNew.send = true;
                        break;
                    case 6:
                        const publishedfile6 = await User.setPublishedSixFiles(contents, shareTab[0], shareTab[1], shareTab[2], shareTab[3], shareTab[4], shareTab[5], req.session.nanNew.id);
                        req.session.nanNew.send = true;
                        break;
                    case 7:
                        const publishedfile7 = await User.setPublishedSevenFiles(contents, shareTab[0], shareTab[1], shareTab[2], shareTab[3], shareTab[4], shareTab[5], shareTab[6], req.session.nanNew.id);
                        req.session.nanNew.send = true;
                        break;
                    case 8:
                        const publishedfile8 = await User.setPublishedEightFiles(contents, shareTab[0], shareTab[1], shareTab[2], shareTab[3], shareTab[4], shareTab[5], shareTab[6], shareTab[7], req.session.nanNew.id);
                        req.session.nanNew.send = true;
                        break;
                    case 9:
                        const publishedfile9 = await User.setPublishedNineFiles(contents, shareTab[0], shareTab[1], shareTab[2], shareTab[3], shareTab[4], shareTab[5], shareTab[6], shareTab[7], shareTab[8], req.session.nanNew.id);
                        req.session.nanNew.send = true;
                        break;
                    case 10:
                        const publishedfile10 = await User.setPublishedTenFiles(contents, shareTab[0], shareTab[1], shareTab[2], shareTab[3], shareTab[4], shareTab[5], shareTab[6], shareTab[7], shareTab[8], shareTab[9], req.session.nanNew.id);
                        req.session.nanNew.send = true;
                        break;
                    default:
                        console.log(`je suis dans le dafault du switch ${shareTab.length} et ${shareTab}`);
                        break;
                }
                res.redirect('/myAcount');*/
                console.log(JSON.stringify(shareTab))
                res.redirect('/profil');
    })
    app.get('/profil', async (req, res)=>{
        if(req.session.ngboador) {
            let info = {}
            const follower = await User.getAllAbonnéByUserEmailCrypt(req.session.ngboador.emailcrypt);
            const followers = await User.getAllGroupByUserEmailCrypt(req.session.ngboador.emailcrypt);
            let NumberPublication = await User.getAllPublicationByUserEmailCrypt(req.session.ngboador.emailcrypt, 0, 9);
            info.recomandation = await User.getTwoLastRecommandation(req.session.ngboador.emailcrypt);
            const rec = await User.getAllREcommandationCount(req.session.ngboador.emailcrypt);
            info.gallery = await User.getAllGalleryByUserEmailCrypt(req.session.ngboador.emailcrypt);
            const pub = await User.getCountPublication(req.session.ngboador.emailcrypt);
            info.publi = pub.numbers;
            for(let i in NumberPublication){
                const NombreLike = await User.getNumberLike(NumberPublication[i].id);
                const NombreDoute = await User.getNumberDoute(NumberPublication[i].id);
                const NombreComment = await User.getNumberComment(NumberPublication[i].id);
                NumberPublication[i].comment = await User.getAllCommentByPublicationId(NumberPublication[i].id);
                const sad = await User.getInfoUserLike(req.session.ngboador.emailcrypt, NumberPublication[i].id);
                const doute = await User.getInfoUserDoute(req.session.ngboador.emailcrypt, NumberPublication[i].id);
                NumberPublication[i].isLike = sad.isLike;
                NumberPublication[i].nombreFolie = NombreLike.NumberLike;
                NumberPublication[i].nombreLike = NombreDoute.NumberDoute;
                NumberPublication[i].nombreComment = NombreComment.NumberComment;
                NumberPublication[i].isDoute = doute.isDoute;
                continue;
            }

            info.published = NumberPublication;
            info.ami = follower.follow;
            info.group = followers.follow;
            info.NumberRec = rec.recom;
            let ll = req.session.ngboador.lieu.split(',');
            let totalSearch = await User.getAllUserLocal(ll[0], req.session.ngboador.id);
            const userSearch = JSON.stringify(totalSearch);
            fs.writeFile(__dirname + "/public/ngboado/part/"+ req.session.ngboador.emailcrypt +".txt", userSearch, "UTF-8", (err, file) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log("user ready to Search");
                }
            });
            res.render(`${__dirname}/public/ngboado/profil.twig`, {user: req.session.ngboador, info: info});
        }
        else res.redirect('/login')
    });

    app.get('/ownL/:emailcrypt', async (req, res)=>{
        if(req.session.ngboador && req.params.emailcrypt !== "") {
            let email = req.params.emailcrypt.replace(/<script>/g,"");
            email = ent.encode(email);
            if(email === req.session.ngboador.emailcrypt){
                res.redirect('/profil');
            }
            else{
            let info = {}
            const follower = await User.getAllAbonnéByUserEmailCrypt(email);
            const users = await User.getUserByEmail(email)
            const followers = await User.getAllGroupByUserEmailCrypt(email);
            let NumberPublication = await User.getAllPublicationByUserEmailCrypt(email, 0, 9);
            info.recomandation = await User.getTwoLastRecommandation(email);
            const pub = await User.getCountPublication(email);
            info.publi = pub.numbers;
            const rec = await User.getAllREcommandationCount(email);
            const statF = await User.getUserFollowing(email,req.session.ngboador.id);
            info.stateFollow = (statF !== undefined)? statF.statut_id : null;
            info.gallery = await User.getAllGalleryByUserEmailCrypt(email);
            for(let i in NumberPublication){
                const NombreLike = await User.getNumberLike(NumberPublication[i].id);
                const NombreDoute = await User.getNumberDoute(NumberPublication[i].id);
                const NombreComment = await User.getNumberComment(NumberPublication[i].id);
                NumberPublication[i].comment = await User.getAllCommentByPublicationId(NumberPublication[i].id);
                const sad = await User.getInfoUserLike(req.session.ngboador.emailcrypt, NumberPublication[i].id);
                const doute = await User.getInfoUserDoute(req.session.ngboador.emailcrypt, NumberPublication[i].id);
                NumberPublication[i].isLike = sad.isLike;
                NumberPublication[i].nombreFolie = NombreLike.NumberLike;
                NumberPublication[i].nombreLike = NombreDoute.NumberDoute;
                NumberPublication[i].nombreComment = NombreComment.NumberComment;
                NumberPublication[i].isDoute = doute.isDoute;
                continue;
            }
            info.published = NumberPublication;
            info.ami = follower.follow;
            info.group = followers.follow;
            info.NumberRec = rec.recom;
            let ll = req.session.ngboador.lieu.split(',');
            let totalSearch = await User.getAllUserLocal(ll[0], req.session.ngboador.id);
            const userSearch = JSON.stringify(totalSearch);
            fs.writeFile(__dirname + "/public/ngboado/part/"+ req.session.ngboador.emailcrypt +".txt", userSearch, "UTF-8", (err, file) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log("user ready to Search");
                }
            });
            res.render(`${__dirname}/public/ngboado/other.twig`, {user: req.session.ngboador, info: info, profil:users});
            }
        }
        else res.redirect('/login')
    });


















    //Initialisation de mes socket
    io.on('connection', (socket)=>{
        socket.on('login', async (userE) => {
            let user = await User.verifUser(userE.e, userE.k);
            if (!isErr(user)){
                let me = user;
                if (!verifUserConnected(usersConnect, me.id)){
                    usersConnect.push(me);
                    io.emit('logged', usersConnect.length);
                    io.emit('newuser', me);
                }
                io.emit('user_exist');
            }
            return false;
        });
        socket.on('rec', async (data) => {
            let ctx = data.ctx.replace(/(\r\n|\n|\r)/g,"<br />");
            ctx =  data.ctx.replace(/<script>/g,"");
            let e =  data.e.replace(/<script>/g,"");
            let f =  data.f.replace(/<script>/g,"");
            let user = await User.setRecommandation(f,e, ctx);
            if (!isErr(user)){
                data.res = true
                    socket.emit('recres', data);
            }
            else{
                data.res = false
                socket.emit('recres', data);
            }
        });
        socket.on('inbox', async (message)=>{
            if(message.context === ""){
                socket.emit('eroorMsg', 'AUCUN CONTENU');
            }
            else {
                const user = await User.verifUserSimple(message.e, message.k);
                if(!isErr(user)){
                    message.context = message.context.replace(/(\r\n|\n|\r)/g,"<br />");
                    message.context = message.context.replace(/<script>/g,"");
                    message.context = ent.encode(message.context)
                    const setMessage = await User.setMessage(user.id, message.context);
                    if (!isErr(setMessage)){
                        const getMes = await User.getMessage(user.id);
                        io.emit('outbox', getMes);
                    }
                }
            }
        });
        socket.on('newForumWithInCode', async (data)=>{
            let nom = data.nom.replace(/<script>/g, '');
            let key = data.key.replace(/<script>/g, '');
            let cat = data.cat.replace(/<script>/g, '');
            let title = data.title.replace(/<script>/g, '');
            let sub = data.sub.replace(/<script>/g, '');
            let code = ent.encode(data.code);
            let tok = title.substring(0,10);
            tok = crypto.createHmac('sha256', tok).update('I love cupcakes').digest('hex');

            let categorie = await User.getFormIdByToken(cat);
            if(!key){
                var token ="";
                for(let i=0;i<=9;i++){
                    token += i;
                    continue;
                }
                token += nom.substring(0,1);
                const member = await User.setMemberCommunity(nom, token);
                let isForum = await User.setForumWithCode(title,categorie.id,tok,sub,code,member.id);
                isForum.member = token;
                console.log(isForum)
            }
            else{
                const com = await User.getMemberCommunity(key);
                let isForum = await User.setForumWithCode(title,categorie.id,tok,sub,code,com.id);
                isForum.member = key;
                console.log(isForum)
            }

        });
        socket.on('commentaire',async (data) =>{
            if(data.comment_pub === ""){
                return false;
            }
            const comment = await User.setComment(data.pub_id, data.user_id, data.comment_pub);
            const Lastcomment = await User.getOneCommentByPublication(data.pub_id);
            Lastcomment.pub = data.pub_id;
            io.emit('newcomment', Lastcomment);
        });
        socket.on("likePub",async (data)=>{
            const setLike = await User.setLikeByPublicationAndUserId(data.pub_id,data.user_id);
            let getLike = await User.getNumberLike(data.pub_id);
            getLike.comment = await User.getNumberDoute(data.pub_id);
            getLike.id = data.pub_id;
            io.emit('getLike', getLike);
        });
        socket.on("inf",async (data)=>{
            const publihedAll = await User.getAllPublicationUsers(data.mv, 6);
            const em = await User.getUserByEmail(data.e);
            if(!isErr(em)){
                for (let publish in publihedAll) {
                    for (let value in publihedAll[publish]) {
                        //publihedAll[publish].content = publihedAll[publish].content;
                        if (value === "id") {
                            let number_like = await User.getNumberLike(publihedAll[publish][value]);
                            let number_doute = await User.getNumberDoute(publihedAll[publish][value]);
                            let isTrue = await User.getInfoUserLike(em.emailcrypt, publihedAll[publish][value]);
                            let isDoute = await User.getInfoUserDoute(em.emailcrypt, publihedAll[publish][value]);
                            let comment_child = await User.getNumberComment(publihedAll[publish][value]);
                            //let comment = await User.getOneCommentByPublication(publihedAll[publish][value]);
                            publihedAll[publish].numberLike = number_like.NumberLike;
                            publihedAll[publish].numberDoute = number_doute.NumberDoute;
                            publihedAll[publish].commentCount = comment_child.NumberComment;
                            publihedAll[publish].isTrue = isTrue.isLike;
                            publihedAll[publish].isDoute = isDoute.isDoute;
                            publihedAll[publish].std_id = em.id;
                        }
                        continue;
                    }
                    continue;
                }
                socket.emit('infR', publihedAll);
            }
            else{
                for (let publish in publihedAll) {
                    for (let value in publihedAll[publish]) {
                        //publihedAll[publish].content = publihedAll[publish].content;
                        if (value === "id") {
                            let number_like = await User.getNumberLike(publihedAll[publish][value]);
                            let number_doute = await User.getNumberDoute(publihedAll[publish][value]);
                            let comment_child = await User.getCommentNumber(publihedAll[publish][value]);
                            let comment = await User.getOneCommentByPublication(publihedAll[publish][value]);
                            publihedAll[publish].numberLike = number_like.NumberLike;
                            publihedAll[publish].numberDoute = number_doute.NumberDoute;
                            publihedAll[publish].commentCount = comment_child.NumberComment;
                            publihedAll[publish].comment = comment;
                        }
                        continue;
                    }
                    continue;
                }
                socket.emit('infRv', publihedAll);
            }
        });
        socket.on('DelFollow', async (data)=>{
            var emailMe = data.e.replace(/<script>/g,'');
            var emailUser = data.cl.replace(/<script>/g,'');
            const follow = await User.delUserFollowing(emailUser,emailMe);
        });
        socket.on('newFollow', async (data)=>{
            var emailMe = data.e.replace(/<script>/g,'');
            var emailUser = data.cl.replace(/<script>/g,'');
            const follow = await User.setUserFollowing(emailUser,emailMe);
        });
        socket.on('messageContact', async (data)=>{
            var nom = data.name.replace(/<script>/g,'');
            var email = data.email.replace(/<script>/g,'');
            var first = data.firstname.replace(/<script>/g,'');
            var Message = data.Message.replace(/<script>/g,'');
            Message = ent.encode(Message);
            const creatMessage = await User.setMessageWithFormContact(nom,first,email,Message);
        });
        socket.on('sendSMS', async (data)=>{
            let email = data.e.replace(/<script>/g,"");
            let client = data.k.replace(/<script>/g,"");
            let mess = data.mes.replace(/<script>/g,"");
            mess = mess.replace(/(\r\n|\n|\r)/g,"<br />");
            mess = ent.encode(mess);
            if(mess !== '' && client !== '' && email !== ''){
                const statut = await User.setUserConversation(client, email, mess);
                if(!isErr(statut)){
                    console.log('moi')
                    //socket.emit('resSensSmSMe', message)
                }
            }
        });
        socket.on("infM",async (data)=>{
            const em = await User.getUserByEmail(data.e);
            if(!isErr(em)){
                const publihedAll = await User.getPublicationUsersByInfinite(em.id,data.mv, 5);
                for (let publish in publihedAll) {
                    for (let value in publihedAll[publish]) {
                        //publihedAll[publish].content = publihedAll[publish].content;
                        if (value === "id") {
                            let number_like = await User.getNumberLike(publihedAll[publish][value]);
                            let number_doute = await User.getNumberDoute(publihedAll[publish][value]);
                            let isTrue = await User.getInfoUserLike(em.id, publihedAll[publish][value]);
                            let isDoute = await User.getInfoUserDoute(em.id, publihedAll[publish][value]);
                            let comment_child = await User.getCommentNumber(publihedAll[publish][value]);
                            let comment = await User.getOneCommentByPublication(publihedAll[publish][value]);
                            publihedAll[publish].numberLike = number_like.NumberLike;
                            publihedAll[publish].numberDoute = number_doute.NumberDoute;
                            publihedAll[publish].commentCount = comment_child.NumberComment;
                            publihedAll[publish].isTrue = isTrue.isLike;
                            publihedAll[publish].isDoute = isDoute.isDoute;
                            publihedAll[publish].comment = comment;
                            publihedAll[publish].std_id = em.id;
                        }
                        continue;
                    }
                    continue;
                }
                socket.emit('infRM', publihedAll);
            }});
        socket.on("doutePub",async (data)=>{
            const setDoute = await User.setDouteByPublicationAndUserId(data.pub_id,data.user_id);
            let getDoute = await User.getNumberDoute(data.pub_id);
            getDoute.like = await User.getNumberLike(data.pub_id);
            getDoute.id = data.pub_id;
            io.emit('getDoute', getDoute);
        });
        socket.on("updateDateNotif", async (data)=>{
            const dateNotif = await User.setdateNotif(data.drop);
        });
        socket.on('viewAdmin', async (data)=>{
        })
        socket.on('EnLigne', async (data) =>{
            const inSend = await User.setInSend(data);
            io.emit('TrueEnLigne', data);
        });
        socket.on('EnAttente', async (data) =>{
            const inSend = await User.setInAwait(data);
            io.emit('TrueEnAttente', data);
        });
        socket.on('viewStatu', async (data)=>{
            let e = data.e.replace(/<script>/g,"");
            let k = data.k.replace(/<script>/g,"");
            const statut = await User.getAllStatusWithStudentId(e, k);
            if(!isErr(statut)){
                socket.emit('newStatutO', {statut: statut, k:k});
            }
            else{
            }

        });
        socket.on('newAdmin', async (data)=>{
            data.naiss = parseInt(data.naiss,10);
            data.l = parseInt(data.l,10);
            data.passCry = crypto.createHmac('sha256', data.pass).update('I love cupcakes').digest('hex');
            data.ema = crypto.createHmac('sha256', data.e).update('I love cupcakes').digest('hex');
            data.keyform = Math.floor(Math.random() * Math.floor(99999999999999));
            if (data.s === "Homme") {
                data.profileH = (data.l == 3) ? "gravatar1.jpg" : "homme.png";
                let create = await User.setUser(data.f,data.n,data.e,data.passCry,data.s,data.keyform,data.profileH,data.ema,data.l,data.naiss);
                if (!isErr(create)) io.emit('res_newAdmin', create);
                socket.emit('res_newAdminE', {err:1});
            }
            else{
                data.profileH = "femme.jpg";
                console.log(data)
                let create = await User.setUser(data.f,data.n,data.e,data.passCry,data.s,data.keyform,data.profileH,data.ema,data.l,data.naiss);
                if (!isErr(create)) io.emit('res_newAdmin', create);
                socket.emit('res_newAdminE', {err:1});
            }
            //let create = await User.setPasswordUser(email, key,userPassword);

        });
        socket.on('biblio', async (data)=>{
            data.ct = ent.encode(data.ct);
            let bibli = await User.setBiblio(data.e, data.k, data.ct);
            if(!isErr(bibli)){
                socket.emit('InBiblio', data.ct);
            }
        });

        socket.on('expOn', async (data)=>{
            const expOn = await User.setExpOn(data.e,data.k,data.beg,data.str,data.desc, data.last, data.link);
            if(!isErr(expOn)){
                socket.emit('expOnBack', expOn);
            }
        });
        socket.on('ancienPass',async (data)=>{
            let  moment = data.ans.replace(/<script>/g,"");
            const e = data.e.replace(/<script>/g,"");
            const k = data.k.replace(/<script>/g,"");
            moment = crypto.createHmac('sha256', moment).update('I love cupcakes').digest('hex');
            const veri = await User.verifPass(moment,e,k);
            const tchek = (!isErr(veri))? 0:1;
            socket.emit('newPass', tchek);

        });
        socket.on('confPass', async (data)=>{
            let  moment = data.ans.replace(/<script>/g,"");
            let  news = data.news.replace(/<script>/g,"");
            const e = data.e.replace(/<script>/g,"");
            const k = data.k.replace(/<script>/g,"");
            moment = crypto.createHmac('sha256', moment).update('I love cupcakes').digest('hex');
            news = crypto.createHmac('sha256', news).update('I love cupcakes').digest('hex');
            const veri = await User.setPassword(e,k,moment,news);
            const tchek = (!isErr(veri))? 0:1;
            socket.emit('confPass_res', tchek);
        });
        socket.on('newDateNaiss', async (data)=>{
            let  moment = strinfToDate(data.date);
            const e = data.e.replace(/<script>/g,"");
            const k = data.k.replace(/<script>/g,"");
            console.log(typeof moment + ' / ' + moment  + ' // ' + e + ' '+ k);
            const dateNaiss = await User.setdateBirth(e,k,moment);
            console.log('la naiss val '+ dateNaiss)
            if(!isErr(dateNaiss)){
                socket.emit('newDateNaiss_res', dateNaiss);
            }
        });
        socket.on('deleStatu', async (data)=>{
            const e = data.e.replace(/<script>/g,"");
            const k = data.k.replace(/<script>/g,"");
            const id = data.ele.replace(/<script>/g,"");
            const del = await User.delStatut(e, k, id);
            if(!isErr(del)){
                const statut = await User.getAllStatusWithStudentId(e, k);
                socket.emit('newStatut', statut);
            }

        })
        socket.on('deleteInt', async (data)=>{
            let del = await User.getPublicationUsers(data);
            if(del.file1){
                fs.unlink(`${__dirname}/nan-new/assets/img/publication/${del.file1}`, (err)=>{
                    if(err){
                        throw err;
                    }
                    else{
                        if(verifImage(del.file1)){
                            fs.unlinkSync(`${__dirname}/nan-new/assets/img/publication/min/min${del.file1}`)
                        }
                    }
                } )
            }
            if(del.file2){
                fs.unlink(`${__dirname}/nan-new/assets/img/publication/${del.file2}`, (err)=>{
                    if(err){
                        throw err;
                    }
                    else{
                        if(verifImage(del.file2)){
                            fs.unlinkSync(`${__dirname}/nan-new/assets/img/publication/min/min${del.file2}`)
                        }
                    }
                } )
            }
            if(del.file3){
                fs.unlink(`${__dirname}/nan-new/assets/img/publication/${del.file3}`, (err)=>{
                    if(err){
                        throw err;
                    }
                    else{
                        if(verifImage(del.file3)){
                            fs.unlinkSync(`${__dirname}/nan-new/assets/img/publication/min/min${del.file3}`)
                        }
                    }
                } )
            }
            if(del.file4){
                fs.unlink(`${__dirname}/nan-new/assets/img/publication/${del.file4}`, (err)=>{
                    if(err){
                        throw err;
                    }
                    else{
                        if(verifImage(del.file4)){
                            fs.unlinkSync(`${__dirname}/nan-new/assets/img/publication/min/min${del.file4}`)
                        }
                    }
                } )
            }
            if(del.file5){
                fs.unlink(`${__dirname}/nan-new/assets/img/publication/${del.file5}`, (err)=>{
                    if(err){
                        throw err;
                    }
                    else{
                        if(verifImage(del.file5)){
                            fs.unlinkSync(`${__dirname}/nan-new/assets/img/publication/min/min${del.file5}`)
                        }
                    }
                } )
            }
            if(del.file6){
                fs.unlink(`${__dirname}/nan-new/assets/img/publication/${del.file6}`, (err)=>{
                    if(err){
                        throw err;
                    }
                    else{
                        if(verifImage(del.file6)){
                            fs.unlinkSync(`${__dirname}/nan-new/assets/img/publication/min/min${del.file6}`)
                        }
                    }
                } )
            }
            if(del.file7){
                fs.unlink(`${__dirname}/nan-new/assets/img/publication/${del.file7}`, (err)=>{
                    if(err){
                        throw err;
                    }
                    else{
                        if(verifImage(del.file7)){
                            fs.unlinkSync(`${__dirname}/nan-new/assets/img/publication/min/min${del.file7}`)
                        }
                    }
                } )
            }
            if(del.file8){
                fs.unlink(`${__dirname}/nan-new/assets/img/publication/${del.file8}`, (err)=>{
                    if(err){
                        throw err;
                    }
                    else{
                        if(verifImage(del.file8)){
                            fs.unlinkSync(`${__dirname}/nan-new/assets/img/publication/min/min${del.file8}`)
                        }
                    }
                } )
            }
            if(del.file9){
                fs.unlink(`${__dirname}/nan-new/assets/img/publication/${del.file9}`, (err)=>{
                    if(err){
                        throw err;
                    }
                    else{
                        if(verifImage(del.file9)){
                            fs.unlinkSync(`${__dirname}/nan-new/assets/img/publication/min/min${del.file9}`)
                        }
                    }
                } )
            }
            if(del.file10){
                fs.unlink(`${__dirname}/nan-new/assets/img/publication/${del.file10}`, (err)=>{
                    if(err){
                        throw err;
                    }
                    else{
                        if(verifImage(del.file10)){
                            fs.unlinkSync(`${__dirname}/nan-new/assets/img/publication/min/min${del.file10}`)
                        }
                    }
                })
            }
            setTimeout(async ()=>{
                const dead = await User.delPublishedByAdmin(data);
                io.emit('deletePub', data);
            }, 2000)
        });
        socket.on('editPub', async (data)=>{
            let publication = await User.getPublicationUsers(data);
            socket.emit('editPubResponse', publication)
        });
        socket.on('resetPassword', async (data)=>{
            const userss = await User.getUserByEmail(data);
            if(!isErr(userss)){
                nodemailer.createTestAccount((err, account) => {
                    if(err) {
                        console.error('Failed to create a testing account');
                        console.error(err);
                        return process.exit(1);
                    }

                    console.log('Credentials obtained, sending message...');

// NB! Store the account object values somewhere if you want
// to re-use the same account for future mail deliveries

// Create a SMTP transporter object
                    let transporter = nodemailer.createTransport(
                        {
                            service: 'gmail',
                            port: 25,
                            secure: false, // true for 465, false for other ports
                            auth: {
                                user: config.email.user, // generated ethereal user
                                pass: config.email.pass // generated ethereal password
                            },
                            tls : {
                                rejectUnauthorized : false
                            }
                            // include SMTP traffic in the logs
                        }
                    );
                    let mailOptions = {
                        from: '"NaN Network" <nan@traversymedia.com>',
                        subject: 'Recovery de votre mot de passe',
                        to: userss.email,
                        subject:'Réinitialiser votre mot de passe NaNien',
                        text: 'J\'apprends à marcher sur l\'eau pas sur l\'autre ',
                        html: '<!DOCTYPE html>\n' +
                            '<html lang="fr">\n' +
                            '<head>\n' +
                            '    <meta http-equiv="content-type" content="text/html; charset=UTF-8">\n' +
                            '    <meta charset="utf-8">\n' +
                            '    <style>\n' +
                            '        *{\n' +
                            '            box-sizing: border-box;\n' +
                            '            margin: 0;\n' +
                            '            padding: 0;\n' +
                            '        }\n' +
                            '        p{\n' +
                            '            font-size: medium;\n' +
                            '            text-align: justify;\n' +
                            '            color: #fff;\n' +
                            '        }\n' +
                            '        a{\n' +
                            '            text-decoration: none;\n' +
                            '            color: #f046c6;\n' +
                            '            font-size: large;\n' +
                            '            font-weight: bold;\n' +
                            '        }\n' +
                            '        .container{\n' +
                            '            border-radius: 10px;\n' +
                            '            box-shadow: 0 0 10px #444;\n' +
                            '            border: none;\n' +
                            '            background: rgba(173,149,249,0.5);\n' +
                            '            padding: 25px;\n' +
                            '            margin: 25px;\n' +
                            '        }\n' +
                            '    </style>\n' +
                            '</head>\n' +
                            '<div class="container" align="center">\n' +
                            '    <p>Hé ow NaNien '+ userss.nom +' <br><br> vous avez demander une réinitialisation de mot de passe tout de suite. Vous pouvez confirmer cette requête en clicant\n' +
                            '        <a href="http://www.localhost:3000/confirm?ryu='+ userss.emailcryp +'&keyconfirm='+ userss.keyconfirm +'">ici</a>. <br><br> MAIS ON TIENT A VOUS RAPPELER QUE OUBLIER SON PASSWORD EST UN TRUC DE DEBUTANT 😒.\n' +
                            '        <br><br> N.B: ce lien est valide juste pendant 48h, une fois delai depassé, vous allez devoir recommencer votre demande de RESET PASSWORD !!!</p>\n' +
                            '</div>\n' +
                            '<body>\n' +
                            '</body>\n' +
                            '</html>'
                    };
                    transporter.sendMail(mailOptions, (err, info)=>{
                        if(err){
                            return console.log(err)
                        }
                        else{
                            console.log("mail envoyé" + info);
                            const send = 0;
                            socket.emit('res_resetPass', send);
                        }
                    });
                });
            }
            else{

                const send = 1;
                socket.emit('res_resetPass', send);
            }
        });
        });


    https.listen(config.port);
}).catch((error) =>{console.log(error.message)});