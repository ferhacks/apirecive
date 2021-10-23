const express = require('express')
const app = express()
const port = process.env.APP_PORT || 80
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
  res.send('Hello World!')
})
app.get('/:urlp/:urlp2', async (req, res) => {
    const { urlp, urlp2 } = req.params
    console.log(urlp)
    fetchJson("http://" + urlp + "/" + urlp2)

    res.send(await fetchJson("http://" + urlp + "/" + urlp2))
  })

  app.post('/:urlp/:urlp2', async (req, res) => {
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

  app.options('/:urlp', async (req, res) => {
    const { urlp } = req.params
    fetchJson(urlp)

    res.send("OK")
  })
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})