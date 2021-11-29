# Assignment: Simple Redis cache example
Simpel test with redis cache

## Prerequisites

To complete this assignment you will need some tool installed:

- Windows subsystem for linux (WSL) installed. [Install guide](https://docs.microsoft.com/en-us/windows/wsl/install)
- Node.js [Download](https://nodejs.org/en/download/)
- PostMan or some other API-tool [Download](https://www.postman.com/)


## Assignment instructions:

1. Clone the repo to you local machine
2. Open a Ubuntu(Linux) Console
3. Install redis by running the following command: `apt-get redis`

4. Start a redis server by running the follwing command: `redis-server`
5. Start de redis CLI to check if the server is working: `redis-cli`

6. Test redis by using the following commands:
    - `dasdasd`
    - `dasdasd`
    - `dasdasd`
7. Use VScode to navigate to the cloned repository and run:
    - `npm install`
    - `npm start`
8. Open postman
9. create a GET request to: localhost:3000/images

You should now see a large json object conaining a lot of data. Also notice how long the request took to complete!

10. Implement redis cache in the given code and check the request speed again.

Happy Coding!