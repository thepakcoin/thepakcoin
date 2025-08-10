const cells = document.querySelectorAll('.cell');

// Har cell pe click hone par position print hoga
cells.forEach(cell => {
    cell.addEventListener('click', () => {
        // Cell ki position console mein print ho jayegi
        console.log(`Cell clicked at position: ${cell}`);
    });
});
