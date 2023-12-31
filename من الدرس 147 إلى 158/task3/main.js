// Edit The Class
class User {
  #c;
  constructor(username, card) {
    this.u = username;
    this.#c = card;
  }
  get showData(){
    let re=String(this.#c)
    re=re.split("")
    re=re.filter((el)=>el!=="-")
    let result = ""
    for(let i=0;i<re.length;i++){
      if(i % 4===0){
        result+="-"
        result+=re[i]
      }else{
        result+=re[i]
      }
    }
    result=result.slice(1,result.length);
    return `Hello ${this.u} Your Credit Card Number Is ${result}`
  }
}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined
