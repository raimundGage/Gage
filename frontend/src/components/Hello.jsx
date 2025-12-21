const Hello = ({dude}) => {
    return (
        <section>
            <h1>
                {dude.greetedBy}, {dude.name} {dude.emoji}! ur seat numbers are {dude.seatNumbers} ^^
            </h1>
        </section>
    );
};

export default Hello;
