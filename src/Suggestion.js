import {useState} from "react"
import {useNavigate} from "react-router-dom";
import "./Suggestion.css"

// displays a form for adding a new menu item
function Suggestion({snacks, drinks, addSuggestion}) {

  const initial_state = {
    type: "",
    name: "",
    description: "",
    recipe: "",
    serve: ""
  };

  const [formData, setFormData] = useState(initial_state);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(formData => ({...formData, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let snack = snacks.data.find(snack => snack.id === formData.name.split(" ").join("-").toLowerCase());
    let drink = drinks.data.find(drink => drink.id === formData.name.split(" ").join("-").toLowerCase());
    if (snack || drink) {
      alert("That item is already on the menu!")
    } else {
      addSuggestion(formData);
      navigate(`/${formData.type}`);
    }
  }


  return (
    <div className = "SuggestionForm">
      <h3>Add a Suggestion</h3>
        <form onSubmit={handleSubmit} className="SuggestionForm-form">
          <div className = "SuggstionForm-row1">
            <label htmlFor="type">Type
              <select value={formData.type} onChange={handleChange} name="type" >
                <option value="">--Choose an Option--</option>
                <option value="snacks">snacks</option>
                <option value="drinks">drinks</option>
              </select>
            </label>

            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="SuggestionForm-name"
              value={formData.name}
              onChange={handleChange}
            />

            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              name="description"
              className="SuggestionForm-description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          
          <div className = "SuggstionForm-row2">
            <label htmlFor="recipe">Recipe</label>
            <input
              type="text"
              id="recipe"
              name="recipe"
              className="SuggestionForm-recipe"
              value={formData.recipe}
              onChange={handleChange}
            />

            <label htmlFor="serve">Serving Instructions</label>
            <input
              type="text"
              id="serve"
              name="serve"
              className="SuggestionForm-serve"
              value={formData.serve}
              onChange={handleChange}
            />
          </div>
          

          <button>Submit Suggestion</button>
        </form>
    </div>
  );
}

export default Suggestion;