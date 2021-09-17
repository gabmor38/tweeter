/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Fake data taken from initial-tweets.json

// const { json } = require("body-parser");

$(document).ready(()=> {


const renderTweets = function(data) {
// loops through tweets

  for (const tweet of data) {
    const $tweetsContainer = $('#tweets-container');
    // calls createTweetElement for each tweet
    const $tweet = createTweetElement(tweet);
    $tweetsContainer.prepend($tweet);
  }
}
// takes return value and appends it to the tweets container
const createTweetElement = function(data) {
  /* Your code for creating the tweet element */
// ...
const time = timeago.format(`${data.created_at}`)

const  $tweet = `
<article class="tweet">
        <header>
          <div>
          <img src=${data.user.avatars} width="40" ;>
          <p class="moveLeft name">${data.user.name}</p>
          </div>
          <p class="lightgrayHandle">${data.user.handle}</p>
        </header>
        <div class="input">${data.content.text}</div>
        <footer>
          <p class="timeAgo">${time}</p>
          <p>
            <i class="fas fa-solid fa-flag"></i>
            <i class="fas fa-solid fa-retweet"></i>
            <i class="fas fa-solid fa-heart"></i>
          </p>
        </footer>
      </article>
`;
return $tweet;
}

// FETCH THE TWEETS//

  const loadTweets = function() {

    $.ajax('/tweets', {method: 'GET', datatype: "json"})
    .then(function(res) {
      renderTweets(res);

    });
  };

//stuff that runs automatically  
loadTweets()

$('#tweet-form').submit(function(event) {
    event.preventDefault();
    
    const $form = $('#tweet-form');
    const serializedData = $form.serialize();
     console.log(serializedData)
    // form validation//
    if(serializedData.length <= 5) {
      alert("Enter a tweet");
      return
    } else if(($('.counter').val() <= 0)){
      alert("Your tweet is too long");
      return
    }
    $.post( '/tweets', serializedData).then((res) => {
      //console.log(res);
      loadTweets();
    });
    
  });

});