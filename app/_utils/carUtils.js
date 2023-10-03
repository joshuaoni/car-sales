export const getCars = async () => {
  // creating a delay to test loading page
  await new Promise(resolve => setTimeout(resolve, 1000));

  try {
    const res = await fetch('http://localhost:4000/cars');
    const data = await res.json();
    return [data, null];
  } catch (error) {
    return [null, error];
  }
}

