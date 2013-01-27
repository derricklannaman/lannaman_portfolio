$(function(){

 $('#top-nav').hide();
 $('#slide1').hide();
 $('#slide2').hide();
 $('#slide3').hide();
 $('#slide4').hide();
 $('#slide5').hide();


 $('#full-stack').hide();
 $('#down-arrow-1').hide();
 $('#down-arrow-2').hide();
 $('#down-arrow-3').hide();
 $('.first-slide-content').hide();
 $('.second-slide-content').hide();
 $('.third-slide-content').hide();
 $('.fourth-slide-content').hide();
 $('.light-box-caption').hide();

 $('#result-btn').click(show_stack);

 $('#question-1').click(show_slide1);
 $('#question-2').click(show_slide2);
 $('#question-3').click(show_slide3);
 $('#question-4').click(show_slide4);
 $('#beautiflow-light-box').hover(show_beautiflow_caption, hide_beautiflow_caption);
 $('#foodie-light-box').hover(show_foodie_caption, hide_foodie_caption);
 $('#susunami-light-box').hover(show_susunami_caption, hide_susunami_caption);

});

// Onload fade in intro of page
$(function() {
  $('#top-nav').fadeIn(1000);
  $('#slide1').delay(300).fadeIn(1200);
  $('#slide2').delay(600).fadeIn(1200);
  $('#slide3').delay(900).fadeIn(1200);
  $('#slide4').delay(1200).fadeIn(1400);
  $('#slide5').delay(1500).fadeIn(1400);
});


function show_susunami_caption(){
  $('#susunami-caption').slideDown(500);
}
function hide_susunami_caption(){
  $('#susunami-caption').slideUp(500);
}

function show_foodie_caption(){
  $('#foodie-caption').slideDown(500);
}
function hide_foodie_caption(){
  $('#foodie-caption').slideUp(500);
}

function show_beautiflow_caption(){
  $('#beautiflow-caption').slideDown(500);
}
function hide_beautiflow_caption(){
  $('#beautiflow-caption').slideUp(500);
}



function show_slide4(){
 $('#slide4').css({
      height:   '100%'
    });
 $('.fourth-slide-content').fadeIn(1500);
}

function show_slide3(){
 $('#down-arrow-3').fadeIn(1000);

 $('#slide3').css({
      height:   '100%'
    });
 $('.third-slide-content').fadeIn(1500);

}

function show_slide2(){
 $('#down-arrow-2').fadeIn(1000);

 $('#slide2').css({
      height:   '100%'
    });
 $('.second-slide-content').fadeIn(1500);

}



function show_slide1(){
 $('#down-arrow-1').fadeIn(1000);

 $('#slide1').css({
      height:   '100%'
    });

 $('.first-slide-content').fadeIn(1500);

}

function show_stack(){
  $('#full-stack').fadeIn(700);
  $('#do-block').remove();
}







