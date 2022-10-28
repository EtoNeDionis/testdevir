import { FC, SyntheticEvent } from 'react';
import styles from './Form.module.css'
import "react-mde/lib/styles/css/react-mde-all.css";
import ReactMde from "react-mde";
import Showdown from "showdown"

interface FormProps {
    title: string
    setTitle: (arg0: string) => void
    content: string
    setContent: (arg0: string) => void
}

const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true
});

const Form: FC<FormProps> = ({ content, setContent, setTitle, title }) => {
    return (
        <form className={styles.form}>
            <div className={styles.title}>
                <div><label>Title</label></div>
                <input onChange={e => setTitle(e.target.value)} value={title} placeholder="title" type='text' />
            </div>
            <div className={styles.content}>
                <div><label>Content</label></div>
                <div className={styles.content__input}>
                    <ReactMde value={content} onChange={setContent}
                        generateMarkdownPreview={markdown => Promise.resolve(converter.makeHtml(markdown))} />
                </div>
            </div>
        </form>
    );
}

export default Form;