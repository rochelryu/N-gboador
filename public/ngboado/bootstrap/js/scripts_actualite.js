$(document).ready(function(){

	$(".notification-icon").click(function(){
		$(".dropright-notifications").fadeToggle(1000);
	});

	$(".shop-icon").click(function(){
		$(".dropright-shop").fadeToggle(1000);
	});

	$(".services-icon").click(function(){
		$(".dropright-services").fadeToggle(1000);
	});

	$(".friend-chat-container").click(function(){
		$(".inbox-block").fadeIn(1000);
	});

	$(".closeChat").click(function(){
		$(".inbox-block").fadeOut(1000);
	});

	$(".coments").click(function(){
		$(".comments-cover").fadeIn();
		$(".posts-comments-great-container").fadeIn();
	});

	$(".comments-cover").click(function(){
		$(".comments-cover").fadeOut(1000);
		$(".posts-comments-great-container").fadeOut(1000);
	});

	//CODE DE LA PAGE DE WELCOME

	/*premier effet*/
	$('.suivant').click(function(){
		$('.text-one').hide(500, function(){
			$('.suivant').hide(500, function(){
				$('.suivant-text-two').fadeToggle(500);
				$('.text-two').fadeToggle(1000);
			});
		});
	});

	/*deuxième effet*/
	$('.suivant-text-two').click(function(){
		$('.text-one').hide(500, function(){
			$('.suivant-text-two').hide(500, function(){
				$('.suivant').hide(function(){
					$('.text-two').hide(500, function(){
						$('.suivant-text-three').fadeToggle(500);
						$('.text-three').fadeToggle(1000);
					});
				});
			});
		});
	});

	/*troisième effet*/
	$('.suivant-text-three').click(function(){
		$('.text-one').hide(500, function(){
			$('.suivant-text-two').hide(500, function(){
				$('.suivant').hide(function(){
					$('.text-two').hide(500, function(){
						$('.suivant-text-three').hide(500, function(){
							$('.text-three').hide(500, function(){
								$('.suivant-text-four').fadeToggle(500);
								$('.text-four').fadeToggle(1000);
							});
						});
					});
				});
			});
		});
	});

	/*quatrième effet*/
	$('.suivant-text-four').click(function(){
		$('.text-one').hide(500, function(){
			$('.suivant-text-two').hide(500, function(){
				$('.suivant').hide(function(){
					$('.text-two').hide(500, function(){
						$('.suivant-text-three').hide(500, function(){
							$('.text-three').hide(500, function(){
								$('.suivant-text-four').hide(500, function(){
									$('.text-four').hide(500, function(){
										$('.last').fadeToggle(500);
										$('.latest').fadeToggle(1000);
									});
								});
							});
						});
					});
				});
			});
		});
	});

	//loading progression top
	$('.suivant').click(function(){
		$('.loading-level-one').toggle(3000)
	});

	$('.suivant-text-two').click(function(){
		$('.loading-level-two').toggle(3000)
	})

	$('.suivant-text-three').click(function(){
		$('.loading-level-three').toggle(3000)
	})

	$('.suivant-text-four').click(function(){
		$('.loading-level-four').toggle(3000)
	})

});
