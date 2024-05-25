//gqlQuery.js

fetch ("https://api.monday.com/v2", {
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
    'Authorization' : 'YOUR_API_KEY_HERE',
    'API-Version' : '2023-04'
   },
   body: JSON.stringify({
     'query' : 'query{boards (limit:1) {id name} }'
   })
  });

