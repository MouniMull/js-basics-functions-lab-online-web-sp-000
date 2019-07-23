// Code your solution in this file!




function distanceFromHqInBlocks(blocks){
if (blocks > 42){
  return blocks - 42;
} else {
  return 42 - blocks
}
}

let feet = distanceFromHqInBlocks(blocks)*264;


function distanceFromHqInFeet (blocks) {
  let feet = distanceFromHqInBlocks(blocks)*264;
  return feet;
}

function distanceTravelledInFeet(blocks, pickup) {
  if( blocks > pickup){
    return (blocks - pickup)*264;
  } else {
    return (pickup - blocks)*264;
  }
}

function calculatesFarePrice(blocks, pickup){
  const distance = distanceTravelledInFeet(blocks, pickup);
  
  if (distance < 400) {
    return 0;
  } else {
    
  }
}


