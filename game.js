let question = $('#question')[0];
let choices  = $.makeArray($('.choice-text'));
const MAX_QUESTION  = 3;
let currentQuestion ={};
let questionCounter = 0;
let availableQuestion =[]; 

let questions = [
	{
		question: "Name of your dog: ",
		1: "Lucky",
		2: "Jerry",
		3: "Mickey",
		4: "Donald",
		answer : "Lucky"
	},
	{
		question: "City: ",
		1: "Austin",
		2: "Nha Trang",
		3: "Ha Noi",
		4: "Vung Tau",
		answer : "Nha Trang"
	},
	{
		question: "Last Name: ",
		1: "Vu",
		2: "Tran",
		3: "Nguyen",
		4: "Do",
		answer : "Vu"
	},
	{
		question: "2 + 2 = ",   
		1: "6",
		2: "2",
		3: "4",
		4: "3",
		answer : "4"
	}
];

function startGame (){
	questionCounter= 0 ;
	score = 0;
	availableQuestion = [...questions];
	newQuestion();
}

function newQuestion(){
	$( ".tlRadio" ).prop( "checked", false );
	if (availableQuestion.length ===0 || questionCounter >= MAX_QUESTION){
		return window.location.assign("/end.html");
	}
	questionCounter++;
	const questionIndex = Math.floor(Math.random() * availableQuestion.length);
	currentQuestion = availableQuestion[questionIndex];
	question.innerText = currentQuestion.question;
	for (let i = 0; i<choices.length; i++){
		choices[i].innerText = currentQuestion[i+1];
	}
	availableQuestion.splice(questionIndex, 1);
}

$(document).on("click",".next",function(e){
	if($('.tlRadio:checked').length > 0){
   		$(document).on("click",".next",function(e){
   			if (selectedChoice == currentQuestion.answer){
				$('.answerCheck').addClass('yes');
				$('.answerCheck').text('Your answer is correct');
				$('input[type="radio"]:checked').parent().addClass('correct');
			}
			else {
				$('.answerCheck').addClass('wrong');
				$('.answerCheck').text('Your answer is INCORRECT');
				$('input[type="radio"]:checked').parent().addClass('incorrect');
			}
   		});

		newQuestion();

	}
	else{
		alert("please select");
	}
	

	

});

$('.choice-container').click(function () {    
	$('.tlRadio').prop('checked', false);
    var val =  $(this).find('input:radio').prop('checked')?false:true;
    $(this).find('input:radio').prop('checked', val);
	checkedValue = $(this).find('input:radio').val();
});

startGame();


/*const selectedChoice = $('input[type="radio"]:checked').parent().find('label').text();
	if (selectedChoice == currentQuestion.answer){
		$('.answerCheck').addClass('yes');
		$('.answerCheck').text('Your answer is correct');
		$('input[type="radio"]:checked').parent().addClass('correct');
	}
	else {
		$('.answerCheck').addClass('wrong');
		$('.answerCheck').text('Your answer is INCORRECT');
		$('input[type="radio"]:checked').parent().addClass('incorrect');
	}
	
	$('.choice-container').addClass('disabled');
	
	getNewQuestion();
*/












