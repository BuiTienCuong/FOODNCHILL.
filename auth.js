document.addEventListener('DOMContentLoaded', function() {
    updateAuthUI();
    
    // Xử lý đăng xuất
    document.addEventListener('click', function(e) {
      if (e.target.classList.contains('logout-btn')) {
        e.preventDefault();
        localStorage.removeItem('loggedInUser');
        updateAuthUI();
        window.location.href = 'trang-chu.html';
      }
    });
  });
  
  function updateAuthUI() {
    const authButtons = document.querySelector('.auth-buttons');
    const userInfo = document.querySelector('.user-info');
    const usernameSpan = document.querySelector('.username');
    
    const loggedInUser = localStorage.getItem('loggedInUser');
    
    if (loggedInUser) {
      // Đã đăng nhập
      const user = JSON.parse(loggedInUser);
      if (authButtons) authButtons.style.display = 'none';
      if (userInfo) userInfo.style.display = 'flex';
      if (usernameSpan) usernameSpan.textContent = user.username;
    } else {
      // Chưa đăng nhập
      if (authButtons) authButtons.style.display = 'flex';
      if (userInfo) userInfo.style.display = 'none';
    }
  }