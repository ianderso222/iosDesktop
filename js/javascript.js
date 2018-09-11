//large screen window draggable
if ( $(window).width() > 1199){
$(function() {
$( ".window" ).draggable({
    containment: ".wrapper",
    handle: ".windowBar",
    scroll: false, stack: ".window",

    distance: 0
})
});

}


//css changes
z = 0;
$('.overviewClose').click(function(){
$('.windowOverview').css("display", "none")
});
//-minimize overview click - and add folder to dock
$('.overviewMin').click(function(){
$('.windowOverview').css("display", "none")
$('.minFolderOverview').css("display", "inline-block")
$('#dock').css("min-width", "")
//$('.overviewDesc').css("display", "block")
});
//- open on overiew doubleclick and remove folder from dock
$('#iconOverview').click(function(){
$('.windowOverview').css("display", "block")
$('.minFolderOverview').css("display", "none")

});

$('#iconOverview').click(function(){
$('.windowOverview').css({
"display": "block",
//"position": "absolute",
//"top": "10%",
//"left": "40px",
"z-index": ++z
})

$('.minFolderOverview').css("display", "none")
});
//- open window from dock
$('.minFolderOverview').click(function(){
$('.windowOverview').css({
    "display": "block",
    "z-index": ++z
})
$('.minFolderOverview').css("display", "none")
});


//About Window
//- close window on click x
$('.aboutClose').click(function(){
$('.windowAbout').css("display", "none")
});
//-minimize overview click - and add folder to dock
$('.aboutMin').click(function(){
$('.windowAbout').css("display", "none")
$('.minFolderAbout').css("display", "inline-block")
$('#dock').css("min-width", "")
//$('.aboutDesc').css("display", "block")
});
//- open on overiew doubleclick and remove folder from dock
$('#iconAbout').click(function(){
$('.windowAbout').css("display", "block")
$('.minFolderAbout').css("display", "none")

});
$('#iconAbout').click(function(){
$('.windowAbout').css({
"display": "block",
//"position": "absolute",
//"top": "15%",
//"left": "60px",
"z-index": ++z

})
$('.minFolderAbout').css("display", "none")
});
//- open window from dock
$('.minFolderAbout').click(function(){
$('.windowAbout').css({
    "display": "block",
    "z-index": ++z
})
$('.minFolderAbout').css("display", "none")
});

//Welcome Window
//- close window on click x
$('.welcomeClose').click(function(){
$('.windowWelcome').css("display", "none")
});
//-minimize overview click - and add folder to dock
$('.welcomeMin').click(function(){
$('.windowWelcome').css("display", "none")
$('.minFolderWelcome').css("display", "inline-block")
$('#dock').css("min-width", "")
//$('.aboutDesc').css("display", "block")
});
//- open on overiew doubleclick and remove folder from dock
$('#iconWelcome').click(function(){
$('.windowWelcome').css("display", "block")
$('.minFolderWelcome').css("display", "none")

});
$('#iconWelcome').click(function(){
$('.windowWelcome').css({
"display": "block",
"position": "absolute",
"z-index": ++z

})
$('.minFolderWelcome').css("display", "none")
});
//- open window from dock
$('.minFolderWelcome').click(function(){
$('.windowWelcome').css({
    "display": "block",
    "z-index": ++z
})
$('.minFolderWelcome').css("display", "none")
});

//Welcome Window
//- close window on click x
$('.portfolioClose').click(function(){
$('.windowPortfolio').css("display", "none")
});
//-minimize overview click - and add folder to dock
$('.portfolioMin').click(function(){
$('.windowPortfolio').css("display", "none")
$('.minFolderPortfolio').css("display", "inline-block")
$('#dock').css("min-width", "")
//$('.aboutDesc').css("display", "block")
});
//- open on overiew doubleclick and remove folder from dock
$('#iconPortfolio').click(function(){
$('.windowPortfolio').css("display", "block")
$('.minFolderPortfolio').css("display", "none")

});
$('#iconPortfolio').click(function(){
$('.windowPortfolio').css({
"display": "block",
"position": "absolute",
"z-index": ++z,
//"position": "absolute",
//"top": "20%",
//"left": "80px",

})
$('.minFolderPortfolio').css("display", "none")
});
//- open window from dock
$('.minFolderPortfolio').click(function(){
$('.windowPortfolio').css({
    "display": "block",
    "z-index": ++z
})
$('.minFolderPortfolio').css("display", "none")
});
///////////////////////////////
//Paint Window
//- close window on click x
$('#paintClose').click(function(){
$('.windowPaint').css("display", "none")
});
//-minimize overview click - and add folder to dock
$('#paintMin').click(function(){
$('.windowPaint').css("display", "none")
$('.minFolderPaint').css("display", "inline-block")
$('#dock').css("min-width", "")
//$('.aboutDesc').css("display", "block")
});
//- open on overiew doubleclick and remove folder from dock
$('#iconPaint').click(function(){
$('.windowPaint').css("display", "block")
$('.minFolderPaint').css("display", "none")

});
$('#iconPaint').click(function(){
$('.windowPaint').css({
"display": "block",
"position": "absolute",
"z-index": ++z,
//"position": "absolute",
//"top": "20%",
//"left": "80px",

})
$('.minFolderPaint').css("display", "none")
});
//- open window from dock
$('.minFolderPaint').click(function(){
$('.windowPaint').css({
    "display": "block",
    "z-index": ++z
})
$('.minFolderPaint').css("display", "none")
});



/////////////////////////////////////////////////////////////////////////////////
//- Settings Window
//- close window on click x
$('.settingsClose').click(function(){
$('.windowSettings').css("display", "none")
});
//-minimize settings click
$('.settingsMin').click(function(){
$('.windowSettings').css("display", "none")

});
//- open settings window from dock
$('#dockSettings').click(function(){
$('.windowSettings').css({
"display": "block",
"position": "absolute",
"z-index": ++z
})
});
//Email Window
//- close window on click x
$('.emailClose').click(function(){
$('.windowEmail').css("display", "none")
});
//-minimize email click
$('.emailMin').click(function(){
$('.windowEmail').css("display", "none")
});
// open email window from dock
$('#dockEmail').click(function(){
$('.windowEmail').css({
"display": "block",
//"position": "absolute",
//"top": "25%",
//"left": "100px",
"z-index": ++z
})
});

$('.galleryClose, .galleryMin').click(function(){
$('.windowGallery').css("display", "none")
});

//portfolio display
$('#itemC3').click(function(){
$('.windowGallery, #c3').css({
"display": "block",
"position": "absolute",
"z-index": ++z
})
$("#forest, #heir, #taco, #news, #wholeCar, #weather").css('display', 'none')
});

$('#itemForest').click(function(){
$('.windowGallery, #forest').css({
"display": "block",
"position": "absolute",
"z-index": ++z
})
$("#c3, #heir, #taco, #news, #wholeCar, #weather ").css('display', 'none')
});

$('#itemHeir').click(function(){
$('.windowGallery, #heir').css({
"display": "block",
"position": "absolute",
"z-index": ++z
})
$("#c3, #forest, #taco, #news, #wholeCar, #weather ").css('display', 'none')
});

$('#itemKynews').click(function(){
$('.windowGallery, #news').css({
"display": "block",
"position": "absolute",
"z-index": ++z
})
$("#c3, #forest, #heir, #taco, #wholeCar, #wholeCar, #weather ").css('display', 'none')
});

$('#itemTaco').click(function(){
$('.windowGallery, #taco').css({
"display": "block",
"position": "absolute",
"z-index": ++z
})
$("#c3, #forest, #heir, #news, #wholeCar, #weather ").css('display', 'none')
});



$('#itemWholeCar').click(function(){
$('.windowGallery, #wholeCar').css({
"display": "block",
"position": "absolute",
"z-index": ++z
})
$("#c3, #forest, #heir, #taco, #news, #weather ").css('display', 'none')
});

$('#itemWeather').click(function(){
$('.windowGallery, #weather').css({
"display": "block",
"position": "absolute",
"z-index": ++z
})
$("#c3, #forest, #heir, #taco, #wholeCar, #news ").css('display', 'none')
});

//settings hide and show

    /*$('.settingsButton').click(function(){
        $('.backgroundChange').css('display', 'inline-block')
        $('.visibilityChange').css('display', 'none')
    });
    $('.visibilityButton').click(function(){
        $('.visibilityChange').css('display', 'inline-block')
        $('.backgroundChange').css('display', 'none')
    });*/

// Transparency change
$('.transOn').click(function(){
    $('#topNav').css('background-color', '')
    $('#dock').css('background-color', '')
});

$('.transOff').click(function(){
    $('#topNav').css('background-color', 'rgba(245,245,245,1)')
    $('#dock').css('background-color', 'rgba(151,151,151,1)')
});






//Set background from canvas
    $('#save').click(function() {

        var dataURL = canvas.toDataURL('image/png, 1.0');

        var img = document.getElementsByClassName('paint_wall');

        img.src = dataURL;

        $('.paint_wall').css({
            "background-image": "url('" + img.src + "')",
            "background-size": "cover",
            "display": "block"

        });

        $('#remove').css({
            "display": "block"
        });

    });


$('#remove').click(function() {
    $('.paint_wall').css("display", "none");
    $('#remove').css({
        "display": "none"
    });
});







//background select script

$('.background2').click(function() {
$('.wrapper').css('background-image', 'url(images/wallpaper2.jpg)');
});
$('.background3').click(function() {
$('.wrapper').css('background-image', 'url(images/wallpaper3.jpg)');
});
$('.background4').click(function() {
$('.wrapper').css('background-image', 'url(images/wallpaper4.jpg)');
});
$('.background5').click(function() {
$('.wrapper').css('background-image', 'url(images/wallpaper5.jpg)');
});



    //
    // //typed.js
    //     $(function(){
    //           $(".loadText").typed({
    //             strings: ["ianOS developed by Ian Anderson <br> Built on <br> HTML - Pug <br> CSS - Sass <br> Javascript <br> Version 1.0 - March, 7 2016 <br> loading 100%"],
    //              cursorChar: "_",
    //             typeSpeed: -75
    //           })
    //
    //       });
    //       //loader fade in/out
    //       setTimeout(function(){
    //        $('.loaderWrapper').remove();
    //    }, 5000);
    //
    //     $(".wrapper").hide(0).delay(5000).fadeIn(1500)



//moment.js
  var datetime = null,
          date = null;

  var update = function () {
  date = moment(new Date())
  datetime.html(date.format('dddd h:mm A'));
  };

  $(document).ready(function(){
  datetime = $('#time')
  update();
  setInterval(update, 1000);
  });
