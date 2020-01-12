$(function () {
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
    $draggable.on( 'dragMove', function( event, pointer ) {
        var dragPosY = Math.round(draggie.position.y);
        if(dragFlag === 0)
        {
            if(dragPosY>dragLL){
                $("#ypnFooter").css({"box-shadow":"inset burlywood 0 2px"});
                $("#ypnFooter").css({"box-shadow":"burlywood 0 0 25px"});
            }
            if(dragPosY<dragLL){
                $("#ypnFooter").css({"box-shadow":"inset #0ff 0 2px"});
                $("#ypnFooter").css({"box-shadow":"#cf0 0 0 55px"});
            }
        }
        else if(dragFlag === 1)
        {
            if(dragPosY>dragUL){
                $("#ypnFooter").css({"box-shadow":"inset burlywood 0 2px"});
                $("#ypnFooter").css({"box-shadow":"burlywood 0 0 25px"});
            }
            if(dragPosY<dragUL){
                $("#ypnFooter").css({"box-shadow":"inset #0ff 0 2px"});
                $("#ypnFooter").css({"box-shadow":"#cf0 0 0 55px"});
            }
        }
    });

});

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