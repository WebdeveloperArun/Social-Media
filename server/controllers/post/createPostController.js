import Post from '../../models/post.model.js'

const createPostController = async (req, res) => {
    try {

        if (!req.body.userId || !req.body.title || !req.body.image) {
            return res.status(400).json({ message: "Please fill in all fields" });
        }

        const newPost = new Post(req.body)
        await newPost.save()

        res.status(200).json(newPost);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default createPostController;
