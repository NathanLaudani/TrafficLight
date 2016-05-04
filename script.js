
$(document).ready(function() {
		$("#redButton").hover(function(){
			$("#top").css("background-color", "red");
		});
		$("#redButton").mouseout(function(){
			$("#top").css("background-color", "red");
		});

		$("#yellowButton").hover(function(){
			$("#middle").css("background-color", "yellow");
		});
		$("#yellowButton").mouseout(function(){
			$("#middle").css("background-color", "yellow");
		});

		$("#greenButton").hover(function(){
			$("#bottom").css("background-color", "green");
		});
		$("#greenButton").mouseout(function(){
			$("#bottom").css("background-color", "green");
		});
		
	});
