document.getElementById("tutorForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.querySelector("input[name='name']").value;
  const email = document.querySelector("input[name='email']").value;
  const selectedOption = document.getElementById("myDropdown").value;
  const notes = document.querySelector("textarea[name='notes']").value;

  const formData = new URLSearchParams();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("selectedTutor", selectedOption);
  formData.append("notes", notes);

  console.log("Sending:", Object.fromEntries(formData));

  fetch("https://script.google.com/macros/s/AKfycbydV_8ufZHklfoToA8C-NIeefk2ecw2BzJjtRsi_IIh9CWWF2fZY6RAoGxGCZ-Lwo_vSQ/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formData.toString(),
  })
    .then((response) => {
      if (!response.ok) throw new Error("Network error");
      return response.json();
    })
    .then((data) => {
      alert("Registration successful! Thank you.");
      document.getElementById("tutorForm").reset();
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("There was a problem submitting your form.");
    });
});
