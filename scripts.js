var products =['Pepperoni','Cheese','Chicken Alfredo','Meat Lovers','Vegetarian']

products.forEach(function(x){
    var productSelection = document.createElement("option");
    productSelection.value = x;
    productSelection.innerHTML = x;
    document.getElementById('productSelection').appendChild(productSelection)
})


var name = document.getElementById('userName').value;
var email = document.getElementById('email').value;
var phone = document.getElementById('phone').value;
var numbPizzas = document.getElementById('qty').selectedIndex + 1;
var pizzaType = document.getElementById('productSelection').options[document.getElementById('productSelection').selectedIndex].value;
var Price = 9.99 * numbPizzas;
var Tax = Price * 0.076;
var Total = Price + Tax;
var T = Total.toFixed(2);



    
    document.getElementById('Order').addEventListener("click", function displayOrder(){
        document.getElementById('orderForm').innerHTML = "Name: " + name + "<br>"  +  "Email: " + email + "<br>" +  "Phone: " + phone + "<br>" +  "Type of Pizza: " + pizzaType + "<br>" +  "Number of Pizzas: " + numbPizzas + "<br>" + "Price before tax: $" + Price + "<br>" + "Total Price is: $" + T;
        
    })

    