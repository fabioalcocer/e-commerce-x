const API_URL = 'https://chiringuito-api.vercel.app/api/products'

export async function getDataProducts () {
  try {
    const response = await fetch(API_URL)
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}
