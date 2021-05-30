import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function req<T>(endpoint: string, query: object): Promise<T> {
  const baseUrl = getUrlWithParamsConfig(endpoint, query);

  const uri = Url.format(baseUrl);
  return fetch(uri).then((response) => response.json());
}

export default req;
