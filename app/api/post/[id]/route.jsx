import connectDatabase from "../../../../utils/connectDatabase";
import PostModel from '../../../../models/postModel';

export async function GET(req,{params}) {
    try {
        await connectDatabase();
        const postData = await PostModel.findOne({_id: params.id});
        return Response.json(postData);
    } catch (error) {
        return Response.json({message: error.message })
    }
}