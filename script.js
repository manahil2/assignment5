//1
let num1 = 3;
let num2 = 5;
let sum = num1 + num2;
document.write("The sum of " + num1 + " and " + num2 + " is " +sum + "<br>");

//2(a)
let num3 = 3;
let num4 = 5;
let sub = num3 - num4;
document.write("The subtraction of " + num3 + " and " + num4 + " is " +sub + "<br>");

//2(b)
let num5 = 3;
let num6 = 5;
let mul = num5 * num6;
document.write("The multiplication of " + num5 + " and " + num6 + " is " +mul + "<br>");

//2(c)
let num7 = 3;
let num8 = 5;
let div = num7 / num8;
document.write("The division of " + num7 + " and " + num8 + " is " +div + "<br>");

//2(d)
let num9 = 3;
let num10 = 5;
let mod = num9 % num10;
document.write("The modulus of " + num9 + " and " + num10 + " is " +mod + "<br><br>");

//3
let variable;
document.write("Value after variable declaration is:"+variable + "<br>");
variable = 26;
document.write("Initial value:"+variable + "<br>");
variable++;
document.write("Value after increment is:"+variable + "<br>");
variable += 4;
document.write("Value after adding 4 is:"+variable + "<br>");
variable--;
document.write("Value after decrement is:"+variable + "<br>");
variable = variable % 3;
document.write("The remainder is:"+variable + "<br><br>");

//4
let ticketprice = 600;
let fivetickets = ticketprice * 5;
document.write("Total cost to buy 5 tickets to a movie is "+ fivetickets + "PKR<br><br>");

//5
let number = 3;
for (let i = 1; i < 11; i++) {
   let multiplication = number * i;
   document.write(number+" x "+i+" = "+ multiplication+"<br>");
}
document.write("<br>");

//6
let celsius = 25;
let fahrenheit = (celsius * 9 / 5) + 32;
document.write(celsius + "°C is " + fahrenheit + "°F.<br>");

fahrenheit = 77;
celsius = (fahrenheit - 32) * 5 / 9;
document.write(fahrenheit + "°F is " + celsius + "°C.<br><br>");

//7
let item1 = 450;
let item2 = 900;
let quant1 = 2;
let quant2 = 5;
let shipcharge = 200;
let totalcost = item1+item2+quant1+quant2+shipcharge;
document.write("<h1>Shopping Cart</h1>")
document.write("Price of Item 1 is : "+item1 + "<br>");
document.write("Quantity of Item 1 is : "+quant1 + "<br>");
document.write("Price of Item 2 is : "+item2 + "<br>");
document.write("Quantity of Item 2 is : "+quant2 + "<br>");
document.write("Shipping Charges : "+shipcharge + "<br><br>");
document.write("Total cost of your order is "+totalcost + "<br><br>")

//8
let total = 1100 ;
let obtained = 989;
let percentage = obtained *100 / total;
document.write("Total Marks: "+total+"<br>");
document.write("Mark Obtained: "+obtained+"<br>");
document.write("Percentage: "+percentage.toFixed(2)+"%<br><br>");

//9
let USdollars = 10;
let SaudiRiyals = 25;
let PKR = (USdollars*104.80) + (SaudiRiyals*28);
document.write("<h1>Currency in PKR</h1>");
document.write("Total currency in PKR is " + PKR + "<br><br>" );

//10
let num = 10;
let result = ((num+5)*10)/2;
document.write(result);

//11
document.write("<h1>Age Calculator</h1>")
let currentyear = 2024;
let birthyear = 2004;
let age = currentyear - birthyear;
document.write("Current year: " + currentyear + "<br>");
document.write("Birth year: "+ birthyear + "<br>");
document.write("your age: " + age + "<br><br>");

//12
document.write("<h1>The Geometrizer</h1>");
let radius = 20;
document.write("Radius is: " + radius + "<br>");
const pi = 3.142;
let circumference = 2*pi*radius;
document.write("The circumference is: " + circumference.toFixed(2) + "<br>");
let area = pi*radius**2;
document.write("Area is: " + area.toFixed(2) + "<br><br>");

//13
document.write("<h1>The life time supply calculator</h1>");
let favouritesnack = "Chocolate" ;
let myage = 20;
let maxage = 55;
let amountperday = 1 ;
let yearsLeft = maxage - myage;
let totall = yearsLeft * 365 * amountperday;
document.write("You will need "+totall+" chocolates to last you until the ripe old age of "+maxage);
