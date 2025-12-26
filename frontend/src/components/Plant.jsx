export const Plant = ({ name, cost, mintFamilyEmoji }) => {
    return (
        <section>
            <li>
                {mintFamilyEmoji} {name} Cost: {cost} ☀️
            </li>
        </section>
    );
};
