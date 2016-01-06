import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { match, RoutingContext } from "react-router";
import {join} from "path";
import bodyParser from "body-parser"
import Routes from "./routes";

const app = express();

app
  .use(express.static(join(__dirname,'./../dist')))
  .set('view engine','jade')
  .set('views',join(__dirname,'./views'))
  .get('*', (req, res) => {
    match({ routes : Routes, location: req.url }, (error, redirectLocation, renderProps) => {
      if (error) {
        res.status(500).send(error.message)
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search)
      } else if (renderProps) {
        res.render('index.jade',{locals:{content : renderToString(<RoutingContext {...renderProps}/>)}});
      } else {
        res.status(404).send('Not found')
      }
    })
  })

app.listen(3000, () => {
  console.log('Server is listening at http://127.0.0.1:3000')
});
