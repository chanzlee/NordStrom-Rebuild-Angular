# NordStrom Rebuild

#### _10/26/2018_, By Chan Lee

## Description

Rebuild NordStrom website using Angular 5.


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

## Specifications

1. Have firebase authentication back-end.
2. Build components (nav-bar, data, products, home, login, sign up, admin, cart)

* Navigation bar shows each category and renders nested list of subcategory using ngFor.
* Featured article/ deals are generalized as data class which has title,body,link,url properties.
* By authentication, only admin can move to '/admin' router. If customer tries to access admin, it will redirect to login when not logged in and redirect to /no-access if user is logged in but not a admin.
* Id: chanethanlee@gmail.com / pw: 1234 is admin account.
* Id: kennethdu3@gmail.com / pw: 1234 is customer account.
* There will be shopping page where it will display product objects using ngFor, which has price,size,quantity,review properties.
* User can see the collected item at the cart page.


## Components

* Navigation bar
* Featuring news/deals
* home/login/sign-up/admin routers
* search feature
* cart feature
* products


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

## Support and contact details

chanethanlee@gmail.com

## License

MIT License

Copyright (c) 2018 **_Chan Lee_**