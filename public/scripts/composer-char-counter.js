$(document).ready(function() {
  // --- our code goes here ---

  // add eventhandles in the textarea id=tweet-text
  $('#tweet-text').on('keydown', function() {
    maxChar = 140;
    let count = $('.counter');
    let charUsed = $(this).val().length;
      if (charUsed > maxChar) {
      //add color red to the overMaxChar 
        count.addClass('negativeNum');
      } else{
        count.removeClass('negativeNum');
      }
      count.text(maxChar - charUsed);
  
  });


});
