import { Client, ClientBuilder, PasswordAuthMiddlewareOptions } from '@commercetools/sdk-client-v2';

import { httpMiddlewareOptions, projectKey } from './baseApi';

const passwordFlowOptions = (username: string, password: string): PasswordAuthMiddlewareOptions => {
  const options = {
    host: import.meta.env.VITE_CTP_AUTH_URL,
    projectKey,
    credentials: {
      clientId: import.meta.env.VITE_CTP_CLIENT_ID,
      clientSecret: import.meta.env.VITE_CTP_CLIENT_SECRET,
      user: {
        username,
        password,
      },
    },
    fetch,
  };

  return options;
};

const passwordFlowClient = (username: string, password: string): Client => {
  const client = new ClientBuilder()
    .withPasswordFlow(passwordFlowOptions(username, password))
    .withHttpMiddleware(httpMiddlewareOptions)
    .withLoggerMiddleware()
    .build();

  return client;
};

export default passwordFlowClient;
