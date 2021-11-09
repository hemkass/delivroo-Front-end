import Meals from "./Meals";

const Category = ({ index, elem, data, handleClick }) => {
  return (
    index < 2 && (
      <>
        <div>
          <h2>{elem.name}</h2>
        </div>
        <div className="category">
          {data.categories[index].meals.map((item, i) => {
            return (
              <div
                key={item.id}
                className={"sectionblock"}
                onClick={() => handleClick(item.title, item.price, item.id)}
              >
                <Meals
                  handleClick={handleClick}
                  item={item}
                  i={i}
                  id={item.id}
                />
              </div>
            );
          })}
        </div>
      </>
    )
  );
};

export default Category;
