//Server File  
require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();

const { connectTodb } = require('./connection');
const { adddetails, retrieveform, allgrieve, changestatus} = require('./formfunct');

app.use(cors())
app.use(bodyParser.json());

app.use(
    bodyParser.urlencoded({
        extended: false
    })
)

app.get('/',(req,res) => {
    res.send('Connected to app');
}) 
// Login route
app.post('/submitform/:regNo', async ( req, res) => {
    let body = req.body;
    let regNo = req.params.regNo;
    try{
        await adddetails(body, regNo);
        res.status(200).json({status: 'success',message: "Form submitted sucessfully"});
    } catch(err){
        res.status(400).send({message: err.message});
    }
})
/**********************************
 *            Get All Forms for particular register Number
 * 
 ***************************************/
app.get('/getallforms/:regNo',async (req,res) => {
    let regNo = req.params.regNo;
    try{
        let response = await retrieveform(regNo);
        console.log(response)
        
        res.send(response.forms);
    } catch( err ){
        res.status(400).send({message: err.message});
    }
}) 
app.get('/getallgrieve',async (req,res) => {
    //let regNo = req.params.regNo;
    try{
        let response = await allgrieve();
        console.log(response)
        
        res.json(response);
    } catch( err ){
        res.status(400).send({message: err.message});
    }
}) 

app.get('/resolve/:regNo/:_id', async ( req, res) => {
    
    let regNo = req.params.regNo;
    let timestamp = req.params._id;
    console.log(regNo, timestamp)
    try{
        await changestatus(regNo, timestamp);
        res.status(200).json({status: 'success',message: "Status Changed submitted sucessfully"});
    } catch(err){
        res.status(400).send({message: err.message});
    }
})

app.listen(process.env.PORT || 4001,async () => {
await connectTodb();
console.log("Server listening in port "+ process.env.PORT || 4000);
});



module.exports = app;