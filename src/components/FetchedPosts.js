import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchPosts} from "../redux/actions";

import Post from "./Post";
import { Loader } from "./Loader";

export default () => {
    const dipatch = useDispatch();
    const posts = useSelector(state => state.posts.fetchedPosts)
    const loading = useSelector(state => state.app.loading)

    if (loading) {
        return <Loader />
    }

    if(!posts.length) {
        return <button
            onClick={() => dipatch(fetchPosts())}
            className="btn btn-primary"
        >Upload!</button>
    }
    return posts.map(post => <Post post={post} key={post.id} />)
}