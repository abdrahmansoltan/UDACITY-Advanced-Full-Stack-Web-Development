# Storefront Backend Project

<div id="top"></div>

![node](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Jasmine](https://img.shields.io/badge/Jasmine-8A4182?style=for-the-badge&logo=Jasmine&logoColor=white)
![Postgresql](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

<!-- PROJECT LOGO -->
<br />
<div align="center">
    <img src="./assets/database.png" alt="Logo" height="80">

  <h3 align="center">Storefront Backend</h3>

  <p align="center">
    <a href="https://github.com/abdrahmansoltan/UDACITY-Advanced-Full-Stack-Web-Development/issues">Report Bug</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

Image Processing API using `node.js` & `Express` to create a server that displays image with the width and height specified by the user

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- Typescript
- Node.js
- Epress framework
- Jasmine
- postgresql

<p align="right">(<a href="#top">back to top</a>)</p>

---

<!-- GETTING STARTED -->

## Getting Started

This project require some prequesites and dependenscies to be installed, you can find the instructions below

> To get a local copy, follow these simple steps :

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/abdrahmansoltan/UDACITY-Advanced-Full-Stack-Web-Development.git
   ```
2. go to project folder

   ```sh
   cd "Projects\Storefront Backend\
   ```

3. install dependenscies

   ```bash
   npm install
   ```

4. create databases

   - connect to the default postgres database as the server's root user

     ```bash
     psql -U postgres
     ```

   - In psql run the following to create a user

     ```bash
     CREATE USER project_user WITH PASSWORD 'password123';
     ```

   - In psql run the following to create the dev and test database

     ```bash
     CREATE DATABASE store_front;
     CREATE DATABASE store_front_test;
     ```

   - Connect to the databases and grant all privileges

     ```bash
     \c store_front;
     GRANT ALL PRIVILEGES ON DATABASE store_front TO project_user;

     \c store_front_test;
     GRANT ALL PRIVILEGES ON DATABASE store_front_test TO project_user;
     ```

   - In psql run the following to create the dev and test database

     ```bash
     CREATE DATABASE store_front;
     CREATE DATABASE store_front_test;
     ```

5. Enviromental Variables Set up

   - Here are the environmental variables that needs to be set in a .env file. This is the default setting that I used for development, but you can change it to what works for you.

   ```
     PORT= 3000
     POSTGRES_HOST=127.0.0.1
     POSTGRES_DB=store_front
     POSTGRES_TEST_DB=store_front_test
     POSTGRES_USER=project_user
     POSTGRES_PASSWORD=password123
     ENV=dev
     BCRYPT_PASSWORD=pass123
     SALT_ROUNDS=10
     TOKEN_SECRET=KbjBCPAMrt
   ```

6. Run Migrations

   ```bash
   # globally to use its  terminal comands
   npm install -g db-migrate

   db-migrate up
   ```

7. Run development server

   ```sh
   npm start

   # or
   npm run watch
   ```

- or: Run Production server

  ```bash
  npm run build & node dist/server.js
  ```

7. API endpoints

   - All endpoints are described in the [REQUIREMENT.md](REQUIREMENTS.md) file.
   - Token and Authentication
     Tokens are passed along with the http header as

     ```
     Authorization   Bearer <token>
     ```

   [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/0c7d6ad8fef58e4ec8bf?action=collection%2Fimport)

8. Testing

   ```sh
   npm run test
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

---

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Udacity](https://github.com/udacity)
