$(document).ready(function() {
  $("form#numToWords").submit (function(event) {
    event.preventDefault();
    var words = $("input#numToWords").val();
    var result = numToWords(words);
    $("#result").text(result);

   });
});


if (words ===0) {
 return "Beep"
}else if (words ===1) {
  return "Boop"
}else if (words = /3) {
  return "I'm sorry, Dave. I'm afraid I can't do that."
});
});
});
