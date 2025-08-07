<script>
  const dice = document.getElementById("shared-dice");

  dice.addEventListener("click", function () {
    // 1 se 6 ke beech random number
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    // Number ko dice pe dikhana
    dice.textContent = randomNumber;

    // Yahan tum apni game ki logic laga sakte ho ke kaunsa player chalega
    console.log("Dice rolled:", randomNumber);
  });
</script>
