// Login Validation
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let msg = document.getElementById("loginMessage");
  
    if(username === "user" && password === "1234") {
      msg.style.color = "green";
      msg.textContent = "✅ Login Successful!";
    } else {
      msg.style.color = "red";
      msg.textContent = "❌ Invalid Credentials!";
    }
  });
  
  // Booking Confirmation
  document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let confirmBox = document.getElementById("confirmation");
    confirmBox.style.display = "block";
    confirmBox.innerHTML = "<h3>🎉 Ticket Confirmed!</h3><p>Your journey is booked successfully.</p>";
  });
  