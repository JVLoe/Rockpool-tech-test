# Task - Angular - 45 minutes

You are working with a marketing company who is branching out into new markets.

They need a web application to capture the interest and comments of other businesses in that region along with some key user information.

Please create an Angular (7+) application using typescript that meets the following requirements.

* A page with a single form on it for feedback collection. The page should be on the route /feedback
* A page with a title of thank you on the route /thankyou
* The feedback page form should have the following fields
  * Name - Single Line Text Field
  * Company Name - Single Line Text Field
  * Job Title - Single Line Text Field
  * Years in current role - Single Line Text Field
  * What do you like about marketing corp - Multi-Line Text Field
  * Submit button
* Upon pressing the submit button if the form is valid then direct to the thank you page with the company name from the form displayed e.g 'Thank you for your feedback Company X'
* Upon pressing the submit button if the form is not valid a suitable error message should be shown above each field and styled accordingly
* The following validation needs to be in place on the form
  * Name should be longer than 5 characters and not contain a number
  * Company Name should not be empty
  * Job Title should not be empty
  * Years in current role should not be empty, should be an integer >0 and <50
  * What do you like about marketing corp should not be empty
* If you type the word 'example' into the company name field then the whole form value is cleared and replaced with 'Demo Entry Inc'


Please include basic styling but styling is not the main purpose of the test.

# Notes
* It is OK to use Google and the Internet to look up anything you may need to like docs etc
* There is limited time to do the task and if you do not finish everything it is OK. Please just complete as many requirements as you can. 
