// EXERCISE - 1
//I have installed nodeJS, TypeScript and VSCode.

// EXERCISE - 2
let n: string = "Anas";
console.log("Hello "+n+", would you like to learn some python today?");

// EXERCISE - 3
let person: string = "muhammad ali";
console.log(person.toUpperCase());
console.log(person.toLowerCase());

// EXERCISE - 4
console.log("An anonymous once said, \"if you dont sacrifice for what you want, what you want becomes the sacrifice.\" ");

// EXERCISE - 5
let famous_person: string = "Anonymous";
let message: string = "if you dont sacrifice for what you want, what you want becomes the sacrifice";

console.log("An "+famous_person+" once said: \""+message+".\"");


// EXERCISE - 6
let person: string = "       \n Aaryan malik \t   ";
console.log("Before stripping: '"+person+"'");
console.log("After strpping: '"+person.trim()+"'");


// EXERCISE - 7

//Method One
let add: number = 7+1;
console.log("Addition operation: 7 + 1 = ",add);

//Method Two
console.log("Subtraction operation: 12 - 4 = ",12-4);

//Method three
let num1: number = 4;
let num2: number = 2;
let result: number = num1*num2;
console.log("Multiplication operation: ",num1," x ",num2," = ",result);

//Method Four
let n1: number = 32;
let n2: number = 4;
console.log("Division operation: ",n1," / ",n2," = ", n1/n2); 



// EXERCISE - 8
console.log(4+4);
console.log(18-10);
console.log(4*2);
console.log(16/2);


// EXERCISE - 9
let secret: number = 3;
let msg: string = "My secret number is... ";
console.log(msg, secret);


// EXERCISE - 10
//Adding comments.

//i have written my favorite quote i found on insta. I have used anonymous word means unknown because i don't know the authoer name of the quote.

//This is Exercise 4.
console.log("An anonymous once said, \"if you dont sacrifice for what you want, what you want becomes the sacrifice.\" ");


// EXERCISE - 11
let names: string[] = ["Huzaifa", "Hunain", "Aaryan", "Hamza", "Hammad"];
console.log("My friends names...");
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);


// EXERCISE - 12
let names: string[] = ["Huzaifa", "Hunain", "Aaryan", "Hamza", "Hammad"];
console.log("My friends names...");
console.log("Assalam o Alaikum",names[0]);
console.log("Assalam o Alaikum",names[1]);
console.log("Assalam o Alaikum",names[2]);
console.log("Assalam o Alaikum",names[3]);
console.log("Assalam o Alaikum",names[4]);


// EXERCISE - 13
let transportation: string[] = ["car", "bike", "cycle"];
console.log("I really like ",transportation[0],", in future i will purchase a",transportation[0]);
console.log("I will sell out my",transportation[1]);
console.log("We should ride a",transportation[2]);


// EXERCISE - 14
let guest_list: string[] = ["Hunain", "Rehan", "Rafay", "Aaryan"];

for (let i = 0; i<=3; i++){
    console.log("Dear",guest_list[i],", you are invited for dinner at my place...");
}


// EXERCISE - 15
let guest_list: string[] = ["Hunain", "Rehan", "Rafay", "Aaryan"];


console.log("....Guest List.....");
for (let i = 0; i<=3; i++){
    console.log("Dear",guest_list[i],", you are invited for dinner at my place...");
}

console.log("\nUnfortunately, "+guest_list[2]+" can not come for the dinner.");

console.log("\n\nNew guest arriving....");

guest_list[2] = "Hamza";
console.log("\n\n....New Guest List.....");
for (let i = 0; i<=3; i++){
    console.log("Dear",guest_list[i],", you are invited for dinner at my place...");
}





// EXERCISE - 16

console.log("\n...There is a new bigger table available...");
console.log("More guests are coming now...");

let new_guest_list: string[] = guest_list.slice(); //The slice() method returns a copy of an array.
new_guest_list.splice(0,0,"Ali");
new_guest_list.splice(2,0,"Mohsin Ali");
new_guest_list.splice(new_guest_list.length - 1, 0, "Hussain");

console.log("\nNew guests for bigger table...");
for (let i = 0; i<=new_guest_list.length-1; i++){
    console.log("Dear",new_guest_list[i],", you are invited for dinner at my place...");
}

console.log(new_guest_list);



// EXERCISE - 17

console.log("\n...I can invite only two people for the dinner...\n");

for (let i = new_guest_list.length-1; i>=2; i--){
    console.log(new_guest_list[i]+", i am sorry i can not invite you for the dinner..");
    new_guest_list.pop();
}
console.log("___________________________________________\n");
console.log(new_guest_list[0],"and",new_guest_list[1],", you both are still invited for the dinner :)");

console.log("\n\nNow removing two names from the array....");
new_guest_list.pop();
new_guest_list.pop();
console.log("\nEmpry array here.. ",new_guest_list);

console.log("\n\nThanks.... :)");



// EXERCISE - 18

let places: string[] = ["Saudia", "Turkey", "America", "Dubai", "Singapur"];
console.log("Original order array: ",places);

let sort_places: string[] = places.slice();
console.log("\nSorted alphabetical array: ",sort_places.sort());
console.log("\nArray still in original order: ",places);
console.log("\nReverse alphabetical array: ",sort_places.reverse());
console.log("\nArray still in original order: ",places);
console.log("\nOrder has changed now..: ",places.reverse());
console.log("\nIt's back to it's original order..: ",places.reverse());
console.log("\nIt's order has been changed in alphabetical order..: ",places.sort());
console.log("\nIt's order has been changed in reverse alphabetical order..: ",places.reverse());



// EXERCISE - 19

// Ex: 14
let guest_list: string[] = ["Hunain", "Rehan", "Rafay", "Aaryan"];


console.log("....Guest List.....");
for (let i = 0; i<=3; i++){
    console.log("Dear",guest_list[i],", you are invited for dinner at my place...");
}

// Ex: 15
console.log("\nUnfortunately, "+guest_list[2]+" can not come for the dinner.");

console.log("\n\nNew guest arriving....");

guest_list[2] = "Hamza";
console.log("\n\n....New Guest List.....");
for (let i = 0; i<=3; i++){
    console.log("Dear",guest_list[i],", you are invited for dinner at my place...");
}

//Ex: 16
console.log("\n...There is a new bigger table available...");
console.log("More guests are coming now...");

let new_guest_list: string[] = guest_list.slice(); //The slice() method returns a copy of an array.
new_guest_list.splice(0,0,"Ali");
new_guest_list.splice(2,0,"Mohsin Ali");
new_guest_list.splice(new_guest_list.length - 1, 0, "Hussain");

console.log("\nNew guests for bigger table...");
for (let i = 0; i<=new_guest_list.length-1; i++){
    console.log("Dear",new_guest_list[i],", you are invited for dinner at my place...");
}


//Ex: 19
console.log("\nTotal",new_guest_list.length,"guests are coming for the dinner...");
//length method to find total element of an array.. 




// EXERCISE - 20

let cities: string[] = ["Mirpurkhas", "Hyderabad", "Karachi", "Peshawar", "Multan", "Lahore", "Islamabad", "Quetta"];

console.log("\nName of the citites below...\n");
for (let j=0; j<=cities.length-1; j++){
    console.log(cities[j]);
}



// EXERCISE - 21

let mobile: {
    name: string;
    ram: string;
    memory: string;
    price: number;
}
    
mobile = {
    name: "vivo",
    ram: "8GB",
    memory: "128GB",
    price: 60000
}

let animal: {
    name: string;
    color: string;
    age: number;
}

animal = {
    name: "Lion",
    color: "brown",
    age: 20
}

console.log("Mobile: ",mobile);
console.log("Price of mobile: ",mobile.price);

console.log("About Lion: ",animal)
console.log("Animal name: ",animal.name);



// EXERCISE - 22

let over_ball: number[] = [1,2,3,4,5,6];

console.log(over_ball[6]); //it  will produce error becuade of out of bound index..

//correction
console.log(over_ball[5]);



// EXERCISE - 23

let car = "subaru";
console.log("Is car == 'subaru'? I predict true.");
console.log(car == "subaru");
console.log("Is car != 'civic'? I predict true");
console.log(car != "civic");
console.log("Is car === 'subaru'? I predict true");
console.log(car === "subaru");
console.log("Is car !== 'fortuner'? I predict true");
console.log(car !== "fortuner");
console.log("Is car == car? I predict true");
console.log(car == car);

console.log("Is car != 'subaru'? I predict false.");
console.log(car != "subaru");
console.log("Is car == 'vigo'? I predict false.");
console.log(car == "vigo");
console.log("Is car !== 'subaru'? I predict false.");
console.log(car !== "subaru");
console.log("Is car === 'corolla'? I predict false.");
console.log(car === "corolla");
console.log("Is car != 'car'? I predict false.");
console.log(car != car);



// EXERCISE - 24

//More onditional test
let a: string = "10";
let b: string = "10";
console.log(a == b);
console.log(a != b);

console.log("ANAS".toLowerCase() == "anas");
console.log("typescript".toLowerCase() == "Typescript");

let n1: number = 5;
let n2: number = 10;
console.log(n1 == n2);
console.log(n1 != n2);
console.log(n1 > n2);
console.log(n1 < n2);
console.log(n1 >= n2);
console.log(n1 <= n2);

console.log(n1 < n2 && n2 > n1); //and operator
console.log(n1 == n2 && n2 > n1);
console.log(n1 == n2 || n2 > n1); //not operator
console.log(n1 >= n2 || n2 == n1); //not operator

let item: number[] = [2,4,7,3,6];
console.log(3 in item);
console.log(10 in item);



// EXERCISE - 25

let alien: string = "green";

if (alien == "green"){
    console.log("You have earned 5 points");
}


let alien2: string = "red";
if (alien2 == "yellow"){
    console.log("You have earned 5 points"); //no output
}



// EXERCISE - 26

let alien: string = "green";
if (alien == "green"){
    console.log("You have earned 5 points to shoot");
}
else{
    console.log("You have just earned 10 points");
}


let alien2: string = "red";
if (alien2 == "green"){
    console.log("You have earned 5 points to shoot");
}
else{
    console.log("You have just earned 10 points");
}



// EXERCISE - 27

let alien1: string = "green";
if (alien1 == "green"){
    console.log("You have earned 5 points");
}
else if(alien1 == "yellow"){
    console.log("You have earned 10 points");
}
else{
    console.log("You have earned 15 points");
}

let alien2: string = "yellow";
if (alien2 == "green"){
    console.log("You have earned 5 points");
}
else if(alien2 == "yellow"){
    console.log("You have earned 10 points");
}
else{
    console.log("You have earned 15 points");
}


let alien3: string = "red";
if (alien3 == "green"){
    console.log("You have earned 5 points");
}
else if(alien3 == "yellow"){
    console.log("You have earned 10 points");
}
else{
    console.log("You have earned 15 points");
}



// EXERCISE - 28

let age: number = 13;

if (age < 2){
    console.log("Person is a baby");
}
else if (age == 2 || age < 4){
    console.log("Person is a toddler");
}
else if (age == 4 || age < 13){
    console.log("Person is a kid");
}
else if (age == 13 || age < 20){
    console.log("Person is a teenager");
}
else if (age == 20 || age < 65){
    console.log("Person is an adult");
}
else if (age >= 65){
    console.log("Person is an elder");
}



// EXERCISE - 29

let fav_fruits: string[] = ["Mango", "Apple", "Banana"];

if (fav_fruits.indexOf("Mango") != -1){
    console.log("You really like Mango.. !");
}
if (fav_fruits.indexOf("Water melon") != -1){
    console.log("You really like Water melon.. !");
}
if (fav_fruits.indexOf("Banana") != -1){
    console.log("You really like Banana.. !");
}
if (fav_fruits.indexOf("Apple") != -1){
    console.log("You really like Apple.. !");
}
if (fav_fruits.indexOf("Peach") != -1){
    console.log("You really like Orange.. !");
}



// EXERCISE - 30

let username: string[] = ["anas21", "aaryanmalik3", "admin", "babar_azam56", "virat_kohli18"];

for (let i = 0; i <= username.length-1; i++){
    if (username[i] == "admin"){
        console.log("\nHello admin, would you like to see a status report...?");
    }
    else{
        console.log("\nHello "+username[i]+", thank you for loggin in again...");
    }
}



// EXERCISE - 31

let username: string[] = ["anas21", "aaryanmalik3", "admin", "babar_azam56", "virat_kohli18"];


for (let i = username.length - 1; i >= -1; i--) {
    // console.log("Length of array: ", username.length);   
    if (username.length == 0) {
        console.log("\n\nArray elements removed.");
        console.log("You need to find some users....");
    }
    else if (username[i] == "admin") {
        console.log(`Hello admin, would you like to see a status report...?  ... i = ${i}`);
        username.splice(i, 1);
    } 
    else {
        console.log(`Hello ` + username[i] + `, thank you for logging in again... ... i = ${i}`);
        username.splice(i, 1);
    }
}

// console.log("Now array is empty");


// EXERCISE - 32

let current_users: string[] = ["babar_azam56", "virat_kohli_18", "ahmed_ali8", "raza_23", "hamza_15", "rehan_39"];
let new_users: string[] = ["hussain_10","babar_azam56", "hammad_3", "huzaifa_91", "virat_kohli_18", "anas_24"];

for (let i = 0; i<new_users.length; i++){
    let available_user: number = 1;
    for (let j = 0; j<current_users.length; j++){
        if (new_users[i] == current_users[j]){
            console.log("You need to enter a new username instead of: ",new_users[i]);
            available_user = 0;
            break;
        }
    }
    if (available_user == 1){
        console.log("Username is available: ",new_users[i]);
    }
}




// EXERCISE - 33

let ordinal_number: number[] = [1,2,3,4,5,6,7,8,9];

for (let i = 0; i<=ordinal_number.length - 1; i++){
    if (ordinal_number[i] == 1){
        console.log(ordinal_number[i]+"st");
    }
    else if(ordinal_number[i] == 2){
        console.log(ordinal_number[i]+"nd");
    }
    else if(ordinal_number[i] == 3){
        console.log(ordinal_number[i]+"rd");
    }
    else{
        console.log(ordinal_number[i]+"th");
    }
}




// EXERCISE - 34

let pizza: string[] = ["Chicken tikka", "Chicken fajita", "Cheezey"];

for (let i = 0; i<pizza.length; i++){
    console.log("I like",pizza[i],"pizza..");
}

console.log("\nPizza is my favorite food because it's cheesy and delicious.");
console.log("no matter how much sad i am but a pizza always bring smile on my face.");
console.log("i always try to taste new flavor combinations of pizza. I like pizza alot...");



// EXERCISE - 35

let animal: string[] = ["Lion", "Tiger", "Leopard"];

console.log("Animals with same characteristics..");
for (let i = 0; i<animal.length; i++){
    console.log(animal[i]);
}
console.log(); //for new line
console.log(animal[0],"the king of the jungle, they use their sharp teeth to catch animals like zebras...");
console.log(animal[1],"with orange and black stripes on the body, excellent hunter");
console.log(animal[2],"also very excellent hunter..");



// EXERCISE - 36

function make_shirt(size: string, text: string) {
    console.log(`size of your shirt: ${size}\nMessage will be print on the shirt: ${text}`);  
  }
  
  make_shirt("Medium", "babar Azam 56");
  
  

// EXERCISE - 37

function make_shirt(size: string = "Large", text: string = "I love TypeScript") {
    console.log(`size of your shirt: ${size}\nMessage will be print on the shirt: ${text}`);
}

console.log("\nThis is default.");
make_shirt(); //Default
    
console.log("\nThis is by user");
make_shirt("Medium", "babar Azam 56");
  


// EXERCISE - 38

function describe_city(city: string, country: string = "Pakistan"){
    console.log(`${city} is in ${country}.`);
}

describe_city("Karachi");
describe_city("Lahore");
describe_city("Mumbai", "India");



// EXERCISE - 39

function city_country(city: string, country: string){
    return `"${city}, ${country}"`; //${} known as template literals, use in backticks (``)
}

console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Mirpurkhas", "Pakistan"));
console.log(city_country("Dubai", "UAE"));



// EXERCISE - 40

function make_album(artist_name: string, album_name: string, tracks: number = 1){
    let album = {
        artist: artist_name,
        album: album_name,
        tracks: tracks
    };

    return album;
}

console.log(make_album("Nusrat Fateh Ali Khan", "Sufi Qawwals", 25));
console.log(make_album("Atif Aslam", "Aadat", 2)); 
console.log(make_album("Arijit Singh", "O Maahi")); //default tracks




// EXERCISE - 41

let magicians: string[] = ["David Copperfield", "David Blaine", "Shin Lim", "Derren Brown", "Dynamo"];

function show_magician(m){
    console.log("\nMagicians Name:\n")
    for (let i=0; i<m.length; i++){
        console.log(m[i]);
    }
}


show_magician(magicians);



// EXERCISE - 42

let magicians: string[] = ["David Copperfield", "David Blaine", "Shin Lim", "Derren Brown", "Dynamo"];


function make_great(magic){
    for (let i=0; i<magic.length; i++){
        magic[i] = `The great magician...${magic[i]}`
    }

}

function show_magician(m){
    console.log("\nMagicians name....\n");
    console.log(m);
}

make_great(magicians);
show_magician(magicians);




// EXERCISE - 43

let magicians: string[] = ["David Copperfield", "David Blaine", "Shin Lim", "Derren Brown", "Dynamo"];

let copy_of_magicians: string[] = magicians.slice(); //slice method make a new copy of array
function make_great(magic){
    for (let i=0; i<magic.length; i++){
        magic[i] = `The great magician...${magic[i]}`
    }
    return magic;
}

function show_magician(original, modifed){
    console.log("\nOriginal Magicians names....\n");
    console.log(original);

    console.log("\nGreat added Magicians names....\n");
    console.log(modifed);    
}

let modified_magicians: string[] = make_great(copy_of_magicians);

show_magician(magicians, modified_magicians);




// EXERCISE - 44

function order_sandwich(sandwich){
    console.log("\nsandwich summary being ordered...");
    for (let i=0; i<sandwich.length; i++){
        console.log(sandwich[i]);
    }
}

let sandwich1_items: string[] = ["Kabab", "cheez", "tomato"];
let sandwich2_items: string[] = ["Fried Eggs", "cheez", "tomato", "Mioniz"];
let sandwich3_items: string[] = ["Kabab", "Ketchup"];

order_sandwich(sandwich1_items);
order_sandwich(sandwich2_items);
order_sandwich(sandwich3_items);



// EXERCISE - 45

function car_Info(manufecturer: string, model: string){
    console.log(manufecturer, model);
}

car_Info("honda", "civic");


function add(a: number, b: number, c: any){
    console.log(a, b, c);
}

add(2, 2, [2,3,4,5,6]);


