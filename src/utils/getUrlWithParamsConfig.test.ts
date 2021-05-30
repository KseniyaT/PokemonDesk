import getUrlWithParamsConfig from './getUrlWithParamsConfig';

describe('getUrlWithParamsConfig', () => {
  test('it must take 2 arguments: getPokemons and an empty object "query" and return an object with the keys "pathname", "protocol", "host" and empty object with key "query"', () => {
    const url = getUrlWithParamsConfig('getPokemons', {});

    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemons',
        query: {},
      },
      body: {},
    });
  });

  test('it must take 2 arguments: getPokemons and an object { name: "Pikachu" } and return an object with the keys "pathname", "protocol", "host" and an object "query" = { name: "Pikachu" }', () => {
    const url = getUrlWithParamsConfig('getPokemons', { name: 'Pikachu' });

    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemons',
        query: { name: 'Pikachu' },
      },
      body: {},
    });
  });

  test('it must take 2 arguments: getPokemon and an object { id: 25 } and return an object with the keys "pathname", "protocol", "host" and empty object with key "query"', () => {
    const url = getUrlWithParamsConfig('getPokemon', { id: 25 });

    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemon/25',
        query: {},
      },
      body: {},
    });
  });

  test('it must take 2 arguments: createPokemon and return an object with the keys "pathname", "protocol", "host" and empty object with key "query"', () => {
    const url = getUrlWithParamsConfig('createPokemon');

    expect(url).toEqual({
      method: 'POST',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemon/create',
        query: {},
      },
      body: {},
    });
  });

  test('it must take 2 arguments: updatePokemon and an object { id: 25 } and return an object with the keys "pathname", "protocol", "host" and empty object with key "query"', () => {
    const url = getUrlWithParamsConfig('updatePokemon', { id: 25 });

    expect(url).toEqual({
      method: 'PUT',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemon/25',
        query: {},
      },
      body: {},
    });
  });

  test('it must take 2 arguments: updatePokemon and an object { id: 25 } and return an object with the keys "pathname", "protocol", "host" and empty object with key "query"', () => {
    const url = getUrlWithParamsConfig('deletePokemon', { id: 25 });

    expect(url).toEqual({
      method: 'DELETE',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemon/25/delete',
        query: {},
      },
      body: {},
    });
  });
});
