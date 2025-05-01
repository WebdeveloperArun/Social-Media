const logoutController = async (req, res) => {
    try {
        res.clearCookie("userId", {
            httpOnly: true,
        });

        res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default logoutController;