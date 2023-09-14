import React from 'react';
import styles from './AuthLinks.module.css'
import Link from 'next/link';
const AuthLinks = () => {
    const isLogin=false;
    return (
        <div>
            {
                isLogin?<>
                <Link href='/write'>Write</Link>
                <span className={styles.link}>LogOut</span>
                </>:<Link href='/login'>Login</Link>
            }
        </div>
    );
};

export default AuthLinks;