const express = require("express");

const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running: ${PORT}`);
});
