# Assignment: Simple Redis cache example
*Simpel test with redis cache*

## Prerequisites

To complete this assignment you will need some tool installed:

- Windows subsystem for linux (WSL) installed. [Install guide](/wsl-install-guide.md)
- Node.js [Download](https://nodejs.org/en/download/)
- PostMan or some other API-tool [Download](https://dl.pstmn.io/download/latest/win64)

#


## Assignment instructions:

*Follow the instructions below to perform the redis cache speed experiment*


## Step one: Installing Redis

First you need to install Redis and start a redis server on your Ubuntu subsystem. Follow the steps in the [Redis install guide](/redis-install-guide.md)




## Step two: Test Redis server

Lets make sure that the server is running and doing what it should do. Follow the steps below to test some simpel redis commands:

1. Open a new Ubuntu command line window
2. Start the redis command line interface, run: `redis-cli`
3. Add some data, run: `set name yourName`
4. See if the key 'name' was created, run: `keys *`
5. Read your data, run: `get name`
6. Clear all data, run: `flushall`

	- if you need to shutdown the redis server run: `shutdown`
	- if you want to exist the redis cli run: `quit`

## Step three:  Implement Redis cache to the backend

1. Clone the repo to you local machine
2. Use VScode to navigate to the repo and open a terminal
3. In the terminal run: `npm install`
4. to start the application run: `node index.js`
5. Open Postman
9. Create a GET request to: localhost:3000/images

You should now see a large json object containing a lot of data. Also notice how long the request took to complete!

10. Implement redis cache in the given code and check the request speed again.

## Resources:

- [Full Redis Demo - YouTube](https://www.youtube.com/watch?v=jgpVdJB2sKQ&ab_channel=WebDevSimplified)
- [Redis official documentation](https://redis.io/documentation)
- [ExpressJs Framework docs](https://expressjs.com/)
- [ExpressJs 'Hello World' Example](https://expressjs.com/en/starter/hello-world.html)
- [Install redis on Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-redis-on-ubuntu-18-04)