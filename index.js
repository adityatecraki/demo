const express=require('express');
const pg= require("pg");
const sequelize = require("./connection.js");
const User = require("./modal.js")

const app=express();

app.use(express.json());
app.listen(3000,()=>{
    console.log('Server running on port 3000');
})


const UserData= async()=>{
    try{
        const user= await User.create({
            name: 'John Doe',
            email: 'johndoe@example.com',
            password: 'password123'
        });
        console.log('User created:', user.toJSON());
    }catch(error){
        console.error('Error creating user:');
    }
}
// UserData();
