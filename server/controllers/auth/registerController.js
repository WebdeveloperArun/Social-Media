import User from "../../models/user.model.js";
import bcrypt from "bcryptjs";

const registerController = async (req, res) => {
    console.log(req.body);
    
    try {
        if (!req.body.email || !req.body.password || !req.body.username) {
            return res.status(400).json({ message: "Please fill in all fields" });
        }

        const existedUser = await User.findOne({ email: req.body.email });
        if (existedUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const user = new User({ email: req.body.email, username:req.body.username, password: hashedPassword });
        await user.save();

        const userObj = user.toObject();
        delete userObj.password;

        res.status(201).json(userObj);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default registerController;
