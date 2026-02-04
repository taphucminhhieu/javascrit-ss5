let total_res = 0;
let success_res = 0;
let rejected_res = 0;
let pending_res = 0;

let total_feedback = 0;
let high_complaint = 0;
let med_complaint = 0;
let low_complaint = 0;
let suggest_count = 0;
let positive_count = 0;

while (true) {
    let choice = prompt("Chọn nghiệp vụ xử lý:\n1. Đặt mượn trước (Reservation)\n2. Khiếu nại / Phản hồi\nNhập 'không' để kết thúc ca và in báo cáo");

    if (choice === "không" || choice === null) {
        break;
    }

    if (choice === "1") {
        let ask_res = prompt("Có yêu cầu đặt mượn trước mới không? (có/không)");
        if (ask_res === "có") {
            let reader_res = prompt("Tên bạn đọc:");
            let book_id = prompt("Mã sách muốn đặt trước:");
            let book_title = prompt("Tên sách (tham khảo):");
            
            let wait_days;
            while (true) {
                wait_days = Number(prompt("Số ngày dự kiến chờ (>= 1):"));
                if (wait_days >= 1) {
                    break;
                }else{
                    alert("Vui lòng nhập lại")
                }
            }

            let priority;
            while (true) {
                priority = Number(prompt("Mức ưu tiên (1: Sinh viên, 2: Giảng viên, 3: Đặc cách):"));
                if (priority >= 1 && priority <= 3) {
                    break;
                } else{
                    alert("Vui lòng nhập lại");
                }
            }

            total_res++;

            if (wait_days > 45) {
                console.log("Từ chối: Thời gian chờ quá lâu (>45 ngày)");
                rejected_res++;
            } else if (priority === 3) {
                console.log("Đặt trước thành công - Ưu tiên đặc cách cao nhất");
                success_res++;
            } else if (priority === 2 && wait_days <= 30) {
                console.log("Đặt trước thành công - Ưu tiên giảng viên/nghiên cứu");
                success_res++;
            } else if (priority === 1 && wait_days <= 21) {
                console.log("Đặt trước thành công");
                success_res++;
            } else {
                console.log("Đặt trước tạm thời - Chờ xét duyệt thêm");
                pending_res++;
            }
        }
    }

     if (choice === "2") {
        let ask_fb = prompt("Có khiếu nại/phản hồi mới không? (có/không)");
        if (ask_fb === "có") {
            let reader_fb;
            while (true) {
                reader_fb = prompt("Tên bạn đọc (không được để trống):");
                if (reader_fb !== "" && reader_fb !== null)  {
                    break;
                }else{
                    alert("Không được để trống tên!");
                }
            }
            }

            let card_id = prompt("Mã thẻ bạn đọc (nếu có):");
            
            let fb_type;
            while (true) {
                fb_type = parseInt(prompt("Loại phản hồi (1: Phàn nàn, 2: Đề xuất, 3: Khen ngợi):"));
                if (fb_type >= 1 && fb_type <= 3){
                    break;
                }else{
                    alert("Vui lòng nhập 1, 2 hoặc 3");
                }
                
            }

            let content = prompt("Nội dung ngắn gọn:");
            total_feedback++;

            if (fb_type === 1) {
                let level = parseInt(prompt("Mức độ (1: Nhẹ, 2: Trung bình, 3: Nghiêm trọng):"));
                if (level === 3) {
                    console.log(" Chuyển ngay lãnh đạo - Khiếu nại nghiêm trọng");
                    high_complaint++;
                } else if (level === 2) {
                    console.log("Ghi nhận, sẽ xử lý trong ngày - Khiếu nại trung bình");
                    med_complaint++;
                } else {
                    console.log(" Xử lý ngay tại quầy - Khiếu nại nhẹ");
                    low_complaint++;
                }
            } else if (fb_type === 2) {
                console.log(" Đề xuất đã được ghi nhận");
                suggest_count++;
            } else if (fb_type === 3) {
                console.log(" Cảm ơn bạn đã phản hồi tích cực!");
                positive_count++;
            }
        }
    }



console.log("BÁO CÁO TỔNG KẾT CA LÀM VIỆC", "font-size: 20px; font-weight: bold; color: blue;");

console.log("--- 1. Nghiệp vụ Đặt mượn trước ---");
console.log("Tổng số yêu cầu đã xử lý: " + total_res);
console.log("Số yêu cầu thành công: " + success_res);
console.log("Số yêu cầu bị từ chối: " + rejected_res);
console.log("Số yêu cầu chờ xét duyệt: " + pending_res);

console.log("----------------------------------");

console.log("--- 2. Nghiệp vụ Khiếu nại / Phản hồi ---");
console.log("Tổng số phản hồi đã xử lý: " + total_feedback);
console.log("Khiếu nại nghiêm trọng (mức 3): " + high_complaint);
console.log("Khiếu nại trung bình (mức 2): " + med_complaint);
console.log("Khiếu nại nhẹ (mức 1): " + low_complaint);
console.log("Số đề xuất cải thiện: " + suggest_count);
console.log("Số phản hồi tích cực: " + positive_count);