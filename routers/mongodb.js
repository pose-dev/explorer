const express = require('express');
const router = express.Router();
const url = require('url');
const apiMongodbPlugin = require('@eosio-toppings/api-mongodb-plugin').default;
const connectMongo = require('@eosio-toppings/api-mongodb-plugin').connectMongo;

const dotenv = require('dotenv');
dotenv.config({path:'./init_config.file'});

let connected = false;

const connect = () => new Promise((resolve, reject) => {
  if (connected) return resolve(connected)
  connectMongo(process.env.MONGODB_DEFAULT_ENDPOINT)
    .then(()=>resolve(connected = true))
    .catch(()=>reject(connected = false))
})

router.get("*", (req, res) => {
  let { pathname, query } = url.parse(req.url, true);
  let endpoint = pathname.substring(1); // remove leading '/'

  if ( endpoint === "set_endpoint"){
    res.status(500);
    res.json({}).end();
    // let { path } = query;
    // connectMongo(path)
    //  .then(()=>{
       
    //     res.setHeader('Cache-Control', 'no-cache');
    //     res.json({response: `Mongodb connection changed to ${path}.`});
    //   })
    //   .catch(err=>{
    //     console.error(err);
    //     res.status(500);
    //     res.json(err).end();
    //   });
  }else{
    var fn = () => {
      apiMongodbPlugin[endpoint](query)
        .then(doc=>{
          res.setHeader('Cache-Control', 'no-cache');
          res.json(doc);
        })
        .catch(err=>{
          console.error(err);
          res.status(500);
          connected =  false;
          res.json(err).end();
        });
    }
  }
  connect().then(fn, fn)
});

module.exports = router;
