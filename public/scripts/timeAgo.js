$(document).ready(function(data) {

  //select the first class instance of timeAgo
  const newDate = document.querySelector('.timeAgo');

  //declare a variable that will chage the format of the current date/time
  const time = timeago.format(new Date());

  //change the newdate with time variable
  newDate.innerHTML = time;

});

