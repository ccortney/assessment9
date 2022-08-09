import axios from "axios";

const BASE_API_URL = "http://localhost:8000";


class SnackOrBoozeApi {

  // Will return an array of snack data
  static async getSnacks() {
    const result = await axios.get(`${BASE_API_URL}/snacks`);
    const snack_data = {
      data: result.data,
      url: "snacks",
      title: "Snack Menu",
      description: "Welcome to our legendary snack bar! While your choices are limited, we hope you can find something you like."
    }
    return snack_data;
  }


  // Will return an array of drink data
  static async getDrinks() {
    const result = await axios.get(`${BASE_API_URL}/drinks`);
    const drink_data = {
      data: result.data,
      url: "drinks",
      title: "Drink Menu",
      description: "Welcome to our mediocre drinks bar! We have curated a few okay drinks. Drink up and you won't even notice!"


    }
    return drink_data;
  }

  // Will return an array of snack and drink counts
  static async getCounts() {
    const snack_result = await axios.get(`${BASE_API_URL}/snacks`);
    const snack_count = snack_result.data.length;

    const drink_result = await axios.get(`${BASE_API_URL}/drinks`);
    const drink_count = drink_result.data.length;

    return {snack_count: snack_count, drink_count: drink_count}
  }

  // Will return create an id from the name and post the new suggestion to the API
  static async submitSuggestion(formData) {
    const id = formData.name.split(" ").join("-").toLowerCase();
    const suggestion = {
      id: id,
      name: formData.name,
      description: formData.description,
      recipe: formData.recipe,
      serve: formData.serve
    }
    const result = await axios.post(`${BASE_API_URL}/${formData.type}`, suggestion);
    return result
  }
}

export default SnackOrBoozeApi;