# KOLF v2 — Checklist trước khi đẩy lên web

## A. Nội dung & quyền riêng tư

- [ ] Đọc từng câu ngôi "mình"; câu nào không đúng quan điểm bản thân thì sửa.
- [ ] Xác nhận việc công khai Nhật Bản / Hà Lan / Trung Quốc.
- [ ] Xác nhận fandom, sở thích và các nhận xét trong popup là thực sự của mình.
- [ ] Sửa các thông tin "Currently / October 2026" nếu đã khác.
- [ ] Xác nhận GitHub public và các link mạng xã hội.
- [ ] Không có địa chỉ riêng, số điện thoại riêng, tài khoản ngân hàng, visa, tài liệu y tế, lịch trình cá nhân chính xác.
- [ ] Không có nội dung công ty, hồ sơ khách hàng, serial number thiết bị, ảnh nội bộ, tài liệu NDA.
- [ ] Không thêm những thông tin của bạn bè/người thân nếu chưa được phép.
- [ ] Không nhầm đề cương ghi chú với bài đã xuất bản.
- [ ] Nếu dùng ảnh/video/nhạc, phải kiểm tra quyền sử dụng, ưu tiên ảnh tự chụp.

## B. UX & chức năng

- [ ] Menu mobile mở/đóng và chọn mục đúng.
- [ ] 4 facet buttons chuyển nội dung đúng.
- [ ] 4 world cards mở modal đúng; đóng bằng nút, click ngoài và Escape.
- [ ] Chapter details đóng/mở đúng; bàn phím dùng được.
- [ ] Đổi theme hoạt động và lưu sau reload.
- [ ] Nút share mở native share hoặc copy URL theo khả năng trình duyệt.
- [ ] Không xuất hiện cuộn ngang tại 320px, 375px, 390px, 768px, 1024px, 1440px.
- [ ] Xem thực tế trên iOS Safari, Android Chrome và desktop Edge/Chrome.
- [ ] Ưu tiên `prefers-reduced-motion` để hỗ trợ người nhạy với chuyển động.

## C. Kỹ thuật

- [ ] `node --check script.js` và `node --check content.js` sạch lỗi.
- [ ] Không có lỗi Console hoặc network request thất bại.
- [ ] Meta title/description/OG đúng; OG ảnh 1200×630.
- [ ] Khi xác nhận public và muốn Google lập chỉ mục, xóa `<meta name="robots" content="noindex,nofollow">` trong `index.html`.
- [ ] Khi có domain thật: sửa OG image sang absolute URL, thêm canonical và sitemap.
- [ ] Chạy Lighthouse/PageSpeed sau khi deploy; ưu tiên mobile.
- [ ] Tất cả link ngoài dùng HTTPS, target _blank có rel noopener noreferrer.
- [ ] Bật MFA cho GitHub/hosting/domain, chỉ cấp quyền tối thiểu.
- [ ] Dùng `.gitignore`; không commit `.env`, credentials, secrets.
- [ ] Kiểm tra HTTPS và custom domain/DNS khi kích hoạt.
- [ ] Chụp bản sao git tag release đầu tiên và ghi lại cách rollback.

## D. Tiêu chí đủ tốt để công khai

Website kể một câu chuyện liền mạch, có thông tin được chính chủ duyệt, không lộ dữ liệu riêng tư, dễ dùng trên điện thoại, không có chức năng giả và có ít nhất một cách kết nối thật. **Chưa có ảnh chân dung hoặc blog dài không ngăn việc ra mắt** nếu nội dung còn lại đủ chỉn chu.
