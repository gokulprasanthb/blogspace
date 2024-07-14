import connectDatabase from "../../../utils/connectDatabase";
import PostModel from '../../../models/postModel';

export async function GET(req) {
    try {
        await connectDatabase();
        const postData = await PostModel.find({});
        return Response.json(postData);
    } catch (error) {
        return Response.json({message: error.message })
    }
}