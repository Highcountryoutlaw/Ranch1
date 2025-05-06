
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, wallet } = req.body;

    console.log("New booking:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Wallet:", wallet);

    res.status(200).json({ message: 'Booking successful!' });
  } else {
    res.status(405).json({ message: 'Only POST requests allowed' });
  }
}
