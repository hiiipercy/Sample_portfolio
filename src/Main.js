import React from "react";
export default function Concent(){
    return(
        <div className="content--logo">
            <img className="body--img" src={require('./Asset/section.png')} alt="" />
            <h1 className="body--head">Success quotes</h1>
            <p className="body--text">Success quotes are inspirational sayings that motivate people to work hard and achieve goals. For example “Success is never accidental.” and “Failure is success in progress”. The purpose of these phrases is to provide motivation and inspiration, help listeners withstand hardship and strive for greatness.</p>
        </div>
    )
}