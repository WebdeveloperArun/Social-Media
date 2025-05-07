import User from "../../models/user.model.js";
import { getUser } from "../../services/auth.js";



const getCurrentUserController = async (req, res) => {
    try {
        console.log(req.cookies);
        
        const userId = getUser(req.cookies.userId);
        
        if (!userId) {
            return res.status(400).json({ message: "User not found" });
        }
        const user = await User.findById(userId.id).select("-password");
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }
        
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default getCurrentUserController
