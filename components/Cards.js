import React from 'react';
import styles from './Cards.module.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className={styles.cards}>
            <h1 className={styles.h1}>Выбери то, что тебя интересует!</h1>
            <div className={styles.cards__container}>
                <div className={styles.cards__wrapper}>
                    <ul className={styles.cards__items}>
                        <CardItem
                            src='images/study-1.jpg'
                            text='Более сотни учреждений образования'
                            label='Education'
                            path='/services'
                        />
                        <CardItem
                            src='images/byTime-1.jpg'
                            text='Много интересных мест'
                            label='CityInfo'
                            path='/services'
                        />
                        <CardItem
                            src='images/study-2.jpg'
                            text='Множество различных специальностей'
                            Label='Education'
                            path='/products'
                        />
                    </ul>
                    <ul className={styles.cards__items}>
                        <CardItem
                            src='images/byTime-2.jpg'
                            text='Побывай в неизвестных местах'
                            label='CityInfo'
                            path='/services'
                        />
                        <CardItem
                            src='images/study-3.jpg'
                            text='Контактные данные для всех учреждений образования'
                            label='Education'
                            path='/products'
                        />
                        <CardItem
                            src='images/byTime-3.jpg'
                            text='Мы поможет провести твой досуг'
                            label='CityInfo'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;