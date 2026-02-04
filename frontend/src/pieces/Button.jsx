export const Button = ({ buttonLabel }) => {
  return (
    <>
      <button
        className="bg-win-grey px-2 py-1 active:border-l-win-dark active:border-t-win-dark active:border-r-win-light active:border-b-win-light
                   border-2 border-l-win-light border-t-win-light border-r-win-dark border-b-win-dark max-w-fit
                  font-bold active:text-win-blue">

        {buttonLabel}

      </button>
    </>
  );
};
