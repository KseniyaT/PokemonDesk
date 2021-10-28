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
      getPokemon: {
        method: 'GET',
        uri: {
          pathname: '/api/v1/pokemon/{id}',
        },
      },
      createPokemon: {
        method: 'POST',
        uri: {
          pathname: '/api/v1/pokemon/create',
        },
      },
      updatePokemon: {
        method: 'PUT',
        uri: {
          pathname: '/api/v1/pokemon/{id}',
        },
      },
      deletePokemon: {
        method: 'DELETE',
        uri: {
          pathname: '/api/v1/pokemon/{id}/delete',
        },
      },
      getPokemonTypes: {
        method: 'GET',
        uri: {
          pathname: '/api/v1/types',
        },
      },
    },
  },
};

export enum configEndpoint {
  getPokemonTypes = 'getPokemonTypes',
  getPokemons = 'getPokemons',
  getPokemon = 'getPokemon',
}

export default config;
