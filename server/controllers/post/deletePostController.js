import Post from '../../models/post.model.js'

const deletePostController = async (req, res) => {
    try {

        const { id } = req.params;
        const { userId } = req.body;

        const post = await Post.findById(id);

        if (!post) {
            return res.status(400).json({ message: "Post not found" });
        }

        if (post.userId !== userId) {
            return res.status(403).json({ message: "You can delete only your post" });
        }

        const deletedPost = await Post.deleteOne({_id: id})

        res.status(200).json("Post has been deleted")



    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default deletePostController;
