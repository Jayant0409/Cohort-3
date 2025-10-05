// class user{
//     constructor(username, email, password)
// {
//      this.username=username;
//      this.email=email;
//      this.password=password;
// }

// chai(){

//     console.log("username:"+this.username)
//     console.log("email:"this.email)
//     console.log("password:"this.password);
// }
// }

//  const member=new user("jayant","jayant@gmail",123);
// member.chai();




class Rectangle {
    constructor(width, height, color) {
         this.width = width;
         this.height = height;
         this.color = color; 
    }
    
    area() {
        console.log(this)
        const area = this.width * this.height;
          return area;
    }
    
    paint() {
             console.log("Painting with color "+this.color);
    }
    
 }
 
 const rect = new Rectangle(2, 4,"red") // instance or object of a class Rectangle

 const rect2= new Rectangle(10,20,"black")
 const area = rect.area();
 const area2 = rect2.area();
 
 rect.paint()
 rect2.paint()
 console.log(area) 