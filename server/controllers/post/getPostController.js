import Post from "../../models/post.model.js";

const getPostController = async (req, res) => {
    try {
    
        const { id } = req.params;
        const post = await Post.findById(id);
        
        if (!post) {
            return res.status(400).json({ message: "Post not found" });
        }

        res.status(200).json(post)


    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export default getPostController