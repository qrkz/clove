/* $(function () {
    ypnFull();
    setInterval('updateClock()', 1000);

    var $draggable = $('#ypnMenu').draggabilly({
        axis:'y'
    });
    var draggie = $('#ypnMenu').data('draggabilly');

    var vpH = Math.round( window.innerHeight );
    var dragFlag = 0;
    var navH = Math.round( $("#ypnFooter").outerHeight() );
    var navPos = vpH - navH;
    var dragLL = Math.round(vpH * 0.8);
    var dragUL = Math.round(vpH * 0.2);

    $(window).on('resize', function(){
        vpH = Math.round( window.innerHeight );
        navH = Math.round( $("#ypnFooter").outerHeight() );
        navPos = vpH - navH;
        if(dragFlag === 0){
            $draggable.draggabilly('setPosition', 0, navPos);
        }
        else if(dragFlag === 1){
            $draggable.draggabilly('setPosition', 0, 0);
        }
    });

    $draggable.on('dragEnd', function (event, pointer) {
        var dragPosY = Math.round(draggie.position.y);

        if (dragFlag === 0) {
            if (dragPosY > dragLL) {
                $draggable.draggabilly('setPosition', 0, navPos);
                dragFlag = 0;
                $("html").removeClass("noScroll");
                $("body").removeClass("noScroll");
                $("#ypnFooter").css({"box-shadow":"burlywood 0 0 0"});
            }
            if (dragPosY < dragLL) {
                $draggable.draggabilly('setPosition', 0, 0);
                dragFlag = 1;

                $draggable.draggabilly('disable');
                $("#ypnMenuCont").scrollTop( $("#ypnMenuCont > span").outerHeight() );
                $("html").addClass("noScroll");
                $("body").addClass("noScroll");

            }
        } else if (dragFlag === 1) {
            if (dragPosY > dragUL) {
                $draggable.draggabilly('setPosition', 0, navPos);
                dragFlag = 0;
                $("html").removeClass("noScroll");
                $("body").removeClass("noScroll");
                $("#ypnFooter").css({"box-shadow":"burlywood 0 0 0"});
            }
            if (dragPosY < dragUL) {
                $draggable.draggabilly('setPosition', 0, 0);
                dragFlag = 1;
                $("html").addClass("noScroll");
                $("body").addClass("noScroll");
            }
        }
    });
    $draggable.on( 'pointerMove', function( event, pointer, moveVector ) {
        var dragPosY = Math.round(draggie.position.y);

        if(dragFlag === 0)
        {
            if(dragPosY>dragLL){
                $("#ypnFooter > div").css({"box-shadow":"inset burlywood 0 2px"});
                $("#ypnFooter").css({"box-shadow":"burlywood 0 0 25px"});
            }
            if(dragPosY<dragLL){
                $("#ypnFooter > div").css({"box-shadow":"inset #ddd 0 2px"});
                $("#ypnFooter").css({"box-shadow":"#ddd 0 0 55px"});
            }
        }
        else if(dragFlag === 1)
        {
            console.log($("#ypnMenuCont").scrollTop());
            if(moveVector.y < 0 && $("#ypnMenuCont").scrollTop() === 0){
                $draggable.draggabilly('disable');
                console.log('Disabled: '+$("#ypnMenuCont").scrollTop());
            }
            if(moveVector.y > 0 && $("#ypnMenuCont").scrollTop() === 0){
                $draggable.draggabilly('enable');
                $("#ypnMenuCont").removeClass("scroll");
                $("#ypnMenuCont").addClass("noScroll");
            }
            if(dragPosY>dragUL){
                $("#ypnFooter > div").css({"box-shadow":"inset burlywood 0 2px"});
                $("#ypnFooter").css({"box-shadow":"burlywood 0 0 25px"});
            }
            if(dragPosY<dragUL){
                $("#ypnFooter > div").css({"box-shadow":"inset burlywood 0 2px"});
                $("#ypnFooter").css({"box-shadow":"#ddd 0 0 55px"});
            }
        }
    });

});*/
// external js: draggabilly.pkgd.js
$(document).ready(function() {

    ypnFull();
    setInterval('updateClock()', 1000);

    var $draggable = $(".draggable").draggabilly({ axis: "y" });
    var draggie = $(".draggable").data("draggabilly");
    var UL = $(window).innerHeight() * 0.2;
    var LL = $(window).innerHeight() * 0.8;
    var dragFlag = 0;
    var EnableFlag = 1;
    console.log("1", dragFlag, ", ", EnableFlag);

    $draggable.on("pointerMove", function(event, pointer, moveVector) {
      if (dragFlag === 0 && draggie.position.y < LL) {
        $(".draggable").css(
          "box-shadow",
          "inset red 2px 2px,inset red -2px -2px"
        );
        console.log("2", dragFlag, ", ", EnableFlag);
      }
      if (dragFlag === 1 && draggie.position.y > UL) {
        $(".draggable").css(
          "box-shadow",
          "inset green 2px 2px,inset green -2px -2px"
        );
        console.log("3", dragFlag, ", ", EnableFlag);
      }
      if($("#ypnMenuCont").scrollTop()===0 && EnableFlag===0 && moveVector.y>0){
        $draggable.draggabilly('enable');
        EnableFlag = 1;
      }
      if(moveVector.y > 0 && dragFlag === 1 && $("#ypnMenuCont").scrollTop() === 0 ){
        $draggable.draggabilly('enable');
        EnableFlag = 1;
        $("#ypnMenuCont").removeClass("scroll");
        $("#ypnMenuCont").addClass("noScroll");
        console.log("4", dragFlag, ", ", EnableFlag);
      }
      if(moveVector.y < 0 && dragFlag === 1 && $("#ypnMenuCont").scrollTop() === 0 ){
        $draggable.draggabilly('disable');
        $("#ypnMenuCont").addClass("scroll");
        $("#ypnMenuCont").removeClass("noScroll");
        console.log("5", dragFlag, ", ", EnableFlag);
      }
      console.log("Draggie Pos: ", draggie.position.y, "Pointer Vector: ", moveVector.y);
    });

    $draggable.on("dragEnd", function(event, pointer) {
      if (dragFlag === 0 && EnableFlag === 1 && draggie.position.y < LL) {
        dragFlag = 1;
        $("#ypnMenuCont").scrollTop(20);
        $("html").addClass("noScroll");
        $("body").addClass("noScroll");
        $draggable.draggabilly('disable');
        EnableFlag = 0;
        $("#ypnMenuCont").css("background", "red");
        $draggable.draggabilly("setPosition", 0, 0);
        console.log("7", dragFlag, ", ", EnableFlag);
      }
      if ( dragFlag === 0 && EnableFlag===1 && draggie.position.y > LL){
        $draggable.draggabilly("setPosition", 0, $(window).innerHeight() * 0.92);
        console.log("Set to Bottom", dragFlag, ", ", EnableFlag);
      }
      if (dragFlag === 1 && draggie.position.y > UL) {
        dragFlag = 0;
        EnableFlag = 1;
        $("html").addClass("scroll");
        $("body").addClass("scroll");
        $(".draggable").css("background", "green");
        $draggable.draggabilly("setPosition", 0, $(window).innerHeight() * 0.92);
        console.log("9");
      }
      if (dragFlag === 1 && draggie.position.y < UL) {
        $draggable.draggabilly("setPosition", 0, 0);
        console.log("10");
      }
      console.log("11");
    });
    console.log("12");
  });
   /*
  if(moveVector.y > 0){
    $draggable.draggabilly('enable');
  }
  if(moveVector.y < 0){
    $draggable.draggabilly('disable');
  }
  */


function updateClock() {
    var currentTime = new Date();
    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();
    var currentDay = currentTime.getDay();
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;/*
    var timeOfDay = (currentHours < 12) ? "AM" : "PM";
    currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;
    // Convert an hours component of "0" to "12"
    currentHours = (currentHours == 0) ? 12 : currentHours;*/
    var weekDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var currentTimeString = " // " + weekDay[currentDay] + " " + currentHours + ":" + currentMinutes/* + " " + timeOfDay*/;
    $("#ypnClock").html(currentTimeString);
}

function ypnFull(){
    var fullscreen = false;
    $("#ypnFull").click(function(){
        if (fullscreen)
            document.webkitExitFullscreen();
        else
            document.documentElement.webkitRequestFullscreen();
        fullscreen = !fullscreen;
    });
}