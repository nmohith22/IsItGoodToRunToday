import axios from 'axios';


const BASE_URL = 'http://localhost:5000/api';

export async function getPrediction(city) {
  try {
    const response = await axios.get(`${BASE_URL}/predict`, { params: { city } });
    return response.data;
  } catch (error) {
    console.error('Error fetching prediction:', error);
    throw error;
  }
}