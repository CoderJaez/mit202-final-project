import { bootstrap } from "server";
import dotenv from "dotenv";

dotenv.config();

const { PORT, API_URL } = process.env;

export const App = () => {
  bootstrap().listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}${API_URL}`);
  });
};
