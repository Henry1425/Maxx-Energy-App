const express = require('express')
const app = express()

app.get('/', (req, res) => {
  console.log('Here');
  res.status(500).json({ message: 'ERROR' })
})
// App listening on port
app.listen(3000, () => {
  console.log('App listening on port 3000')
});
//Chris was here (Live Share test)
// John was here
