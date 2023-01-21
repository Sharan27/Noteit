# NOTEIT

### Description:
My project is called``` Noteit | A simple Notes taking App.```
It is a web-based application built using Javascript, HTML & CSS. This Notes App allows multiple users to store their notes in a secure database using Mongodb, protected using login credentials, and can be accessed at any time. This idea was developed from the struggle of continuously trying to find an online notes application on the web because having access to your notes across different platforms would be productive and it would also save the need to download an app on each and every device you want to access your note.

One thing that sets Noteit apart from other note-taking apps is that it has an inbuilt hidden notes section which would require your authentication. It has been important for me to keep my personal notes separate from all other notes. Therefore, I have decided to add a hidden section which can be only accessed by you. To make things easier, there is also an option to move notes across the hidden section and the section with all the other notes in case you had changed your mind later on :)

There are a total of 5 HTML pages that I have decided on. One for Signing up and another for logging in. The main page or rather /index.html file is the home page where all your notes would be present. To access the hidden notes, you need to login into your account again on the  /hiddenauth.html page. Once the login is successful you will be taken to the /hidden.html page which holds all your hidden notes. The pages look similar all across to maintain uniformity. I decided to keep the design simple and minimalistic since that is what most users would prefer nowadays. I have followed the same design throughout the different pages. The contrasting colours black and white are simple and best to go with if in doubt at any time.

In the database section, I have three schemas: User, Note and hidden. These stores the user credentials, your notes and the hidden notes respectively. All of these are stored using a database cluster in MongoDB. I used the free version of MongoAtlas to create a free cluster and store my user's data on it. Most of these authentications happen with the help of email and passwords. You have three basic options adding a note, deleting a note or hiding a note. All these three operations happen through APIs.

There's tons of places that could be improved and developed very much. And all I need is more time. One major security improvement would be to use encrypted usernames and passwords. Also, giving the ability to change users' password and details would improve their accessability; which can be implemented once there is more data to collect from the users.

In future, I plan to refine and hone this website to ensure it can be posted and used by the audience. I will work on this webpage even more than the dozens of hours of stress and pain that I continuously put up with to make my first webpage successful. I hope this website makes a difference to anyone who looks at it or even gives the slightest bit of inspiration. I will be uploading this webpage to GitHub for future reference. Thank you hope you enjoy it.



### How to launch the application
1. Make sure that you have Node installed
2. Clone the code: git clone <https://github.com/Sharan27/Noteit.git>
3. Run the command prompt in the folder and run npm install to install all dependencies
4. Once installed run the command npm start
5. Ctrl + click the link localhost:3000
6. You are ready to go and explore the page!
