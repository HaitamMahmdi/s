const fakeStoreData = async function fetchProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error(`${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Propagate the error if needed
  }
};
const data = await fakeStoreData();
export { data };
