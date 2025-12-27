export const Window = ({ title, content, grantlyIMG }) => {
  return (
    <section>
      <div
        className="bg-win-grey max-w-2xl border-2 p-1
                   border-l-win-light border-t-win-light border-r-win-dark border-b-win-dark
                     shadow-[1px_1px_0_0_#000000]"
      >

        {/* Title */}
        <div className="bg-win-blue px-2 py-1 mb-2 flex justify-between items-center">
          <span className="text-white text-sm font-bold tracking-wide">{title}</span>
          <div className="flex gap-1">
            <button className="bg-win-grey text-xs font-bold leading-none px-1 border border-l-white border-t-white border-r-black border-b-black">?</button>
            <button className="bg-win-grey text-xs font-bold leading-none px-1 border border-l-white border-t-white border-r-black border-b-black">-</button>
            <button className="bg-win-grey text-xs font-bold leading-none px-1 border border-l-white border-t-white border-r-black border-b-black">X</button>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white border-2 border-win-dark p-4 font-serif">
          <img src={grantlyIMG} />
        </div>

      </div>
    </section>
  );
};
