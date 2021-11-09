const Restaurant = ({ data }) => {
  return (
    <div className="restaurant">
      <div className="bloc1">
        <h1>{data.restaurant.name}</h1>
        <p>{data.restaurant.description}</p>
      </div>
      <div className="bloc2">
        <img src={data.restaurant.picture} alt="repas proposé"></img>
      </div>
    </div>
  );
};

export default Restaurant;
