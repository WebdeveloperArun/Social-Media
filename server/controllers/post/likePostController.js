import Post from "../../models/post.model.js";



const likePostController = async (req, res) => {
    try {

        const { id } = req.params;
        const post = await Post.findById(id);
        
        if (!post) {
            return res.status(400).json({ message: "Post not found" });
        }
        if (post.likes.includes(req.body.userId)) {
            post.likes = post.likes.filter((id) => id !== req.body.userId);
        } else {
            post.likes.push(req.body.userId);
        }
        const updatedPost = await Post.findByIdAndUpdate(id, post, { new: true });

        res.status(200).json(updatedPost);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default likePostController;