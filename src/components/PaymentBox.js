import Counters from "./Counters";
const PaymentBox = ({ bill, setBill, counter, setCounter }) => {
  const handlePlus = (index) => {
    const newCounter = [...counter];
    newCounter[index]++;
    setCounter(newCounter);
  };

  const handleMoins = (index) => {
    const newCounter = [...counter];
    newCounter[index]++;
    setCounter(newCounter);
  };

  console.log(bill);
  return (
    <div className="paymentBox">
      <div>
        <button>Valider votre panier</button>
      </div>

      <div className="test2">
        {console.log("mon compteur", counter)}
        <Counters
          counter={counter}
          handleMoins={handleMoins}
          handlePlus={handlePlus}
        />
        {bill.map((item, index) => {
          return (
            <div key={index}>
              <span key={index}>{item}</span>
            </div>
          );
        })}
      </div>
      <div></div>
    </div>
  );
};

export default PaymentBox;
