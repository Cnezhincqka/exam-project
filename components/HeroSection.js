import React from 'react';
import { Button } from './Button';
import styles from './HeroSection.module.css';

function HeroSection() {
    return (
        <div className={styles.hero_container}>
            <video className={styles.video} src='/videos/videoMainPagemp4' controls disablePictureInPicture controlsList="nodownload" autoPlay loop muted />
            <h1>Любопытство - это фитиль в свече обучения</h1>
            <p>Мы поможем выбрать будущее</p>
            <div className={styles.hero_btns}>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    Образование
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                    Свободное время
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;