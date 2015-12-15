//player a
var aDice = 1;
var aHealth = 30;
//player b
var bDice = 1;
var bHealth = 30;


//roll a single die
function rollDie(sides) {
   return(Math.floor(Math.random() * sides));
}

//roll multiple dice
function rollDice(number, sides) {
    var total = 1;
    while(number-- > 0) total += rollDie(sides);
    return total;
}

//cause damage to player b
function attackB(hit) {
    bHealth = bHealth - hit;
    $('#bHealth').html(bHealth);
    winner();
}

//cause damage to player a
function attackA(hit) {
    aHealth = aHealth - hit;
    $('#aHealth').html(aHealth);
    winner();
}

//attack selfA and add one die
function attackSelfA(hit) {
    aHealth = aHealth - hit;
    $('#aHealth').html(aHealth);
    aDice = aDice + 1;
    $('#aDice').html(aDice);
}

//attack selfB and add one die
function attackSelfB(hit) {
    bHealth = bHealth - hit;
    $('#bHealth').html(bHealth);
    bDice = bDice + 1;
    $('#bDice').html(bDice);
}

//check for winner
function winner() {
    if( parseInt( $('#aHealth').text(), 10) <= 0) {
        $('#winner').html('Player 2 Wins!');
    } else if ( parseInt($('#bHealth').text(), 10) <= 0) {
        $('#winner').html('Player 1 Wins!');
    } else {
      $('#winner').html('');       
    }
}

//Payer A Controls  
//roll dice and set attack numbers for player a
$("#aRoll").on('click', function() {
    $('#aCurrentRoll, #attackB, #selfDamageA').html((rollDice(aDice, 6)));
});
    
//attack player b
$('#aClickAttack').on('click', function() {
    attackB(parseInt($('#attackB').text(), 10));
});

//attack self A
$('#aClickSelfAttack').on('click', function() {
    attackSelfA(parseInt($('#selfDamageA').text(), 10));
});


//Player B Controls
//roll dice and set attack numbers for player B
$("#bRoll").on('click', function() {
    $('#bCurrentRoll, #attackA, #selfDamageB').html((rollDice(bDice, 6)));
});

//attack player A
$('#bClickAttack').on('click', function() {
    attackA(parseInt($('#attackA').text(), 10));
});

//attack self B
$('#bClickSelfAttack').on('click', function() {
    attackSelfB(parseInt($('#selfDamageB').text(), 10));
});
