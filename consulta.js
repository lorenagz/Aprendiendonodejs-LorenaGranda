var axios = require('axios');
var data = JSON.stringify({
    "collection": "Products",
    "database": "FakeStore",
    "dataSource": "ADSI2364482",
    "projection": {
        "title": 1,"price":1
    }
});
            
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-qxmjq/endpoint/data/v1/action/findOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'hepquuup1N7yNitIMJubgAwPlBiRNBz9ST9ptPfnl0JxbtIUgOVABdH18BcSfMUy',
    },
    data: data
};
            
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
