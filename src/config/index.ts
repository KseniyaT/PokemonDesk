interface INetworkConfig {
  server: IHostConfig;
  client: IClient;
}

interface IHostConfig {
  protocol: string;
  host: string;
}

interface IClient {
  endpoint: {
    [key: string]: IEndpoint;
  };
}

interface IEndpoint {
  method: string;
  uri: {
    pathname: string;
  };
}

const config: INetworkConfig = {
  server: {
    protocol: 'http',
    host: 'zar.hosthot.ru',
  },
  client: {
    endpoint: {
      getPokemons: {
        method: 'GET',
        uri: {
          pathname: '/api/v1/pokemons',
        },
      },
    },
  },
};

export default config;
