
export function displayTime(mil) {
  var secs = mil / 1000;
  return Math.round(secs * 100) / 100;
}
