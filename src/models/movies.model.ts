import { model, Schema, Document } from 'mongoose';
import { Movie } from '@interfaces/movies.interface';

const movieSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const movieModel = model<Movie & Document>('Movie', movieSchema);

export default movieModel;
