import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Meals = ({ item, handleClick, i }) => {
  return (
    i <= 5 && (
      <>
        <div className="item">
          <h3>{item.title}</h3>
          <p className="sectionDescription">{item.description}</p>

          <p>
            <span className="price">{item.price} €</span>{" "}
            {item.popular === true && (
              <span className={"popular"}>
                <FontAwesomeIcon icon="star"></FontAwesomeIcon>
                populaire
              </span>
            )}
          </p>
        </div>
        {item.picture && (
          <div>
            <img src={item.picture} alt={item.title}></img>
          </div>
        )}
      </>
    )
  );
};

export default Meals;
