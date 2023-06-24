import { useContext } from 'react'
import './homePage.css'
import { ForumContext } from '../../context/forumContext'
import { PostCard } from '../../components/postCard/postCard'

export const HomePage = () => {
    const { forumData, option } = useContext(ForumContext)

    return (
        <div className="home-page page">
            {(() => {
                switch (option) {
                    case 'latest':
                        return <p className="declaration">Latest Posts</p>
                    case 'upvoted':
                        return <p className="declaration">Trending Posts</p>
                    default:
                        return <p className="declaration"></p>
                }
            })()}
            {forumData?.posts?.map((post) => (
                <PostCard postData={post} key={post?.postId} />
            ))}
        </div>
    )
}