/* eslint-disable react/prop-types */
import { BiComment, BiShareAlt, BiSolidDownvote, BiSolidUpvote } from 'react-icons/bi'
import { RiBookmarkLine, RiBookmarkFill } from 'react-icons/ri'
import './postCard.css'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { ForumContext } from '../../context/forumContext'

export const PostCard = ({ postData }) => {
    const navigate = useNavigate()

    const { upVote, downVote, toggleBookMark } = useContext(ForumContext)

    return (
        <div className="post-card">
            <div className="left-section">
                <div className="vote">
                    <button className="upvote" onClick={() => upVote(postData?.postId)} ><BiSolidUpvote /></button>
                    <p className="vote-quantity">{postData?.upvotes - postData?.downvotes}</p>
                    <button className="downvote" onClick={() => downVote(postData?.postId)}><BiSolidDownvote /></button>
                </div>
            </div>
            <div className="right-section">
                <div className="posted-by">
                    <div className="profile-pic-container">
                        <img src={postData?.picUrl} alt={postData?.name} />
                    </div>
                    <p className="username">Posted by <span className="name">{postData?.name}</span></p>
                    <p className="date">{new Date(postData?.createdAt).toDateString()}</p>
                </div>
                <div className="heading">
                    <p>{postData?.post}</p>
                </div>
                <div className="tag-container">
                    {postData?.tags?.map((tag, index) => <div className="tag" key={index}><p className="tag-txt">{tag}</p></div>)}
                </div>
                <p className="desc">{postData?.postDescription}</p>
                <hr className="division" />
                <div className="btn-container">
                    <button className="comment" onClick={() => navigate(`/comments/${postData?.postId}`)}><BiComment /></button>
                    <button className="share"><BiShareAlt /></button>
                    {postData?.isBookmarked
                        ?
                        <button className="bookmark-fill" onClick={() => toggleBookMark(postData?.postId)}><RiBookmarkFill /></button>
                        :
                        <button className="bookmark" onClick={() => toggleBookMark(postData?.postId)}><RiBookmarkLine /></button>}

                </div>
            </div>
        </div>
    )
}