// Project Name: JavaScript Calculator
// Client:	The Lannaman Reclaimation Project
// Author:	Derrick Lannaman
// Developed for WDI project Oct. 31, 2012
// Version: 1.0



var start_num = 0;
var result = 0;
var next_result = 0;
var operator = null

var total = 0;

$(function(){
	$('body').hide().fadeIn(1000);
	// $('h1').hide().slideDown(1500);
	$('.button_row').hide().slideDown(2500);
	$('#handcrafted').hide().fadeIn(3000);
	$('#shadow').hide().delay(2000).fadeIn(3000);
// Button Behavor
	$('#on').click(power_on);
	$('#on').click(power_light_on);
	$('#off').click(power_off);
	$('#off').click(power_light_off);
	// Hovering
	$('.button_ops').hover(backlight_on, backlight_off);
	$('.button_big').hover(backlight_on, backlight_off);
	$('#clear').hover(backlight_on, backlight_off);
	$('#riddle').hover(backlight_on, backlight_off);
	$('#dot').hover(backlight_on, backlight_off);
	$('#off').hover(backlight_on, backlight_off);
	// Clicking
	$('#clear').click(clear_display);
	$('#riddle').click(riddle);
	$('.button').click(light_button);
	$('#equal').click(clear_light);
// Numeric Operations
	$('.button').click(get_num);
	$('#plus').click(plus);
	$('#subtract').click(subtract);
	$('#multiply').click(multiply);
	$('#divide').click(divide);
	$('#equal').click(equals);
});

// THE CALCULATORS NUMERIC OPERATIONS

// Gets numbers when buttons are pressed and puts it in display
function get_num(){
	result = $(this).text();
	result = parseInt(result);
	$('#display').text(result);
}

function divide(){
	var divide = $('#divide').text();
	$('#display').text(divide);
	next_result = result;
	operator = 'divide';
}

function multiply(){
	var multiply = $('#multiply').text();
	$('#display').text(multiply);
	next_result = result;
	operator = 'mult';
}

function subtract(){
	var subtract = $('#subtract').text();
	$('#display').text(subtract);
	next_result = result;
	operator = 'sub';
}

function plus(){
	var plus = $('#plus').text();
	$('#display').text(plus);
	next_result = result;
	operator = 'plus';
}

function equals(){
	if (operator == 'plus'){
		total = result + next_result;
		$('#display').text(total);
	}
	else if (operator == 'sub'){
		total = next_result - result;
		$('#display').text(total);
	}
	else if (operator == 'mult'){
		total = result * next_result;
		$('#display').text(total);
	}
	else {
		total = next_result / result;
		$('#display').text(total);
	}
}

// THE CALCULATORS BUTTON OPERATIONS

// Turns Calculator ON
function power_on(){
	$('#display').text(start_num).fadeIn(800, power_up());
	$('#on').css({'background-color': 'white',
								'color': 'white',
								'text-shadow': '1px 1px 1px black'
							});
	$('#power_light').fadeIn(1000, power_light_on());
	$('#power_light').focus();
}

// Turns Display Window ON
function power_up(){
	$('#display').css('transition', 'background-color .8s ease');
	$('#display').addClass('display_on');
}

// Turns the 'Power Indicator' Light ON
function power_light_on(){
	$('#power_light').css({'transition': 'background-color .8s ease',
												 'background-color': '#5DE100',
												 'box-shadow': '2px 1.5px 7px rgba(0, 0, 0, 0.5)'});
}

// Turns Calculator OFF
function power_off(){
	$('#display').text('');
	$('#display').removeClass('display_on');
	$('#on').css({'background-color': '#C9D2D7',
								'color': '#1D007B',
								'text-shadow': 'none'});
	$('#power_light').fadeIn(500, power_light_off());
}

// Turns the 'Power Indicator' Light OFF
function power_light_off(){
	$('#power_light').css({'transition': 'background-color .8s ease',
												 'background-color': 'rgba(255, 255, 0, 0.1)',
												 'box-shadow': '2px 1.5px 7px rgba(0, 0, 0, 0.5)'});
}
// BUTTON BEHAVIOR

// Backlights Buttons on Hover (for +, -, *, /, 'dot', ?, and "OFF" buttons)
function backlight_on(){
	$(this).css({'background-color': 'white',
							 'color': 'white',
							 'text-shadow': '1px 1px 1px black'});
}

function backlight_off(){
	$(this).css({'background-color': '#C9D2D7',
							 'color': '#1D007B',
							 'text-shadow': 'none'});
}
// Backlights Buttons on Click (for number pad and "ON" button)

function light_button(){
	$(this).css({'background-color': 'white',
							 'color': 'white',
							 'text-shadow': '1px 1px 1px black'});
}
// Removes backlighting when "equal button" is pressed
function clear_light(){
	$('.button').css({'background-color': '#C9D2D7',
										'color': '#1D007B',
										'text-shadow': 'none'});
}

// Misc Button behavior
function riddle(){
	$('#display').text("Believe in Your Fuckin' Self.");
	$('#display').css({'font-size': '18px',
											'text-align': 'center',
										});
}

function clear_display(){
	$('#display').text('');
}

// ISSUES / BROKEN IDEAS

// when dividing a lower # by a higher #, how do you limit the decimal places











