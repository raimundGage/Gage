export const Marquee = ({ icon, name, from }) => {
    return(
        <section>
            <div className="@container bg-black overflow-hidden whitespace-nowrap my-2 cursor-help">
                <div className="text-neon-green inline-block font-serif animate-marquee">
                    +-+ {icon} {name} from {from} +-+
                </div>
            </div>
        </section>
    );
};
