import { DB_HOST, DB_PORT, DB_DATABASE, MONGO_URI } from '@config';

export const dbConnection:{ url: string, options: object} = {
  url: MONGO_URI,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
};
