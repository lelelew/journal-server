import * as functions from "firebase-functions";
import { newQuote } from "../../src/quotes";
import { Quote } from "../../src/types";

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const quote = functions.https.onRequest((request, response) => {
  const quote: Quote = newQuote();
  response.json(quote);
});
