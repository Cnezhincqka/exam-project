import styles from "./Cards.module.css";
import CardItem from "./CardItem";
import React from "react";

function CardsEducation() {
    return (
        <>
            <div className={styles.cards}>
                <h1 className={styles.h1}>Образование</h1>
                <h1 className={styles.h1}>Выберите интересующую вас область</h1>
                <div className={styles.cards__container}>
                    <div className={styles.cards__wrapper}>
                        <ul className={styles.cards__items}>
                            <CardItem
                                src='Regions/BrestRegion.gif'
                                text='Брестская область'
                                path="/brest"
                            />
                            <CardItem
                                src='Regions/VitebskRegion.gif'
                                text='Витебская область'
                                path="/vitebsk"
                            />
                            <CardItem
                                src='Regions/GomelRegion.gif'
                                text='Гомельская область'
                                path="/gomel"
                            />
                        </ul>
                        <ul className={styles.cards__items}>
                            <CardItem
                                src='Regions/GrodnoRegion.gif'
                                text='Гродненская область'
                                path="/grodno"
                            />
                            <CardItem
                                src='Regions/MinskRegion.gif'
                                text='Минская область'
                                path="/minsk"
                            />
                            <CardItem
                                src='Regions/MogilevRegion.gif'
                                text='Могилевская область'
                                path="/mogilev"
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CardsEducation