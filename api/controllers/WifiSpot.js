'use strict';

var WifiSpot = require('./WifiSpotService');

var model = require('../helpers/baseConfig');

module.exports.wifiGET = function wifiGET (req, res, next) {
  WifiSpot.wifiGET(model.model.WifiSpot, req.swagger.params, res, next);
};

module.exports.wifiPOST = function wifiPOST (req, res, next) {
  WifiSpot.wifiPOST(model.model.WifiSpot, req.swagger.params, res, next);
};

module.exports.wifiWifi_idGET = function wifiWifi_idGET (req, res, next) {
  WifiSpot.wifiWifi_idGET(model.model.WifiSpot, req.swagger.params, res, next);
};
