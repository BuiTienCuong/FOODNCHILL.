    document.addEventListener('DOMContentLoaded', function() {
    // Lấy danh sách yêu thích từ localStorage hoặc tạo mới
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    // Cập nhật trạng thái các icon yêu thích
    document.querySelectorAll('.favorite-icon').forEach(icon => {
      const placeId = icon.getAttribute('data-id');
      
      // Kiểm tra nếu địa điểm đã được yêu thích
      if (favorites.includes(placeId)) {
        icon.classList.add('active');
      }
      
      // Thêm sự kiện click
      icon.addEventListener('click', function() {
        this.classList.toggle('active');
        
        const placeId = this.getAttribute('data-id');
        const index = favorites.indexOf(placeId);
        
        if (index === -1) {
          // Thêm vào danh sách yêu thích
          favorites.push(placeId);
        } else {
          // Xóa khỏi danh sách yêu thích
          favorites.splice(index, 1);
        }
        
        // Lưu vào localStorage
        localStorage.setItem('favorites', JSON.stringify(favorites));
      });
    });
  });
  
