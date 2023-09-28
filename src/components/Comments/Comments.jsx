'use client'
import Link from 'next/link';
import styles from './Comments.module.css';
import Image from 'next/image';
import { useState } from 'react';

const Comments = () => {
    const status="authenticated";
    const [desc, setDesc] = useState("");
    const handleSubmit = async () => {
        
      };
    return (
        <div className={styles.container}>
        <h1 className={styles.title}>Comments</h1>
        {status === "authenticated" ? (
          <div className={styles.write}>
            <textarea
              placeholder="write a comment..."
              className={styles.input}
              onChange={(e) => setDesc(e.target.value)}
            />
            <button className={styles.button} onClick={handleSubmit}>
              Send
            </button>
          </div>
        ) : (
          <Link href="/login">Login to write a comment</Link>
        )}
        <div className={styles.comments}>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src='/p1.jpeg' alt='' className={styles.image} width={50} height={50}/>
                    <div className={styles.userInfo}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}>01.01.2023</span>
                    </div>
                </div>
                <p className={styles.userInfo}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus temporibus harum repudiandae enim recusandae ab eveniet, necessitatibus nostrum saepe aperiam quos esse aliquid ipsum iste!
                </p>
            </div>
        </div>
      </div>
    );
};

export default Comments;