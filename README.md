# KOLF 💜

**An AI-powered personal universe.**

KOLF là không gian cá nhân mang tính kể chuyện: hành trình, những nơi từng đi, ảnh/video, sở thích, ghi chép và các dự án. Tầm nhìn dài hạn là một **AI-powered Personal CMS** có thể phân tích tư liệu, tạo album nháp và hỗ trợ quản lý nội dung.

## Trạng thái

- **Hiện có:** Prototype tĩnh v2.1, gồm trang chủ và ba trang hành trình (Nhật Bản, Hà Lan, Trung Quốc).
- **Chưa có:** Đăng nhập admin, upload, database, AI API, xử lý video, và tính năng tự xuất bản.
- **Chưa sẵn sàng public:** Nội dung tự thuật/ảnh cần chủ sở hữu duyệt. Các trang đang để `noindex` nhưng đây **không phải** cơ chế bảo vệ bí mật.

## Chạy prototype

Yêu cầu Python 3.x hoặc một local static server:

```bash
python -m http.server 3000
```

Mở <http://localhost:3000>.

## Kiểm tra cấu trúc

```bash
python scripts/check_static.py
```

Script kiểm tra liên kết nội bộ và tài nguyên tham chiếu trong HTML. CI chạy kiểm tra này trên các pull request và lần push tới `main`.

## Cấu trúc hiện tại

```text
KOLF/
├── index.html
├── journeys/
│   ├── japan.html
│   ├── netherlands.html
│   └── china.html
├── assets/
├── styles.css
├── script.js
├── content.js
├── docs/
│   ├── ARCHITECTURE.md
│   ├── ROADMAP.md
│   ├── SECURITY.md
│   └── ...
├── scripts/
│   └── check_static.py
└── .github/workflows/ci.yml
```

## Hướng kiến trúc tiếp theo

Prototype tĩnh được giữ làm **design/content reference**. Khi bắt đầu Admin Studio, sẽ chuyển dần frontend sang Next.js + TypeScript; media riêng tư đặt trong object storage; dữ liệu nội dung lưu PostgreSQL; tác vụ AI/video xử lý bất đồng bộ. **Không** đưa ảnh/video gốc lên GitHub.

Xem [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md), [`docs/ROADMAP.md`](docs/ROADMAP.md) và [`docs/SECURITY.md`](docs/SECURITY.md).

## Nguyên tắc làm việc

1. Không commit API keys, `.env`, file bí mật hoặc tư liệu cá nhân chưa duyệt.
2. Mỗi tính năng mở branch `feat/*`; merge bằng pull request.
3. AI chỉ tạo **draft**; publish yêu cầu duyệt.
4. Tách content riêng tư khỏi dữ liệu công khai ngay ở backend.
