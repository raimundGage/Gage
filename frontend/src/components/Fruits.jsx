export default function Fruits() {
    const fruits = [
        "Grapes", "Pomegranate", "Raspberry", "Pear", "Cherry", "Figs"
    ];

    return(
        <section>
            <ol className="list-decimal list-inside">
                {fruits.map((frt) => (
                    <li key={frt}>{frt}</li>
                ))}
            </ol>
        </section>
    );
};
