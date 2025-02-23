Building and Running the Application

Prerequisites
Ensure you have the following installed:

• Node.js (v18+)
• npm (Comes with Node.js)
• Docker (For containerization)
• Git (For version control)

Install Dependencies
Run the following commands in the node-app/ directory:

cd node-app
npm install

Start the Application
npm start

The server should now be running on http://localhost:3000

3. Test the API Endpoints

You can test the API using Postman or cURL or using browser itself
Example
curl http://localhost:3000/add?num1=5&num2=10
OR
Just go to the browser: curl http://localhost:3000 and use the UI to add any two values
Expected Response:

{ "result": 15 }

4. Test the CI Pipeline

Steps to Trigger the CI/CD Workflow

The GitHub Actions pipeline runs automatically when you:

• Push changes to the main branch
• Create a pull request to main

To run the pipeline manually:

1. Make a small code change
2. Commit and push:

git add .
git commit -m "Trigger CI Pipeline"
git push origin main

3. Go to GitHub → Actions to view the pipeline status

4. Image will be pushed to the docker Hub, you can also verify over the docker hub.
