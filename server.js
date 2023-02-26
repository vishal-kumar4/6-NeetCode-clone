const express=require('express')
const app=express();

// ⁡⁢⁣⁢to use static file like html css from frontend folder⁡⁡
app.use(express.static("frontend"))

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/frontend/index.html")
});


app.listen(3000,()=>{
    console.log(`running at port ${3000}`)
});