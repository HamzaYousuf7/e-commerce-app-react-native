import axios from 'axios';

// local imp
import EndPoints from '../constant/EndPoints';

const apiRequest = axios.create({
  baseURL: EndPoints.BASE_URL,
  headers: {'Content-Type': 'application/json'},
});

export default apiRequest;
