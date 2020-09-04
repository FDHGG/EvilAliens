import express from "express";
import devBundle from "./devBundle";
import template from "../template";
import ReactDOMServer from 'react-dom/server';
import App from '../client/App';
import React from 'react';
import {StaticRouter} from 'react-router-dom';
 
const app = express();
devBundle(app);
app.use(async(req, res) => {
  const location = req.originalUrl;
  //return res.send(template());
  const a = ReactDOMServer.renderToString(
    <StaticRouter location={location}>
      <App />
    </StaticRouter>
  );
  const t = template();
  return res.send(
    t.replace('<div id="root"></div>',`<div id="root">${a}</div>`)
  );
});
app.use(express.static('../dist'));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening at ${PORT}`));
