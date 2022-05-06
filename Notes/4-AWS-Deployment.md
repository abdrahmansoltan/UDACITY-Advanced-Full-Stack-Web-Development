## INDEX

- [INDEX](#index)
- [Production Environment](#production-environment)
- [Database](#database)
  - [Configuring and connecting a database](#configuring-and-connecting-a-database)
- [Elastic Beanstalk](#elastic-beanstalk)
  - [Passing variables from my Elastic Beanstalk environment to EC2 instances](#passing-variables-from-my-elastic-beanstalk-environment-to-ec2-instances)
  - [Configuring Elastic Beanstalk using Console](#configuring-elastic-beanstalk-using-console)
  - [Configuring Elastic Beanstalk using CLI](#configuring-elastic-beanstalk-using-cli)
    - [Deploying Code to Beanstalk](#deploying-code-to-beanstalk)
- [S3](#s3)
  - [Configuring S3 for Web Hosting](#configuring-s3-for-web-hosting)
  - [S3 with CLI](#s3-with-cli)
- [Scripts](#scripts)
  - [Deployment Scripts](#deployment-scripts)
  - [Build Scripts](#build-scripts)
  - [Test Scripts](#test-scripts)
- [Pipeline](#pipeline)
  - [Sections of Pipeline](#sections-of-pipeline)
- [Documentation](#documentation)

---

## Production Environment

`production environment` is the complete set of services that makes your application available to your end customers. This is where your customers will consume your application and where new features will be made available to them on a regular basis.

- Features of the production environment

  - `Environment variables`: The ability to set environment variables, as it allows you to **hide sensitive information** like API keys. These values are `dynamic variables` that are used in your code.

  - `CLI available`: It is helpful for us to be able to control the environment with a CLI, as it can automate a lot of operations on the environment.

  - `Configurable`: While we are looking for ease of use, we still need options to meet our development needs.

- Tools used:
  - `AWS Relational Database Service (RDS)`: It has many databases and SQL variants and provides easy management.
  - `AWS Elastic Beanstalk (EB)`: an orchestration service that allows you to run servers in multiple languages and runtimes.
  - `AWS Simple Storage Service (S3)`: for configuring web hosting and for hosting files in general.

---

## Database

### Configuring and connecting a database

1. Create a RDS postgres database with `public access enabled`
2. In the server.js file, you should modify the URL in the Sequelize connection string with the proper values to connect to your database.

   ```js
   const sequelize = new Sequelize(
     "postgres://postgres:postgres@database-1.cjgo5oahfx0s.us-east-1.rds.amazonaws.com:5432/postgres"
   );
   ```

   - `postgres://` : is to indicate that, to sequelize, we are using the Postgres SQL dialect.
   - `postgres:postgres` : This is the username and password.
   - `@database-1.cjgo5oahfx0s.us-east-1.rds.amazonaws.com:5432` : server address where the database is located.
   - `postgres` : the database name we will use on the server.

---

## Elastic Beanstalk

`Elastic Beanstalk` is a free service that lets you easily run applications on web servers.

- What does Elastic Beanstalk use?

  - Elastic Compute Cloud (EC2): Used for hosting servers.
  - Simple Storage Service (S3): Used for storing application code and sending it to other servers.
  - Simple Notification Service (SNS): Provides a way to notify you of events inside the environment.

- Elastic Beanstalk provides an easy solution to hide some sensitive API keys or other secrets. You should always be sure to remove the following information from your application's source code:
  - Private API keys
  - Database connection strings
  - Environment-specific information

---

### Passing variables from my Elastic Beanstalk environment to EC2 instances

[Here](https://aws.amazon.com/premiumsupport/knowledge-center/elastic-beanstalk-pass-variables/)

---

### Configuring Elastic Beanstalk using Console

1. Create application

   - Use the on-screen form to provide an application name.

   - `Optionally`, provide a description, and add tag keys and values.

   - select platform : `node.js`

   - in Application Code : upload your own code

2. configure environmental variables [here](#passing-variables-from-my-elastic-beanstalk-environment-to-ec2-instances)

---

### Configuring Elastic Beanstalk using CLI

![Console](./img/ebcli.PNG)

- [Installing the EB CLI](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install-advanced.html)

- [List of commands](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-getting-started.html)

  - `eb create` allows you to create a new EB environment
  - `eb deploy` will deploy your application to Elastic Beanstalk
  - `eb use` will link a local repository to an existing EB project
  - `eb health` will give you information about the health of your application
  - `eb open` will open the EB console in your favorite browser
  - `eb terminate` will let you delete an environment with the EB CLI

#### Deploying Code to Beanstalk

![steps](./img/steps.PNG)

---

## S3

S3 Stands for `Simple Storage Service`. It is AWS's file storage service. It can be referred to as **object-based storage**.

- Limitations and Strengths of S3
  - S3 can't run a file system
  - Fine-grained permission system : control the access to the bucket with Access Control List (ACL) policy
  - Configurable for web hosting: We can serve static files like HTML and CSS on S3.

---

### Configuring S3 for Web Hosting

1. create s3 bucket
   - untick the `block public access`
2. go to bucket >> properties >> `Static website hosting`
   - enable it
   - wtire index.html in `Index document`
3. go to bucket >> Permissions >> `Bucket policy`
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "PublicReadGetObject",
         "Effect": "Allow",
         "Principal": "*",
         "Action": ["s3:GetObject"],
         "Resource": ["arn:aws:s3:::YOUR_BUCKET_NAME/*"]
       }
     ]
   }
   ```
4. upload code files
5. go to bucket >> properties >> `Static website hosting` >> `Bucket website endpoint`

---

### S3 with CLI

1. Zip the file using this command: `zip -r filename.zip .`
   - `.` means you intend to zip the content of the local folder
2. copy zip folder to s3 bucket

   ```bash
   aws s3 cp --recursive --acl public-read ./build s3://abdelrahmansoltan8568954/
   ```

---

## Scripts

Deploying, building, and testing are actions we must do really often when developing an application. We use scripts in order to make these things easier and more repeatable.

- `script` consists of a command or a series of commands.

### Deployment Scripts

1. Create a new `bin/deploy.sh` file

   ```bash
   touch ./bin/deploy.sh
   ```

2. Call the necessary AWS CLI commands in the script:
   ```sh
   # in deploy.sh
   aws cp --recursive --acl public-read ./build s3://udagram-test01/
   ```
3. Inside `package.json` make a script to call the deploy.sh file:

   ```json
   "deploy":  "chmod +x ./bin/deploy.sh && ./bin/deploy.sh"

   // where "chmod +x" : Changes permissions of a file for all users
   ```

4. Build the app and call the deploy script using npm:

   ```bash
   npm run build
   npm run deploy
   ```

---

### Build Scripts

- `Bundlers like Webpack and Rollup` are able to package your application code and all its dependencies. They are responsible for packing your code in a format that is more compact while still understandable by browsers and servers.

- `Compilers like Babel` let you use more advanced features of the latest JavaScript versions while maintaining compatibility with older browsers.

- `Transpilers like TypeScript` extend the base capacities of JavaScript by adding extra features not present in the base language.

---

### Test Scripts

A test script is a command or series of commands that test application code against pre-defined scenarios.

![test](./img/test2.png)

- We will normally run our tests in this order before deploying an application:

  - `Unit tests` will be run first since they are the fastest and most simple tests.
  - `Integration tests` are a little bit more involved, so we will run them directly after unit tests.
  - `End to End (E2E) and UI tests` are often complex and involve some form of setup. For this reason, we will run them last.

    ![tests](./img/tests.png)

- Example package.json script running unit tests with the Jest framework:

  ```json
  "test:ci": "jest --ci --coverage"
  ```

---

## Pipeline

![pipe](./img/pipeline.jpg)

- Why Create a Pipeline?
  - `Speed`: Automatically performing all the steps of a pipeline is faster than doing it manually each time.
  - `Finding bugs`: By running tests each time we are trying to deploy, we are able to find bugs earlier.
  - `Building confidence in your release`: When you release software that has passed different quality steps, you can be more confident in its quality.

### Sections of Pipeline

![pipe](./img/pipe2.PNG)

- `Orbs` are a set of instructions created by CircleCi that allow us to configure the pipeline on which we will run our actions. These instructions will instruct the server to setup specific software on the server executing our pipeline. We could use orbs to setup node.js or install the AWS CLI for example. Orbs are **not always present in a pipeline**.
  ![pipe](./img/pipe3.PNG)

- `Jobs` are groups of commands that we want to run. This is where we will run commands to install, build or deploy our application.  
  ![pipe](./img/pipe4.PNG)

- `Workflows` are instructions about the order of the jobs. They allow us to create complex flows and specify manual approvals. Workflows are **not always present in a pipeline**.
  ![pipe](./img/pipe5.PNG)

```yml
# ____________config.yml____________ #
version: 2.1
orbs:
  # orgs contain basc recipes and reproducible actions (install node, aws, etc.)
  node: circleci/node@4.1.0
  # different jobs are calles later in the workflows sections
jobs:
  build:
    docker:
      # the base image can run most needed actions with orbs
      - image: "cimg/base:stable"
    steps:
      - node/install
      - checkout
      # install dependencies in both apps
      - run:
          name: hello
          command: |
            echo "hello-world"
```

---

- create a continuous integration step

  ```json
  // package.json
  "scripts": {
          "frontend:install": "cd reactnd-contacts-complete && npm install",
          "backend:install": "cd reactnd-contacts-server && npm install",
          "frontend:build": "cd reactnd-contacts-complete && npm run build",
          "backend:build": "cd reactnd-contacts-server && npm run build",
          "frontend:deploy": "cd reactnd-contacts-complete && npm run deploy"
      }
  ```

  ```yml
  # in .circleci/config.yml

  version: 2.1
  orbs:
    node: circleci/node@4.1.0
    aws-cli: circleci/aws-cli@1.3.1
  jobs:
    build:
      docker:
        - image: "cimg/base:stable"
      steps:
        - node/install
        - checkout
        - aws-cli/setup
        - run:
            name: Front-End Install
            command: |
              npm run frontend:install
        - run:
            name: Back-End Install
            command: |
              npm run backend:install
        - run:
            name: Front-End Build
            command: |
              npm run frontend:build
        - run:
            name: Back-End Build
            command: |
              npm run backend:build
        - run:
            name: Deploy App
            command: |
              npm run frontend:deploy
  ```

---

## Documentation

![arc](./img/Architecture%20Diagram.png)