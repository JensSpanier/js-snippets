function getURLParameters(input) {
  var returnObject = {},
      parser = document.createElement('a'),
      query,
      queries,
      split;
  parser.href = input;
  query = parser.search;
  if (query.length > 0) {
    query = query.substr(1);
    queries = query.split('&');
    for (var i = 0, l = queries.length; i < l; i++) {
      split = queries[i].split('=');
      returnObject[split[0]] = decodeURIComponent(split[1]);
    }
  }
  return returnObject;
}
