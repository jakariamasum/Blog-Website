import React from 'react';
import styles from './Card.module.css'
import Image from 'next/image';
import Link from 'next/link';
const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src='/p1.jpeg' alt='' fill className={styles.image} />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>11.02.2023</span>
                    <span className={styles.category}>Culture</span>
                </div>
                <h1 className={styles.title}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, quod.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore rerum dicta nostrum. Corrupti ad fugiat est quae impedit quam culpa!</p>
                <Link href='/'>Read more...</Link>
            </div>
        </div>
    );
};

export default Card;