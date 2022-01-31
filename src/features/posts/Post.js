import React from "react";
import Support from "../support/Support";
import Comments from "../comments/Comments";

// Component has post object in props

export default function Post() {

    const {subreddit, topic, photo, publicationTime, postId} = props.post;

    render(
        <section className="post">
            <Support subreddit={subreddit} postId={postId} />
            <h2>{topic}</h2>
            <img src={photo} />
            <Comments subreddit={subreddit} postId={postId} publicationTime={publicationTime} />
        </section>
    )
}