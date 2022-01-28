import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectComments, addComments } from "./commentsSlice";
// import all info from api

// We have subreddit, postId and timeOfPublication in props

export default function Comments() {
    const dispatch = useDispatch();
    let comments;
    let notHidden = false;

    // Function to upload comments into CommentsSlice
    const uploadAllComments = (data) => {
        data[props.subreddit].posts.map((post) => {
            dispatch(addComments({
                postId: postId, 
                comments: post.comments
            }));
        });
        comments = useSelector(selectComments);
    }
    // Upload comments

    const changeVisibility = () => {
        notHidden = notHidden ? false : true;
    }

    const renderCommentsView = () => {
        comments.comments[props.postId].forEach((comm) => {
            // Edit value according to object received from Reddit
            return (
                <div className="comment">
                    <p>{props.subreddit}</p>
                    <p>{comm.text}</p>
                    <p>{comm.time}</p>
                </div>
            )
        })
    }

    // Add function to compare dates if date is in Date format 

    return (
        <section className="postFooter">
            <div className="head">
                <p>{props.subreddits}</p>
                <p>{props.time} hour ago</p>
                <div className="commentsButton" onClick={changeVisibility}>
                    <img/>
                    <p>{comments.comments[props.postId].length}</p>
                </div>
                <div className="comments">
                    {notHidden && renderCommentsView}
                </div>
            </div>
        </section>
    )

}
