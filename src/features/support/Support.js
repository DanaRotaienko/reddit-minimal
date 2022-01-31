import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSupports, uploadSupport, addUp, addDown, removeUp, removeDown } from "./supportSlice";
// import all info from api

// Component has subreddit and postId in props

export default function Support() {
    const dispatch = useDispatch;

    const handleClick = (e) => {
        const supports = useSelector(selectSupports);
        if (e.target.type === 'Up') {
            supports[props.postId].isUp ? removeUp(props.postId) : addUp(props.postId);
        } else {
            supports[props.postId].isDown ? removeDown(props.postId) : addDown(props.postId);
        }
    }

    const addSupport = () => {
        dispatch(uploadSupport({
            postId: props.postId,
            ups: ALL_INFO[props.subreddit][props.postId].supports.ups,
            downs: ALL_INFO[props.subreddit][props.postId].supports.downs,
            isUp: false,
            isDown: false
        }))
    }

    // addSupport here

    const calculateAverage = () => {
        const supports = useSelector(selectSupports);
        const currentUps = supports[props.postId].ups;
        const currentDowns = supports[props.postId].downs;
        return currentUps - currentDowns;
    }

    return (
        <section className="support">
            <button type="Up" onClick={handleClick}><img src="../../AdditionalIcons/arrow-up.png" /></button>
            <p>{calculateAverage}</p>
            <button type="Down" onClick={handleClick}><img src="../../AdditionalIcons/arrow-down.png" /></button>
        </section>
    )

}