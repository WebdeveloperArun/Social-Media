import User from "../../models/user.model.js";

const deleteUserController = async (req, res) => {
 try {
  const { id } = req.params;
  const { userId } = req.body;

  if (id === userId || req.user.isAdmin) {

    const user = await User.deleteOne(id)

    res.status(200).json("Account has been deleted")

  }
 } catch (error) {
  res.status(500).json({ message: error.message });
 }
};

export default deleteUserController;
