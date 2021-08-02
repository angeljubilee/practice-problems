function getRangeReport(start, end) {
  var result = {};
  result.total = 0;
  result.odds = [];
  result.evens = [];
  result.range = [];

  for (var i = start; i <= end; i++) {
    result.total += i;
    if ((i % 2) === 0) {
      result.evens.push(i);
    } else {
      result.odds.push(i);
    }
    result.range.push(i);
  }
  result.average = result.total / (end - start + 1);
  return result;
}

function getPokemonCardsByName(name) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.pokemontcg.io/v2/cards?q=name:' + name);
  xhr.setRequestHeader('X-Api-Key', 'e29addcb-977c-449c-8e43-f97935b91eb6');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response);
  });
  xhr.send();
}

function getPokemonCardsBySeries() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.pokemontcg.io/v2/sets');
  xhr.setRequestHeader('X-Api-Key', 'e29addcb-977c-449c-8e43-f97935b91eb6');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response);
  });
  xhr.send();
}

function getPokemonCardDeck(series) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.pokemontcg.io/v2/cards?q=set.id:' + series);
  xhr.setRequestHeader('X-Api-Key', 'e29addcb-977c-449c-8e43-f97935b91eb6');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response);
  });
  xhr.send();
}

getPokemonCardsByName('snorlax');
getPokemonCardsBySeries();
getPokemonCardDeck('sm1');
