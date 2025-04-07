import Post from '../../models/post.model.js'

const updatePostController = async (req, res) => {
    try {

        const { id } = req.params;

        const post = await Post.findById(id);
        
        if (!post) {
            return res.status(400).json({ message: "Post not found" });
        }
        if (post.userId !== req.body.userId) {
            return res.status(403).json({ message: "You can update only your post" });
        }

        const updatedPost = await Post.findByIdAndUpdate(id, req.body, { new: true })
        
        res.status(200).json(updatedPost);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default updatePostController;
