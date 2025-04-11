import Post from "../../models/post.model.js";



const getUserPostsController = async (req, res) => {
    try {

        const { id } = req.params;

        const userPosts = await Post.find({ userId: id }).sort({ createdAt: -1 });

        res.status(200).json(userPosts);
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export default getUserPostsController;