// BACK END

var surveyScore = function(input1, input2, input3, input4, input5) {
  var score = input1 + input2 + input3 + input4 + input5;


  if () {
    $('#ruby').show();
    $('#python, #c, #no-match').hide();
  } else if () {
    $('#python').show();
    $('#ruby, #c, #no-match').hide();
  } else if () {
    $('#c').show();
    $('#ruby, #python, #no-match').hide();
  } else {
    $('#no-match').show();
    $('#ruby, #python, #c').hide();
  }

};
// FRONT END

$(document).ready(function() {
  $("form").submit(function(event) {
    var inputQuestion1 = $("input:radio[name=experience]:checked").val();
    var inputQuestion2 = $("input:radio[name=support]:checked").val();
    var inputQuestion3 = $("input:radio[name=topic]:checked").val();
    var inputQuestion4 = $("input:radio[name=balance]:checked").val();
    var inputQuestion5 = $("input:radio[name=openSource]:checked").val();

    surveyScore(inputQuestion1, inputQuestion2, inputQuestion3, inputQuestion4, inputQuestion5);

    event.preventDefault();

  });
});
