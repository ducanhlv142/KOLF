# KOLF — Personal Universe v2.1 · Three Places, One Story

Phiên bản phát triển từ KOLF v2, tập trung vào những chương đời sống và hành trình Nhật Bản – Hà Lan – Trung Quốc.

## Chạy website

Tại thư mục chứa `index.html`:

```bash
python -m http.server 3000
```

Truy cập `http://localhost:3000`. Dùng liên kết ở khu vực “Ba nơi chốn” để mở các trang `journeys/*.html`. Không cần npm, API key, database hay dịch vụ ngoài.

## Cấu trúc mới

```text
index.html                  Home / universe / journal / links
journeys/japan.html        Những năm tháng sống và làm việc ở Nhật
journeys/netherlands.html  Chuyến công tác tại Hà Lan năm 2026
journeys/china.html        Hành trình Trung Quốc (chi tiết chờ xác nhận)
styles.css                  Giao diện dùng chung, responsive, dark/light
content.js                  Dữ liệu bốn mảnh ghép và các thế giới
script.js                   Tương tác, menu, popup, theme, progress
assets/                     Favicon, og-cover
docs/TRAVEL-EDITORIAL-REVIEW.md   Phân biệt dữ liệu xác thực và bản nháp
docs/CREATIVE-DIRECTION.md       Định hướng sáng tạo gốc
docs/LAUNCH-CHECKLIST.md         Kiểm tra trước công bố
```

## Lưu ý quan trọng
- Bản này là **prototype**, chưa tự động sẵn sàng công khai. `noindex` và `robots.txt` đang chặn index theo thông lệ, nhưng KHÔNG ngăn người có URL xem website.
- Các trang hành trình dùng ngôn ngữ ngôi thứ nhất ở mức đề xuất biên tập, chưa phải phát ngôn được chủ sở hữu duyệt.
- Trung Quốc được đánh dấu chính xác là **hành trình đang bổ sung** vì chưa có nhật ký xác nhận những nơi đã tới.
- Không đưa thông tin công việc mật, giấy tờ hoặc thông tin riêng tư lên host công khai.
- Đây là website tĩnh; tất cả nội dung HTML có thể chỉnh bằng VS Code.

## Tiến trình đề xuất
1. Duyệt ba trang hành trình và bổ sung kỷ niệm/ảnh xác thực.
2. Xem lại nội dung giả tưởng/phim/game trong v2 có đúng sở thích không.
3. Chốt CTA và tài khoản liên hệ; test mobile và accessibility.
4. Khi thực sự public: xử lý canonical URL, OG tuyệt đối, sitemap, robots và HTTPS.
