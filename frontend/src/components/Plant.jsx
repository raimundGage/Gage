export const Plant = ({ name, cost, mintFamilyEmoji }) => {
  return (
    <>
      {cost > 100 ? (
        <li>
          { mintFamilyEmoji } { name } { cost } ☀️
        </li>
      ) : (
        ""
      )}
    </>
  );
};
