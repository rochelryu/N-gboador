$(document).ready(function(){

	$(".radio_myself").click(function(){
		$(".validate_myself").show(300, function(){
      $(".validate_other").hide(300, function(){
        $(".container_inputs_others").fadeOut(100, function(){
          $(".forms_container").css({"padding-top" : "3.5%"});
          $(".row_forms_block").css({"margin-top" : "16%"});
        });
      });
    });
	});

  $(".radio_other").click(function(){
		$(".validate_other").show(300, function(){
        $(".validate_myself").hide(300, function(){
          $(".container_inputs_others").fadeToggle(100, function(){
            $(".forms_container").css({"padding-top" : "2%"});
            $(".row_forms_block").css({"margin-top" : "2%"});
						$(".textarea_container").css({"margin-bottom" : "4%"});
          });
        });
    });
	});

});
