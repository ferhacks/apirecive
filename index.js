const express = require('express')
const cors = require('cors');
const app = express()
const port = process.env.PORT || 80
app.use(cors());
const fetch = require("node-fetch")
var fetchJson = (url, options) => new Promise(async (resolve, reject) => {
    fetch(url, options)
        .then(response => response.json())
        .then(json => {
            // console.log(json)
            resolve(json)
        })
        .catch((err) => {
            reject(err)
        })
  })

app.get('/', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*')
  req.headers['Access-Control-Allow-Origin'] = '*'
  res.send('Hello World!')
})
app.get('/:urlp/:urlp2', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*')
  req.headers['Access-Control-Allow-Origin'] = '*'
    const { urlp, urlp2 } = req.params
    console.log(urlp)
    fetchJson("http://" + urlp + "/" + urlp2)

    res.send(await fetchJson("http://" + urlp + "/" + urlp2))
  })

  app.get('/:urlp', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*')
    req.headers['Access-Control-Allow-Origin'] = '*'
    const { urlp } = req.params
    console.log(urlp)
    fetchJson("http://" + urlp)

    res.send(await fetchJson("http://" + urlp))
  })
  app.post('/:urlp/:urlp2', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*')
    req.headers['Access-Control-Allow-Origin'] = '*'
    const { urlp, urlp2 } = req.params
    fetchJson("http://" + urlp  + "/" + urlp2, {method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: req.body})

    res.send(await fetchJson("http://" + urlp  + "/" + urlp2, {method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: req.body}))
  })
  app.post('/:urlp', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*')
    req.headers['Access-Control-Allow-Origin'] = '*'
    const { urlp } = req.params
    fetchJson("http://" + urlp, {method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: req.body})

    res.send(await fetchJson("http://" + urlp, {method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: req.body}))
  })

  app.options('/:urlp', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*')
    req.headers['Access-Control-Allow-Origin'] = '*'
    const { urlp } = req.params
    fetchJson(urlp)

    res.send("OK")
  })
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})