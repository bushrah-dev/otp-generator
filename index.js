let generator = () => {
    const otpLength = 6;
    const otp = Math.floor(100000 + Math.random() * 900000);
    document.getElementById("otp").innerText = `${otp}`;
  };
  
  document.getElementById("btn").addEventListener("click", generator);
  window.addEventListener("load", generator);