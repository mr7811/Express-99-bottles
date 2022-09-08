const express = require("express");
const app = express();


app.listen(4000, () => {
  console.log("app listening on port 4000");
});
app.get('/:number', (req, res) => {
res.json({
    number: req.params.number + " number of beer on the wall" 
    + "    http://localhost:4000/" + Number(req.params.number - 1)

})
})
app.get('/', (req, res) => {
  res.send({
    message: '99 bottles of beer on the wall',

  })
})