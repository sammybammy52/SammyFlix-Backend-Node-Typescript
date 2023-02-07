import { CreateMovieDto } from '@/dtos/movies.dto';
import { Movie } from '@/interfaces/movies.interface';
import { NextFunction, Request, Response } from 'express';
import MovieService from '@/services/movie.service';

class IndexController {
  public movieService = new MovieService()
  public index = (req: Request, res: Response, next: NextFunction) => {
    try {
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  };

  public allMovies = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllMoviesData: Movie[] = await this.movieService.findAllMovies();

      res.status(200).json({ data: findAllMoviesData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  }

  public singleMovie = async(req: Request, res: Response, next: NextFunction) => {
    try {
      const movieId: string = req.params.id;
      const findOneMovieData: Movie = await this.movieService.findMovieById(movieId);

      res.status(200).json({ data: findOneMovieData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  }

  public store = async(req: Request, res: Response, next: NextFunction) => {
    try {
      const movieData:CreateMovieDto = req.body;
      const createMovieData: Movie = await this.movieService.createMovie(movieData);
      res.status(201).json({ data: createMovieData, message: 'created' });
    } catch (error) {
      next(error)
    }
  }
}


export default IndexController;
