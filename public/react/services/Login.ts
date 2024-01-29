import axios from 'axios';
import apiURL from "../api.js";
import { SuccessfulLogin } from '../types.js';

// this will soon replace our makeshift login that uses username and no password checking or hashing

const login = async (loginCredentials): Promise<SuccessfulLogin> => {
  const response = await axios.post<SuccessfulLogin>(`${apiURL}/login`, loginCredentials);
  return response.data;
};

export default { login };