# KOLF — Kiến trúc mục tiêu

> Đây là kiến trúc **dự kiến**, chưa phải các tính năng đang hoạt động trong prototype v2.1.

## Các miền nghiệp vụ

- **Public Website:** Trang chủ, hành trình, bộ sưu tập ảnh/video đã duyệt, bài viết, Ask Kolf giới hạn nguồn công khai.
- **Admin Studio:** Đăng nhập chủ sở hữu, upload, quản lý tài sản, sửa metadata, duyệt đề xuất AI, xuất bản.
- **Content Management:** Bản nháp, phiên bản, album, câu chuyện, quan hệ giữa nội dung, trạng thái publish.
- **Media Processing:** Upload trực tiếp vào object storage qua signed URL; tạo thumbnail, xử lý video, chuẩn hóa metadata.
- **Intelligence Core:** Job queue + xử lý AI, phân loại/cluster nội dung, gợi ý bố cục, tóm tắt/caption/translation.
- **Search & Retrieval:** PostgreSQL full-text, embeddings khi có nhu cầu, đảm bảo lọc quyền ở truy vấn nguồn.

## Kiến trúc đề xuất

```text
Browser
  ├── Public Site
  └── KOLF Studio (owner only)
           │
       Next.js/API
           │
     Authentication + Authorization
           │
       PostgreSQL ───── Object Storage (private originals)
           │                         │
       Job Queue ─────────────── Media Worker (FFmpeg)
           │
       AI Gateway → image/video frame analysis → suggestions/drafts
           │
       Human Review → Publish public derivatives
```

## Công nghệ dự kiến

- Next.js + TypeScript + Tailwind CSS (public + admin).
- PostgreSQL với Row Level Security / server authorization.
- S3-compatible private object storage; upload qua signed URL, kiểm tra MIME/type và dung lượng.
- Worker xử lý video với FFmpeg; job queue có retry, idempotency và trạng thái.
- AI API qua server; JSON Schema validation; caching kết quả; có ngưỡng ngân sách.

## Quy tắc then chốt

- **Storage ≠ database:** Nhị phân ảnh/video ở object storage; metadata/album/job ở PostgreSQL.
- **AI ≠ nguồn sự thật:** Nhãn, địa điểm, thời gian AI đề xuất phải có mức tin cậy và cho phép chỉnh sửa.
- **Draft trước, publish sau.** Admin có quyền điều chỉnh trước khi công khai.
- **Không đẩy file media lớn lên Git:** GitHub chỉ theo dõi mã nguồn, docs, asset tĩnh đã chọn và không nhạy cảm.
- **Không để client gọi API model bằng secret key:** mọi request AI đi qua backend có xác thực, phân quyền, giới hạn chi phí.

## Chuyển đổi từ prototype

Giữ phiên bản HTML hiện tại làm baseline cho giao diện. Chỉ di chuyển code khi app Next.js đã được tạo và test; không phá bản preview đang hoạt động.
