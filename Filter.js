document.addEventListener('DOMContentLoaded', function () {
  const filter = document.getElementById('proof-filter');
  const proofs = document.querySelectorAll('.proof');

  filter.addEventListener('change', function () {
    const value = this.value;
    proofs.forEach(proof => {
      if (value === 'all' || proof.id === value) {
        proof.style.display = 'block';
      } else {
        proof.style.display = 'none';
      }
    });
  });
});
