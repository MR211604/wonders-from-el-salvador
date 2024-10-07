export function snakeToNormal(text) {
  let normalText = text.replace(/_/g, ' ');

  normalText = normalText.split(' ').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');

  return normalText;
}