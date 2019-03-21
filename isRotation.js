// s1 : waterbottle
// s2 : erbottlewat
// true

// s1 : hello
// s2 : ohell
// true

// s1 : food
// s2 : fodo
// false

let s1 = "waterbottle"
let s2 = "erbottlewat"

let isRotation = (s1, s2) => {

  if(s1.length != s2.length) {
    return false;
  }
  
  if(s1 == s2) {
    return true;
  }

  //travers through s2 
  for(let i = 0; i < s1.length; i++) {
    if(s1 == s2) {
      return true;
    }

    let temp = s2.substring(1,s2.length);
    temp += s2.charAt(0);
    s2 = temp;
    console.log(s2);
  }

  return false;
}

isRotation(s1,s2);