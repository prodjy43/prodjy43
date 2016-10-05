(function($, document, window){

 	$(document).ready(function(){
 		$(".menu-toggle").click(function(){
 			$(".main-navigation .menu").slideToggle();
 		});

 		$("[data-bg-color]").each(function(){
 			var color = $(this).data("bg-color");
 			$(this).css("background-color",color);
 		});

 		new WOW().init();
 	});

 	$(window).ready(function(){

 	});

 })(jQuery, document, window);
 function theatermod(){
 	if($('#stream').hasClass('stream')){
 		$('#stream').addClass('streamfull');
 		$('#stream').removeClass('stream');
 		$('body').addClass('stop-scrolling');
 	}else{
 		$('#stream').addClass('stream');
 		$('#stream').removeClass('streamfull');
 		$('body').removeClass('stop-scrolling');
 	}
 }
var q = 5;
$(document).ready(function(){
	var i = 0;
	
	hideShow(i)
	hideShowChoix(i)
	$('.quiz-complete').hide()

	$('.form-quiz form').submit(function(event){

		var formDataQuiz = {
			'option': $('.form-quiz:visible input[name=option]').val(),
			'user': $('.form-quiz:visible input[name=id_user]').val(),
			'form': $('.form-quiz:visible input[name=id_form]').val(),
			'quiz': $('.form-quiz:visible input[name=id_quiz]').val()
		}

		$.ajax({
			type: 'POST',
			url: 'process.php',
			data: formDataQuiz,
			dataType: 'json',
			encode: true
		})

		.done(function(data) {

			console.log(data)
			i = i + 1
			hideShow(i)

		})

		event.preventDefault()

	})

	$('.form-choix form').submit(function(event){

		var formDataChoix = {}
		for (var j = 1; j <= $('.form-choix:visible input[name=nbchoix]').val(); j++) {
			formDataChoix['C'+j] = $('.form-choix:visible input[name=C'+ j +']').val()
			formDataChoix['OK'+j] = $('.form-choix:visible input[name=OK'+ j +']:checked').val()
		}
		formDataChoix['id'] = $('.form-choix:visible input[name=id]').val(),
		formDataChoix['nbchoix'] = $('.form-choix:visible input[name=nbchoix]').val(),
		formDataChoix['question'] = $('.form-choix:visible input[name=question]').val()

		console.log(formDataChoix)
		$.ajax({
			type: 'POST',
			url: 'function/addChoix.php',
			data: formDataChoix,
			dataType: 'json',
			encode: true
		})

		.done(function(data) {

			console.log(data)
			i = i + 1
			hideShowChoix(i)

		})

		event.preventDefault()

	})

})

function hideShow(i){
	if (i < $('.form-quiz').length) {
		$('.quiz-complete').hide()
		$('.form-quiz').hide()
		$($('.form-quiz')[i]).fadeToggle(500)
	}else{
		$('.form-quiz').hide()
		$('.quiz-complete').fadeToggle(500)
	}
	
}

function hideShowChoix(i){
	if (i < $('.form-choix').length) {
		$('.quiz-complete').hide()
		$('.form-choix').hide()
		$($('.form-choix')[i]).fadeToggle(500)
	}else{
		$('.form-choix').hide()
		$('.quiz-complete').fadeToggle(500)
	}
	
}

function insertQuestion(){
	q = q + 1;
	$('<input type="text" name="Q'+ q +'" value="" placeholder="Question '+ q +' ...">').insertBefore('.addQuestion')
	$('input[name=nbform]').val(q)
}
function insertChoix(){
	q = q + 1;
	$('<input type="text" name="C'+ q +'" value="" placeholder="Choix '+ q +' ..."><label><input type="radio" name="OK'+q+'" value="true">true</label>&nbsp;&nbsp;&nbsp;&nbsp;<label><input type="radio" name="OK'+q+'" value="false" checked>false</label>').insertBefore('.addChoix')
	$('input[name=nbchoix]').val(q)
}