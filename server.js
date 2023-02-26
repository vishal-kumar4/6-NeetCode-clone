const express=require('express')
const app=express();

app.get('/',(req,res)=>{
    res.send("Hello this is the root directory . . . . . .");
});

app.get('/myname',(req,res)=>{
    // editedname=req.params.name
    res.send("Vishal kumar");
});


app.listen(3000,()=>{
    console.log(`running at port ${3000}`)
})