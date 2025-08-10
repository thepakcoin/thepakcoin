const cells = document.querySelectorAll('.cell');

// Add click event listener for each cell
cells.forEach(cell => {
    cell.addEventListener('click', () => {
        // Log cell position when clicked
        console.log(`Cell clicked at position: ${cell}`);
        // Add more game logic here as per your requirement
    });
});
