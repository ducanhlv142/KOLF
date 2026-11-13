# KOLF — Security & privacy baseline

1. **Repository private không làm dữ liệu tự động an toàn.** Không commit ảnh/video private, tài liệu công việc, địa chỉ riêng tư, mật khẩu, token, API key hoặc `.env`.
2. Uploads cần kiểm soát: loại file cho phép, giới hạn kích thước, tên lưu trữ ngẫu nhiên, xử lý metadata, quét file khi phù hợp.
3. Tách dữ liệu `private / draft / published` ở **backend/database**, không chỉ che UI.
4. Trước khi xuất bản ảnh: xem xét gỡ GPS/EXIF, mặt người khác và nội dung nhạy cảm.
5. AI outputs không đáng tin mặc định: validate schema, không cho AI trực tiếp thực thi hành động nhạy cảm.
6. Quản trị viên mới được tạo/sửa/xóa nội dung; mọi tác vụ quan trọng phải có audit log.
7. Chỉ dùng ảnh/asset có quyền sử dụng; tránh tự đăng thông tin thuộc khách hàng/dự án công việc.
8. Backup database, media; có khả năng rollback bản publish.
9. Có rate-limit và hạn mức ngân sách cho AI/video processing.
10. `noindex`/`robots.txt` không bảo vệ trang khỏi người có URL.

## Nếu lỡ commit secret

Thu hồi / rotate secret ngay lập tức. Xóa file khỏi commit mới **không đủ** nếu secret còn tồn tại trong Git history.
