// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
  const hqLocation = 42;
  return Math.abs(pickupLocation - hqLocation);
}

function distanceFromHqInFeet(pickupLocation) {
  const blocksAway = Math.abs(pickupLocation - 42);
  return blocksAway * 264;
}

function distanceTravelledInFeet(start, destination) {
  const blocksTravelled = Math.abs(destination - start);
  return blocksTravelled * 264;
}

function calculatesFarePrice(start, destination) {
  const feet = Math.abs(destination - start) * 264;

  if (feet <= 400) {
    return 0; // Free sample
  } else if (feet > 400 && feet <= 2000) {
    return (feet - 400) * 0.02; // 2 cents per foot after 400
  } else if (feet > 2000 && feet <= 2500) {
    return 25; // Flat fare
  } else {
    return 'cannot travel that far'; // Exceeds maximum allowed
  }
}
