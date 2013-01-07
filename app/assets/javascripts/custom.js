$(function(){

 $('#full-stack').hide();
 $('#down-arrow-1').hide();
 $('#down-arrow-2').hide();
 $('#down-arrow-3').hide();
 $('.first-slide-content').hide();
 $('.second-slide-content').hide();
 $('.third-slide-content').hide();
 $('.fourth-slide-content').hide();

 $('#result-btn').click(show_stack);

 $('#question-1').click(show_slide1);
 $('#question-2').click(show_slide2);
 $('#question-3').click(show_slide3);
 $('.view-project').click(show_slide4);
 // $('#screenshots').hover(show_caption, hide_caption);

});


// function show_caption(){
//  // alert('stop');
// }

// function hide_caption(){
//  // alert('shit');
// }


function show_slide4(){
 $('#slide4').css({
      height:   '100%'
    });
 $('.fourth-slide-content').fadeIn(1500);
 $('.view-project').fadeOut(700);
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







