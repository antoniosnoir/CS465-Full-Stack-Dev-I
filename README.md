# CS465-Full-Stack-Dev-I

**Architecture:**

_"Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA). Why did the backend use NoSQL MongoDB database?"_

For the frontend portion of this project, we used Angular to create a single-page application. Angular makes use of HTML (for content display), CSS (for styling), and JavaScript (for functionanility) while the backend used Node to make use of the routes, controllers, models, and views, which is why the NoSQL MongoDB database was used.

**Functionality:**

_"How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces? Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from resuable user interface (UI) components."_

JSON is different from JavaScript in that JSON is used to store data and JavaScript is used to hold JSON data for the frontend. One instance of this was using using JavaScript objects to convert them and transfer them to the frontend via JSON. Once this was done, HTML fields were populated that then displayed data to the user such as trip name, trip description, and any other data relevant to the trip. An example of refactoring the code involved the use of handlebars in order to improve the interface's development by reducing all the trip item HTML code to just several lines of code, as opposed to having several lines of code for each trip. To do this, we used {{#each trips}} and {{/each}} at the beginning and end of each corresponding code block.

**Testing:**

_"Methods for request and retrieval necessitate various types of API testing endpoints, in addition to the difficulties of testing with added layers of security. Explain your understandings of methods, endpoints, and security in a full stack application."_

Postman was used a lot to test using fake data to help identify issues in the program. Other tests that were used were status codes and console log messages, both of which also allowed me to narrow the scope of any potential problems. Methods are GET, which sends a "read" call to the database; POST, which sends a "create" call; PUT, which creates an "edit" call; and DELETE, which creates a "delete" call to the database. Security, as usual, is extremely important to full stack application development. 

**Reflection:**

_"How has this course helped you in reaching your professional goals? What skill shave you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?"_

This course afforded me the opportunity to work closely with full stack development. I found if very interesting and it's a career path I might consider for the future. A lot of the concepts and information was new and a bit frustrating at times to work with, but there was also a lot of satisfaction in seeing the project work as it should. 


