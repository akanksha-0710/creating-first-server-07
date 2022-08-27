const express = require('express')

//initilization
const app = express();
//application now will use json format for data
app.use(express.json());

const port = 8091;  

const toDoList = ["Completed Node Byte", "Play cricket"];

//http://Localhost:8091/todos
app.get("/todos",(req,res)=>{
    res.status(200).send(toDoList);
});

app.post("/todos",(req,res)=>{
   let newToDoItem=req.body.item; 
   toDoList.push(newToDoItem);
   res.status(201).send({
     message:"Task added successfully",
   });
});

app.delete("/todos",(req,res)=>{
    const itemToDelete = req.body.item;

    toDoList.find((element,index)=>{
        if(element===itemToDelete){
            toDoList.splice(index,1);
        }
    });

    res.status(202).send({
        message:`Deleted item - ${req.body.item}`,
    });

});


//change to another routers(just some additional eg)
//app.get("/todos/creat",)

// all the other methods on particular routers
app.all("/todos",(req,res)=>{
    res.status(501).send();
});   

//all the other routers
app.all('*',(req,res)=>{
     res.status(404).send();
});





app.listen(port,() =>{
 console.log(`Nodejs server started on port ${port}`);
});
