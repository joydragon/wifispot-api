'use strict';

exports.wifiGET = function(entity, args, res, next) {
    /**
     * parameters expected in the args:
    * ssid (String)
    **/
    console.log("Entrando al GET");
    entity.find({ssid: args.ssid.value}, 'ssid', function(err, result){
        console.log("Entrando a la funcion de retorno");
        if(err){
            console.error(err);
            res.end();
        }
        else{
            if(Object.keys(result).length > 0) {
                console.log("Este es el resultado:");
                console.log(result);
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(result[Object.keys(result)[0]] || {}, null, 2));
            }
            else {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify([]));
            }
        }
    });
    console.log("Saliendo del GET");
}

exports.wifiPOST = function(entity, args, res, next) {
    /**
     * parameters expected in the args:
    * body (WifiSpot)
    **/
    console.log("Entrando al POST");
    var test = new entity({
        "password" : args.password.value,
        "tipo" : args.tipo.value,
        "ubicacion" : args.ubicacion.value,
        "wifi_id" : "aeiou",
//        "created_at" : "2000-01-23T04:56:07.000+0000",
        "nombre" : args.nombre.value
    });
    test.save(function(err){
        if(err){
            console.error(err);
        }
        else{
        // no response value expected for this operation
            res.setHeader('Content-Type', 'application/json');
            res.end();
        }
    });
}

exports.wifiWifi_idGET = function(entity, args, res, next) {
    /**
     * parameters expected in the args:
    * wifi_id (String)
    **/
    var examples = {};
    examples['application/json'] = {
    "password" : "aeiou",
    "tipo" : "aeiou",
    "ubicacion" : "aeiou",
    "wifi_id" : "aeiou",
//    "created_at" : "2000-01-23T04:56:07.000+0000",
    "nombre" : "aeiou"
    };
    if(Object.keys(examples).length > 0) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
    }
    else {
        res.end();
    }
    
}

