var vowels = ["a","e","i","o","u"];

function replaceVowels (input) {
  var output = input;
  for (var i = 0; i < input.length; i++) {
    for (var ii = 0; ii < vowels.length; ii++) {
      if (input[i] === vowels[ii]) {
        output = output.replace(input[i],"-");
      }
    }
  }
  return output;
}

$(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var puzzleString = replaceVowels($("textarea[name='input-zone']").val());

    $("#output").text(puzzleString);
    $("#input-form").hide();
  });
});
