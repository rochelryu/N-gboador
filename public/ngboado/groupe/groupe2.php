<!DOCTYPE html>
<html lang="en">
<head>
  <title>Les Guitaristes</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  
  
  <script src="asset/js/bootstrap.min.js"></script>
  <script src="asset/js/jquery-3.3.1.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="asset/css/styles.css"> 
  
  <!-- <script src="asset/js/popper.min.js"></script> -->
  <style>    
    /* Set black background color, white text and some padding */
    footer {
      background-color: #555;
      color: white;
      padding: 15px;
    }
  </style>
  <script>
    /*$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   */
    /*});*/

  </script>
</head>
<body>
<!-- barre de haut
Button trigger modal -->
<button type="button" class="btn btn-primary" id="mybutton" data-toggle="modal" data-target="#exampleModalLong" style="display: none">
</button>
<!-- Modal -->
<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog modal-md" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="exampleModalLongTitle">Liste des Membres</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="modal-body">
          <img src="image/icon/user profil/africa/userBoy09.jpg" class="img-responsive img-circle" width="60" height="60" alt=""> <span><small><strong>Gourou Stéphane</strong><br><i>Sympatisant</i><span style="position: absolute;right: 20px; top:20px;"><i>connecté(e) <span style="color: #07E407; font-size: 1em;font-family: sans-serif;">.</span></i></span></small></span>
        </div>
        <div class="modal-body">
          <img src="image/icon/user profil/africa/userBoy09.jpg" class="img-responsive img-circle" width="60" height="60" alt=""> <span><small><strong>Gourou Stéphane</strong><br><i>Sympatisant</i><span style="position: absolute;right: 20px; top:20px;"><i>connecté(e) <span style="color: #07E407; font-size: 1em;font-family: sans-serif;">.</span></i></span></small></span>
        </div>
        <div class="modal-body">
          <img src="image/icon/user profil/africa/userBoy09.jpg" class="img-responsive img-circle" width="60" height="60" alt=""> <span><small><strong>Gourou Stéphane</strong><br><i>Sympatisant</i><span style="position: absolute;right: 20px; top:20px;"><i>connecté(e) <span style="color: #07E407; font-size: 1em;font-family: sans-serif;">.</span></i></span></small></span>
        </div>
        <div class="modal-footer"><br>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</div>

    


  <div class="container-fluid" style="margin-top: -20px;">
    <div class="row">
      <div class="col-lg-12 img-cover">        
        <div class="col-xs-8 col-xs-offset-4 well infogroup ">          
          <img src="image/icon/user profil/africa/userBoy09.jpg" class="img-responsive img-circle deplacement-img" alt="">
        
        
          <img src="image/icon/user profil/africa/userChildBoy0.jpeg" class="img-responsive img-circle deplacement-img" alt="">                          
          <img src="image/icon/user profil/africa/userGirl04.jpeg" class="img-responsive img-circle deplacement-img" alt="">                        
          <button type="button" id="button" class="btn btn-xs" title="Voir la liste de membres" onclick="reaction()"><i class="fa fa-plus-circle" style="font-size:42px; margin: 4px 0 4px 0px; "></i></button>                      
        </div>
      </div>
    </div>
    <div class="row well well-sm" style="background-color: #fff; color:#000;">
      <div class="col-sm-12">
        <div class="row text-center">
          <div class="col-xs-offset-4 col-xs-1">
            <i class="material-icons" style="font-size:20px; cursor: pointer;">local_post_office</i>
          </div>
          <div class=" col-xs-1">
            <i class="fa fa-map-marker" style="font-size:20px; cursor: pointer;"></i>
          </div>
          <div class="col-xs-1">
            <i class="material-icons" style="font-size:20px;cursor: pointer;">event</i>     
          </div>
          <div class="col-xs-1">
            <i class="fa fa-camera" style="font-size:20px; cursor: pointer;"></i>
          </div>
        </div>  
      </div>
    </div>
  </div>

  <div class="container">  
    <div class="row">
      <div class="col-sm-2 hidden-xs" style="z-index: 10;" id="profile-container">
        <div class="well text-center myprofile" style="background-color: #fff; ">
          <a href=""><img src="image\icon\user profil\africa/userBoy18.png" class="img-thumbnail" id="profile-img" alt="Avatar">
          <div class="desc bg-primary">Mon Profile</div>
          </a>
        </div>              
      </div>
  
    <!-- corps de la page   -->
    <!-- <div class="col-sm-12"></div> -->
      <div class="col-sm-7">
        <div class="row">
          <div class="panel panel-heading text-center col-sm-12  commentaire" style=" border: none;">
              Faire un post
          </div>
        </div>
        
        <div class="row">
          <div class="col-sm-12" style="background-color: #F4F4F4; margin: -18px 0 30px 0; padding-bottom: 20px;  border-radius: 0;">           
            <div class="row">              
              <div class="col-sm-12" style="padding-top:15px;  border-radius: 0;">                              
                <form action="" method="POST" style=" position: relative; top: 20px;" id="comment-form">
                  <div class="form-group col-sm-12 ">
                    <textarea name="comment" id="comment" class="form-control demo" rows="3" placeholder="Commentez cette publication.."></textarea>
                  </div>
                  <div class="media_publish col-xs-12">
                    <div class="img-media">
                      <a href=""><img src="image/icon/movie-symbol-of-video-camera (2).png" class="img-responsive" width="30" height="30" alt=""></a>
                      <a href=""><img src="image/icon/picture.png" class="img-responsive" width="30" height="30" alt=""></a>
                    </div>
                    <button type="submit" class="btn btn-primary btn-md" id="send-comment" style="border-radius: 1px;">Publier
                    </button><br><br>
                  </div>                    
                </form>                                                                            
              </div>
            </div>        
          </div>  
        </div>


        <!-- Publications  -->
        <div class="row">
          <div class="col-sm-12" style="background-color: #fff; position: relative;top : -20px;">
            <div class="row">
              <div class="col-sm-12 publication " style="position: relative;top : 20px;">
                <div class="row">            
                  <div class="col-sm-12 publication-block" style="background-color: #fff;">
                    <div class="row">                      
                      <div class="col-sm-12">
                        <div class="well">Dernières Publications</div>
                        <div class="col-xs-2 event-date text-center">
                          16<br>JUIL
                        </div>
                        <div class="col-xs-10 event-title">Rencontre à Boundiali<br><small>10:30 - 12:00</small>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-12 published" style="background-color: #fff">
                        <img src="image/wedding-1255520_1280.jpg" alt="" class="img-responsive">
                      </div>
                      <div class="col-sm-12 identity">
                        <img src="image/icon/user profil/arabe/91.png" alt="image/icon/user profil/arabe/91.png" class="img-circle">
                        <div class="time-out-of-this"><strong>Maman</strong> a publié un article<br>
                          <span>il y a 10 heures</span>
                        </div>
                        <p class="title-comment well">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta et molestiae iste, quis omnis voluptatem facere atque, aliquam voluptate natus inventore possimus commodi, impedit fuga sapiente consequuntur quo, sequi consequatur.
                        </p>
                        <hr>
                        <div class="panel panel-heading text-center col-sm-6 col-sm-offset-3 commentaire"><img src="image/icon/comment.png" width="60" height="60" alt=""><span>Commenter cette publication</span></div>
                      </div>
                    </div>
                    <!-- <div class="row">
                      <form action="" method="POST" style="display:; position: relative; top: -20px;" id="comment-form">
                        <div class="form-group col-sm-10 col-sm-offset-1">
                          <textarea name="comment" id="comment" class="form-control demo" rows="3" placeholder="Commentez cette publication.."></textarea>
                        </div>
                        <div class="col-sm-3 col-sm-offset-1 media_publish">
                          <a href=""><img src="image/icon/movie-symbol-of-video-camera (2).png" class="img-responsive" width="40" height="40" alt=""></a>
                          <a href=""><img src="image/icon/picture.png" class="img-responsive" width="40" height="40" alt=""></a>                           
                        </div>
                        <div class="col-sm-3 col-sm-offset-4 media_publish">
                          <button type="submit" class="btn btn-primary btn-lg media" id="send-comment" style="border-radius: 1px;">Commenter</button><br><br>
                        </div>
                      </form>                                              
                    </div> -->
                    <hr style="width: 50px; height: 10px;" />
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="media">
                          <div class="media-left media-top">
                            <img src="image\icon\user profil\africa\userBoy08.jpg" class="media-object" style="width:45px">
                          </div>
                          <div class="media-body">
                            <h4 class="media-heading">Ryu - <small><i>19 décembre 2018</i></small></h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>                    
                            <div class="media">
                              <div class="media-left media-top">
                                <img src="image\icon\user profil\africa\userBoy17.png" class="media-object" style="width:45px">
                              </div>
                              <div class="media-body">
                                <h4 class="media-heading">Fabrice - <small><i>19 décembre 2018</i></small></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>                          
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr/>
                    </div>
                    <hr>
                  </div>                              
                </div>  
              </div>
            </div>

          </div>
        </div>
        <!-- <div class="row">
          <div class="col-sm-12 publication-block" style="background-color: #fff; margin-top: 40px;">
                    <div class="row">                      
                      <div class="col-sm-12">
                        <div class="well">Dernières Publications</div>
                        <div class="col-xs-2 event-date text-center">
                          16<br>JUIL
                        </div>
                        <div class="col-xs-10 event-title">Rencontre à Boundiali<br><small>10:30 - 12:00</small>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-12 published" style="background-color: #fff">
                        <img src="image/wedding-1255520_1280.jpg" alt="" class="img-responsive">
                      </div>
                      <div class="col-sm-12 identity">
                        <img src="image/icon/user profil/arabe/91.png" alt="image/icon/user profil/arabe/91.png" class="img-circle">
                        <div class="time-out-of-this"><strong>Maman</strong> a publié un article<br>
                          <span>il y a 10 heures</span>
                        </div>
                        <p class="title-comment well">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta et molestiae iste, quis omnis voluptatem facere atque, aliquam voluptate natus inventore possimus commodi, impedit fuga sapiente consequuntur quo, sequi consequatur.
                        </p>
                        <hr>
                        <div class="panel panel-heading text-center col-sm-6 col-sm-offset-3 commentaire"><img src="image/icon/comment.png" width="60" height="60" alt=""><span>Commenter cette publication</span></div>
                      </div>
                    </div>
                    <div class="row">
                      <form action="" method="POST" style="display:; position: relative; top: -20px;" id="comment-form">
                        <div class="form-group col-sm-10 col-sm-offset-1">
                          <textarea name="comment" id="comment" class="form-control demo" rows="3" placeholder="Commentez cette publication.."></textarea>
                        </div>
                        <div class="col-sm-3 col-sm-offset-1 media_publish">
                          <a href=""><img src="image/icon/movie-symbol-of-video-camera (2).png" class="img-responsive" width="40" height="40" alt=""></a>
                          <a href=""><img src="image/icon/picture.png" class="img-responsive" width="40" height="40" alt=""></a>                           
                        </div>
                        <div class="col-sm-3 col-sm-offset-4 media_publish">
                          <button type="submit" class="btn btn-primary btn-lg media" id="send-comment" style="border-radius: 1px;">Commenter</button><br><br>
                        </div>
                      </form>                                              
                    </div>
                    <hr>
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="media">
                          <div class="media-left media-top">
                            <img src="image\icon\user profil\africa\userBoy08.jpg" class="media-object" style="width:45px">
                          </div>
                          <div class="media-body">
                            <h4 class="media-heading">Ryu - <small><i>19 décembre 2018</i></small></h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>                    
                            <div class="media">
                              <div class="media-left media-top">
                                <img src="image\icon\user profil\africa\userBoy17.png" class="media-object" style="width:45px">
                              </div>
                              <div class="media-body">
                                <h4 class="media-heading">Fabrice - <small><i>19 décembre 2018</i></small></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>                          
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr/>
                    </div>
                    <hr>
          </div>
        </div> -->
          
      </div>           
                
          <div class="col-sm-3 text-center" style="background-color: #eee; color: #000; border-radius: 0;">
            <div class="col-sm-12 well well-sm" style="background-color: #fff;"><strong><h4>EVENEMENTS A LA UNE</h4></strong></div>
            <div class="col-sm-12 well" style="background-color: #fff;">
              <div class="thumbnail">
                <p><i>Evenement à la une</i></p>
                <img src="image/paris-1836415_640.jpg" alt="Paris" width="400" height="300" class="img-responsive">        
                  <p><strong>Paris</strong></p>          
                  <p>Fri. 27 November 2015</p>
                <button class="btn btn-primary">Info</button>
              </div>      
              <div class="thumbnail">
                <p><i>Evenement à la une</i></p>
                <img src="image/paris-1836415_640.jpg" alt="Paris" width="400" height="300">
                <p><strong>Paris</strong></p>
                <p>Fri. 27 November 2015</p>
                <button class="btn btn-primary">Info</button>
              </div>
              <a href="">Voir plus ...</a>
        
            </div>
          </div>            
        </div>
      </div>
  </div>

  </script>
  <script>
    $(document).ready(function(){
      $(function(){
        $('textarea').textAdjust()
      });  
      $('textarea').textAdjust({
        min: 3,
        max: 20
      });
      $(".commentaire").click(function(){
        $("#comment-form").show(1000);
      });
    });    
    
    function reaction(){
      $("#mybutton").click();
    }


    document.getElementById("profile-container");
    document.getElementById("profile-img");
  </script>
<!-- <script src="jquery-3.3.1.min.js"></script> -->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" 
integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" 
crossorigin="anonymous">
</script>
<script src="plugin/Auto-Grow-Textarea-textAdjust/jquery.textAdjust.js"></script>

</body>
</html>
