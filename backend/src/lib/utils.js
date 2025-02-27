import jwt from 'jsonwebtoken';

export const generateToken = (userID,res) => {
    const token = jwt.sign({userID},process.env.JWT_SECRET,{
        expiresIn:"7d"
    });

    res.cookie("jwt",token,{
        maxAge : 7*24*60*60*1000, //ms
        httpOnly: true, // The cookie is accessible only through the HTTP protocol.Also prevent JavaScript on client side from accessing it.
        sameSite:"strict", //CSRF attacks cross-site request forgery attacks
        secure:process.env.NODE_ENV !== "development"
    });

    return token
}