import React from "react";
import { Link } from "react-router-dom";
// import all info

export default function Subreddits() {
    const handleClick = (e) => {
       return <Link to={".../r/${e.target.type"} element={<Posts />} />
    }

    return (
        <section className="subreddits">
            <h2>Subreddits</h2>
            {
                ALL_INFO.forEach((subreddit) => {
                    <button type="subreddit" onClick={handleClick}>
                        <img src={subreddit.icon} alt="subreddit"/>
                        <p>{subreddit}</p>
                    </button>
                })
            }
        </section>
    )

}