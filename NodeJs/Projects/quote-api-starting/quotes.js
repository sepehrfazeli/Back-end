const express = require("express");
const { quotes } = require("./data");
const { getRandomElement } = require("./utils");
const quotesRouter = express.Router();

quotesRouter.get("/random", (req, res, next) => {
  randomQuote = getRandomElement(quotes);
  res.status(200).send({ quote: randomQuote["quote"] });
});

quotesRouter.get("/", (req, res, next) => {
  if (!req.query["person"]) {
    res.status(200).send({ quotes: quotes.map((x) => x["quote"]) });
  } else {
    person = req.query["person"];
    personQuotes = quotes.filter((x) => x["person"] === person);
    quotesCount = personQuotes.length
    quotesCount > 1
      ? res.status(200).send({ quotes: personQuotes.map(x => x["quote"]) })
      : quotesCount > 0
      ? res.status(200).send({ quote: personQuotes[0]["quote"] })
      : res.status(404).send("Not found");
  }
});

quotesRouter.post("/", (req, res, next) => {
  valid = req.query["person"] && req.query["quote"];
  if (!valid) {
    res.status(400).send('inValid Request');
  } else {
    newQuote = req.query;
    quotes.push(newQuote);
    res.status(200).send(newQuote);
  }
});

module.exports = quotesRouter;
