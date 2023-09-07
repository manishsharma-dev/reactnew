import React, { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../../UI/Card/Card";
import MealItem from "../MealItem/MealItem";
const AvailableMeals = () => {
  const [mealItemList, setMealItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch(
        "https://react-http-6c75f-default-rtdb.firebaseio.com/meals.json"
      );
      var data = [];
      const loadedData = [];
      if (!response.ok) {
        throw new Error("Something went wrong");        
      } 
      data = await response.json();
      for (const key in data) {
        loadedData.push({
          id: key,
          ...data[key],
        });
      }
      setMealItem(loadedData);
    }   
      fetchMeals().then((res) => {
        setIsLoading(false);
      }).catch((err) => {
        setIsLoading(false);
        setHttpError(err.message);
      });    
  }, []);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }
  if(httpError){
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const mealsList = mealItemList.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

