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
export default function UniInfo({data}) {
    return (
        <>
            <h1>Информация об Учреждении образования</h1>
            <p>Название: {data.name}</p>
            <p>{data.address}</p>
            <p>{data.phone}</p>
            <p>Email: {data.email}</p>
            <p>Сайт: <a href={data.site}>{data.site}</a></p>
            <div className={styles.cards}>
                <div className={styles.cards__container}>
                    <div className={styles.cards__wrapper}>
                        <h1>Специальности</h1>
                        <br/>
                        {
                            split(data.specs, 2).map((chunk, index) => (
                                <ul key={index} className={styles.cards__items}>
                                    {chunk.map(s => (
                                        <>
                                            <CardItem
                                                key={s.id}
                                                text={(
                                                    <>
                                                        Название: {s.speciality}
                                                        <br/>
                                                        <hr/>
                                                        Факультет: {s.faculty}
                                                        <br/>
                                                        <hr/>
                                                        Квалификация: {s.qualification}
                                                        <br/>
                                                        <hr/>
                                                        Срок обучения: {s.time}
                                                        <br/>
                                                        <hr/>
                                                        Форма обучения: {s.FoE}
                                                        <br/>
                                                        <hr/>
                                                        Бюджет/платно: {s.format}
                                                    </>
                                                )}
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