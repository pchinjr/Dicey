//globals
var currentFps = 12;
var animationSettings = {
    fps: currentFps,
    loop: false,
    autoplay: false,
    animations: {
        attack: [0, 1, 2, 3, 4, 5, 6, 0],
    },
    complete: function(){
        // this will be called when
        // there is no loop and the
        // animation finishes
        console.log('animation End');
    }
};

$('.animation').animateSprite(animationSettings);
// $('.animation').animateSprite('play');

$('.animation2').animateSprite(animationSettings);
// $('.animation').animateSprite('play');

var play = function(){
    $('.animation').animateSprite('play');
}


player1.dom.find(".clickAttack").on('click', function(){
    $('.animation').animateSprite('restart');
});

player2.dom.find(".clickAttack").on('click', function(){
    $('.animation2').animateSprite('restart');
});