import { BASE_URL } from "@store/config";
import axios from "axios";

export const fetchCategoriesData = async () => {
  try {
    console.log("Fetching categories from:", `${BASE_URL}/category`);
    const response = await axios.get(`${BASE_URL}/category`);
    
    console.log("API Response:", response.data); // Log full response

    // Ensure response structure is correct
    if (!response.data?.categories) {
      throw new Error("Invalid API response structure");
    }

    return response.data.categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error; // Ensure saga catches it
  }
};
