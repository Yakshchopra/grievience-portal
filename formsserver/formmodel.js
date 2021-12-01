const yup = require('yup')
const forschema = new yup.ObjectSchema({
    companyName: yup.string().required("Please Enter this field"),
      job: yup.string().required("Please Enter this field"),
      issue: yup.string().required("Please Enter this field"),
      description: yup.string().required("Please Enter this field"),
      status: yup.bool().default(false),
      timestamp: yup.date().default(new Date())
});
module.exports = forschema;