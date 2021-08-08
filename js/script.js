/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * Creatong `quotes` array
 ***/
var quotes = [
  {
    quote:
      "I’ve never scored a goal in my life without getting a pass from someone else.",
    source: "Abby Wambach",
    citation: "USA SOCCER",
  },
  {
    quote:
      "All of us failed to match our dreams of perfection. So I rate us on the basis of our splendid failure to do the impossible.",
    source: "William Faulkner",
  },
  {
    quote: "Force is all-conquering, but its victories are short-lived.",
    source: "Abraham Lincoln",
    citation:
      "As quoted in Excellent Quotations for Home and School (1888) by Julia B. Hoitt, p. 97",
    year: 2010,
  },
  {
    quote:
      "Gardens and flowers have a way of bringing people together, drawing them from their homes.",
    source: "Clare Ansberry",
    citation: "The Women of Troy Hill",
    year: 2015,
  },
  {
    quote:
      "I didn't mind getting old when I was young. It's the being old now that's getting to me.",
    source: "John Scalzi",
  },
];

/***
 * `getRandomQuote` function returns a random number the size of array
 ***/
function getRandomQuote(quotesArray) {
  var random = Math.floor(Math.random() * quotesArray.length);
  return quotesArray[random];
}

/***
 * `printQuote` function calls the quotes array
 * returns the quote, source, citation, and year if they exist
 ***/

function printQuote() {
  var object = getRandomQuote(quotes);
  var html = "";
  html += `<p class="quote">${object.quote}</p>
       <p class="source">${object.source}`;

  if (object.citation) {
    html += `<span class="citation">${object.citation}</span>`;
  }
  if (object.year) {
    html += `<span class="year">${object.year}</span>`;
  }
  html += `</p>`;
  return (document.getElementById("quote-box").innerHTML = html);
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
