# Assignment: Simple Redis cache example
*Simpel test with redis cache*

## Prerequisites

To complete this assignment you will need some tool installed:

- Windows subsystem for linux (WSL) installed. [Install guide](https://docs.microsoft.com/en-us/windows/wsl/install)
- Node.js [Download](https://nodejs.org/en/download/)
- PostMan or some other API-tool [Download](https://www.postman.com/)

#


## Assignment instructions:

*Follow the instructions below to perform the redis cache speed experiment*


### First you need to install Redis and start a redis server

1. Go to windows start and open an Ubuntu command line window
2. To install redis run: `apt-get install redis`
2. To start a server run: `redis-server`
3. you should see a message that a server is running on post 6379

### Next we should test if the server works

1. Open a second Ubuntu command line window
2. Start the redis command line interface, run: `redis-cli`
3. Add some data, run: `set name yourName`
4. Read your data, run: `get name`
5. Clear all data, run: `flushall`

	- if you need to shutdown the redis server run: `shutdown`
	- if you want to exist the redis cli run: `quit`

### Finally we need to implement redis to the backend

1. Clone the repo to you local machine

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