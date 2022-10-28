import { FC } from 'react';
import Showdown from 'showdown';
import { IPost } from '../../models/Post';
import styles from './Post.module.css'
import MarkdownView from 'react-markdown';

interface IProps {
    post: IPost
    deletePost: (arg0: string) => void
}

const Post: FC<IProps> = ({ post, deletePost }) => {
    return (
        <article className={styles.post}>
            <button onClick={() => deletePost(post._id)}>delete post</button>
            <div className={styles.title}>{post.title}</div>
            <MarkdownView className={styles.content} children={post.content} />
        </article>
    );
}

export default Post;