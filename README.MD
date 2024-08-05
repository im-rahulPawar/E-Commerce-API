# ecommerce-api

An ecommerce api use to manage product inventory

## Getting Started

- Install all dependencies using npm install.
- Run nodemon app.js to start app on port:3000

## Routes

- Create a product by : URL:"localhost:3000/api/v1/products/create", Method:POST and passing req.body in raw json format as
  {"name":"Cooler","quantity":10}. The output will be as shown below:

```
{
    "message": "product created successfully",
    "success": true,
    "data": {
        "product": {
            "name": "Cooler",
            "quantity": 10
        }
    }
}
```

- Get all products by : URL:"localhost:3000/api/v1/products", Method:GET. The output will be as shown below:

```
{
    "success": true,
    "data": {
        "products": [
            {
                "quantity": 10,
                "_id": "5eaa0f2c046aa602d90c11bc",
                "name": "Cooler"
            },
            {
                "quantity": 20,
                "_id": "5eaa0f3d046aa602d90c11bd",
                "name": "Refridgerator"
            }
        ]
    }
}
```

- delete a product by : URL:"localhost:3000/api/v1/products/:productId", Method:DELETE. The output will be as shown below:

```
{
    "success": true,
    "message": "Product deleted successfully"
}
```

- Update a product by : URL:"localhost:3000/api/v1/products/:productId/update_quantity/?number=15", Method:POST . The output will be as shown below:

```
{
    "message": "Product updated successfully",
    "data": {
        "name": "Cooler",
        "updated_quantity": 15
    }
}
```
