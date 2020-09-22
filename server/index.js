const experss = require('express')
const app = experss()
const port = 3060

app.get('/', (req,res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}`))