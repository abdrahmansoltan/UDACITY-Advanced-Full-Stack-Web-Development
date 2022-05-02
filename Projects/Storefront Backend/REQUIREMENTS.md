# API Requirements

The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application.

## API Endpoints

#### Products

- Index: [/products](http://localhost:3000/products) [get]
- Show: [/products/:id](http://localhost:3000/products/:id) [get]
- ShowByCategory: [/products/category/:category](http://localhost:3000/products/category/:category) [get]
- Create: [/products](http://localhost:3000/products) [post]
- Delete: [/products](http://localhost:3000/products) [delete]

#### Users

- Index: [/users](http://localhost:3000/users) [get]
- Show: [/users/:id](http://localhost:3000/users/:id) [get]
- Create: [/users](http://localhost:3000/users) [post]

#### Orders

- Index: [/orders](http://localhost:3000/orders) [get]
- Show: [/orders/:id](http://localhost:3000/orders/:id) [get]
- Create: [/orders](http://localhost:3000/orders) [post]
- CurrentOrders: [/orders/current](http://localhost:3000/orders/current) [get]
- CompletedOrders: [/orders/completed](http://localhost:3000/orders/completed) [get]

---

## Data Shapes

#### Product

- id
- name
- price
- [OPTIONAL] category

#### User

- id
- firstName
- lastName
- password

#### Orders

- id
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or current or complete)
