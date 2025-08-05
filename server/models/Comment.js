import mongoose from "mongoose";


const commentSchema = mongoose.Schema({
   blog:
   {
    type:mongoose.Schema.Types.ObjectId,
    ref:'blog',   
    required:true 
    /*Know one thing we are getting only 1 blog's id. we are storing only one blog's id here. while creating the comment, we will be getting the blog's id and store it in the commentModel with the name and content. And if the admin wants comments from a particular blog, we have to get that particular blog id and check it with the created comment entrees */
   },
   name:
   {
    type:String,
    required:true
   },
   content:
   {
    type:String,
    required:true
   },
   isApproved:
   {
    type:Boolean,
    default:false // i have kept default as false, since it must be admin who must approve the comment
   }

},{timestamps:true})


/* 
Here we are going to create the schema and the model for storing the comment details u want to create. As the name suggest in model folder we have to create  a model and schema.

In the schema u have given timestamps:true, which mean it will provide the time automatically. when the comment is created. Now lets create the model
*/


const commentModel = mongoose.model('comment',commentSchema)

export default commentModel

/*
Now u have created the model also, here we gave a model name of our choice, when we run the backend code on postman with the connected database, atlas will create this model with the schema u specified. Now have to write the core logic to add blog, so u will create it in the controller folder
*/