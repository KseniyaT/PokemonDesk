import config from '../config';

interface iQuery {
  id?: number | string;
  [key: string]: any;
}

interface IEndpoint {
  method: string;
  uri: {
    pathname: string;
    query?: object;
  };
}

interface IApiConfigUri {
  protocol: string;
  host: string;
  pathname: string;
  query?: object;
}

function getUrlWithParamsConfig(endpointName: string, params: iQuery = {}) {
  const { method, uri }: IEndpoint = config.client.endpoint[endpointName];
  let body = {};
  const apiConfigUri: IApiConfigUri = {
    ...config.server,
    ...uri,
    query: {
      ...uri.query,
    },
  };

  const query = {
    ...params,
  };

  const pathname = Object.keys(query).reduce((acc, val) => {
    if (acc.indexOf(`{${val}}`) !== -1) {
      const result = acc.replace(`{${val}}`, query[val]);
      delete query[val];
      return result;
    }
    return acc;
  }, apiConfigUri.pathname);

  apiConfigUri.pathname = pathname;
  apiConfigUri.query = { ...query };

  if (method === 'GET') {
    apiConfigUri.query = {
      ...apiConfigUri.query,
      ...query,
    };
  } else {
    body = query;
  }

  return {
    method,
    uri: apiConfigUri,
    body,
  };
}

export default getUrlWithParamsConfig;
