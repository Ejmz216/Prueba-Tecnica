# prueba-tecnica-fullstack
Prueba tecnica FullStack - Angular / Springboot 

Requirements:

This test is intended to assess programming knowledge using the Angular and Springboot frameworks. This includes the following requirements.

Request

It is required to implement a system that allows the creation of users to persist their username, email, password and their profile. The profiles are: administrator, coordinator and guest, but it must be taken into account that more profiles can be added over time. The system must also allow consulting the list of registered users.

SPRING BOOT:

Create a Rest API with the following endpoints:<br>
  1. An endpoint for user registration with the attributes:<br>
      A. Username<br>
      B. Email<br>
      C. Password<br>
      D. Profile (Admin, Coordinator or Guest)<br>
2. An endpoint that allows obtaining registered users. More endpoints can be created if they deem it necessary.<br>


Angular:

Create an application containing the following views:<br>
1. User list<br>
    A. Contains a table where all registered users are displayed.<br>
    B. Contains the option to filter users by their 'Profile' attribute.<br>
2. Create users<br>
<br>
  A. It contains a form with the following fields:<br>
      I. Username<br>
      II. Email<br>
      III. Profile (Admin, Coordinator or Guest)<br>
      IV. Password<br>
      V. Confirm Password<br>
<br><br>
  B. The form must have at least the following validations:<br><br>
      I. The password must have a minimum of 6 characters.<br>
      II. The email must be in the correct format.<br>
      III. He must be mandatory profile<br>
      
      
      
   ![image](https://user-images.githubusercontent.com/67802793/234405350-4151c526-b8dd-4061-beae-3b1f89836191.png)

