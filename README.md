#What URL should be used to access your application?
It can either be run locally using the server.js file or accessed on Heroku at https://serene-brushlands-33734.herokuapp.com/ .

#What libraries did you use to write your application?
Angular, Bootstrap and Sweetalert.

#What influenced the design of your user interface?
A user accessing a site like this is probably just trying to get some information quickly and easily, so I went with that
philosophy in creating the site. I prefer clean, uncluttered user interfaces that present the information in a simple way. Brighter colored
sites also hurt my eyes (I'M LOOKING AT YOU, CNN.COM), which is why I always go for cooler colors when creating a site.  

#What steps did you take to make your application user friendly?
I made sure that any form validation errors were clearly shown to the user. I have a Sweetalert that appears when the user
enters an incorrect username/password conversation. I also made sure the user knew what fields have to be filled out in order
for a form to be submitted. Lastly, I made sure there was a clear and visible way of accessing the entire list of states again
after selecting a state from the dropdown menu.

#What steps did you take to insure your application was secure?
I created an isLoggedin function that runs on every page besides the login page. This function checks to see that the
user's credentials are stored in the cookies, and if they are takes them to the point. If not, they cannot acccess that part of the
site and are redirected back to the login page.

#What could be done to the front end or back end to make it more secure?
I would add some kind of encryption when submitting a username/password, whether it be salting them or using a hashtable.
I would also not store any user information in the server file, but rather in a secure database. Additionally, I would implement
session timeouts that log the user out if they are inactive for a certain period of time. Last, I would add some sort of two-step
authentication using an email address or phone number.
