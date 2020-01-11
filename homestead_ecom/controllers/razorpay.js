const User = require('../models/user');
const Razorpay = require('razorpay');



let instance = new Razorpay({
    key_id: "rzp_test_Q2Wj7PFCMrgd4k", 
    key_secret: "nU3khOSAuKhVL3rWTetjgWzq" 
  });





  exports.generateToken = (req, res) => {
    instance.customer.token({}, function(err, response) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(response);
        }
    });
};
