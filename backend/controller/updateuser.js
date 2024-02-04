import User from "../model/user.js";

export const updateuser=async (req, res) => {
    const { id } = req.params;
    const {email,password} = req.body; // Assuming you send the updated data in the request body

    try {
        // Find the user by ID and update the data
        const updatedUser = await User.findByIdAndUpdate(id, {email,password}, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json({ message: "User updated successfully", user: updatedUser });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}