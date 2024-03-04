// Đặt thời gian đếm ngược 10 phút
var countDownDate = new Date().getTime() + (10 * 60 * 1000);

var userAnswers = []; // Mảng lưu câu trả lời của người dùng
var userScore = 0; // Biến lưu điểm của người dùng

var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = minutes + " phút " + seconds + " giây ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Hết giờ";
        document.getElementById("submitBtn").disabled = true;
        alert("Hết giờ, bài thi đã kết thúc.");
    }
}, 1000);

document.getElementById("submitBtn").addEventListener("click", function () {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Bài đã được nộp";
    document.getElementById("submitBtn").disabled = true;

    // Lấy câu trả lời của người dùng cho mỗi câu hỏi và lưu vào mảng userAnswers
    for (let i = 1; i <= 5; i++) {
        let selectedOption = document.querySelector('input[name="question' + i + '"]:checked');
        if (selectedOption) {
            userAnswers.push(selectedOption.value);
            localStorage.setItem('question' + i, selectedOption.value); // Lưu câu trả lời vào localStorage
        } else {
            userAnswers.push(null); // Nếu người dùng không chọn câu trả lời, lưu null vào mảng
        }
    }

    // Kiểm tra câu trả lời và tính điểm
    let correctOptions = ['b', 'd', 'c', 'a', 'b']; // Đáp án đúng cho mỗi câu hỏi

    for (let i = 0; i < correctOptions.length; i++) {
        if (userAnswers[i] === correctOptions[i]) {
            userScore++;
        }
    }

    // Chuyển hướng sang trang kết quả và truyền điểm số
    let queryString = '?score=' + userScore.toFixed(2); // Truyền điểm số qua query string
    window.location.href = 'ketqua.html' + queryString; // Chuyển hướng sang trang kết quả
});
