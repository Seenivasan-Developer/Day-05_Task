
//1.Class - Movie
class Movie{
    constructor(title,studio,rating='PG'){
this.title=title;
this.studio=studio;
this.rating=rating;
    }
   static getPG(movies){
        var rmovies=[];
for(var i=0;i<movies.length;i++){
    if(movies[i].rating=="PG"){
        rmovies.push(movies[i]);
    }
}
return rmovies;
    }
}
const casinoRoyale = new Movie('Casino Royale', 'Eon Productions', 'PG-13');
console.log(casinoRoyale);
var movies=[]
  movies.push(new Movie('Movie 1', 'Studio A'));
  movies.push(new Movie('Movie 2', 'Studio B', 'PG-13'));
  movies.push(new Movie('Movie 3', 'Studio C', 'PG'));
  movies.push(new Movie('Movie 4', 'Studio D', 'R'));
  movies.push(new Movie('Movie 5', 'Studio S'));
console.log(movies);
  console.log(Movie.getPG(movies));

//2.Class-Circle
class Circle{
    constructor(radius=1.0,color="red"){
this.radius=radius;
this.color=color;
    }
   getRadius(){
       return `Radius of the Circle is ${this.radius}`
    }
getColor(){
       return `Color of the Circle is ${this.color}`
    }
getArea(){
var area=Number(3.14)*Number(this.radius)*Number(this.radius);
return `Area of the Circle is ${area}`;
}
getCircumference(){
var circumference=Number(2)*Number(3.14)*Number(this.radius);
return `Circumference of the Circle is ${circumference}`;
}

}
var Circle1 = new Circle(2.5, "Yellow");
console.log(Circle1.getRadius());
console.log(Circle1.getColor());
console.log(Circle1.getArea());
console.log(Circle1.getCircumference());


 //3. Write a “person” class to hold all the details.
  class Person {
    constructor(firstName, lastName, age, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }

    getPersonDetails() {
        return `${this.firstName} ${this.lastName} ${this.age} ${this.gender}`;
    }
}

var person1 = new Person('John', 'Carter', 30, 'Male');
console.log(person1.getPersonDetails());

//4. write a class to calculate the uber price.
class UberTravel {
    constructor(fromplace, toplace, TotalKm, RateKm) {
        this.fromplace = fromplace;
        this.toplace = toplace;
        this.TotalKm = TotalKm;
        this.RateKm = RateKm;
    }

    getUberPrice() {
var price=Number(this.RateKm)*Number(this.TotalKm);
        return `The Uber Price for travelling ${this.fromplace} to ${this.toplace} is ${price}`;
    }
}

var Travel1 = new UberTravel('Madurai', 'Trichy', 100, 15);
console.log(Travel1.getUberPrice());
