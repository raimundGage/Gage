export const Window = ({ title, content }) => {
    return (
        <section>
            
            <div className="bg-win-grey p-1 max-w-2xl border-2 shadow-[1px_1px_0_0_#000000]
                            border-l-win-light border-t-win-light border-r-win-dark border-b-win-dark">
                
                {/* Title */}
                <div className="bg-win-blue px-2 py-1 mb-2 flex justify-between items-center">
                    <span className="text-white">{title}</span>
                    <div className="flex gap-1">
                        <button className="px-1 text-xs leading-none font-bold bg-win-grey border border-l-white border-t-white border-r-black border-b-black">?</button>
                        <button className="px-1 text-xs leading-none font-bold bg-win-grey border border-l-white border-t-white border-r-black border-b-black">-</button>
                        <button className="px-1 text-xs leading-none font-bold bg-win-grey border border-l-white border-t-white border-r-black border-b-black">X</button>
                    </div>
                </div>

                {/* Content */}
                <div className="bg-win-light">
                    {content}
                </div>

            </div>

        </section>
    );
};
