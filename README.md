# Authentication App

## Table of Content:
- [Screenshots](#Screenshots)
- [Overview](#Overview)
- [Features](#Features)
- [Tech](#Tech)
- [Build](#Build)

## Screenshots
## Login:
![image](https://github.com/Jeffkw213/authentication/assets/55030995/71d1dccc-c358-4270-ac29-77e0c8409212)

## Register:
![image](https://github.com/Jeffkw213/authentication/assets/55030995/e07c1182-bf3a-409e-97b3-68bf3360942a)

## Once Logged In:
![image](https://github.com/Jeffkw213/authentication/assets/55030995/b42b8f5b-a029-41cc-922c-4646f59db46f)


## Username not found:
![image](https://github.com/Jeffkw213/authentication/assets/55030995/51ce9bf1-ffc4-4094-92f2-d18b6e40f643)

## Wrong Password
![image](https://github.com/Jeffkw213/authentication/assets/55030995/20a96e83-6b62-46a6-8b04-958580a07995)

## Duplicated Username:
![image](https://github.com/Jeffkw213/authentication/assets/55030995/bbef211a-7669-4351-8c65-d288bcc12585)


## Overview 

This is an authentication app that provides users to login, logout, and register. It ensures that the credentials are correct.

## Features
- User Registration: Users can signup for an account by providing: username, first name, last name, password, and email
- User Login: Account needs to be in Database with the correct password
- Logout: Users are able to log out after login

## Tech
- Backend: Nextjs
- Database: MongoDB
- Frontend: Nextjs, NextUI

## Build
1. Install Node.js
2. Clone repository
```
git clone https://github.com/Jeffkw213/authentication.git
cd authentication
```
3. Create an `.env` file in the root directory with [MongoDB](https://www.mongodb.com/basics/create-database)
```
MONGODB_URI=""
```
4. Install npm
```
npm install
```
5. Run the development server:
```
npm run dev
```

## License
This project is made available under the terms of MIT License 
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


