var quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    source: "Oscar Wilde"
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    source: "Albert Einstein"
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    source: "Robert Frost"
  },
  {
    quote:
      "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    source: "J.K. Rowling"
  },
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    source: "Mark Twain"
  },
  {
    quote:
      "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    source: "Maya Angelou"
  },
  {
    quote:
      "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
    source: "Martin Luther King Jr."
  },
  {
    quote:
      "The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.",
    source: "Jane Austen"
  },
  {
    quote:
      "It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.",
    source: "Maurice Switzer"
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
