// const JSON_URL = "http://localhost:4000"
// const JSON_URL = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_URL : process.env.REACT_APP_URL;
const JSON_URL = process.env.REACT_APP_URL
export const toDoTaskURL = `${JSON_URL}/tasksToDo`