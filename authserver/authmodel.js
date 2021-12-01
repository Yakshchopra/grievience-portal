const yup =  require('yup');

const createacount = new yup.ObjectSchema({
    name: yup.string().required(),
    personalEmail: yup.string().required(),
    collegeEmail: yup.string().required(),
    contact: yup.string().required(),
    registrationNumber: yup.string().required(),
    password: yup.string().required(),
    forms: yup.array().default([])
    
});
const login = new yup.ObjectSchema({
    registrationNumber: yup.string().required("User name is required Field"),
    password: yup.string().required("Password is required")
});
module.exports = { caschema: createacount, loginschema: login};