/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { data } from "../data/forumData";

export const ForumContext = createContext()

export const ForumHandler = ({children}) => {
    const [forumData, setForumData] = useState(data)
    const [option, setOption] = useState('')

    const upVote = (postID) => {
        setForumData({
            ...forumData,
            posts: forumData.posts.map((post) => post?.postId === postID ? {...post, upvotes: post.upvotes + 1} : post )
        })
    }
    
    const downVote = (postID) => {
        setForumData({
            ...forumData,
            posts: forumData.posts.map((post) => post?.postId === postID ? {...post, upvotes: post.upvotes - 1} : post )
        })
    }
    
    const toggleBookMark = (postID) => {
        setForumData({
            ...forumData,
            posts: forumData.posts.map((post) => post?.postId === postID ? {...post, isBookmarked: !post.isBookmarked} : post )
        })
    }

    return(
        <ForumContext.Provider value={{
            forumData,
            upVote,
            downVote,
            setForumData,
            toggleBookMark,
            option,
            setOption
        }}>
            {children}
        </ForumContext.Provider>
    )
}