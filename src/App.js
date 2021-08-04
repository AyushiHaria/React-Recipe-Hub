//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Axios from "axios";
import RecipeTile from './recipeTile';

function App() {

  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [healthLabels, sethealthLabels] = useState("vegan")

  const YOUR_APP_ID = "5f295e13";
  const YOUR_APP_KEY = "0383c5455a9839f77bcabea1fe291841";
  
  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabels}`;
  
  async function getRecipes(){
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();   //preventDefault basically prevents the action which is by default going to occur.
                          //herein default action is on submitting page gets refreshed which we don't want.
    getRecipes();
  }

  return (
    <div className="app">
      <h1 >🍟🌭 Food Recipe Hub 🍔🍕</h1>
      <form className = "app__form" onSubmit={onSubmit}>
        <input 
          type="text" 
          placeholder="Enter Ingridients" 
          className = "app__input"
          value = {query} 
          onChange = {(e) => setquery(e.target.value)} 
        />
        <input 
          type="submit"
          value = "Search"
          className = "app__submit"
        />
        <select className="app__healthLabels">
            <option onClick={() => sethealthLabels("vegan")}>Vegan</option> 
            <option onClick={() => sethealthLabels("vegetarian")}>Vegetarian</option> 
            <option onClick={() => sethealthLabels("paleo")}>paleo</option> 
            <option onClick={() => sethealthLabels("dairy-free")}>Dairy-free</option> 
            <option onClick={() => sethealthLabels("gluten-free")}>Gluten-free</option> 
            <option onClick={() => sethealthLabels("wheat-free")}>Wheat-free</option> 
            <option onClick={() => sethealthLabels("fat-free")}>Fat-free</option> 
            <option onClick={() => sethealthLabels("low-sugar")}>Low-sugar</option> 
            <option onClick={() => sethealthLabels("egg-free")}>Egg-free</option> 
            <option onClick={() => sethealthLabels("peanut-free")}>Peanut-free</option> 
            <option onClick={() => sethealthLabels("tree-nut-free")}>Tree-nut-free</option> 
            <option onClick={() => sethealthLabels("soy-free")}>Soy-free</option> 
            <option onClick={() => sethealthLabels("fish-free")}>Fish-free</option>
            <option onClick={() => sethealthLabels("shellfish-free")}>Shellfish-free</option> 
        </select>

      </form>

      <div className="app__recipes">
          {recipes.map(recipe => {
            return <RecipeTile  recipe = {recipe} />;
          })}
      </div>
    </div>
  );  
}

export default App;
