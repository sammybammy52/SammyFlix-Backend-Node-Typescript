import { CreateMovieDto } from "@/dtos/movies.dto";
import { isEmpty } from '@utils/util';
import { HttpException } from '@exceptions/HttpException';
import { Movie } from "@/interfaces/movies.interface";
import movieModel from "@/models/movies.model";

export default class MovieService {

  public movies = movieModel;

  public async createMovie(movieData:CreateMovieDto){
    if (isEmpty(movieData)) throw new HttpException(400, 'movieData is empty');

    const findMovie: Movie = await this.movies.findOne({ title: movieData.title });
    if (findMovie) throw new HttpException(409, `This email ${movieData.title} already exists`);

    const createMovieData:Movie = await this.movies.create(movieData);
    return createMovieData;
  }

  public async findAllMovies():Promise<Movie[]>
  {
    const movies:Movie[] = await this.movies.find();
    return movies;
  }

  public async findMovieById(movieId:string):Promise<Movie>
  {
    if (isEmpty(movieId)) throw new HttpException(400, 'movieId is empty');

    const findMovie: Movie = await this.movies.findOne({ _id: movieId });
    if (!findMovie) throw new HttpException(409, "Movie doesn't exist");

    return findMovie;
  }
}
