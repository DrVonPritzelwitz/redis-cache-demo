# Redis Install Guide


## Prerequisits

before you start this guide make sure you have window subsystem including Ubuntu installed on your machine.

#

Redis can be installed on linux systems like Ubuntu by using the package manager. Follow the steps below to install a redis server.



1. Go to windows start and open an Ubuntu command line window
2. Update your Ubuntu package list, run: `sudo apt-get update`
3. To install redis run: `sudo apt install redis-server`
4. To start a server run: `redis-server`
5. you should see a message that a server is running on post 6379

#

### Tips:
 - If you get a message that Redis cannot be found please try running the command below and then start again from point 2:

 `echo "nameserver 8.8.8.8" | sudo tee /etc/resolv.conf > /dev/null`