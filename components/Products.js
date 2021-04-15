import styles from "./Cards.module.css";
import CardItem from "./CardItem";
import React from "react";

function Products({region}) {
    return (
        <>
            <div className={styles.cards}>
                <div className={styles.cards__container}>
                    <div className={styles.cards__wrapper}>
                        <ul className={styles.cards__items}>
                            <CardItem
                                text='Кафе'
                                path={`/${region}/products/cafe`}
                            />
                            <CardItem
                                text='Рестораны'
                                path={`/${region}/products/restaurant`}
                            />
                            <CardItem
                                text='Парки'
                                path={`/${region}/products/park`}
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Products