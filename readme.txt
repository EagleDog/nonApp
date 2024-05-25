__nonApp__
monday api graphql examples
  in javascript

Runs Monday queries
from a static webpage.

No React.js server necessary.

1.
  Save your api_key
  in the 'box' folder
  as basicKey.txt.

2.
  Save your query in
  the 'gql' folder.
  e.g. 'gql/projectOverview.graphql'

3.
  Go into query.js and
  make the this part
  point to your gql file:

   body: JSON.stringify({
     'query' : 'query{boards (limit:1) {id name} }'

4.
  Open up index.html in your browser.
  e.g.: C://Windows/Users/.../nonApp/index.html 