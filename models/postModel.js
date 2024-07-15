import { Schema, model, models } from "mongoose"; 

const postSchema =  new Schema({
    title: String,
    description: String,
    image: String,
    created_at:String
},{ toJSON: { virtuals: true} });

postSchema.virtual('small_description').get(function() {
    return this.description.substr(0,100)+'...'
});
// postSchema.virtual('created_at').get(function() {
//     return changeDateFormat(this.created_at)
// });

const PostModel = models.Post || model('Post', postSchema);

export default PostModel;