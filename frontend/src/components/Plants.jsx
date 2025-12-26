import { Plant } from './Plant';

export const Plants = () => {
    let myPlants = [
        {
            name: "Primal Peashooter",
            cost: 175,
            mintFamilyEmoji: '🔫'
        },
        {
            name: "Parsnip",
            cost: 125,
            mintFamilyEmoji: '👊'
        },
        {
            name: "Hurrikale",
            cost: 100,
            mintFamilyEmoji: '❄️'
        },
    ];

    return (
        <section>
            <ol className='list-decimal list-inside'>
                {myPlants.map((myPlant) => {
                    return (
                        <Plant key={myPlant.name} name={myPlant.name} cost={myPlant.cost} mintFamilyEmoji={myPlant.mintFamilyEmoji}/>
                    );
                })}
            </ol>
        </section>
    );
};
