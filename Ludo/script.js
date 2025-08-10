document.addEventListener('DOMContentLoaded', () => {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    cell.addEventListener('click', () => {
      alert('Cell clicked!');
    });
  });
});
