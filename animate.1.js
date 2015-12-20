//globals
var currentFps = 12;
var animationSettings = {
    fps: currentFps,
    loop: true,
    autoplay: true,
    animations: {
        idle: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
        attack: [0, 1, 2, 3, 4, 5, 6, 0],
        run: [10, 11, 12, 13, 14, 15, 16, 17],
        die: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39]
    },
    complete: function(){
        // this will be called when
        // there is no loop and the
        // animation finishes
        
    }
};

$('.animation-new').animateSprite(animationSettings);
$('.animation2-new').animateSprite(animationSettings);

var stop = function(){
    $('.animation-new').animateSprite('stop');
};

var restart = function(){
    $('.animation-new').animateSprite('restart');
};

var resume = function(){
    $('.animation-new').animateSprite('resume');
};

var run = function(){
     $('.animation-new').animateSprite('play', 'run');
};

var attack = function(){
    $('.animation-new').animateSprite('play','attack');
};

var idle = function(){
    $('.animation-new').animateSprite('play','idle');
};

var die = function(){
    $('.animation-new').animateSprite('play','die');
};

$('.attack-new').on('click', function(){
    attack();
    setTimeout( idle, 600);
});

$('.run').on('click', function(){
    run();
    setTimeout( idle, 700);
});

$('.stop').on('click', stop);

$('.resume').on('click', resume);

$('.restart').on('click', restart);

$('.die').on('click',function(){
    die();
    setTimeout( stop, 900);
});

$('.idle').on('click', idle);

