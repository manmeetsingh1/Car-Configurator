// Converts RGB color values to HEX color codes, used to convert the RGB exterior color sliders 
//   into HEX values for the manufacturing order
$(function(){
	var RGBChange = function() {
		$('#RGB').css('background', 'rgb('+r.getValue()+','+g.getValue()+','+b.getValue()+')');
	};

	var r = $('#R').slider()
			.on('slide', RGBChange)
			.data('slider');
	var g = $('#G').slider()
			.on('slide', RGBChange)
			.data('slider');
	var b = $('#B').slider()
			.on('slide', RGBChange)
			.data('slider');
		});

	function rgbToHex(r, g, b) {
	    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
	}

// Refresh function for the refresh button besides the submit button
function refreshPage(){
	    window.location.reload();
	} 