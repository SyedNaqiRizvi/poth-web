import { NextResponse } from "next/server";

import { createClient } from "next-sanity";

const client = createClient({
  projectId: "ku9oz1vn",
  dataset:  "production",
   apiVersion: "2025-02-18",
  token: process.env.SANITY_API_TOKEN
});

export async function POST(req: Request) {
    const data = await req.json();

    const { name, email, poem, terms, location, instagram } = data
    // Basic validation
    if (!name || !email || !poem || terms !== true) {
      NextResponse.json({ error: 'Missing required fields or terms not accepted' }, {status: 400})
    }

    const author = await client.create({
      _type: "author",
      name: name,
      email: email,
      instagram: instagram,
      location: location
    }, {
      returnFirst: true
    })

    console.log(poem)
    await client.create({
      _type: "poem",
      body: [
        {
          _key: "poem",
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: poem,
              marks: []
            }
          ],
          markDefs: []
        }
      ],
      publishedAt: new Date().toISOString(),
      title: poem.split(/\r?\n/)[0],
      author: {
        _type: 'reference',
        _ref: author?._id
      }
    })
    return NextResponse.json({ success: true }, {status: 200});

}
