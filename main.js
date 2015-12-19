var player1 = { dom: $('.player-1'), health:100, dice: 1};
var player2 = { dom: $('.player-2'), health:100, dice: 1 };

//roll a single die
function rollDie(sides) {
   return( Math.floor (Math.random() * sides));
}

//roll multiple dice
function rollDice(number, sides) {
    var total = 1;
    while(number-- > 0) total += rollDie(sides);
    return total;
}

//roll the player's dice and show them on the screen
function dieroll(player) { 
  var result = [];  
  var dice = [];
  for (var i = 0; i < player.dice ; i++){
    result.push( Math.floor(Math.random() * 6));
  }
  for (var d = 0; d < result.length; d++){
    dice.push("&#x268" + result[d] + ";");
  }
  player.dom.find('.showDice').html(dice);  
  var sum = result.reduce (function(a,b) {
    return a + b;
  });  
  player.dom.find('.currentRoll, .attack, .takeDamage').html( sum + (1*dice.length) );
}


//gameplay roll
function roll(player) {
    player.dom.find('.currentRoll, .attack, .takeDamage').html( rollDice(player.dice, 6));
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
        $('#winner').html('Player 2 Wins!');
    } else if ( parseInt( player2.dom.find('.health').text(), 10) <= 0) {
        $('#winner').html('Player 1 Wins!');
    } else {
      $('#winner').html('');       
    }
}

function endTurn(player) {
    
    if(player === 'player1') {
        player1.dom.find('.roll, .clickAttack, .clickTakeDamage').prop("disabled", true);
        player2.dom.find('.roll, .clickAttack, .clickTakeDamage').prop("disabled", false);
        player1.dom.find('.currentRoll, .attack, .takeDamage').html("_");
    } else {
        player2.dom.find('.roll, .clickAttack, .clickTakeDamage').prop("disabled", true);
        player1.dom.find('.roll, .clickAttack, .clickTakeDamage').prop("disabled", false);
        player2.dom.find('.currentRoll, .attack, .takeDamage').html("_");
    }
}

//players roll
player1.dom.find(".roll").on( 'click', function() {
    dieroll(player1);
    player1.dom.find('.roll').prop("disabled", true);
});

player2.dom.find(".roll").on( 'click', function() {
    dieroll(player2);
    player2.dom.find('.roll').prop("disabled", true);
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


//take damage
player1.dom.find(".clickTakeDamage").on( 'click', function() {
    takeDamage( player1, parseInt( player1.dom.find('.takeDamage').text(), 10) );
    endTurn('player1');
});

player2.dom.find(".clickTakeDamage").on( 'click', function() {
    takeDamage( player2, parseInt( player2.dom.find('.takeDamage').text(), 10) );
    endTurn('player2');
});




$(".newroll").on( 'click', function() {
    dieroll(player1);
    player1.dom.find('.roll').prop("disabled", true);
});