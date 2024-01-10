let apiURL: string;

// node / express backend
if (process.env.NODE_ENV === 'development') {
  apiURL = process.env.REACT_APP_API_URL || 'http://localhost:3000';
} else {
  apiURL = 'https://inventory-app-d2ik.onrender.com';
}

// will be using this for Django backend. Change the url here to switch from node backend to django backend
// !!!! CHANGE the url path in ItemService create function when making the switch to django as well
// apiUrl = 'http://localhost:8000'
// apiURL = 'http://127.0.0.1:8000'

//to hookup with spring backend
// apiURL = 'https://inventory-app-spring-backend.onrender.com';
export default apiURL;
