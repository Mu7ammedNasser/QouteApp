var qoutelist = [
  `"Resentment is like drinking poison and waiting for your enemies to die."`,
  `"You miss 100% of the shots you don't take."`,
  `“Be yourself; everyone else is already taken.”`,
  `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
  `“A room without books is like a body without a soul.”`,
  `“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”`,
];
var qoutelistAouther = [
  `--Nelson Mandela`,
  `--Wayne Gretzy`,
  `― Oscar Wilde`,
  `― Albert Einstein`,
  `― Marcus Tullius Cicero`,
  `― J.K. Rowling, Harry Potter and the Goblet of Fire`,
];

var lastRandomNuber = -1;
function generateQuote() {
  var x = Math.floor(Math.random() * qoutelist.length);
  while (x === lastRandomNuber) {
    x = Math.floor(Math.random() * qoutelist.length);
  }
  lastRandomNuber = x;
  document.getElementById("quote").innerHTML = qoutelist[x];
  document.getElementById("quoteAouther").innerHTML = qoutelistAouther[x];
}
