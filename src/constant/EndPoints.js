const _Environments = {
  development: {
    BASE_URL: 'https://jsonplaceholder.typicode.com', //'localhost:5000/api',
    TEST: '/posts',
  },
  production: {
    BASE_URL: '',
  },
};

const getEnvironment = () => {
  const platform = 'development';
  return _Environments[platform];
};

const Environment = getEnvironment();
export default Environment;
