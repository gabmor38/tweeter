$(document).ready(function() {
  //EventLister for  input of text into text area
  
  $('submit').on('click', () => {
    const $textarea = $('#tweet-text').val();
    $('.input').append(`<p>${$textarea}</p>`);
  });
});