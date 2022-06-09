const _ajv = require('ajv')
const _ =require ('lodash')

const verifySchema = (Schema, requestedJSON) => {
 
  let result = {};
  const ajv = new _ajv({
    allErrors: true,
  });
  try {
    const validate = ajv.compile(Schema);
    const valid = validate(requestedJSON);
    if (!valid) {
       console.log(validate.errors);
  
      // eslint-disable-next-line max-len
      result = {
        success: false,
        message: _.map(validate.errors, function (er) {
          return er.message;
        }),
      };
    } else {
      result = {
        success: true,
        message: 'requested JSON is valid',
      };
    }
  } catch (err) {
    result = {
      success: false,
      message: err,
    };
  }
  return result;
};

module.exports={ verifySchema };
