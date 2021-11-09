const Counters = ({ counter, handlePlus, handleMoins, index }) => {
  return (
    <div>
      {counter.map((counter, index) => {
        return (
          <div>
            <span
              onClick={() => {
                handleMoins(index);
              }}
            >
              -
            </span>
            <span>{counter}</span>
            <span
              onClick={() => {
                handlePlus(index);
              }}
            >
              +
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Counters;
