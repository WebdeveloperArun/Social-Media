import User from "../../models/user.model.js";


const getUserController = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findById(id).select("-password");
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        res.status(200).json(user);
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export default getUserController