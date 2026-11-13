# KOLF — Roadmap thực thi

## Phase 0 — Repository Foundation (hiện tại)
- [x] Chuẩn bị source prototype v2.1
- [x] README, .gitignore, tài liệu kiến trúc và bảo mật
- [x] Kiểm tra liên kết bằng script và CI
- [ ] Tạo repository `ducanhlv142/KOLF` **Private** trên GitHub
- [ ] Push commit đầu tiên lên `main`
- [ ] Bật branch protection / ruleset phù hợp nếu gói GitHub cho phép

## Phase 1 — Web App Foundation
- [ ] Tạo Next.js + TypeScript workspace
- [ ] Tách Public Website / Admin Studio bằng routes
- [ ] Thiết lập lint, format, unit test và preview deployment
- [ ] Di chuyển giao diện v2.1 sang components

## Phase 2 — Admin, Storage, Media
- [ ] Đăng nhập, quyền admin
- [ ] PostgreSQL schema: Asset, Album, Story, AIJob, Publication
- [ ] Upload ảnh trực tiếp lên object storage private
- [ ] Upload video có resume; worker xử lý thumbnail và video
- [ ] Admin media library + draft/publish

## Phase 3 — Intelligence Core
- [ ] AI gateway, queue, retries, chi phí/usage logs
- [ ] Metadata + image understanding
- [ ] Video keyframe extraction + transcript (nếu cần)
- [ ] Clustering và đề xuất album
- [ ] AI tạo caption và gợi ý layout theo template có sẵn
- [ ] Workflow duyệt trước publish

## Phase 4 — Personal Intelligence
- [ ] AI Storyteller, Translation
- [ ] Search (keyword trước; semantic khi thực sự cần)
- [ ] Ask Kolf **chỉ dùng nội dung public**
- [ ] SEO, accessibility, performance và kiểm thử bảo mật

## Definition of Done cho từng feature
- Chạy được trên máy, có test phù hợp.
- Có xử lý lỗi, quyền truy cập và logging.
- Không lộ secrets hoặc media private.
- Có hướng dẫn sử dụng/triển khai.
- Merge qua pull request sau review.
