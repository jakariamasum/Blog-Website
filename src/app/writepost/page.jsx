'use client'
import Image from 'next/image';
import styles from './Write.module.css';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const Write = () => {
    const [open, setOpen] = useState(false);
    const { data, status } = useSession();
    const router = useRouter();
    if (status === 'loading') {
        return (
            <div className={styles.loading}>Loading</div>
        )
    }
    if (status === 'authenticated') {
        return (
            router.push('/')
        )
    }
    return (
        <div className={styles.container}>
            <input type="text" placeholder='Title' />
            <div className={styles.editor}>
                <div className={styles.buttton}>
                    <Image src='/plus.png' alt='' width={16} height={16} />
                    {
                        open && (
                            <div className={styles.add}>
                                <button className={styles.addButton}>
                                    <Image src='/image.png' alt='' width={16} height={16} />
                                </button>
                                <button className={styles.addButton}>
                                    <Image src='/external.png' alt='' width={16} height={16} />
                                </button>
                                <button className={styles.addButton}>
                                    <Image src='/video.png' alt='' width={16} height={16} />
                                </button>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Write;