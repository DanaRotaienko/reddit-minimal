import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPosts, selectPosts } from "./postsSlice";
import Post from "./Post";
import { ALL_INFO } from "../../utilities/Reddit";

export default function Posts() {

    const dispatch = useDispatch();

    const uploadPosts = () => {
        ALL_INFO.forEach((subreddit) => {
            subreddit.forEach((post) => {
                dispatch(addPost({
                    subreddit: subreddit,
                    topic: post.topic,
                    photo: post.photo,
                    publicationTime: post.publicationTime,
                    postId: post.postId
                }))
            })
        });
    }

    // Upload posts

    const displayBySearch = (term) => {
        const posts = useSelector(selectPosts);
        return posts.forEach((subreddit) => {
            subreddit.filter((post) => {
                post.topic.includes('');
            }).forEach((post) => {
                <Post post={post} />
            })
        })
    }

    displayBySubreddit = (subreddit) => {
        const posts = useSelector(selectPosts);
        return posts.subreddit.forEach((post) => {
            <Post post={post} />
        })
    }

    const displayAll = () => {
        const posts = useSelector(selectPosts);
        return posts.forEach((subreddit) => {
            subreddit.forEach((post) => {
                <Post post={post} />
            })
        })
    }
    
    const checkDisplayMode = (mode, value) => {
        if (mode === 'search') {
            displayBySearch(value);
        } else if (mode === 'subreddit') {
            displayBySubreddit(value);
        } else {
            displayAll();
        }
    }

    const selectPosts = () => {
        // take current link path and divide values from it to value and mode
        checkDisplayMode(mode, value);
    }

    return(
        <section className="posts">
            {selectPosts()}
        </section>
    )

}
 