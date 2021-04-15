import React from 'react';
import Link from 'next/link';
import styles from "./Cards.module.css"

function CardItem(props) {
    return (
        <>
            <li className={styles.cards__item}>
                {props.path ? (
                    <Link href={props.path}>
                        <div className={styles.cards__item__link}>
                            {
                                props.src ? (
                                    <figure className={styles.cards__item__pic_wrap} data-category={props.label}>
                                        <img
                                            className={styles.cards__item__img}
                                            src={props.src}
                                            alt=""/>
                                    </figure>
                                ) : ""
                            }
                            <div className={styles.cards__item__info}>
                                <h5 className={styles.cards__item__text}>{props.text}</h5>
                            </div>
                        </div>
                    </Link>
                ) : (
                    <div className={styles.cards__item__link}>
                        {
                            props.src ? (
                                <figure className={styles.cards__item__pic_wrap} data-category={props.label}>
                                    <img
                                        className={styles.cards__item__img}
                                        src={props.src}
                                        alt=""/>
                                </figure>
                            ) : ""
                        }
                        <div className={styles.cards__item__info}>
                            <h5 className={styles.cards__item__text}>{props.text}</h5>
                        </div>
                    </div>
                )}
            </li>
        </>
    );
}

export default CardItem;