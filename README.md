<h1>Medium Clone</h1>

<h2 style="text-align:center;">Status: Finished <img style="width: 30px; text-align:center;" src="https://cdn-icons-png.flaticon.com/512/391/391175.png?w=740&t=st=1670186499~exp=1670187099~hmac=ca0fe32f8d625eab349ff161386cbc9ca5948d8b85d4a9f6ac728bbadd43ec71"/></h2>

<h3>What is this project?</h3>
<p>Based on a <a target="_blank" href="https://github.com/gothinkster/realworld">Real World</a> example app and with the teachings of <a target="_blank" href="https://www.udemy.com/user/ejiqpep/">Oleksandr Kocherhin</a> on his course <a target="_blank" href="https://www.udemy.com/course/nestjs-building-real-project-api-from-scratch/">NestJS - Building Real Project API From Scratch</a>, this is a clone of <a target="_blank" href="https://medium.com">Medium</a> API.</p>

<p>This project are made with: 
  <ul>
    <li>NestJS <img style="width: 30px;" align="center" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg"/></li>
    <li>Typescript <img style="width: 25px;" align="center" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"/></li>
    <li>Postgres <img style="width: 30px;" align="center" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg"/></li>
  </ul>
</p>
  
<p>Using TypeORM to manage database, with an authentication system employing UseGuard and Validation decorators, the project has fetures of create and update profiles, create and update articles besides favorite an articles. It is possible to search for articles and sort it.</p>
  
<h3>Routes</h3>
<p>The user's routes allows to create and login an user, that don't need to authorize, however check for the current user and updating needs to. Follow and unfollow an user has to get the same authorization, to get some user is optional.</p>
<p>Search for an article can easily be made for a logged out user, but log in can give it more ways to search.</p>
<p>You can check the routes >><a target="_blank" href="insomnia/mediumclone-api-routes.json">here</a><< using Insomnia.</p>

<h3>Dependencies</h3>
 (Could also be with YARN)
    
    $ npm install slugify

    $ npm install pg

    $ npm install bcrypt

    $ npm install typeorm

    $ npm install nodemon

    $ npm install jsonwebtoken
    
<h3>Observation</h3>
<p>Don't forget to user command <b>npm install</b> to install all the dependencies.</p>
  <br>

<h2 align='center'>Autor</h2>
<div align='center'>
  Made with ❤️ by <a href= "https://github.com/hwg-elias">Gabriel Elias</a>
</div>