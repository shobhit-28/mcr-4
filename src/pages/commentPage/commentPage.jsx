import { useParams } from 'react-router-dom'
import './commentPage.css'
import { useContext } from 'react'
import { ForumContext } from '../../context/forumContext'
import { PostCard } from '../../components/postCard/postCard'
import { BiComment, BiShareAlt } from 'react-icons/bi'
import { AiOutlineHeart } from 'react-icons/ai'

export const CommentPage = () => {
    const { postID } = useParams()

    const { forumData } = useContext(ForumContext)

    return (
        <div className="home-page page">
            <p className="head">Comment</p>
            <PostCard postData={forumData?.posts?.find((post) => post?.postId === postID)} />
            <div className="comment-section">
                {forumData?.posts?.find((post) => post?.postId === postID)?.comments?.map((comment) => (
                    <div className="comment" key={comment?.commentId}>
                        <div className="profile-pic-container">
                            <img src={comment?.picUrl} alt="" />
                        </div>
                        <p className="name">{comment?.name}</p>
                        <p className="username">{comment?.username}</p>
                        <p className="date">{new Date(comment?.createdAt).toDateString()}</p>
                        <p className="posted-by">Replying to {forumData?.posts?.find((post) => post?.postId === postID)?.name}</p>
                        <p className="comment-txt">{comment?.comment}</p>
                        <div className="btn-container">
                            <button className="like"><AiOutlineHeart /></button>
                            <button className="comment"><BiComment /></button>
                            <button className="share"><BiShareAlt /></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}