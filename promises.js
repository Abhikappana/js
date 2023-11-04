const cart  = ["shoes","pants","kurtha"];

createOrder(cart)
    .then(function(orderId){
        console.log(orderId);
        return orderId;
    }) 
    .catch(function (err){
        console.log(err.message);
    })
    .then(function(orderId){
        return proceedToPayment(orderId)
    })
    .then(function(paymentinfo){
        console.log(paymentinfo)
    })
    .catch(function (err){
        console.log(err.message);
    })
    .then(function(orderId){
        console. log("No matter what happens, I will already be called.");
    });
 
function createOrder(cart){
    const pr = new Promise(function(resolve, reject){
        // createOreder
        // validateCart
        // orderId
        if(!validateCart(cart)){
            const err= new Error("Cart is not valid");
            reject(err)
        }
        // logic for createorder
        const orderId = '1234';
        if(orderId){
            setTimeout(function (){
                resolve(orderId);
            },5000);
        }
    });  

   return pr;
}

function proceedToPayment(orderId){
    // 
    return new Promise(function(resolve, reject){
        resolve("Payment Successful");
    });
}

function validateCart(cart){
    return cart;
} 