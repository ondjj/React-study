import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "이인제",
        comment: "안녕, 이인제",
    },
    {
        name: "최태성",
        comment: "안녕, 최태성",
    },
    {
        name: "전창준",
        comment: "안녕, 전창준",
    },
];

function CommentList(props){
    return (
        <div>
            {comments.map((comment) =>{
                return (
                    <Comment name={comment.name} comment={comment.comment}/>
                );
            })}
        </div>
    );
}

export default CommentList;