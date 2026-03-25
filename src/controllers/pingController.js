exports.getPing = (req, res) => {
    res.status(200).json({ message: "pong" });
};