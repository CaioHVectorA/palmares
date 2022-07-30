import express, { Express } from "express";

import { HandlersOfRouterType, Server } from '@palmares/server';


export default class ExpressServer extends Server {
  serverInstance!: Express;
  _app!: Express;

  async load(): Promise<void> {
    this.serverInstance = express();
  }

  async init() {
    this.serverInstance.listen(this.settings.PORT, () => {
      super.init()
    });
  }

  async initializeRouters(routes: [string, HandlersOfRouterType[]][]): Promise<void> {
    for (const [path, handlers] of routes) {
      for (const { methodType, handler} of handlers) {
        if (methodType === 'GET') {
          this.serverInstance.get(path, async (req, res) => {
            console.log(req);
            await handler();
            console.log('------')
            console.log(res);
            res.send('passou');
          });
        }
      }
    }
  }
}
