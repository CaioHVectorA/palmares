import { serverlessAdapter } from '@palmares/server';

import VercelRequestAdapter from './request';
import VercelResponseAdapter from './response';
import VercelRouterAdapter from './router';

export default serverlessAdapter({
  request: new VercelRequestAdapter(),
  response: new VercelResponseAdapter(),
  routers: new VercelRouterAdapter(),
  customServerSettings: (args: any) => {
    return args;
  },
  load: async (_serverName: string, _domains: any[], _settings: any) => {

  },
  generate: async (...args: any[]) => {
    console.log('generate', args)
  }
})
