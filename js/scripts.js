
// FRONT END

$(document).ready(function() {
  $("form").submit(function(event) {
    var inputFrontBack = $("input:radio[name=front-back]:checked").val();
    var inputColor = $("input:radio[name=color]:checked").val();
    var inputVacation = $("input:radio[name=vacation]:checked").val();
    var inputMusic = $("input:radio[name=music]:checked").val();
    var inputRather= $("input:radio[name=rather]:checked").val();

// BACK END

    if (inputFrontBack === "front-end" && inputColor === "red" && inputVacation === "osaka" && inputMusic === "1995" && inputRather === "geology") {
      $('#ruby').show();
      $('#python, #c, #no-match').hide();
    } else if (inputFrontBack === "back-end" && inputColor === "blue" && inputVacation === "amsterdam" && inputMusic === "1990" && inputRather === "reptiles") {
      $('#python').show();
      $('#ruby, #c, #no-match').hide();
    } else if (inputFrontBack === "dont-care" && inputColor === "green" && inputVacation === "seattle" && inputMusic === "2000" && inputRather === "composer") {
      $('#c').show();
      $('#ruby, #python, #no-match').hide();
    } else {
      $('#no-match').show();
      $('#ruby, #python, #c').hide();
    }

  event.preventDefault();
  });
});
