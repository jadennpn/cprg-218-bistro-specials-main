const currentdate = new Date();
console.log(currentdate);
const day = currentdate.getDay();
/*0-6 sunday is 0, sat is 6*/
//const day = 6;
console.log(day); 

if(day==0){
specialtitle.innerHTML = 
"$9 Deluxe Burger and Fries";
specialimage.src = "images/sunday.jpg";
specialdescription.innerHTML = "50% off our Deluxe Burger and fries. A 16oz Angus patty on a pretzel bun topped with lettuce, tomato, bacon, grilled onions, and an onion ring. A huge side of our famous fries is served on the side.";
}

if(day==1){
specialtitle.innerHTML = 
"$12 Chicken Penne Alfredo";  
specialimage.src = "images/monday.jpg";
specialdescription.innerHTML = "Grilled chicken breast over penne noodles with a creamy Alfredo sauce and parmesan cheese on top. Side Caesar Salad included."; 
}

if(day==2){
specialtitle.innerHTML =
"$10 Any Small Pizza";
specialimage.src = "images/tuesday.jpg";
specialdescription.innerHTML = "Pick up to 3 of your favourite toppings. Our pizzas have a crispy golden whole wheat crust.";
}

if(day==3){
specialtitle.innerHTML =
"35c Chicken Wings";
specialimage.src = "images/wednesday.jpg";
specialdescription.innerHTML = "Our classic chicken wings come in three flavours – salt & pepper, honey garlic and extra hot. Minimum order is 20 wings – available in quantities of 10 after that.";
}

if(day==4){
specialtitle.innerHTML =
"$9 Fish and Chips";
specialimage.src = "images/thursday.jpg";
specialdescription.innerHTML = "Authentic English style battered cod with a heaping helping of piping hot chips. Served with salt, vinegar and a curry sauce to flavor it to your taste. This dish is jolly good!";
}

if(day==5){
specialtitle.innerHTML =
"HalF Price Cocktails all Day";
specialimage.src = "images/friday.jpg";
specialdescription.innerHTML = "50% off our regular price.";
}

if(day==6){
specialtitle.innerHTML =
"$10 Jumbo Greek Salad";
specialimage.src = "images/saturday.jpg";
specialdescription.innerHTML = "50% off our regular price. Our customers rave about our Greek Salad, so we want to give everyone a chance to try it. Get a full sized Greek Salad at a great price.";
}
