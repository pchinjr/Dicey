var player1 = { dom: $('.player-1'), health:95, dice: 1 };
var player2 = { dom: $('.player-2'), health:100, dice: 1 };

//roll the player's dice and show results of individual dice on the screen
function dieroll(player) { 
  var result = []; //empty array to hold the results of the individual die rolls
  var dice = []; //empty array to hold the unicode dice characters
  for (var i = 0; i < player.dice ; i++){
    result.push( Math.floor(Math.random() * 6));
  } //rolls the dice
  for (var d = 0; d < result.length; d++){
    dice.push("&#x268" + result[d] + ";");
  } //creates the unicode dice characters
  player.dom.find('.showDice').html(dice);  //displays the dice 
  var sum = result.reduce (function(a,b) {  
    return a + b;
  }); // adds the dice together   
  player.dom.find('.currentRoll, .attack, .takeDamage').html( sum + (1*dice.length) ); // I had to add 1*the number of dice because the unicode starts at 0 to represent the number 1.
}

//attack other player
function attack(player, hit) {
    player.health = player.health - hit;
    player.dom.find('.health').html(player.health);
    player.dom.find('.healthBar').css('width', player.health+'%');
    checkWinner();
}

//take damage
function takeDamage(player, hit) {
    player.health = player.health - hit;
    player.dom.find('.health').html(player.health);
    player.dom.find('.healthBar').css('width', player.health+'%');
    player.dice = player.dice + 1;
    player.dom.find('.dice').html(player.dice);
}

//check for winner
function checkWinner() {
    if ( parseInt( player1.dom.find('.health').text(), 10) <= 0) {
        $('.animation-blue').animateSprite('play','die');
        setTimeout( stopBlue, 900);
        $('#winner').html('Player 2 Wins!' + '<br/><br>' + '<a href="http://pchinjr.github.io/dicey/"><button class="btn btn-default btn-lg"> Play Again?</button></a>');
    } else if ( parseInt( player2.dom.find('.health').text(), 10) <= 0) {
        $('.animation-red').animateSprite('play','die');
        setTimeout( stopRed, 900);
        $('#winner').html('Player 1 Wins!' + '<br/><br>' + '<a href="http://pchinjr.github.io/dicey/"><button class="btn btn-default btn-lg"> Play Again?</button></a>');
    } else {
      $('#winner').html('');       
    }
}

function endTurn(player) {
    if(player === 'player1') {
        player1.dom.find('.roll').prop("disabled", true);
        player2.dom.find('.roll').prop("disabled", false);
        player1.dom.find('.clickAttack, .clickTakeDamage, .roll').toggleClass('hide');
    } else {
        player2.dom.find('.roll').prop("disabled", true);
        player1.dom.find('.roll').prop("disabled", false);
        player2.dom.find('.clickAttack, .clickTakeDamage, .roll').toggleClass('hide');
    }
}

//players roll
player1.dom.find(".roll").on( 'click', function() {
    dieroll(player1);
    player1.dom.find('.roll').prop("disabled", true);
    player1.dom.find('.clickAttack, .clickTakeDamage, .roll').toggleClass('hide');
});

player2.dom.find(".roll").on( 'click', function() {
    dieroll(player2);
    player2.dom.find('.roll').prop("disabled", true);
    player2.dom.find('.clickAttack, .clickTakeDamage, .roll').toggleClass('hide');
});

//players attack
player1.dom.find(".clickAttack").on( 'click', function() {
   attack( player2, parseInt( player1.dom.find('.attack').text(), 10) );
   endTurn('player1');
});

player2.dom.find(".clickAttack").on( 'click', function() {
   attack( player1, parseInt( player2.dom.find('.attack').text(), 10) );
   endTurn('player2');
});

//players take damage
player1.dom.find(".clickTakeDamage").on( 'click', function() {
    takeDamage( player1, parseInt( player1.dom.find('.takeDamage').text(), 10) );
    endTurn('player1');
});

player2.dom.find(".clickTakeDamage").on( 'click', function() {
    takeDamage( player2, parseInt( player2.dom.find('.takeDamage').text(), 10) );
    endTurn('player2');
});