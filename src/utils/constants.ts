export const Constants = {
  baseUrl: 'https://stg.lottosheli.co.il', // example: https://stg.mysite.com
  resourceName: '', // example: api/v1
  defaultHeaders: {
    'Content-Type': 'application/json'
  },
  timeout: {
    response: 3000, // maximum time to wait for the first byte to arrive from the server
    deadline: 5000  // deadline for the entire request to complete
  }
};
