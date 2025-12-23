export const PvZPlants = (strike) => {
    const { name, sunCost, damage } = strike;
    return (
        <section>   
            <article>
                {name} {sunCost} {damage}
            </article>
        </section>
    );
};
