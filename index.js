const express = require('express');

const app = express();

app.get("/",(req,resp)=>{

	resp.send("app is working");
});
app.get("/love/",(req,resp)=>{

	resp.send("app is working fine on Host server iproject mduel");
});

app.listen(8000);
