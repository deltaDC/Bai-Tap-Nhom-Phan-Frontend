document.addEventListener("DOMContentLoaded", function () {
    // Lấy điểm số từ query string
    const urlParams = new URLSearchParams(window.location.search);
    const correctAnswersCount = parseInt(urlParams.get("score")); // Số câu trả lời đúng

    const totalQuestions = 5; // Tổng số câu
    const score = correctAnswersCount; // Điểm số

    // Mảng chứa các câu trả lời của người dùng và đáp án đúng từ localStorage
    const userAnswers = [];
    const correctOptions = ["B", "D", "C", "A", "B"];
    for (let i = 1; i <= totalQuestions; i++) {
        userAnswers.push(localStorage.getItem(`question${i}`));
        correctOptions.push(urlParams.get(`answer${i}`));
    }

    // Hiển thị các giá trị trên trang
    document.getElementById("correct-count").innerText = correctAnswersCount;
    document.getElementById("total-count").innerText = totalQuestions;
    document.getElementById("score-value").innerText = score;

    // Xử lý sự kiện khi nhấn vào nút "Xem lại câu trả lời"
    document.getElementById("review-btn").addEventListener("click", function () {
        const answersTableBody = document.querySelector("#answers-table tbody");
        answersTableBody.innerHTML = ""; // Xóa nội dung cũ trước khi thêm nội dung mới

        // Hiển thị câu trả lời của người dùng và đáp án đúng
        for (let i = 0; i < totalQuestions; i++) {
            const row = answersTableBody.insertRow();
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);
            cell1.textContent = i + 1;
            cell2.textContent = correctOptions[i];
            cell3.textContent = userAnswers[i].toUpperCase();

            // Kiểm tra nếu đáp án đúng trùng khớp với đáp án bạn chọn
            if (correctOptions[i] === userAnswers[i].toUpperCase()) {
                cell1.style.backgroundColor = "#C5EBAA"; // Màu xanh
            } else {
                cell1.style.backgroundColor = "#dc3545"; // Màu đỏ
            }
        }

        // Hiển thị phần xem lại câu trả lời
        document.getElementById("answers-review").style.display = "block";
    });
});
