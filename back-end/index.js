import express, { request, response } from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
const port = 4000;

const users = [
  { id: 1, name: "Zoloo", age: 85 },
  { id: 2, name: "Dash", age: 80 },
  { id: 3, name: "Zulaa", age: 75 },
];

app.get("/users", (request, response) => {
  response.send(users);
});

app.post("/users", (request, response) => {
  const { name, age } = request.body;

  // 1. name & age -> 2uulaa baih shaardlagatai
  // 2. name -> String, age -> number bna

  const number = Math.random() * 100;
  const result = Math.floor(number);

  try {
    if (!name || !age) {
      return response.send("Ner eswel too baihgui bna");
    } else {
      if (typeof name !== "string") {
        return response.send("Ner temdegt bish bna");
      }
      if (typeof age !== "number") {
        return response.send("Nas too bish bna");
      }

      const newUser = {
        id: result,
        name,
        age,
      };
      users.push(newUser);
      response.send(users);
    }
  } catch (error) {
    throw new Error(error);
  }
});

//   response.send(request.body);

//   if (!name || typeof age !== "number") {
//     return response.send({ error: "name and ages are required" });
//   }
//   // Check if user with same ID already exists
//   const existingUser = users.find((user) => user.id === id);
//   if (existingUser) {
//     return response.send({
//       error: "User with this ID already exists",
//     });
//   }
//   const newUser = {
//     id: id,
//     name: name,
//     age: age,
//   };
//   users.push(newUser);
//   response.send(newUser);
// });
// app.put("/users", (request, response) => {

//   response.send("Hello Put huselt");
// });

// app.delete("/users", (request, response) => {
//   const { name } = request.body; // Expecting name in the request body

//   // Find the index of the user to delete
//   const index = users.findIndex((user) => user.name === name);

//   if (index === -1) {
//     return res.status(404).send({ message: "User not found" });
//   }

//   // Remove the user from the array
//   const deletedUser = users.splice(index, 1);
//   res.send({ message: "User deleted successfully", user: deletedUser });
// });

app.listen(port, () => {
  console.log(`Server is running on http://localhost: ${port}`);
});
