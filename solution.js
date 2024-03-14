//In this part, we import the necessary modules
// express is the web framework that helps us handle routing and other functionalities for the server, while body-parser is used to parse incoming request bodies.
import express from "express";
import bodyParser from "body-parser";

//We create an Express application using express() and set the port number to 3000. The application will listen on this port for incoming requests.
const app = express();
const port = 3000;

//The recipeJSON variable holds a JSON-formatted string containing information about different taco recipes. It is stored as a string to be later parsed into an array of objects representing each recipe.
const recipeJSON =
  '[{"id": "0001","type": "taco","name": "Chicken Taco","price": 2.99,"ingredients": {"protein": {"name": "Chicken","preparation": "Grilled"},  "salsa": {"name": "Tomato Salsa","spiciness": "Medium"},  "toppings": [{"name": "Lettuce",  "quantity": "1 cup",  "ingredients": ["Iceberg Lettuce"]  },      {"name": "Cheese",  "quantity": "1/2 cup",  "ingredients": ["Cheddar Cheese", "Monterey Jack Cheese"]  },      {"name": "Guacamole",  "quantity": "2 tablespoons",  "ingredients": ["Avocado", "Lime Juice", "Salt", "Onion", "Cilantro"]  },      {"name": "Sour Cream",  "quantity": "2 tablespoons",  "ingredients": ["Sour Cream"]  }      ]    }  },{"id": "0002","type": "taco","name": "Beef Taco","price": 3.49,"ingredients": {"protein": {"name": "Beef","preparation": "Seasoned and Grilled"},  "salsa": {"name": "Salsa Verde","spiciness": "Hot"},  "toppings": [{"name": "Onions",  "quantity": "1/4 cup",  "ingredients": ["White Onion", "Red Onion"]  },      {"name": "Cilantro",  "quantity": "2 tablespoons",  "ingredients": ["Fresh Cilantro"]  },      {"name": "Queso Fresco",  "quantity": "1/4 cup",  "ingredients": ["Queso Fresco"]  }      ]    }  },{"id": "0003","type": "taco","name": "Fish Taco","price": 4.99,"ingredients": {"protein": {"name": "Fish","preparation": "Battered and Fried"},  "salsa": {"name": "Chipotle Mayo","spiciness": "Mild"},  "toppings": [{"name": "Cabbage Slaw",  "quantity": "1 cup",  "ingredients": [    "Shredded Cabbage",    "Carrot",    "Mayonnaise",    "Lime Juice",    "Salt"          ]  },      {"name": "Pico de Gallo",  "quantity": "1/2 cup",  "ingredients": ["Tomato", "Onion", "Cilantro", "Lime Juice", "Salt"]  },      {"name": "Lime Crema",  "quantity": "2 tablespoons",  "ingredients": ["Sour Cream", "Lime Juice", "Salt"]  }      ]    }  }]';


//This line tells Express to serve static files from the "public" directory. This is useful for serving client-side assets like CSS, images, or JavaScript files.
app.use(express.static("public"));
//This line sets up the body-parser middleware to parse incoming request bodies with URL-encoded payloads. This allows us to extract data sent from the client-side, such as form submissions.
app.use(bodyParser.urlencoded({ extended: true }));

let data;

//This code sets up a route for handling GET requests to the root URL ("/"). It uses the res.render method to render the "solution.ejs" template and pass the data (recipe information) as a variable to be used in the template.
app.get("/", (req, res) => {
  res.render("solution.ejs", { recipe: data });
});


//This code sets up a route for handling POST requests to the "/recipe" URL. It uses the req.body object to get the selected choice (either "chicken", "beef", or "fish") sent from the client-side form. Based on the choice, it assigns the corresponding recipe data from the recipeJSON array to the data variable. Finally, it redirects the user back to the homepage ("/") after processing the selection.
app.post("/recipe", (req, res) => {
  switch (req.body.choice) {
    case "chicken":
      data = JSON.parse(recipeJSON)[0];
      break;
    case "beef":
      data = JSON.parse(recipeJSON)[1];
      break;
    case "fish":
      data = JSON.parse(recipeJSON)[2];
      break;
    default:
      break;
  }
  res.redirect("/");
});

//This line starts the server and makes it listen on the specified port (in this case, 3000). When the server starts running, it logs a message to the console to indicate that it is running and listening for incoming requests.
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
