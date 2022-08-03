const colors = [
  "#59CE8F",
  "#DF7861",
  "#5BB318",
  "#0096FF",
  "#FFEA11",
  "#3330E4",
];

let index = 0;

function randomColor() {
  if (index > colors.length - 1) {
    index = 0;
  }
  return colors[index++];
}
export default randomColor;
