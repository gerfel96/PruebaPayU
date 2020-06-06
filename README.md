# Probe PayU PayFlow

# Run the project

First, copy the .env file on the root path of the project

Second, install dependecies:
 ```
 npm install
 ```
 
 Next, you have to run the server
 
 ```
 npm index.js
 ```
 
Finally, you can check the webpage in 

http://localhost:3000/index.html 

# Definitions

## Tokenization

The tokenization concept consist in generate a token that represents the customer card data. The target is safe the customer sensitive data 

## Authorize

This procedure consists in lock the funds from the customer account. This is the first step to do a payment procedure

## Capture

This is the second step to do a payment procedure. This one consists in transfer the amount from customer funds to the business account. 

## Charge

The charging procedure consists in do a payment flow in only one step. Here we can authorize and capture the customer funds in one procedure

## Void

The void procedure consists in cancel the sale when it is in the authorization step. If the payment flow is in the next steps, we can use this method.

## Refound

We can use this procedure when the sale was over and we have to return the funds to the customer for different reasons. 
