$(function(){

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
 // $('.view-project').fadeOut(700);
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
  refresh_stack();
}







