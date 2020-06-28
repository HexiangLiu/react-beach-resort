import { createClient } from 'contentful';
import dotenv from 'dotenv';

dotenv.config();

export default createClient({
  space: process.env.REACT_APP_API_SPACE,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
});
