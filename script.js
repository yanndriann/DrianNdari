document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Mencegah form reload halaman

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  // Ganti ini sesuai logika login kamu
  if (username === 'april' && password === '042024') {
    // Tampilkan notifikasi login sukses
    Swal.fire({
      icon: 'success',
      title: 'Login Berhasil',
      text: 'Selamat datang!',
      confirmButtonText: 'Lanjut ke Dashboard',
      confirmButtonColor: '#7a6fca'
    }).then(() => {
      // Setelah menekan tombol, redirect ke dashboard
      window.location.href = 'dashboard.html?login=success';
    });
  } else {
    // Login gagal → tampilkan SweetAlert
    Swal.fire({
      icon: 'error',
      title: 'Login Gagal',
      text: 'Username atau password salah!',
      confirmButtonColor: '#d33'
    });
  }
});