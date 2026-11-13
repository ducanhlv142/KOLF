# KOLF — Creative Direction v2

## Định vị đã chốt

**Personal Storytelling / Digital Universe.** KOLF là một không gian cá nhân giàu cá tính, kể về thế giới bên trong của một người: suy nghĩ, sở thích, phim/game yêu thích, trải nghiệm nơi chốn, bài học và hành trình sống. Năng lực kỹ thuật và sản phẩm xuất hiện như một phần của hành trình, không phải trung tâm.

### Thông điệp chủ đạo

- **Tên:** KOLF.
- **Tagline tiếng Việt:** Một người. Nhiều thế giới.
- **Dòng phụ:** A personal space, not a perfect life.
- **Cảm xúc:** Curious / dreamy / introspective / grounded / quietly ambitious.
- **Tông chữ:** ngôi thứ nhất, tự nhiên, không tô vẽ thành tích, không giả làm một tiểu sử đã kiểm chứng.
- **Thứ tự kể chuyện:** trước tiên là con người → sở thích → hành trình → hiện tại → kết nối.

## Nội dung v2

| Khu | Vai trò | Giọng điệu |
|---|---|---|
| Hero | Mở cánh cửa vào thế giới KOLF | Gợi mở, đơn giản nhưng đáng nhớ |
| Intro | Chân dung tư duy | Chân thật, tò mò |
| Four facets | Sự đa chiều | Vui, tương tác |
| Worlds | Fantasy universes / games | Đắm chìm, cảm nhận cá nhân |
| Chapters | Cột mốc có ý nghĩa | Trầm tĩnh, giàu suy tư |
| Places | Góc nhìn qua các chuyến đi | Quan sát, khám phá |
| Right now | Hiện tại đang theo đuổi | Trung thực, ngắn |
| Journal | Hạt giống bài viết | Tự nhiên, chưa cần hoàn hảo |
| Connect | Lời tạm biệt mở | Ấm áp, ít CTA |

## Art direction

Dark purple editorial + subtle fantasy. Nền mực tím, ánh tím nhạt, heading Georgia serif phối chữ sans hệ thống, khoảng trắng lớn, thẻ bo góc vừa phải. Đồ họa riêng bằng CSS: hành tinh, quỹ đạo, dãy núi, ánh trăng, chân trời. Không dùng ảnh stock giả làm ảnh tác giả; không dùng poster thương mại trừ khi bảo đảm có quyền.

### Color tokens

- `--bg: #0b0813`
- `--surface: #13101e`
- `--text: #f8f5ff`
- `--muted: #aaa2ba`
- `--violet: #ad84ff`
- `--violet-light: #d2baff`

## Nội dung cần xác nhận trước khi public

1. Cách xưng hô: "mình" hay "tôi"? Các đoạn ngôi một trong mẫu là **bản nháp đề xuất**, không tự khẳng định phát biểu thực tế.
2. Có muốn nói cụ thể từng đi Nhật Bản, Hà Lan, Trung Quốc không? Nếu không, thay `places` bằng mô tả chung và xóa tên quốc gia.
3. Bốn fandom được dùng làm gợi ý theo các sở thích từng được nhắc; chọn lại 4 cái m thực sự muốn giới thiệu, và tự viết cảm nhận thật.
4. Phần "Currently / October 2026" phải sửa theo thực tế lúc deploy.
5. GitHub `ducanhlv142` phải xác nhận là tài khoản muốn công khai.
6. Thêm một bức chân dung hoặc hình minh họa cá nhân tự chọn, có quyền sử dụng; không bắt buộc.
7. Chọn mức công khai với người thân, quan hệ, nơi ở và công việc; mặc định **không công khai**.

## Bước triển khai đề xuất

**V2.1 — Authentic content pass:** sửa lời giới thiệu, thêm 4–6 ảnh đã được phép sử dụng, chốt 3 khoảnh khắc trong hành trình. Hoàn thiện 1 bài viết thật.

**V2.2 — Dedicated stories:** thêm `/stories`, `/places` và `/journal` dưới dạng các trang riêng, triển khai bằng các tệp HTML hoặc chuyển sang Next.js khi content đủ lớn.

**V2.3 — Publish:** kiểm thử mobile thật, performance/a11y/SEO, repo public mới, GitHub Pages/Vercel, tên miền, OG tuyệt đối sau khi domain được chốt.

**Không vội xây AI assistant**. Nó chỉ có giá trị khi website đã có đủ các mẩu chuyện/bài viết do tác giả tự công bố để AI có thể dẫn nguồn và trả lời chính xác.
