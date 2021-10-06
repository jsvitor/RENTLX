import { Router } from "express";

import { Category } from "../model/Category";

const categoriesRoutes = Router();

const categories: Category[] = []; // um array onde dentro dele terá elementos do tipo Category

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  // const category = new Category();
  // category.name = name;
  // category.description = description;
  // poderia ser dessa forma, mas ela não é tão eficiente quanto o uso do Object.assign

  const category = new Category(); // instanciando a classe para chamar o constructor

  Object.assign(category, {
    name,
    description,
    created_at: new Date(),
  });

  categories.push(category);

  return response.status(200).json({ categories });
});

export { categoriesRoutes };
