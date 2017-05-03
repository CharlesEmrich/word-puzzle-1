//TODO:Current Bug- if nothing is entered, and form is submitted the box will still submit.


//fun stuff
function replaceVowels (input) {

var vowels = ["a","e","i","o","u"];

  var output = input; //allocate memory, pass it on to output
  for (var i = 0; i < input.length; i++) {
    for (var ii = 0; ii < vowels.length; ii++) { //really like the ii notation, indicating the iterating the inner for loop. If there was another inner loop it would be indicated by iii
      if (input[i] === vowels[ii]) { //if the element in the array matches a character from the array of values, are the same... do this
        output = output.replace(input[i]," Vim "); //yes(: replace any instance of a vowel is replaced with the word vim.
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
