// Login logic
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const u = document.getElementById('user').value;
  const p = document.getElementById('pass').value;
  if (u === 'admin' && p === '1234') {
    window.location.href = 'fleetego_dashboard.html';
  } else {
    document.getElementById('error').textContent = 'Hibás felhasználónév vagy jelszó.';
  }
});