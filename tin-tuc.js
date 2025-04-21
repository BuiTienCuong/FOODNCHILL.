const newsData = [
    {
        id: 1,
        title: "Top 5 quán trà chanh view đẹp tại Cầu Giấy",
        content: "Khám phá những địa điểm lý tưởng để tụ tập bạn bè với view thành phố...",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHpy3W7PoYNk720pvT9nKomhkj5DA86DKq3g&s",
        tags: ["Cầu Giấy", "Địa điểm hot"],
        districts: ["Cầu Giấy"],
        link: "https://inhat.vn/quan-tra-chanh-ha-noi/?id=1"
    },
    {
        id: 2,
        title: "Những địa điểm chill quanh khu vực bách kinh xây",
        content: "Địa điểm hẹn hò cho những cặp đôi, tụ tập bạn bè của các sinh viên khu vực bách kinh xây",
        image: "https://cdn.justfly.vn/1920x2400/media/202106/25/1624586136-cong-vien-thong-nhat-dia-diem-vui-choi-hai-ba-trung-7jpg.jpg",
        tags: ["Thư giãn","Đẹp", "Hai Bà Trưng"],
        districts: ["Hai Bà Trung"],
        link: "https://vinpearl.com/vi/top-13-dia-diem-vui-choi-quan-hai-ba-trung-thoa-suc-kham-pha?id=2"
    },
    {
        id: 3,
        title: "Những quán trà chanh không gian chill ở Thanh Xuân",
        content: "Ngồi tán gẫu với bạn bè, đồng nghiệp cùng ly trà chanh mát lạnh và không gian cực chill...",
        image: "https://img-us.didaudo.net/us-locations/VN/000/045/45854/0tmore-tiem-tra-chanh-08-thuong-dinh.jpg?output=webp&fit=cover&w=800&h=600&q=70",
        tags: ["Thanh Xuân", "Chill", "Quán đẹp"],
        districts: ["Thanh Xuân"],
        link: "https://amthucbinhxuyen.com/post/tong-hop-8-quan-tra-chanh-tai-quan-thanh-xuan-ha-noi.p1570?id=3"
      },
      {
        id: 4,
        title: "Top quán ăn vặt ở Hoàn Kiếm",
        content: "Đến quận Hoàn Kiếm, trải nghiệm ẩm thực nơi đây bằng việc ghé thăm những quán ăn vặt ngon, rẻ, được gợi ý bởi người bản địa với nộm bò khô, nem chua, chân gà nướng,...",
        image: "https://cdn.tgdd.vn/Files/2022/10/11/1476788/top-16-quan-an-vat-o-quan-hoan-kiem-cuc-ngon-sieu-re-202210112203209480.jpg",
        tags: ["Hoàn Kiếm", "Ăn vặt", "Ngon"],
        districts: ["Hoàn Kiếm"],
        link: "https://www.bachhoaxanh.com/kinh-nghiem-hay/top-16-quan-an-vat-o-quan-hoan-kiem-cuc-ngon-sieu-re-1476788?srsltid=AfmBOor4xvRTuOhdW6XvbjfgGLIBrL7SkRB5-hiBrGh96r_Bf1twMJdn?id=4"
      },
      {
        id: 5,
        title: "Top quán ăn uống giá rẻ dành cho sinh viên",
        content: "Lướt nhẹ top những quán ăn uống không chỉ ngon mà còn rẻ, đúng chuẩn sinh viên...",
        image: "https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/473803RLl/bun-oc-co-hue-976891.jpg",
        tags: ["Sinh viên", "Giá rẻ", "Ăn vặt"],
        districts: ["Hoàn Kiếm","Thanh Xuân", "Cầu Giấy", "Hai Bà Trưng"],
        link: "https://pasgo.vn/blog/10-quan-an-sinh-vien-ngon-re-duoc-yeu-thich-o-ha-noi-521?id=5"
      },
      {
        id: 6,
        title: "14 quán cafe sống ảo tung chảo ở quận Cầu Giấy",
        content: "Cầu Giấy vốn được mệnh danh là “thủ phủ” của những quán cafe sống ảo, sở dĩ ở đây có nhiều sinh viên nên các quán cũng nhiều hơn quận khác.",
        image: "https://cdn.justfly.vn/1920x1440/media/202106/11/1623384986-lofita-2a-ho-tung-mau-mai-dich-cau-giay-2.jpg",
        tags: ["Cầu Giấy", "View đẹp", "Check-in"],
        districts: ["Cầu Giấy"],
        link: "https://justfly.vn/discovery/vietnam/hanoi/quan-ca-phe-dep-quan-cau-giay?id=6"
      },
      {
        id: 7,
        title: "Vui chơi, thư giãn nhiều nơi ở Hoàn Kiếm",
        content: "Quận Hoàn Kiếm có gì chơi có lẽ là thắc mắc của rất nhiều du khách lần đầu đến Hà Nội. Cùng khám phá top những địa điểm vui chơi, check in thú vị và những món ngon nhất định phải thử khi đến với quận Hoàn Kiếm, Hà Nội.",
        image: "https://statics.vinpearl.com/quan-hoan-kiem-co-gi-choi-1_1687796420.jpg",
        tags: ["Hoàn Kiếm", "Chơi", "Yên tĩnh", "Chill"],
        districts: ["Hoàn Kiếm"],
        link: "https://vinpearl.com/vi/quan-hoan-kiem-co-gi-choi?id=7"
      },
      {
        id: 8,
        title: "Heart Center Cafe tổ hợp Ngõ 48 Tạ Quang Bửu",
        content: "Một quán Cafe có box film siêu riêng cho các bác nào muốn một buổi hẹn ấm cúng nè🫶🏻✨",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQprik4255Z48rsNexGbHQbGM7iu9kBZkXeOA&s",
        tags: ["Relax","Hai Bà Trưng","Hẹn hò"],
        districts: ["Hai Bà Trưng"],
        link: "https://www.tiktok.com/@morionzel/video/7341023389001305351?is_from_webapp=1&sender_device=pc&web_id=7372256470870033936?id=8"
      },
      {
        id: 9,
        title: "Rạp Chiếu Phim Chất Lượng Ở Cầu Giấy",
        content: "Cuộc sống bận rộn đôi khi khiến bạn quên mất việc thư giãn. Hãy đi du lịch để tìm lại sự cân bằng và niềm vui.",
        image: "https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/475215osj/anh-mo-ta.png",
        tags: ["Xem phim", "Hẹn hò", "Tụ tập"],
        districts: ["Cầu Giấy"],
        link: "https://mytour.vn/vi/blog/bai-viet/top-4-rap-chieu-phim-chat-luong-o-cau-giay-ha-noi.html?id=9"
      },
      {
        id: 10,
        title: "Vui chơi cuối tuần Hà Nội",
        content: "Những địa điểm giải toả những xì trét sau 1 tuần đi học, đi làm mệt mỏi của những con người cuốn vào vòng xoáy của đồng tiền ",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXRJu_wZGHkg_bnyod0Rzf3KkBf95EnowDLQ&s",
        tags: ["Pet cafe", "Dễ thương", "Ngon", "Rẻ"],
        districts: ["Hoàn Kiếm","Thanh Xuân", "Cầu Giấy", "Hai Bà Trưng"],
        link: "https://www.tiktok.com/@mochi_mochi093/video/7368022266002574599?is_from_webapp=1&sender_device=pc&web_id=7372256470870033936?id=10"
      },
      {
        id: 11,
        title: "Công viên hồ Đền Lừ – địa điểm tập thể dục & picnic cực chill",
        content: "Buổi sáng sớm hoặc chiều muộn, hồ Đền Lừ là nơi lý tưởng để chạy bộ, đạp xe hoặc trải thảm picnic cùng bạn bè.",
        image: "https://laodongthudo.vn/stores/news_dataimages/vuque/102019/27/18/3947_7.jpg",
        tags: ["Thư giãn", "Picnic", "Tập thể dục","Hoàng Mai"],
        districts: ["Hai Bà Trưng"],
        link: "https://laodongthudo.vn/cong-vien-ho-den-lu-hut-khach-nho-may-tap-the-duc-mien-phi-98668.html?id=11"
      },
      {
        id: 12,
        title: "Phố đi bộ Hồ Gươm – vừa ngắm cảnh, vừa chơi nhạc đường phố",
        content: "Cuối tuần, phố đi bộ Hồ Gươm nhộn nhịp với hoạt động biểu diễn nghệ thuật, chơi trò chơi và ăn vặt cực vui.",
        image: "https://i1-dulich.vnecdn.net/2023/08/11/ho-Guom2-9553-1691720401.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=jeG_f2TZ2HQSq2E4BxnywA",
        tags: ["Phố đi bộ", "Hoạt động ngoài trời", "Tham quan", "Ăn uống","Chụp ảnh"],
        districts: ["Hoàn Kiếm"],
        link: "https://vnexpress.net/goi-y-an-choi-o-pho-di-bo-ho-hoan-kiem-4633127.html?id=12"
      },
      {
        id: 13,
        title: "Top 9 rạp chiếu phim Cầu Giấy có trải nghiệm xứng đáng nhất",
        content: "Bạn có hẹn đi rạp chiếu phim Cầu Giấy tuần này nhưng chưa biết chọn điểm đến nào? Cùng điểm qua top 9 cụm rạp phim chất lượng tốt – giá cả phải chăng tại khu vực quận Cầu Giấy ngay sau đây để chọn cho mình một điểm đến ưng ý nhé!",
        image: "https://cdn.xanhsm.com/2024/12/88f86877-rap-chieu-phim-cau-giay-23.jpg",
        tags: ["Giải trí", "Đi chơi", "Phim ảnh"],
        districts: ["Cầu Giấy"],
        link: "https://www.xanhsm.com/news/rap-chieu-phim-cau-giay?id=13"
      },
      {
        id: 14,
        title: "7 Chợ Đêm Hà Nội Nổi Tiếng Giá Rẻ Cho Bạn Mua Sắm Tẹt Ga",
        content: "Không khí nhộn nhịp, nhiều món ngon và các gian hàng thủ công thú vị chờ bạn khám phá.",
        image: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1650006583/blog/mk0ezn58u3opk1swc0bs.webp",
        tags: ["Chợ đêm", "Ẩm thực", "Văn hóa","Giá rẻ"],
        districts: ["Hoàn Kiếm","Thanh Xuân", "Cầu Giấy", "Hai Bà Trưng"],
        link: "https://www.klook.com/vi/blog/cho-dem-ha-noi/?id=14"
      },
      {
        id: 15,
        title: "Công viên Thanh Xuân – không gian xanh giữa lòng phố",
        content: "Công viên Thanh Xuân là một không gian xanh lý tưởng giữa lòng thủ đô Hà Nội, có bầu không khí trong lành, cảnh quan tươi đẹp cho người dân và du khách thoải mái khám phá. Với thảm cỏ rộng rãi, hồ nước mát lành cùng nhiều khu vui chơi, công viên trở thành địa điểm lý tưởng để rèn luyện sức khỏe và tận hưởng thiên nhiên. ",
        image: "https://cdn.xanhsm.com/2025/02/a4402bba-cong-vien-thanh-xuan-2.jpg",
        tags: ["Công viên", "Thư giãn", "Đọc sách"],
        districts: ["Thanh Xuân"],
        link: "https://www.xanhsm.com/news/cong-vien-thanh-xuan-ha-noi?id=15"
      },
      {
        id: 16,
        title: "Trạm sách Cầu Giấy – đọc sách giữa không gian mở",
        content: "Một góc nhỏ bình yên của D Free Book cơ sở Cầu Giấy, cậu đã ghé qua chưa?",
        image: "https://scontent-hkg1-1.xx.fbcdn.net/v/t39.30808-6/465004937_1158689659393513_2310903157106043844_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=lr_PHU_OmS4Q7kNvwHhce_J&_nc_oc=AdnQn-7MkHm5d5SutInlj070bCh_J6FqzZMXAN_iFxrPAkyW5AXUFpJBO0JTujJfJdB-KZtKde3sPremLCkuYU0M&_nc_zt=23&_nc_ht=scontent-hkg1-1.xx&_nc_gid=_-idAl3sPHeyEfOQYLTksQ&oh=00_AfEaQ_ZgzWVzi2QfvlHr5stlZjVjTS0ETvIckIHByIm1mA&oe=680AAEE8",
        tags: ["Văn hóa", "Sách", "Cộng đồng"],
        districts: ["Cầu Giấy"],
        link: "https://www.tiktok.com/@thuviendfreebook/video/7345123063811394823?is_from_webapp=1&sender_device=pc?id=16"
      },
      {
        id: 17,
        title: "Quán cà phê ban công ngắm phố phường Hà Nội",
        content: "Thư giãn ở những quán cà phê xanh mát với ban công thoáng đãng để bạn thoải mái ngồi ngắm phố xá từ trên cao là lựa chọn lý tưởng cho cuối tuần.",
        image: "https://media-cdn-v2.laodong.vn/storage/newsportal/2023/8/11/1227640/3-62.jpg",
        tags: ["Cà phê", "Ngắm phố", "Sống ảo"],
        districts: ["Hoàn Kiếm","Thanh Xuân", "Cầu Giấy", "Hai Bà Trưng"],
        link: "https://laodong.vn/du-lich/kham-pha/4-quan-ca-phe-co-ban-cong-xanh-mat-ngam-pho-xa-ha-noi-1227640.html?id=28"
      },
      {
        id: 18,
        title: "Làng sinh viên Hacinco – không chỉ là ký túc xá",
        content: "Khu phức hợp này có sân bóng, hàng quán, cửa hàng tiện lợi – tụ điểm vui chơi đúng chất sinh viên.",
        image: "https://cand.com.vn/Files/Image/2015/12/23/thumb_660_15-lang23.12.15-03.jpg",
        tags: ["Sinh viên", "Tụ tập", "Thư giãn"],
        districts: ["Thanh Xuân"],
        link: "https://cand.com.vn/Xa-hoi/Can-canh-Lang-sinh-vien-giua-Thu-do-i375777/?id=18"
      },
      {
        id: 19,
        title: "Làng nghề Bát Tràng tại Hà Nội – trải nghiệm làm gốm thủ công",
        content: "Làng gốm Bát Tràng – nơi lưu giữ tinh hoa nghề gốm truyền thống với lịch sử hơn 500 năm hình thành và phát triển. Qua bao thăng trầm của thời gian, những sản phẩm gốm sứ nơi đây vẫn giữ được nét độc đáo riêng, thấm đượm hồn Việt qua bàn tay khéo léo của các nghệ nhân.  ",
        image: "https://cdn.xanhsm.com/2024/12/f43005c6-lang-gom-bat-trang-ha-noi-6.jpg",
        tags: ["Thủ công", "Trải nghiệm", "Làng nghề"],
        districts: ["Hoàn Kiếm"],
        link: "https://www.xanhsm.com/news/lang-gom-bat-trang-ha-noi?id=25"
      },
      {
        id: 20,
        title: "Tổ hợp giải trí Artemis – thiên đường cho giới trẻ",
        content: "Tọa lạc tại Thanh Xuân, tổ hợp Artemis bao gồm rạp chiếu phim, khu ăn uống và trung tâm thương mại hiện đại, phù hợp để đi chơi cuối tuần.",
        image: "https://cdn.xanhsm.com/2025/02/7de6969a-trung-tam-thuong-mai-artemis-8.jpg",
        tags: ["Giải trí", "Ăn uống", "Thanh Xuân"],
        districts: ["Thanh Xuân"],
        link: "https://www.xanhsm.com/news/trung-tam-thuong-mai-artemis?id=21"
      }      
];

// Biến quản lý
let currentPage = 1;
const itemsPerPage = 4;
let filteredNews = [...newsData];
let currentDistrict = 'all';

const newsContainer = document.getElementById('news-container');
const districtButtons = document.querySelectorAll('.district-btn');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const loadMoreBtn = document.getElementById('load-more');
const subscribeBtn = document.getElementById('subscribe-btn');
const newsletterEmail = document.getElementById('newsletter-email');

// Hiển thị bài viết
function displayNews(newsToDisplay, reset = false) {
    if (reset) {
        currentPage = 1;
    }

    const visibleNews = newsToDisplay.slice(0, currentPage * itemsPerPage);
    newsContainer.innerHTML = '';

    visibleNews.forEach(news => {
        const newsCard = document.createElement('div');
        newsCard.className = 'news-card';
        newsCard.innerHTML = `
            <img src="${news.image}" alt="${news.title}" class="news-img">
            <div class="news-content">
                ${news.tags.map(tag => `<span class="news-tag">${tag}</span>`).join('')}
                <h3>${news.title}</h3>
                <p>${news.content}</p>
                <a href="${news.link}">Xem chi tiết →</a>
            </div>
        `;
        newsContainer.appendChild(newsCard);
    });

    // Cập nhật nút “Xem thêm” hoặc “Thu gọn”
    if (currentPage * itemsPerPage >= newsToDisplay.length) {
        loadMoreBtn.textContent = 'Thu gọn';
    } else {
        loadMoreBtn.textContent = 'Xem thêm';
    }

    // Hiện nút nếu có bài để xem thêm
    loadMoreBtn.classList.toggle('hidden', newsToDisplay.length <= itemsPerPage);
}


// Lọc theo quận
function filterByDistrict(district) {
  currentDistrict = district;
  currentPage = 1;

  filteredNews = district === 'all'
      ? [...newsData]
      : newsData.filter(news => {
          return news.districts && Array.isArray(news.districts)
              ? news.districts.includes(district)
              : false;
      });

  displayNews(filteredNews);
}

// Tìm kiếm
function searchNews() {
  const searchTerm = searchInput.value.toLowerCase();
  currentPage = 1;

  if (!searchTerm) {
      filterByDistrict(currentDistrict);
      return;
  }

  filteredNews = newsData.filter(news =>
      news.title.toLowerCase().includes(searchTerm) ||
      news.content.toLowerCase().includes(searchTerm) ||
      news.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
      (news.districts || []).some(d => d.toLowerCase().includes(searchTerm))
  );

  displayNews(filteredNews);
}



// Sự kiện
function initEventListeners() {
    districtButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            districtButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterByDistrict(btn.dataset.district);
        });
    });

    searchBtn.addEventListener('click', searchNews);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') searchNews();
    });

    loadMoreBtn.addEventListener('click', () => {
        currentPage++;
        displayNews(filteredNews);
    });

    subscribeBtn.addEventListener('click', subscribeNewsletter);
}
loadMoreBtn.addEventListener('click', () => {
    const isAtEnd = currentPage * itemsPerPage >= filteredNews.length;

    if (isAtEnd) {
        currentPage = 1;
    } else {
        currentPage++;
    }

    displayNews(filteredNews);
});



// Khởi tạo
function init() {
    displayNews(newsData);
    initEventListeners();
}

// Chạy khi DOM đã load xong
document.addEventListener('DOMContentLoaded', init);