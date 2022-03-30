const { validationResult } = require('express-validator');

function validateDealershipSchema(req, res, next){
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {

    next();
    }
}


module.exports = validateDealershipSchema
