const httpProtocol =  location.protocol + '//';

let config = {
  apiUrl: 'api.xinwen.cn',
  accountUrl: 'account.xinwen.cn',
  webUrl: location.host,
  caimiUrl: 'http://cm.xinwen.cn',
  facedetectUrl: 'http://face.xinwen.cn',
  httpProtocol: httpProtocol,
  staticUrl: location.host
};

if (config.webUrl !== 'mp.xinwen.cn') {
  config.apiUrl = 'test.api.xinwen.cn';
  config.accountUrl = 'test.account.xinwen.cn';
}

if (location.port === '8010' || location.port === '8000') {
  config.webUrl = location.hostname + ':8000';
  config.staticUrl = location.hostname + ':8010';
}

config.loginDirect = `${httpProtocol}${config.accountUrl}/login?redirect_url=`;
config.registerDirect = `${httpProtocol}${config.accountUrl}/register?redirect_url=`;

export default config;
