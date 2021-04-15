import React from 'react';
import styles from './Button.module.css';
import Link from "next/link";

const STYLES = [styles.btn_primary, styles.btn_outline];

const SIZES = [styles.btn_medium, styles.btn_large];

export const Button = ({
                        children,
                        type,
                        onClick,
                        buttonStyle,
                        buttonSize
                       }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link href='/sign-up' className='btn-mobile'>
            <button
                className={`${styles.btn} ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
    );
};