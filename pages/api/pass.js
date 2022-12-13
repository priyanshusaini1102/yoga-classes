
import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("yoga-classes");
  switch (req.method) {
    case "POST":
      let bodyObject = JSON.parse(req.body);
      // let bodyObject = req.body;
      let myPost = await db.collection("passes").insertOne(bodyObject);
      res.json({ status: 200, data: myPost });
      break;
    case "GET":
      const allPosts = await db.collection("passes").find({}).toArray();
      res.json({ status: 200, data: allPosts });
      break;
  }
}

