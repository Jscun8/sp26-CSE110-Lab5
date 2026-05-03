# Lab 5 

Name: Jaylen Cun

Link to expose.html: https://jscun8.github.io/sp26-CSE110-Lab5/expose.html

Link to explore.html: https://jscun8.github.io/sp26-CSE110-Lab5/explore.html

1. I wouldn't use a unit test to test the "message" feature of a messaging application. This is because unit tests are primarily only great for debugging on small scale without much moving parts such as catching logic bugs. They aren't very effective at testing how components interact with each other on an application/feature level. In other words, for testing actual sending and receiving behavior in a messaging application, it falls short, and is better off being used for smaller things that don't involve the large-scale of a moving application. 

2. I would use a unit test to test the "max message length" feature of a messaging application. This is because this is just verifying something that is static and relatively small scale. We are just verifying if one thing is functioning correctly. For instance, to check if it is working properly, we write a unit test that tests whether this feature successfully prevents the user from typing more than 80 characters. This is a small-scale task, that doesn't involve the moving parts of sending/receiving messages which have various other factors to consider and deal with. Thus, for a small simple task like this, unit tests are effective at verifying the logic and functionality.