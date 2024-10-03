document.addEventListener("DOMContentLoaded", function() {
  let exclusiveElement = document.getElementById('tag');
  if (exclusiveElement) {
    exclusiveElement.remove();
  }
});
