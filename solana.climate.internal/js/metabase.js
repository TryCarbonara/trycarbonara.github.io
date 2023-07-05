// you will need to install via 'npm install jsonwebtoken' or in your package.json

var jwt = require("jsonwebtoken");

var METABASE_SITE_URL = "https://carbonara.metabaseapp.com";
var METABASE_SECRET_KEY = "0bf074162db3647d7f8ecb4cefcf54908e5c9aa97e09bbba8946169f3386510b";

var payload = {
  resource: { dashboard: 36 },
  params: {},
  exp: Math.round(Date.now() / 1000) + (10 * 60) // 10 minute expiration
};
var token = jwt.sign(payload, METABASE_SECRET_KEY);

var iframeUrl = METABASE_SITE_URL + "/embed/dashboard/" + token + "#font=Open%20Sans&theme=transparent&bordered=true&titled=true";