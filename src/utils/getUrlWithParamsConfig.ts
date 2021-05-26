import config from '../config';

interface iQuery {
  pathend?: number | string;
  [key: string]: any;
}

function getUrlWithParamsConfig(endpointName: string, query: iQuery) {
  const { pathend, ...rest } = query;
  return {
    ...config.server,
    pathname: `${config.client.endpoint[endpointName].uri.pathname}/${pathend}`,
    query: { ...rest },
  };
}

export default getUrlWithParamsConfig;
