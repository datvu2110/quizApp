let choices  = $.makeArray($('.choice-text'));
let containter = $.makeArray($('.choice-container'));
let currentQuestion ={};
let questionCounter = 0;
let score = 0;
let availableQuestion =[]; 
let questions = [
	{
		question: "Panama, Guatemala, Costa Rica, and Nicaragua are all located in: ",
		1: "Central America",
		2: "Europe",
		3: "South America",
		4: "North America",
		answer : 1
	},
	{
		question: "The Amazon River makes up 2/3 of: ",
		1: "Mexico",
		2: "Brazil",
		3: "Bolivia",
		4: "Argentina",
		answer : 2
	},
	{
		question: "By the early twentieth century, which foreign country was dominant in the Caribbean?",
		1: "United States",
		2: "Spain",
		3: "Great Britain",
		4: "France",
		answer : 1
	},
	{
		question: "Which American president was responsible for the construction of the Panama Canal?",   
		1: "Benjamin Franklin",
		2: "Ronald Regan",
		3: "Theodore Roosevelt",
		4: "Richard Nixon",
		answer : 3
	},
	{
		question: "How many states in the United States?",   
		1: "49",
		2: "50",
		3: "51",
		4: "52",
		answer : 2
	}
];

function startGame (){
	questionCounter= 0 ;
	score = 0;
	availableQuestion = [...questions];
	displayQuestion();
}

function displayQuestion(){

	$(".choice-container").removeClass('disabled');
	$(".submit").removeClass('hidden');
	$( ".tlRadio" ).prop( "checked", false );
	questionCounter++;
	

	if (availableQuestion.length ===0 ){
		localStorage.setItem("lastScore", score);
		return window.location.assign("/end.html");
	}
	$('#numQues').text(questionCounter  + "/" +questions.length);

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
	$('.next').addClass('hidden');
	$('.answerCheck').empty();
	$('input[type="radio"]:checked').parent().removeClass('correct');
	$('input[type="radio"]:checked').parent().removeClass('incorrect');
	$('.answerCheck').removeClass('wrong');
	$('.answerCheck').removeClass('yes');
	displayQuestion();
	

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
			score++;
			$('#score').text(score +'/' + questions.length);
		}
		else {
			
			$('.answerCheck').addClass('wrong');
			$('.answerCheck').text("Your answer is INCORRECT. Correct answer is " + currentQuestion[currentQuestion.answer]);
			$('input[type="radio"]:checked').parent().addClass('incorrect');
		}
		$(".submit").addClass('hidden');
		$(".choice-container").addClass('disabled');
	
	}
	else{
		alert("please select");
		$('.choice-container').removeClass('disabled');
		$(".next").addClass('hidden');
	}

});


$('.choice-container').click(function () {    
	$('.tlRadio').prop('checked', false);
    var val =  $(this).find('input:radio').prop('checked')?false:true;
    $(this).find('input:radio').prop('checked', val);
	checkedValue = $(this).find('input:radio').val();
});

startGame();













