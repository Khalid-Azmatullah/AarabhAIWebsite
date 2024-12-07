async function checkLoginDetails(event) {
  event.preventDefault();
  const Username = document.getElementById("username").value;
  const Password = document.getElementById("password").value;
  
  const Response = await fetch("https://mr-codes-cant-code.github.io/AarambhAIApi/users/test.json")
  if (!Response.ok) {
    alert('Unable to access ours servers.')
  }
  
  const Data = await Response.json()
  
  for(let i=0; i < Data.length; i++) {
    if (Data[i].username == Username) {
      if (Data[i].password === Password) {
        document.getElementById("incorrectPasswordMessage").innerHTML = "";
        window.location.replace(`dashboard.html?user=${Username}`)
        break
      }
    }
    if (i === Data.length-1) {
      const errorSound = document.getElementById("errorSound");
      errorSound.play()
      document.getElementById("incorrectPasswordMessage").innerHTML = "Incorrect Credentials ❌";
      const message = document.getElementById("incorrectPasswordMessage");
      message.classList.add("incorrectAnimation");
      setTimeout(() => {
        message.classList.remove("incorrectAnimation");
      }, 1000);
    }
  }
}