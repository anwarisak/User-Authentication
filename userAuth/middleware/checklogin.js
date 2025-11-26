import jwt from "jsonwebtoken";

export const checkLogin = (req, res, next) => {
  const token = req.cookies?.token; 

  if (!token) {
    return res.status(401).json("Please login first");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(401).json("Invalid or expired token");
  }
};
