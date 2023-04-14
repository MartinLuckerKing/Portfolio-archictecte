import { categoriesFetchUrl } from "/FrontEnd/assets/categories.js";
import { galleryFetchUrl } from "./gallery.js";

const root = ('http://localhost:5678/api/')

categoriesFetchUrl(root + 'categories')
galleryFetchUrl(root + 'works')
