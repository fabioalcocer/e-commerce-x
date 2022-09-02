const API_URL = "https://api-ecommerce-x.vercel.app/api/datos";

export async function getDataProducts() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
