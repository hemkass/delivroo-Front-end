import "./App.css";
import axios from "axios";

import Header from "./components/Header";
import Restaurant from "./components/Restaurant";
import Category from "./components/Category";
import PaymentBox from "./components/PaymentBox";

import { useState, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";

import { faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faStar);

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [bill, setBill] = useState([]);
  const [counter, setCounter] = useState([1]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://copy-delivroo-backend.herokuapp.com/"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.data);
      }
    };

    fetchData();
  }, []);

  const handleClick = (title, price, id) => {
    console.log("id", id);
    if (bill.indexOf(id) === -1) {
      const newBill = [...bill];
      newBill.push(id, title, price);
      setBill(newBill);
      const newCounter = [...counter];
      newCounter.push(1);
      console.log("newCounter", newCounter);
    } else {
      const result = counter + 1;
      const newBill = [...bill];
      console.log("prix", bill[bill.indexOf(id) + 2]);
      newBill[bill.indexOf(id) + 2] =
        Number(newBill[bill.indexOf(id) + 2]) + Number(price);

      setBill(newBill);
      setCounter(result);
    }
  };
  // console.log(index);

  return isLoading ? (
    <p>"Loading"</p>
  ) : (
    <div>
      <Header />
      <div className="container">
        <Restaurant data={data} />

        <main>
          <div className="leftBar">
            {data.categories.map((elem, index) => {
              return (
                <div key={index}>
                  <Category
                    index={index}
                    elem={elem}
                    data={data}
                    handleClick={handleClick}
                  />
                </div>
              );
            })}
          </div>
          <div className="sideBar">
            <PaymentBox bill={bill} counter={counter} setCounter={setCounter} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
