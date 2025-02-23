# Building and Running the Application

# Prerequisites

Ensure you have the following installed:

    • Node.js (v18+)
    • npm (Comes with Node.js)
    • Docker (For containerization)
    • Git (For version control)

# Install Dependencies

Run the following commands in the node-app/ directory:

    cd node-app
    npm install

# Start the Application

    npm start

The server should now be running on http://localhost:3000

# Test the API Endpoints

Test API Endpoints using Postman or cURL
You can manually test the endpoints using Postman or cURL.

    • Ping Endpoint (GET /ping)
    curl -X GET http://localhost:3000/ping

    Expected Response:
    { "message": "pong" }

    • Addition Endpoint (POST /add)
    curl -X POST http://localhost:3000/add -H "Content-Type: application/json" -d '{"a": 5, "b": 10}'

    Expected Response:
    { "result": 15 }

    • Invalid Input (POST /add with missing numbers)
    curl -X POST http://localhost:3000/add -H "Content-Type: application/json" -d '{"a": 5}'

    Expected Response:
    { "error": "Invalid input" }

# Test the CI Pipeline

Steps to Trigger the CI/CD Workflow

The GitHub Actions pipeline runs automatically when you:

    • Push changes to the main branch
    • Create a pull request to main

# To run the pipeline manually:

1. Make a small code change
2. Commit and push:

   git add .
   git commit -m "Trigger CI Pipeline"
   git push origin main

# Go to GitHub → Actions to view the pipeline status

# Image will be pushed to the docker Hub, you can also verify over the docker hub.
