const express = require('express')
const axios = require('axios')
const app = express()

app.use(express.json())

app.post('/exchange', async (req, res) => {
  try {
    const from = req.body.from
    const to = req.body.to
    const value = req.body.value
    const request = await axios.get(`https://www.frankfurter.app/latest?from=${from}&to=${to}&amount=${value}`)
    res.send(request.data)
  } catch (err) {
    res.sendStatus(500)
  }
})

app.get('/currencies', async (req, res) => {
  try {
    const request = await axios.get('https://www.frankfurter.app/currencies')
    res.send(request.data)
  } catch (error) {
    res.sendStatus(500)
  }
})

app.listen(3000, () => {
  console.log('server running on port 3000')
})
