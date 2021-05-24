import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function req(endpoint: string, params: {}) {
  const baseUrl = getUrlWithParamsConfig(endpoint);

  const uri = Url.format({ ...baseUrl, ...params });
  return fetch(uri).then((response) => response.json());
}

export default req;
