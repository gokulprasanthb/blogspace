import { Schema, model, models } from "mongoose"; 

const postSchema =  new Schema({
    title: String,
    description: String,
    image: String,
    created_at:String
})

const PostModel = models.Post || model('Post', postSchema);

export default PostModel;