import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";

function MealItem({ meals }) {
  function addToCart() {}

  return (
    <div id="meals">
      {meals.map((meal) => (
        <article key={meal.id} className="meal-item">
          <img src={`http://localhost:3000/${meal.image}`} alt="" />
          <div>
            <h3>{meal.name}</h3>
            <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
            <p className="meal-item-description">{meal.description}</p>
          </div>
          <p className="meal-item-actions">
            <Button>Add to Cart</Button>
          </p>
        </article>
      ))}
    </div>
  );
}

export default MealItem;
