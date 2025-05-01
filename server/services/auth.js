import jwt from "jsonwebtoken";


const setUser = (id) => {
    const payload = { id };
    return jwt.sign(payload, process.env.SECRET_KEY);
}

const getUser = (token) => {
    try {
        if (!token) return null;
        return jwt.verify(token, process.env.SECRET_KEY);
    } catch (error) {
        console.log("getUser error: ", error);
    }
}

export { setUser, getUser }