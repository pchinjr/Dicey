//globals
var currentFps = 12;
var animationSettings = {
    fps: currentFps,
    loop: true,
    autoplay: true,
    animations: {
        idle: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
        swingAttack: [0, 1, 2, 3, 4, 5, 6, 0],
        run: [10, 11, 12, 13, 14, 15, 16, 17],
        die: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39]
    },
    complete: function(){
        // this will be called when
        // there is no loop and the
        // animation finishes
        console.log('animation End');
    }
};

$('.animation-blue').animateSprite(animationSettings);
$('.animation-red').animateSprite(animationSettings);

var idleBlue = function(player){
    $('.animation-blue').animateSprite('play','idle');
};

var idleRed = function(player){
    $('.animation-red').animateSprite('play','idle');
};

var stopBlue = function(){
    $('.animation-blue').animateSprite('stop');
};

var stopRed = function(){
    $('.animation-red').animateSprite('stop');
};


//animate player 1 swing and return to idle
player1.dom.find('.clickAttack').on('click', function(){
    $('.animation-blue').animateSprite('play','swingAttack');
    setTimeout( idleBlue, 600);
});

//animate player 1 run away and return to idle
player1.dom.find('.clickTakeDamage').on('click', function(){
    $('.animation-blue').animateSprite('play','run');
    setTimeout( idleBlue, 600);
});

//animate player 2 swing and return to idle
player2.dom.find('.clickAttack').on('click', function(){
    $('.animation-red').animateSprite('play','swingAttack');
    setTimeout( idleRed, 600);
});

//animate player 2 run away and return to idle
player2.dom.find('.clickTakeDamage').on('click', function(){
    $('.animation-red').animateSprite('play','run');
    setTimeout( idleRed, 600);
});
