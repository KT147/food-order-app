import { useEffect, useState } from "react";
import MealItem from "./MealItem";

function Meals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/meals")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch meals");
        }
        return res.json();
      })
      .then((json) =>
        setMeals(json)
      );
  }, []);

  return (
    <MealItem meals={meals} />
  );
}

export default Meals;
