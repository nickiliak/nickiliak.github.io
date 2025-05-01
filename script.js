function greetUser() {
    const name = document.getElementById("name-input").value;
    const greetingEl = document.getElementById("greeting");
  
    if (name.trim() === "") {
      greetingEl.textContent = "Please enter your name!";
    } else {
      greetingEl.textContent = `Hello, ${name}! 👋 Nice to meet you.`;
    }
  }
  