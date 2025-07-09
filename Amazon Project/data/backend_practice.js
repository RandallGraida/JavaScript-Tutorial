/*
  HTMLHttpRequest
    * Built-in class
    * Creates a new HTTP message to send to the backend
*/
const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
  console.log(xhr.response); 
});
/*
  GET - get some information from the backend
  URL - address for the internet, locate other computer/server from the internet
    * ex. https://amazon.com
    * URL path - ex. https://amazon.com/products
      * Status code -
        * 4 or 5 - failed
          * 4 - our problem, sent a request to URL path that is not supported
          * 5 - backend problem
        * 2 or 3 - successful     
        * Backend API 
          * API - application programming interface, how we interact with something
            * GET /
            * GET /hello
            * GET /products/first
            * GET /documentation
            * GET /images/apple.jpg
            * GET /products
            * GET /cart
            * POST /orders
            * GET /greeting
            * POST /greeting
*/
xhr.open('GET', 'https://supersimplebackend.dev/products/first');
xhr.send();