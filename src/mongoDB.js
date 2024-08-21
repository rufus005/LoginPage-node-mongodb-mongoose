const mongoose =require("mongoose");
const { type } = require("os");

mongoose.connect("mongodb+srv://rufus090400:ahpX26nyMUY5UPDX@cluster0.g0es8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log("mongodb connected");
})
.catch (() => {
    console.log("failed to connect");
    
})

const LoginScema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    password: {
        type:String,
        required: true
    }
})

const collection = new mongoose.model("logincollection",LoginScema)

module.exports =collection