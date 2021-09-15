/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Fake data taken from initial-tweets.json

$(document).ready(()=> {
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const renderTweets = function(data) {
// loops through tweets

  for (const tweet of data) {
    const $tweetsContainer = $('#tweets-container');
    // calls createTweetElement for each tweet
    const $tweet = createTweetElement(tweet);
    $tweetsContainer.append($tweet);
  }



// takes return value and appends it to the tweets container
}

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

renderTweets(data);

// $(document).ready(function() {
// console.log("it is listening")
// //EventLister for  input of text into text area

// $('submit').on('click', () => {
//   const $input = $('#tweet-text').val();
//   $('.input').append(`<p>${$input}</p>`)
  

// })

});