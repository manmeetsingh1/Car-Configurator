// Pads and number n, with 0's up to a specified width
function pad(n, width, z) {
	  z = z || '0';
	  n = n + '';
	  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
	}

// The order number for each car configuration
var orderNum = (pad((Math.floor((Math.random() * 1000) + 1)), 4)).toString();

// Continously checks whether or not the form is complete, if the form is complete,
// 	 the submit button is enabled, otherwise it remains disabled
window.setInterval(function(){
	var bodyType = document.getElementById("bod").value;
	var intColor = $('input[name="intColor"]:checked');
	var wheelSize = $('input[name="wheelSize"]:checked');
	var formComplete = (bodyType!="null") && (intColor.length>0) && (wheelSize.length>0) 
		if(formComplete) {
				document.getElementById('btnSubmit').disabled = false;
			}
}, 250);

// Main configuration algorithm, if the user specified more doors than the car is able to have, an error message is provided,
// 	 otherwise, a manufacturing order is placed in a table. If the user wants to make changes, they can reconfigurate the car
$(document).ready(function () {
	$('#btnSubmit').click(function () {
		var bodyType = document.getElementById("bod").value;
		var doorNumbers = document.getElementById("ex1").value.toString();
		var intColor = $('input[name="intColor"]:checked');
		var wheelSize = $('input[name="wheelSize"]:checked');
		var doorViolation = (bodyType == "Convertible" && ($.inArray(doorNumbers, ["2", "4"]) < 0)) || (bodyType == "Coupe" && doorNumbers != "2") || (bodyType == "Sedan" && doorNumbers != "4") || (bodyType == "SUV" && ($.inArray(doorNumbers, ["2", "4", "6"]) < 0)) || (bodyType == "Van" && ($.inArray(doorNumbers, ["2", "4", "6"]) < 0)) || (bodyType == "Truck" && ($.inArray(doorNumbers, ["2", "4", "6"]) < 0)) || (bodyType == "Wagon" && ($.inArray(doorNumbers, ["4", "6"]) < 0)) || (bodyType == "Hatchback" && ($.inArray(doorNumbers, ["2", "4"]) < 0)) 

			if(doorViolation)
			{
				$('#divResult').html("There was an error with your configuration. A " + bodyType + " cannot have " + doorNumbers + " doors. Please reconfigure.");
			}
			else if(intColor.length>0)
			{
				var hexColor = rgbToHex((parseInt(document.getElementById("R").value)), (parseInt(document.getElementById("G").value)), (parseInt(document.getElementById("B").value)));
				$('#divResult').html("<div class='panel panel-default'> <div id='panelTitle' class='panel-heading'>Order Number</div> <table class='table table-striped'> <tbody> <tr> <td>Body Type:</td> <td id='bodyTypeVal'></td> </tr> <tr> <td>Number of Doors:</td> <td id='doorNumbersVal'></td> </tr> <tr> <td>Exterior Color:</td> <td id='extColorVal'></td> </tr> <tr> <td>Interior Color:</td> <td id='intColorVal'></td> </tr> <tr> <td>Wheel Size:</td> <td id='wheelSizeVal'></td> </tr> </tbody> </table> </div>");
				$('#panelTitle').html("Order Number " + orderNum);
				$('#bodyTypeVal').html(bodyType);
				$('#doorNumbersVal').html(doorNumbers);
				$('#extColorVal').html("<font color='" + hexColor + "'>" + hexColor + "</font>");
				$('#intColorVal').html(intColor.val());
				$('#wheelSizeVal').html(wheelSize.val() + " inches");
			}
			else {
				$('#divResult').html("The form wasn't fully completed. Please reconfigure.");
			}
		});
	});

// Controls the slider behaviour
$(function(){
	$('#ex1').slider({
	 formater: function(value) {
		 return "Current value: " + value;
		  }
	});
});