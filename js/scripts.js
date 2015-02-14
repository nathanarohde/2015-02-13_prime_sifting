var primeShifting = function(input_number) {

  var prime = 2;
  var list = [];
  var counter = 0;

  for(var i = 2; i<= input_number; i++) {
    list.push(i);
  }

  list.forEach(function(){
    list.forEach(function(list_number) {
      var index = list.indexOf(list_number);
      if (((list_number/prime) !== 1) && (list_number%prime === 0)){
        list.splice(index,1);
      }
    });
    prime = list[(counter+= 1)];
  });
  return list;
};

$(document).ready(function(event) {
  $('form#number_input_form').submit(function(event) {
    var number_input = parseInt(($('input#number_input').val()));

    if (!(/^\d*\.?\d*$/.test(number_input))) {
      $('.output').text('Invalid Entry: String contains characters other than numbers.');
    } else {
      var array_output = primeShifting(number_input);
      $('.output').text(array_output);
    }

    $('#result').show();
    event.preventDefault();
  });
});
