import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({ content, onDeleteComment}) {
    const [likeCount, setLikeCount] = useState(0);

function handleDeleteComment() {
    console.log('deletar')

    onDeleteComment(content);
}

function handleLikeComment() {
    setLikeCount((state) => {
        return state + 1
    });
}

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/diego3g.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                        <strong>Diego Fernandes</strong>
                        <time title='28 de dezembro de 2023 às 23:04h' dateTime='2023-05-11 08:13:30'>Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp size={20}/>
                    Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}