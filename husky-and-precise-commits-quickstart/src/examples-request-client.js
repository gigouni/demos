// ---------------------------------------------------------------
// GraphQL requests
// Source: http://graphql.org/graphql-js/passing-arguments/
//
// How to:
// Run the following examples either in the in-browser IDE GraphiQL
// Either in the Dev Tools Console of your browser
// ---------------------------------------------------------------

// hello-world-server.js
// Example 1 [GraphiQL]
// --> {"data":{"hello":"Hello world!"}}
{
  hello;
}

// hello-world-server.js
// Example 2 [Dev Tools Console]
// --> data returned: Object { hello: "Hello world!" }
var xhr = new XMLHttpRequest();
xhr.responseType = "json";
xhr.open("POST", "/graphql");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Accept", "application/json");
xhr.onload = function() {
  console.log("data returned:", xhr.response);
};
xhr.send(JSON.stringify({ query: "{ hello }" }));

// dices-server.js
// Example 1 [Dev Tools Console]
var dice = 3;
var sides = 6;
var xhr = new XMLHttpRequest();
xhr.responseType = "json";
xhr.open("POST", "/graphql");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Accept", "application/json");
xhr.onload = function() {
  console.log("data returned:", xhr.response);
};
var query = `query RollDice($dice: Int!, $sides: Int) {
  rollDice(numDice: $dice, numSides: $sides)
}`;
xhr.send(
  JSON.stringify({
    query: query,
    variables: { dice: dice, sides: sides }
  })
);
