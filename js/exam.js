document.addEventListener("DOMContentLoaded", function () {
    const examForm = document.getElementById("examForm");
    const questionList = document.getElementById("questionList");
    const addQuestionButton = document.getElementById("addQuestion");
    const excelInput = document.getElementById("excelInput");

    addQuestionButton.addEventListener("click", function () {
        const div = document.createElement("div");

        // Tạo input cho câu hỏi
        const questionInput = document.createElement("input");
        questionInput.type = "text";
        questionInput.name = "questions[]";
        questionInput.placeholder = "Nhập câu hỏi";
        div.appendChild(questionInput);

        // Tạo input và label cho các đáp án và input radio đại diện cho đáp án đúng
        for (let i = 0; i < 4; i++) {
            const answerDiv = document.createElement("div");
            answerDiv.classList.add("answerDiv");

            // Tạo input radio đại diện cho đáp án đúng
            const correctAnswerRadio = document.createElement("input");
            correctAnswerRadio.type = "radio";
            correctAnswerRadio.name = "correctAnswer";
            correctAnswerRadio.value = i;
            answerDiv.appendChild(correctAnswerRadio);

            // Tạo input cho đáp án
            const answerInput = document.createElement("input");
            answerInput.type = "text";
            answerInput.name = `answers[${i}]`;
            answerInput.placeholder = `Nhập đáp án ${String.fromCharCode(65 + i)}`;
            answerDiv.appendChild(answerInput);

            div.appendChild(answerDiv);
        }

        // Tạo nút xóa câu hỏi
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Xóa";
        deleteButton.type = "button";
        deleteButton.addEventListener("click", function () {
            div.remove();
        });
        div.appendChild(deleteButton);

        questionList.appendChild(div);
    });

    examForm.addEventListener("submit", function (event) {
        event.preventDefault();
        // Gửi dữ liệu của kỳ thi lên server
        // Sau khi gửi, có thể chuyển hướng hoặc thực hiện các hành động khác
        console.log("Dữ liệu kỳ thi đã được gửi!");
    });

    excelInput.addEventListener('change', function (e) {
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            var data = new Uint8Array(e.target.result);
            var workbook = XLSX.read(data, { type: 'array' });
            var sheetName = workbook.SheetNames[0];
            var sheet = workbook.Sheets[sheetName];
            var html = XLSX.utils.sheet_to_html(sheet);
            questionList.innerHTML = html;
        };
        reader.readAsArrayBuffer(file);
    });
});
