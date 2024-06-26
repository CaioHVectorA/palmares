import { SettingsType2, initializeDomains } from "@palmares/core";

import { initializeRouters } from "../app/utils";
import ServerlessAdapter from "../adapters/serverless";
import { ServerDomain } from "../domain/types";
import { AllServerSettingsType } from "../types";

export default class Serverless {
  async load(args: {
    settings: AllServerSettingsType;
    domains: ServerDomain[];
  }) {
    const serverEntries = Object.entries(args.settings.servers);
    const [serverName, serverSettings] = serverEntries[serverEntries.length - 1];
    const newServerInstance = new serverSettings.server(serverName, args.settings, args.domains);
    await newServerInstance.load(serverName, args.domains, serverSettings);
    await initializeRouters(args.domains, serverSettings, args.settings, newServerInstance, {
      serverless: {
        generate: true,
        use: false,
        getMethod: () => '',
        getRoute: () => '',
      }
    });
  }

  static async handleServerless(settings: SettingsType2, args: {
    requestAndResponseData: any,
    domainRoutes: string[],
    serverName: string,
    getRoute: () => string,
    route?: string,
    method?: string,
    adapter: typeof ServerlessAdapter,
    getMethod: () => string
  }) {
    const { domains, settings: formattedSettings } = await initializeDomains(settings);
    const settingsServers = (formattedSettings as any) as AllServerSettingsType;
    const initializedAdapter = new args.adapter(args.serverName, settingsServers, domains);
    const domainRoutes = domains.filter((domain) => args.domainRoutes.includes(domain.name));
    return await initializeRouters(
      domainRoutes,
      settingsServers.servers[args.serverName],
      settings as AllServerSettingsType,
      initializedAdapter,
      {
        serverless: {
          generate: false,
          use: true,
          getMethod: args.getMethod,
          getRoute: args.getRoute,
          requestAndResponseData: args.requestAndResponseData
        }
      }
    );
  }
}
