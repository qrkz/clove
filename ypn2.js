$(function(){

    var $draggable = $('#ypnMenu').draggabilly( {axis:'y'} );
    var draggie = $('#ypnMenu').data('draggabilly');
    var menu = 0;
    var drag = 1;
    var vpH = Math.round( $(window).innerHeight() );
    var UL = Math.round( vpH * 0.2 );
    var LL = Math.round( vpH * 0.8 );

    $draggable.on( 'pointerMove', function(eventMove, pointerMove, scrollDiff) {
        if(menu===0 && drag===1 && pointer.y > LL){
            $("#ypnFooter").css("background","#333");
        }
        if(menu===0 && drag===1 && pointer.y < LL ){
            $("#ypnFooter").css("background","yellowgreen");
        }
        if(menu===0 && drag===1 && pointer.y < LL ){
            $("#ypnFooter").css("background","yellowgreen");
        }
    });

    $draggable.on( 'dragEnd', function(eventEnd, pointerEnd) {

    }

});