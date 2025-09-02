fetch("http://localhost:3100/deleteRiddle/123", {
    method: "DELETE"
  })
    .then(res => res.text())
    .then(data => console.log("✅ Got response:", data))
    .catch(err => console.error("❌ Error:", err.message));

