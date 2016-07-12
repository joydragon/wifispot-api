var baseConfig = new function(){
    var that = this;
    
    this.model = {};
    
    this.register = function (server, options, next) {
        var SM = options.swaggerMongoose;
        var spec = options.swaggerHapi.runner.swagger;

        that.model = {
            WifiSpot: SM.compile(spec).models.WifiSpot
        }
        
        server.model = that.model;
        
        next();
    };
};

baseConfig.register.attributes = {
  name: 'baseConfig',
  version: '1.0.0'
};

module.exports = baseConfig;
