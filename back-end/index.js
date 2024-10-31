import express, { request, response } from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
const port = 4000;

const users = [
  { name: "Zoloo", age: 85 },
  { name: "Dash", age: 80 },
  { name: "Zulaa", age: 75 },
];

app.get("/users", (request, response) => {
  response.send(users);
});

app.post("/users", (request, response) => {
  const { name, age } = request.body;
  response.send(request.body);

  if (!name || typeof age !== "number") {
    return response.send({ error: "name and age are required" });
  }

  const newUser = { name, age };
  users.push(newUser);
  response.send(newUser);
});
app.put("/users", (request, response) => {
  response.send("Hello Put huselt");
});

app.delete("/users", (req, res) => {
  const { name } = req.body; // Expecting name in the request body

  // Find the index of the user to delete
  const index = users.findIndex((user) => user.name === name);

  if (index === -1) {
    return res.status(404).send({ message: "User not found" });
  }

  // Remove the user from the array
  const deletedUser = users.splice(index, 1);
  res.send({ message: "User deleted successfully", user: deletedUser });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost: ${port}`);
});
