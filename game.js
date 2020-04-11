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
		answer : 1
	},
	{
		question: "City: ",
		1: "Austin",
		2: "Nha Trang",
		3: "Ha Noi",
		4: "Vung Tau",
		answer : 2
	},
	{
		question: "Last Name: ",
		1: "Vu",
		2: "Tran",
		3: "Nguyen",
		4: "Do",
		answer : 1
	},
	{
		question: "2 + 2 = ",   
		1: "6",
		2: "2",
		3: "4",
		4: "3",
		answer : 3
	}
];

function startGame (){
	questionCounter= 0 ;
	score = 0;
	availableQuestion = [...questions];
	displayQuestion();
}

function displayQuestion(){
	$(".submit").removeClass('hidden');
	$( ".tlRadio" ).prop( "checked", false );
	if (availableQuestion.length ===0 || questionCounter >= MAX_QUESTION){
		return window.location.assign("/end.html");
	}
	const questionIndex = Math.floor(Math.random() * availableQuestion.length);
	currentQuestion = availableQuestion[questionIndex];
	question.innerText = currentQuestion.question;
	for (let i = 0; i<choices.length; i++){
		choices[i].innerText = currentQuestion[i+1];
	}
	availableQuestion.splice(questionIndex, 1);
	$('.next').addClass('hidden');
}

$(document).on("click",".next",function(e){
	$('input[type="radio"]:checked').parent().removeClass('correct');
	$('input[type="radio"]:checked').parent().removeClass('incorrect');
	$('.answerCheck').removeClass('wrong');
	$('.answerCheck').removeClass('yes');
	displayQuestion();
	questionCounter++;
});

$(document).on("click",".submit",function(e){
	$(".next").removeClass('hidden');
	$('.choice-container').removeClass('disabled');
	const selectedChoice = $('input[type="radio"]:checked').parent().find('label').text();
	if($('.tlRadio:checked').length > 0){
   		if (selectedChoice == currentQuestion[currentQuestion.answer]){
			$('.answerCheck').addClass('yes');
			$('.answerCheck').text('Your answer is correct');
			$('input[type="radio"]:checked').parent().addClass('correct');
		}
		else {
			$('.answerCheck').addClass('wrong');
			$('.answerCheck').text('Your answer is INCORRECT');
			$('input[type="radio"]:checked').parent().addClass('incorrect');
		}
	
	}
	else{
		alert("please select");
	}
	$(".submit").addClass('hidden');
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












