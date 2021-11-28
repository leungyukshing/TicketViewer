# Zendesk Ticket Viewer -- Intern Coding Challenge

**Author:** Yucheng Liang

**Email:** jacky14.liang@gmail.com

This repository is used for a coding challenge.

# Structure

+ `server`: A server used to manage API connection with Zendesk
+ `ticket-viewer`: A front-end application created by ReactJs

# Basic Design

This project contains 2 parts, a back end and a front end

## Backend

I will setup a nodejs http server to manage request to the Zendesk. There are a lot of advantages to do this:

1. It could avoid most CORS policy issue.
2. It could separate the API request part from the front-end part. Make sure each part focus on a specific job.
3. More Safety. Frontend user could not see how the application call the api.
4. It will be very convenient if I want to add some rate limit policy on the server side.

## Frontend

1. I use reactjs to construct a simple page.
2. The main part is a list showing the tickets, 25 tickets per page.
3. It supports use to move to next page or click a tickets to see the detail.
4. In the list view, each ticket shows its id, title, create and update time, and a short description.
5. In the ticket detail page, it shows the whole description. Of course, if the you would like to see more details of a ticket, it is very easy to add more information under this design.

# How to run

1. Please run the server. The server is a simple http server created by Nodejs, using Express.

2. **IMPORTANT**: Please make sure you substitute your access token in `handler.js`.

3. You can easily start the server by

   ```bash
   $ cd server
   $ node server.js
   ```

4. After starting the server, you can test its connection with a browser. The server will listen port 8080

5. Then you need to open the front-end, which is a browser-based application.

6. You can start the page by

   ```bash
   $ cd ticket-viewer
   $ npm install
   $ npm start
   ```

7. Then you can see the page on your brower.