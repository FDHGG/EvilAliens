import express from 'express';
import devBundle from './devBundle';
import template from '../template';

const app = express();
devBundle(app);

app.use((req,res) => {
  return res.send(template());
})
const PORT = process.env.PORT || 3000;
app.listen(PORT,() => console.log(`Server listening at ${PORT}`));