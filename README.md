# NordStrom Rebuild

#### _10/26/2018_, By Chan Lee

## Description

Rebuild NordStrom website using Angular 5.
Deployed at https://nordstrom-7d20d.firebaseapp.com/


## Setup/Installation Requirements
1.
```
    // navigate into directory
    > cd NordStrom-Rebuild-Angular
```
2.    
```
    // install dependent plugins
    > npm install
```
3.
```
    // start application
    > ng serve --open
```
4. Otherwise, you can browse to https://nordstrom-7d20d.firebaseapp.com/

## Specifications


* Build components (nav-bar, sub-nav-bar data, products, home, login, sign up, admin, cart)

* Navigation bar shows each category and renders nested list of subcategory using ngFor.
* Featured article/ deals are generalized as data class which has title,body,link,url properties.
* User can log in/ log out
* By authentication, only admin can move to '/admin' router. If customer tries to access admin, it will redirect to login when not logged in and redirect to /no-access if user is logged in but not a admin.
* Id: chanethanlee@gmail.com / pw: 1234 is admin account.
* Id: kennethdu3@gmail.com / pw: 1234 is customer account.
* There will be shopping page where it will display product objects using ngFor, which has name, isNew, price, star,review properties.
* Admin account can perform CRUD function on product for mananing.
* Actively deployed on firebase, with database linked.
* Use aniamation for toggling navigation bars, add animate function while toggling.


## Components

* Navigation bar
* Sub Navigation bar
* Footer
* Featuring news/deals
* Home/login/sign-up/admin routers
* Products feature

## Technologies Used

* Node.js
* Angular
* JWT
* Typescript
* TSLint
* Bootstrap
* Jquery
* popperJS
* Jasmin
* Karma
* Firebase hosting/real-time data base

## Support and contact details

chanethanlee@gmail.com

## License

MIT License

Copyright (c) 2018 **_Chan Lee_**