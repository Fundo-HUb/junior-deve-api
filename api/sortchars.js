export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST method is allowed.' });
  }

  const { data } = req.body;

  if (!data || typeof data !== 'string') {
    return res.status(400).json({ error: 'Invalid input: "data" must be a string.' });
  }

  const sortedArray = data.split('').sort();
  return res.status(200).json({ word: sortedArray });
}
