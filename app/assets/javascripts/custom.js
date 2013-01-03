$(function(){

 $('#full_stack').hide();
 $('#down-arrow-1').hide();
 $('.first-slide-content').hide();
 $('#result-btn').click(show_stack);


 $('#question-1').click(show_content);
});


function show_content(){
 $('#down-arrow-1').fadeIn(1000);

 $('#slide1').css({
      height:   '100%'
    });
 $('#question-panel-1').css({
     position: 'absolute',
     bottom:   '120px',
     left:     '45px'
    });
 // $('#question-1').css({
 //     padding-top: '300px'
 // });

 $('.first-slide-content').fadeIn(1500);

}



function show_stack(){
  $('#full_stack').fadeIn(1000);
}