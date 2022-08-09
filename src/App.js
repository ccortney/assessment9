import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom";
import Menu from "./FoodMenu";
import Item from "./FoodItem";
import Suggestion from "./Suggestion";
import NotFound from "./NotFound";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState();
  const [drinks, setDrinks] = useState();
  const [counts, setCounts] = useState();

  // During first load, get all snacks, drinks, and their counts from API
  useEffect(() => {
    async function getMenu() {
      try {
        let snacks = await SnackOrBoozeApi.getSnacks();
        let drinks = await SnackOrBoozeApi.getDrinks();
        let counts = await SnackOrBoozeApi.getCounts();
        setSnacks(snacks);
        setDrinks(drinks);
        setCounts(counts);
        setIsLoading(false);
    } catch (e) {
      console.log(e);
    }}
    getMenu();
  }, []);

  // Return loading message until API call is complete
  if (isLoading) {
    return <p>Loading &hellip;</p>;
  };

  // Add a new drink or snack to the database by posting to the API. 
  // Update snacks or drinks state along with the count
  // This function is passed to the Suggestion component
  async function addSuggestion(suggestion) {
    try {
      await SnackOrBoozeApi.submitSuggestion(suggestion);
      if (suggestion.type === "snacks") {
        let snacks = await SnackOrBoozeApi.getSnacks();
        setSnacks(snacks);
        setCounts(counts => ({...counts, snack_count: counts.snack_count + 1}))
      } else {
          let drinks = await SnackOrBoozeApi.getDrinks();
          setDrinks(drinks);
          setCounts(counts => ({...counts, drink_count: counts.drink_count + 1}))
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home counts={counts}/>} />
            <Route path="/snacks" element={<Menu items={snacks} title="Snacks" />} />
            <Route path="/snacks/:id" element={<Item items={snacks} cantFind="/snacks" />} />
            <Route path="/drinks" element={<Menu items={drinks} title="Drinks" />} />
            <Route path="/drinks/:id" element={<Item items={drinks} cantFind="/drinks" />}/>
            <Route path="/suggestion" element={<Suggestion snacks={snacks} drinks = {drinks} addSuggestion={addSuggestion}/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
