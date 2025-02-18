// In-memory store for demonstration purposes.
let submissions = [];

export default function handler(req, res) {
  console.log('HERE')
  if (req.method === 'POST') {
    const { name, email, instagram, poem, terms } = req.body;
    // Basic validation
    if (!name || !email || !poem || terms !== true) {
      return res.status(400).json({ error: 'Missing required fields or terms not accepted' });
    }

    const submission = {
      id: Date.now(),
      name,
      email,
      instagram,
      poem,
      submittedAt: new Date().toISOString(),
    };

    submissions.push(submission);
    console.log('New submission:', submission);
    return res.status(200).json({ success: true });
  }
  res.setHeader('Allow', ['POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}

// Export a helper function for the admin page to retrieve submissions
export function getSubmissions() {
  return submissions;
}
