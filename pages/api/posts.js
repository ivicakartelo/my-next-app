import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get(
      'https://640114a00a2a1afebee5c77d.mockapi.io/post1'
    );
    const data = response.data;

    // Return the data as JSON
    res.status(200).json(data);
  } catch (error) {
    // Handle errors appropriately
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Unable to fetch data' });
  }
}