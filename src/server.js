import app from "./App";

const port = process.env.PORT || 3000;

app.listen(port, err => {
  if (err) {
    console.log(err);
  }
  return console.log(`server listening on ${port}`);
});
