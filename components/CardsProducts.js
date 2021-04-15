import styles from "./Cards.module.css";
import CardItem from "./CardItem";
import React from "react";

function CardsEducation() {
    return (
        <>
            <div className={styles.cards}>
                <h1 className={styles.h1}>Узнай город лучше</h1>
                <h1 className={styles.h1}>Выберите интересующую вас область</h1>
                <div className={styles.cards__container}>
                    <div className={styles.cards__wrapper}>
                        <ul className={styles.cards__items}>
                            <CardItem
                                src='Regions/BrestRegion.gif'
                                text='Брестская область'
                                path="/brest/products"
                            />
                            <CardItem
                                src='Regions/VitebskRegion.gif'
                                text='Витебская область'
                                path="/vitebsk/products"
                            />
                            <CardItem
                                src='Regions/GomelRegion.gif'
                                text='Гомельская область'
                                path="/gomel/products"
                            />
                        </ul>
                        <ul className={styles.cards__items}>
                            <CardItem
                                src='Regions/GrodnoRegion.gif'
                                text='Гродненская область'
                                path="/grodno/products"
                            />
                            <CardItem
                                src='Regions/MinskRegion.gif'
                                text='Минская область'
                                path="/minsk/products"
                            />
                            <CardItem
                                src='Regions/MogilevRegion.gif'
                                text='Могилевская область'
                                path="/mogilev/products"
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CardsEducation