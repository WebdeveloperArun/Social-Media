import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    likes: {
        type: Array,
        default: []
    },
}, { timestamps: true });

const Post = mongoose.model("Post", postSchema);

export default Post;