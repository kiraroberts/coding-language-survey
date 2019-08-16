// BACK END

var surveyScore = function(input1, input2, input3, input4, input5) {
  var score = input1 + input2 + input3 + input4 + input5;
  return score;
};

// FRONT END

$(document).ready(function() {
  $("form").submit(function(event) {
    var inputQuestion1 = parseInt($("input:radio[name=experience]:checked").val());
    var inputQuestion2 = parseInt($("input:radio[name=support]:checked").val());
    var inputQuestion3 = parseInt($("input:radio[name=topic]:checked").val());
    var inputQuestion4 = parseInt($("input:radio[name=balance]:checked").val());
    var inputQuestion5 = parseInt($("input:radio[name=openSource]:checked").val());

    var output = surveyScore(inputQuestion1, inputQuestion2, inputQuestion3, inputQuestion4, inputQuestion5);
    console.log(output);
    if (output <= 5) {
      $('#python').show();
      $('#ruby, #c').hide();
    } else if (output <= 6) {
      $('#ruby').show();
      $('#python, #c').hide();
    } else (output <= 11) {
      $('#c').show();
      $('#ruby, #python').hide();
    }

    event.preventDefault();

  });
});
