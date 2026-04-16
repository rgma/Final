let currentState = welcoming;

export function handleInput(sInput) {
  return currentState(sInput);
}

export function clearInput(){
  currentState = welcoming;  
}

// STEP 1: Welcome + options
function welcoming(sInput) {
  let aReturn = [];

  // If user chose a service
  if (sInput === "1" || sInput === "2") {
    currentState = choosingService;
    return choosingService(sInput);
  }

  // If user wants menu
  if (sInput === "menu") {
    currentState = choosingService;

    aReturn.push("Here are our services ✨");
    aReturn.push("1. GelX - $60");
    aReturn.push("2. Reuglar Polish - $40");
    aReturn.push("Type 1 or 2 to continue");

    return aReturn;
  }

  // Default welcome
  currentState = choosingService;

  aReturn.push("Welcome to The Fresh Coat");
  aReturn.push("What would you like today?");
  aReturn.push("1. GelX");
  aReturn.push("2. Regular Polish");

  return aReturn;
}

// STEP 2: Choose service
function choosingService(sInput) {
  let aReturn = [];

  if (sInput === "1") {
    currentState = upsell;
    aReturn.push("Great choice! GelX Press-ons selected.");
    aReturn.push("Would you like to add extra nail tips? (yes/no)");
  } 
  else if (sInput === "2") {
    currentState = upsell;
    aReturn.push("Nice! Regular Polsih.");
    aReturn.push("Would you like to add nail polish remover with that? (yes/no)");
  } 
  else {
    aReturn.push("Please type 1 for GelX or 2 for Regular Polish.");
  }

  return aReturn;
}

// STEP 3: Upsell
function upsell(sInput) {
  let aReturn = [];
  currentState = confirming;

  if (sInput.toLowerCase().startsWith("y")) {
    aReturn.push("Awesome! Added to your order!");
  } else {
    aReturn.push("No problem!");
  }

  aReturn.push("Your appointment is booked!");
  aReturn.push("See you soon at The Fresh Coat");

  return aReturn;
}

// STEP 4: Reset
function confirming() {
  let aReturn = [];
  currentState = welcoming;

  aReturn.push("If you'd like to book again, just say hi!");

  return aReturn;
}