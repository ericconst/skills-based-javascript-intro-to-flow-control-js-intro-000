function basicTeenager(age) {
  if (12<age && age<20){
    console.log("You are a teenager!")
}}

function teenager(age) {
  if (13<=age<=19){
    console.log("You are a teenager!")
  } else {
    console.log("You are not a teenager")
  }}

function ageChecker(age) {
  if (age<=12){
    return "You are a kid"
  } else if (age>19) {
    return "You are a grownup"
  } else {
    return "You are a teenager!"
  }}

function ternaryTeenager(age) {
  return 12<age<20 ? "You are a teenager":"You are not a teenager"
}

function switchAge(age) {
  case age===13:
    console.log("You are a teenager");
    break;
  case age===14:
    console.log("You are a teenager");
    break;
  case 14<age<=19:
    console.log("You are a teenager");
    break;
  default:
    console.log("You have an age");
}
