import axios from 'axios';

export const loadCatImage = async () => {
  try {
    axios.defaults.headers.common['x-api-key'] = process.env.CATS_API_KEY

    // Ask for 1 Image, at full resolution
    const response = await axios.get(
      'https://api.thecatapi.com/v1/images/search',
      { params: { limit:1, size:"full" } }
    );
    console.log("-- Image from TheCatAPI.com");
    // the response is an Array, so just use the first item as the Image
    return response.data[0];

  } catch(err) {
    console.log(err);
  }
}
