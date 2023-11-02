const express = require('express');
const mongoose =require('mongoose');

let app = express();

//conect server to mongodb server local
mongoose.connect("mongodb://0.0.0.0:27017/student",(err)=>{
    if(!err) 
        console.log('DB now is connected');
    else 
        console.log('You have error')
})

//schema

const studentSchema = new mongoose.Schema({
      
        phone:{
            type : String,
            required : true,
            unique : true
        } ,
        passowrd :{
            type : String,
            required : true,
            unique : true
        } ,
     
        name : String,
        age: Number,
        adress : String,
        gender : String ,
        year : Number,
        bio : String,
        gpa :Number,
        department : String
        
    });

//convert schema to model (class)
let StudentModel = new mongoose.model("students",studentSchema);

//_____________________________________________________________________


const courseSchema = new mongoose.Schema({

    name : String,
    description : String,
    department : String,
    professor :  String

});

let courseModel = new mongoose.model("courses",courseSchema);

//_______________________________________________________________________
//REcord


let student1 = new StudentModel({
    phone: "010183476",
    passowrd : "%hgwe",
    name : "wafaa",
    age: 21,
    adress : "cairo",
    gender : "Female" ,
    year : 3,
    bio : "work smart not HARD",
    gpa :2.3,
    department : "SE"
}).save();



let student2 = new StudentModel({
    phone: "0124834765",
    passowrd : "#gjh23",
    name : "Alaa",
    age: 20,
    adress : "Ismailia",
    gender : "Female" ,
    year : 2,
    bio : "Do not stop Dreamming",
    gpa :3,
    department : "CS"
}).save();

let Course1 = new courseModel({
    name : "DSS",
    description : "Decision support system",
    department : "IS",
    professor :  "Sara"
}).save();

let studentDetails = StudentModel.find().exec(function(err,student){
    if(err) return handleError(err);
    console.log(student)
   
})

app.listen(3000,function(){
    console.log('server now is opend')
})