// Code your solution in this file!




function distanceFromHqInBlocks(blocks){
if (blocks > 42){
  return blocks - 42;
} else {
  return 42 - blocks
}
}

let distanceBlocks = distanceFromHqInBlocks();

function distanceFromHqinFeet(blocks){
  return (distanceBlocks)*264; 
}