import React from "react";
import User from "../../assets/user.png";

const Avatar = ({srcImg, alt}) => {
    if(srcImg) {
        return (
            <img src={srcImg} alt={alt}/>
        )
    }else {
        return (
            <img src={User} alt={alt}/>
        )
    }
}

export default Avatar;