import { domain, clientId } from "../../auth0_config.json";

export const environment = {
    production: false,
    auth0: {
      domain,
      clientId,
      redirectUri:'http://localhost:4200'
    }
  };
  