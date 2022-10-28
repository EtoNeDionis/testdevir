import { NextPage } from "next";
import { useRouter } from "next/router";
import { SyntheticEvent, useEffect, useState } from "react";
import { Post } from "../api/Post";
import Form from "../components/Form/Form";
import Layout from "../components/Layout";
import PostComponent from "../components/Post/PostComponent";
import { IPost } from "../models/Post";
import styles from '../styles/Doc.module.css'

export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const { data } = await Post.getPosts()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            posts: data,
        },
    }
}

interface IProps {
    posts: IPost[]
}

const doc: NextPage<IProps> = ({ posts }) => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('');

    const router = useRouter()

    const createPost = async (e: SyntheticEvent) => {
        e.preventDefault()
        await Post.addNewPost(title, content)
        setTitle('')
        setContent('')
        router.push(router.pathname)
    }

    const deletePost = async (_id: string) => {
        await Post.deletePost(_id)
        router.push(router.pathname)
    }

    return (
        <Layout title="Documents">
            <main>
                <Form
                    title={title}
                    setTitle={setTitle}
                    content={content}
                    setContent={setContent}
                />
                <button className={styles.button} onClick={e => createPost(e)}>Create Post!</button>
                <section>
                    {posts?.map(post => (
                        <PostComponent key={post._id} post={post} deletePost={deletePost} />
                    ))}
                </section>
            </main>
        </Layout>
    );
}

export default doc;