let lastScore = localStorage.getItem("lastScore");
console.log(lastScore);
$('#score').text(lastScore);

$(document).on("click","#home",function(e){
	location.href("home.html");
});