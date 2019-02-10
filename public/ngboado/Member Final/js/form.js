
$(document).ready(function(argument) {

	$('.Sympatisants').click(function() {
		$('.CoverActive').removeClass('CoverActive')
		$('#sympatisantsCover').addClass('CoverActive')

		$('.mainActive').removeClass('mainActive')
		$('#SymapatisantsMain').addClass('mainActive')

		$('.coverparent').css({'background':'url("images/pexels-photo-325521.jpeg")',
			'background-repeat': 'no-repeat',
			'background-size': 'cover',
			'background-position': 'center'
		})
		$('.cover').css('background', 'linear-gradient(90deg, #3D952B, #336699)')
		$('.bouton').css('color', '#019939')
		$('.boutton').css({
			'color': 'white'
		})
		$('.boule').css('background', 'linear-gradient(90deg, #019939,  #336699')
		$('form').css('border-color', '#019969')

	})


	$('.Ambassadeur').click(function() {
		$('.CoverActive').removeClass('CoverActive')
		$('#AmbassadeursCover').addClass('CoverActive')

		$('.mainActive').removeClass('mainActive')
		$('#AmbassadeurMain').addClass('mainActive')

		$('.coverparent').css({'background':'url("images/honneur.jpeg")',
			'background-repeat': 'no-repeat',
			'background-size': 'cover',
			'background-position': 'center'
		})
		$('.cover').css('background', 'linear-gradient(90deg, #3D952B, #336699)')
		$('.bouton').css('color', '#019939')
		$('.boutton').css({
			'color': 'white',
			'background': 'linear-gradient(90deg, #019939,  #336699)'
		})
		$('.boule').css('background', 'linear-gradient(90deg, #019939,  #336699)')
		$('form').css('border-color', '#019969')


	})


	$('.honneurs').click(function() {
		$('.CoverActive').removeClass('CoverActive')
		$('#honneursCover').addClass('CoverActive')

		$('.mainActive').removeClass('mainActive')
		$('#honneursMain').addClass('mainActive')

		$('.coverparent').css({'background':'url("images/fond.jpeg")',
			'background-repeat': 'no-repeat',
			'background-size': 'cover',
			'background-position': 'center'
		})
		$('.cover').css('background', 'linear-gradient(90deg, #019939,  #336699)')
		$('.bouton').css('color', '#019939')
		$('.boutton').css({
			'color': 'white'
		})
		$('.boule').css('background', 'linear-gradient(90deg, #019939,  #336699)')
		$('form').css('border-color', '#019969')


	})


	$('.Actif').click(function() {
		$('.CoverActive').removeClass('CoverActive')
		$('#ActifCover').addClass('CoverActive')

		$('.mainActive').removeClass('mainActive')
		$('#actifMain').addClass('mainActive')

		$('.coverparent').css({'background':'url("images/aides.jpg")',
			'background-repeat': 'no-repeat',
			'background-size': 'cover',
			'background-position': 'center'
		})
		$('.cover').css('background', '')
		$('.bouton').css('color', '#019969')
		$('.boutton').css({
			'color': 'white'
		})
		$('.boule').css('background', 'linear-gradient(90deg, #019939,  #336699)')
		$('form').css('border-color', '#019969')


	})

	/*********** label flottant *******/


});
