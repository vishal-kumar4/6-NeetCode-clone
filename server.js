const mongoose=require('mongoose')


//function call for the  created functions of backend 
const courseLib=require('./backend/lib/courseLib');

// ⁡⁢⁣ to make sure all key values of bulk editor or the cyclic are incorporate in our project
// we dont give our key bcoz of if commited it'll go public , so we store in cyclic string variables and give it a name⁡
const dotenv=require('dotenv')
dotenv.config();

//express
const express=require('express')
const app=express();


// ⁡⁢⁣⁢to use static file like html css from frontend folder⁡⁡
app.use(express.static("frontend"))

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/frontend/index.html")
});


// app.listen(3000,()=>{
//     console.log(`running at port ${3000}`)
// }); 

mongoose.set('strictQuery',false)

//if we want to use await our function will be async
mongoose.connect(process.env.MONGO_CONNECTION_STRING,async (err)=>{
    if(err)
    {
        console.log(err)
    }
    else{
        console.log("   = = =  >   DB Connection Successful   < = = =  ")
            // ⁡⁢⁣⁢once DB connection is successfully  only then server js starts as only after successfully connection  ⁡
            await courseLib.createFirstCourse();
            const courses=await courseLib.getAllCourses()
            console.log(courses);
        app.listen(3000,()=>{
            console.log(` = = = = = = > running at port ${3000}  < = = = = = = `)
        }); 
    }
})