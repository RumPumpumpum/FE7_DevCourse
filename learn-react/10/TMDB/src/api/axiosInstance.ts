import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOWQ2MjJkOGQ2YTliNWFkMDAyYmRhYjJlYTA5N2NiYyIsIm5iZiI6MTc1ODcxNzIyNS45MzgsInN1YiI6IjY4ZDNlNTI5OTk3ZmEzNzFiMjBlM2JmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wEfCADIk-0k0NnvGLJcoXhLPgJrNnv3nXPbN9R_TeDc",
  },
});
