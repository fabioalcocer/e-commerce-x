export async function getAllProducts() {
  try {
    const response = await fetch("./src/services/data.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}