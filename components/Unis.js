import styles from "./Cards.module.css";
import CardItem from "./CardItem";

function split(input, maxLength) {
    if (!Array.isArray(input)) {
        throw new TypeError('Expected an array to split');
    }

    if (typeof maxLength !== 'number') {
        throw new TypeError('Expected a number of groups to split the array in');
    }

    var result = [];
    var part = [];

    for (var i = 0; i < input.length; i++) {
        part.push(input[i]);

        // check if we reached the maximum amount of items in a partial
        // or just if we reached the last item
        if (part.length === maxLength || i === input.length - 1) {
            result.push(part);
            part = [];
        }
    }

    return result;
}

export default function Unis({data, region}) {
    return (
        <>
            <h1>Учреждения образования</h1>
            <div className={styles.cards}>
                <div className={styles.cards__container}>
                    <div className={styles.cards__wrapper}>
                        <h2>Университеты</h2>
                        <br/>
                        {
                            split(data.filter(uni => !/колледж/gi.test(uni.name)), 4).map(chunk => (
                                <ul className={styles.cards__items}>
                                    {chunk.map(uni => (
                                        <>
                                            <CardItem
                                                path={`${region}/${uni.id}`}
                                                text={uni.name}
                                            />
                                            <br/>
                                        </>
                                    ))}
                                </ul>
                            ))
                        }
                        <br/>
                        <h2>Колледжи</h2>
                        <br/>
                        {
                            split(data.filter(uni => /колледж/gi.test(uni.name)), 4).map(chunk => (
                                <ul className={styles.cards__items}>
                                    {chunk.map(uni => (
                                        <>
                                            <CardItem
                                                path={`${region}/${uni.id}`}
                                                text={uni.name}
                                            />
                                            <br/>
                                        </>
                                    ))}
                                </ul>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}