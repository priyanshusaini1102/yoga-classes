
import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("yoga-classes");
  switch (req.method) {
    
    case "POST":
        let user = JSON.parse(req.body);
      const result = await db.collection("passes").find({email:user.email}).toArray();
      res.json({ status: 200, data: result });
      break;
  }
}

