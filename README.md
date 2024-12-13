# Dynamic-Dashboard-Application 

1. Clone the Repository

First, clone the project repository to your local machine:
   git clone <repository-url>
   cd <repository-name>
   
2. Install Dependencies

Install all required project dependencies:

Using npm: npm install

3. Start the React Vite Application

Run the development server for the React application:

Using npm: npm run dev
   
4. Ensure db.json Exists

Make sure a db.json file exists in the project root directory. This file contains the mock database for the server.

5. Start the Server

Run the local server manually using:

Using npm: npm run serve

This command will start the server and it will be accessible at: http://localhost:3000

 
 #Implemented Features 

 1. User Management Dashboard

  Login Page: Authenticate using mock API.
  Dashboard: Fetch and display users in a table with actions (view details, delete).
  Search and Filter: Filter users by name or email.
  Pagination: Paginate the user list (5 users per page).

  2. Analytics Dashboard


  Total Users: Count of all fetched users.
  Active Users:Calculation based on a field like "status".
  Deleted Users: Track the count of deleted users during the session

  Charts Section

   User Registration Trend: A line chart showing user registrations over the past 6 months
   (mock data).
   Active vs Inactive Users: A pie chart comparing active and inactive users.
   Users by Region: A bar chart or map displaying user distribution by regions (mock region
   data).

Filters for Analytics
 Filtering analytics by:
Date range.
Region.

Responsive Design

