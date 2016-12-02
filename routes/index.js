/**
 * Created by neo on 12/1/16.
 */

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    val = {
        "12-01-2016":{
             "sensors":[
                {
                    "sensorId":23,
                    "hours":20,
                    "amount":4,

                 },
                {
                    "sensorId":21,
                    "hours":10,
                    "amount":2,

                },
                {
                    "sensorId":25,
                    "hours":10,
                    "amount":2,

                }
            ],
            "totalAmount" : 6
        },
        "12-02-2016":{
            "sensors":[
                {
                    "sensorId":23,
                    "hours":10,
                    "amount":2,

                },
                {
                    "sensorId":21,
                    "hours":20,
                    "amount":4,

                },
                {
                    "sensorId":25,
                    "hours":20,
                    "amount":4,

                }
            ],
            "totalAmount" : 10
        }
    };

    res.render('index',{values:val});
});

module.exports = router;