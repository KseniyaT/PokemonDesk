import config from '../config';

function getUrlWithParamsConfig(endpointName: string) {
  return {
    ...config.server,
    ...config.client.endpoint[endpointName].uri,
  };
}

export default getUrlWithParamsConfig;
