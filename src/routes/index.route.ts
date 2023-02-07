import { Router } from 'express';
import IndexController from '@controllers/index.controller';
import { Routes } from '@interfaces/routes.interface';

class IndexRoute implements Routes {
  public path = '/';
  public router = Router();
  public indexController = new IndexController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.indexController.index);
    this.router.get(`${this.path}allmovies`, this.indexController.allMovies);
    this.router.get(`${this.path}movie/:id`, this.indexController.singleMovie);
    this.router.post(`${this.path}store-movie`, this.indexController.store);
  }
}

export default IndexRoute;
