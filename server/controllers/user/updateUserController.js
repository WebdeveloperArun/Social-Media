import bcrypt from "bcryptjs"
import User from "../../models/user.model.js";


const updateUserController = async (req, res) => {
    try {
        console.log("updata controller:",req.body);
     const { id } = req.params;
     const { _id } = req.body;

     if (id === _id || req.user.isAdmin) {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }

         const user = await User.findByIdAndUpdate(id, { $set: req.body }, { new: true }).select("-password")

        res.status(200).json(user)

     }
    } catch (error) {
     res.status(500).json({ message: error.message });
    }
}

export default updateUserController;