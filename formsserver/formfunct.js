const schema = require('./formmodel');
//const jwt = require('jasonwebtoken')
const { userdb } = require('./connection')
var ObjectID = require('mongodb').ObjectID;
const adddetails = async (body, registrationNumber) => {
    let is_valid = schema.isValid(body);
   try{
        if(!is_valid){
            throw new Error('Invaid form format');
        }
        body = schema.cast(body);
        let model  = await userdb();
        body._id = ObjectID();
        let response = await model.updateOne({registrationNumber: registrationNumber},{$push:{forms:body}},{upsert: true});
   } catch(err){
       console.log(err)
       throw err;
   }
}
const retrieveform = async (registrationNumber) =>{
    try{
         let model  = await userdb();
        let response = await model.findOne({registrationNumber: registrationNumber});
        return response;
    } catch( err) {
        throw err;
    }
}
const allgrieve = async () => {
        try{
         let model  = await userdb();
        let response = await model.find().toArray();
        console.log(response)
        return response;
    } catch( err) {
        throw err;
    }
}
const changestatus = async (registrationNumber, _id) => {
    try{
         let model  = await userdb();
        let response = await model.update({registrationNumber: registrationNumber, "forms._id": ObjectID(_id)}, {$set:{"forms.$.status": true}});
        console.log(response)
        return response;
    } catch( err) {
        throw err;
    }
}
const decodetoken = ( token ) => {

}
module.exports = { adddetails, retrieveform, allgrieve, changestatus};