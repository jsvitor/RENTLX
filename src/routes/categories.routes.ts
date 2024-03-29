import { Router } from "express";
import multer from "multer";

import { createCategoryController } from "../modules/cars/useCases/createCategory/index";
import { importCategoriesController } from "../modules/cars/useCases/importCategories";
import { listCategoriesController } from "../modules/cars/useCases/listCategories/index";

const categoriesRoutes = Router();

const upload = multer({ dest: "./tmp" });

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRoutes.post(
  "/imports",
  upload.single("file"),
  (request, response) => {
    return importCategoriesController.handle(request, response);
  }
);

export { categoriesRoutes };
