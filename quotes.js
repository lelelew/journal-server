var quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    source: "Oscar Wilde"
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    source: "Walt Disney"
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    source: "Robert Frost"
  },
  {
    quote:
      "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
    source: "Winston Churchill"
  },
  {
    quote: "Don't let yesterday take up too much of today.",
    source: "Will Rogers"
  },
  {
    quote:
      "You learn more from failure than from success. Don't let it stop you. Failure builds character.",
    source: "Unknown"
  },
  {
    quote:
      "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you.",
    source: "Steve Jobs"
  },
  {
    quote:
      "People who are crazy enough to think they can change the world, are the ones who do.",
    source: "Rob Siltanen"
  },
  {
    quote:
      "Failure will never overtake me if my determination to succeed is strong enough.",
    source: "Og Mandino"
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    source: "Thomas A. Edison"
  }
];

module.exports.newQuote = function newQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
};
