document.addEventListener("DOMContentLoaded", () => {
  const hesaplaButton = document.querySelector('input[type="button"]');
  hesaplaButton.addEventListener("click", () => {
    const krediTutari = parseFloat(
      document.getElementById("txtKrediTutari").value
    );
    const vade = parseInt(document.getElementById("listeVade").value);

    const faizOrani =
      vade === 24 ? 0.06 : vade === 36 ? 0.07 : vade === 48 ? 0.08 : 0.05;

    const aylikFaizOrani = faizOrani / 12;
    const aylikTaksit =
      (krediTutari * aylikFaizOrani) /
      (1 - Math.pow(1 + aylikFaizOrani, -vade));

    document.getElementById(
      "sonuc"
    ).textContent = `Aylık taksit tutarı: ${aylikTaksit.toFixed(2)} TL`;
  });
});
