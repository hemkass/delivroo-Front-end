import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faStar);

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://copy-delivroo-backend.herokuapp.com/"
      );
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  //return isLoading ? <div>""</div> : <div>{data}</div>;

  return isLoading ? (
    <div>""</div>
  ) : (
    <div>
      <header>
        <img
          className="logo"
          src="https://res.cloudinary.com/dyj84szrx/image/upload/v1636392000/logo_ahs9eg.svg"
        />
      </header>
      <div className="container">
        <div className="restaurant">
          <div className="bloc1">
            <h1>{data.restaurant.name}</h1>
            <p>{data.restaurant.description}</p>
          </div>
          <div className="bloc2">
            <img src={data.restaurant.picture} alt="repas proposé"></img>
          </div>
        </div>

        <main>
          <div className="leftBar">
            {data.categories.map((item, index) => {
              {
                return (
                  <div key={index} className={index < 2 ? "leftBar" : "hidden"}>
                    <div>
                      <h2>{item.name}</h2>
                    </div>
                    <div className="test">
                      {data.categories[index].meals.map((item, index) => {
                        return (
                          <div
                            key={item.id}
                            className={index <= 4 ? "section" : "hidden"}
                          >
                            <div className="item">
                              <h3>{item.title}</h3>
                              <p className="sectionDescription">
                                {item.description}
                              </p>

                              <p>
                                <span className="price">{item.price} €</span>
                                <span
                                  className={
                                    item.popular === true ? "popular" : "hidden"
                                  }
                                >
                                  <FontAwesomeIcon icon="star"></FontAwesomeIcon>
                                  populaire
                                </span>
                              </p>
                            </div>
                            {item.picture && (
                              <div>
                                <img src={item.picture} alt={item.title}></img>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div className="sideBar"></div>
        </main>
      </div>
    </div>
  );
}

export default App;
