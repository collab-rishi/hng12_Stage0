# API

A simple public REST API using NodeJS and Express that returns basic information like email, current date and time and github URL to the project repository.

## How to run the project locally


### Prerequisites

Before you begin, make sure you have the following prerequisites installed on your system:

- Node.js and npm: Download and install Node.js from [nodejs.org](https://nodejs.org/).

#### Installation

- install required packages using npm

```sh
npm install express cors
```


#### Local Development setup

Clone the repository: 
````sh
   `git clone https://github.com/collab-rishi/hng12_Stage0.git`
````


Install dependencies

```sh
npm install express cors
```

#### Start the Project

- run the index file

```sh
node index.js
```
Your backend server should now be running.



## API Documentation

### Endpoint
Production: GET/ https://hng12-stage0.vercel.app/
Local: GET/ http://localhost:3000

### Base URL
The API will be running at:
Production: https://hng12-stage0.vercel.app/
Local: http://localhost:3000



### Example Response

````json
{
   "email": "your-email@example.com",
   "current_datetime": "2025-01-30T09:30:00Z",
   "github_url": "https://github.com/collab-rishi/hng12_Stage0"
}
````

## Hire Developers
* [Python developers](https://hng.tech/hire/python-developers)

* [C# developers](https://hng.tech/hire/csharp-developers)

* [GoLang developers](https://hng.tech/hire/golang-developers)

* [PHP developers](https://hng.tech/hire/php-developers)

* [Java developers](https://hng.tech/hire/java-developers)

* [NodeJS developers](https://hng.tech/hire/nodejs-developers)

