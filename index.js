const express = require('express')
const cors = require('cors');
const app = express()
const port = process.env.PORT || 80
app.use(cors());
var bodyParser = require('body-parser')
// create application/json parser
var jsonParser = bodyParser.json()

 
// create application/x-www-form-urlencoded parser

var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
const fetch = require("node-fetch")
var fetchJson = (url, options) => new Promise(async (resolve, reject) => {
    fetch(url, options)
        .then(response => response.text())
        .then(json => {
            // console.log(json)
            resolve(json)
        })
        .catch((err) => {
            reject(err)
        })
  })

app.get('*', express.json(), async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*')
  req.headers['Access-Control-Allow-Origin'] = '*'
 var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
 console.log(req.originalUrl)
  var s2 = req.originalUrl.substring(1);
  res.send(await fetchJson("http://" + s2, {headers : JSON.stringify(req.headers)}))
})
app.post('*', express.json(), async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*')
  req.headers['Access-Control-Allow-Origin'] = '*'
 var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
 console.log(req.originalUrl)
 var s2 = req.originalUrl.substring(1);
  res.send(await fetchJson("http://" + s2, {method: 'POST',
    headers : JSON.stringify(req.headers),
    body: JSON.stringify(req.body)}))
})
app.options('*', express.json(), async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*')
  req.headers['Access-Control-Allow-Origin'] = '*'
 var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
 console.log(fullUrl)
 
  res.send("ok")
})
/*
app.get('/:urlp/:urlp2', express.json(), async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*')
  req.headers['Access-Control-Allow-Origin'] = '*'
    const { urlp, urlp2 } = req.params
    console.log(urlp)
    fetchJson("http://" + urlp + "/" + urlp2)

    res.send(await fetchJson("http://" + urlp + "/" + urlp2))
  })
app.get('/:urlp/:urlp2/:urlp3', express.json(), async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*')
  req.headers['Access-Control-Allow-Origin'] = '*'
    const { urlp, urlp2, urlp3 } = req.params
    console.log("http://" + urlp + "/" + urlp2 + "/" + urlp3)
   // fetchJson("http://" + urlp + "/" + urlp2)

    res.send(await fetchJson("http://" + urlp + "/" + urlp2 + "/" + urlp3))
  })

app.get('/:urlp/:urlp2/:urlp3/:urlp4', express.json(), async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*')
  req.headers['Access-Control-Allow-Origin'] = '*'
    const { urlp, urlp2, urlp3, urlp4 } = req.params
    console.log("http://" + urlp + "/" + urlp2 + "/" + urlp3)
   // fetchJson("http://" + urlp + "/" + urlp2)

    res.send(await fetchJson("http://" + urlp + "/" + urlp2 + "/" + urlp3 + "/" + urlp4))
  })
app.get('/:urlp/:urlp2/:urlp3/:urlp4/:urlp5', express.json(), async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*')
  req.headers['Access-Control-Allow-Origin'] = '*'
    const { urlp, urlp2, urlp3, urlp4, urlp5 } = req.params
    console.log("http://" + urlp + "/" + urlp2 + "/" + urlp3)
   // fetchJson("http://" + urlp + "/" + urlp2)

    res.send(await fetchJson("http://" + urlp + "/" + urlp2 + "/" + urlp3 + "/" + urlp4 + "/" + urlp5))
  })
  app.get('/:urlp', express.json(), async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*')
    req.headers['Access-Control-Allow-Origin'] = '*'
    const { urlp } = req.params
    console.log(urlp)
    fetchJson("http://" + urlp)

    res.send(await fetchJson("http://" + urlp))
  })
  app.post('/:urlp/:urlp2', express.json(), async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*')
    req.headers['Access-Control-Allow-Origin'] = '*'
    const { urlp, urlp2 } = req.params
    fetchJson("http://" + urlp  + "/" + urlp2, {method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(req.body)})

    res.send(await fetchJson("http://" + urlp  + "/" + urlp2, {method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(req.body)}))
  })
  app.post('/:urlp/:urlp2/:urlp3', express.json(), async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*')
    req.headers['Access-Control-Allow-Origin'] = '*'
    const { urlp, urlp2, urlp3 } = req.params
    fetchJson("http://" + urlp  + "/" + urlp2, {method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(req.body)})

    res.send(await fetchJson("http://" + urlp  + "/" + urlp2 + "/" + urlp3, {method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(req.body)}))
  })
  app.post('/:urlp/:urlp2/:urlp3/:urlp4', express.json(), async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*')
    req.headers['Access-Control-Allow-Origin'] = '*'
    const { urlp, urlp2, urlp3,urlp4 } = req.params
    fetchJson("http://" + urlp  + "/" + urlp2, {method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(req.body)})

    res.send(await fetchJson("http://" + urlp  + "/" + urlp2 + "/" + urlp3 + "/" + urlp4, {method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(req.body)}))
  })
  app.post('/:urlp/:urlp2/:urlp3/:urlp4/:urlp5', express.json(), async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*')
    req.headers['Access-Control-Allow-Origin'] = '*'
    const { urlp, urlp2, urlp3,urlp4,urlp5 } = req.params
    fetchJson("http://" + urlp  + "/" + urlp2, {method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(req.body)})

    res.send(await fetchJson("http://" + urlp  + "/" + urlp2 + "/" + urlp3 + "/" + urlp4 + "/" + urlp5, {method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(req.body)}))
  })
  app.post('/:urlp', express.json(), async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*')
    req.headers['Access-Control-Allow-Origin'] = '*'
    const { urlp } = req.params
    fetchJson("http://" + urlp, {method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(req.body)})

    res.send(await fetchJson("http://" + urlp, {method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(req.body)}))
  })

  app.options('/:urlp', express.json(), async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*')
    req.headers['Access-Control-Allow-Origin'] = '*'
    const { urlp } = req.params
    fetchJson(urlp)

    res.send("OK")
  })
  */
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
