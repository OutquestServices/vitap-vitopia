import jwt from "jsonwebtoken";

export const generateToken = (data, expiresIn) => {
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET is not defined in environment variables");
    }

    return jwt.sign(data, process.env.JWT_SECRET, { expiresIn });
};

export const extractDataFromToken = (token) => {
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET is not defined in the environment variables.");
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded;
    } catch (error) {
        console.error("Invalid token:", error);
        return null;
    }
};
