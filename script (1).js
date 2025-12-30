
document.addEventListener("DOMContentLoaded", function () {

  const home = document.getElementById("home");
  const profile = document.getElementById("profile");
  const donorForm = document.getElementById("donorForm");
  const finderForm = document.getElementById("finderForm");

  function showHome() {
    home.style.display = "flex";
    profile.style.display = "none";
    donorForm.style.display = "none";
    finderForm.style.display = "none";
  }

  function showProfile() {
    home.style.display = "none";
    profile.style.display = "block";
    donorForm.style.display = "none";
    finderForm.style.display = "none";
  }

  function openForm() {
    home.style.display = "none";
    profile.style.display = "none";
    donorForm.style.display = "block";
  }

  function openFinder() {
    home.style.display = "none";
    profile.style.display = "none";
    donorForm.style.display = "none";
    finderForm.style.display = "block";
  }

  
  document.getElementById("registerForm").addEventListener("submit", function(e){
    e.preventDefault();

    const donor = {
      name: document.getElementById("name").value,
      age: document.getElementById("age").value,
      gender: document.getElementById("gender").value,
      blood: document.getElementById("blood").value,
      phone: document.getElementById("phone").value,
      district: document.getElementById("district").value,
      status: document.getElementById("status").value
    };

    let data = JSON.parse(localStorage.getItem("donors")) || [];
    data.push(donor);
    localStorage.setItem("donors", JSON.stringify(data));

    alert("Donor Registered Successfully ✅");
    this.reset();
  });

  
  window.searchDonor = function(){
    const d = document.getElementById("searchDistrict").value;
    const b = document.getElementById("searchBlood").value;
    const result = document.getElementById("searchResult");
    result.innerHTML = "";

    const data = JSON.parse(localStorage.getItem("donors")) || [];
    const filtered = data.filter(x =>
      (d === "" || x.district === d) &&
      (b === "" || x.blood === b) &&
      x.status === "Available"
    );

    if(filtered.length === 0){
      result.innerHTML = "No Donor Found";
      return;
    }

    filtered.forEach(x => {
      result.innerHTML += `
        <div>
          <b>${x.name}</b><br>
          ${x.blood} | ${x.district}<br>
          phone no.${x.phone}
        </div>
      `;
    });
  };


  window.showHome = showHome;
  window.showProfile = showProfile;
  window.openForm = openForm;
  window.openFinder = openFinder;

});



console.log("Saved donors:", localStorage.getItem("donors"));  