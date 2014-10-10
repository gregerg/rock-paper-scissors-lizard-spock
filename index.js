var rpsls = function(choice, choice2) {
  choice = choice.toLowerCase();

  var game = {
    'rock': {
      'scissors' : 'crushes',
      'lizard' : 'crushes',
    },
    'paper': {
      'rock' : 'covers',
      'spock' : 'disproves'
    },
    'scissors': {
      'paper' : 'cuts',
      'lizard' : 'decapitates'
    },
    'lizard': {
      'spock' : 'poisons',
      'paper' : 'eats'
    },
    'spock': {
      'scissors' : 'smashes',
      'rock' : 'vaporizes'
    }
  };
  if (!game.hasOwnProperty(choice)) {
    return 'player1\'s choice is invalid';
  }
  if (!choice2) {
    var choices = ['rock','paper','scissors','lizard','spock'];
    var rand = Math.floor(Math.random()*5);
    choice2 = choices[rand];
  }
  if (!game.hasOwnProperty(choice2)) {
    return 'player2\'s choice is invalid';
  }
  var output = '';
  if (game[choice].hasOwnProperty(choice2)) {
    output += 'Player 1 Wins! ';
    output += choice + ' ' + game[choice][choice2] + ' ' + choice2;
  } else if (game[choice2].hasOwnProperty(choice)) {
    output += 'Player 2 Wins! ';
    output += choice2 + ' ' + game[choice2][choice] + ' ' + choice;
  } else {
    output += 'Tie game! Both players picked ' + choice;
  }

  return output;
};

module.exports = rpsls;
