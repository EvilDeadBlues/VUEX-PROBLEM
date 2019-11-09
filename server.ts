import Express from "express";
import { Nuxt, Builder } from 'nuxt'
import HTTP from "http";
import Morgan from "morgan";

const config = require('./nuxt.config.js');
config.dev = !(process.env.NODE_ENV === 'production')
const nuxt = new Nuxt(config);
const { host, port } = nuxt.options.server;
const app: Express.Application = Express();
const server = HTTP.createServer(app);

async function start() {

    if (config.dev) {
        const builder = new Builder(nuxt)
        await builder.build()
    } else {
        await nuxt.ready()
    }

    app.use(Morgan('dev'));
    
    app.use(nuxt.render);

    server.listen(port, host);

    console.log("Listening on port " + port);

}

start();