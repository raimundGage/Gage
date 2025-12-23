import { PvZPlants } from './PvZPlants';

export const Plants = () => {
    const Plants = [
        {
            name: "Jack O' Lantern",
            sunCost : 225,
            damage : 300,
        },
        {
            name: "Guacodile",
            sunCost : 125,
            damage : 20,
        },
        {
            name: "Bud'uh Boom",
            sunCost : 100,
            damage : 1000,
        }
    ];

    return (
        <section>
            <article>
                <ol className="list-decimal list-inside">
                    {Plants.map((plant) => {
                        return <PvZPlants
                        key={plant.name}
                        name={plant.name}
                        sunCost={plant.sunCost}
                        damage={plant.damage} />;
                    })}
                </ol>
            </article>
        </section>
    );
};
