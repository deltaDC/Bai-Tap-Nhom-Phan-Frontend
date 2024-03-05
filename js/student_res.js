document.getElementById("search-form").addEventListener("submit", function (event) {
    event.preventDefault();
    var studentId = document.getElementById("info").value;
    var resultDiv = document.getElementById("result");
    // Assume data is fetched from database or API

    var studentData = {
        "B21DCCN001": { name: "Nguyễn Quốc Khánh", id: "B21DCCN001" },
        "B21DCCN002": { name: "Bùi Trường Sơn", id: "B21DCCN002" },
        "B21DCCN003": { name: "Lê Huy Du", id: "B21DCCN003" }
    };
    var data = [

        { id: "B21DCCN001", exam: "Kỳ thi 1", score: 6.9 },
        { id: "B21DCCN001", exam: "Kỳ thi 2", score: 7.4 },
        { id: "B21DCCN001", exam: "Kỳ thi 3", score: 8.9 },
        { id: "B21DCCN002", exam: "Kỳ thi 1", score: 4.9 },
        { id: "B21DCCN002", exam: "Kỳ thi 2", score: 7.4 },
        { id: "B21DCCN002", exam: "Kỳ thi 3", score: 3.5 },
        { id: "B21DCCN003", exam: "Kỳ thi 1", score: 5.4 },
        { id: "B21DCCN003", exam: "Kỳ thi 2", score: 7.4 },
        { id: "B21DCCN003", exam: "Kỳ thi 3", score: 9.5 },
    ];

    var student = studentData[studentId];
    if (student) {
        resultDiv.innerHTML = "<p>Sinh viên: " + student.name + " - Mã sinh viên: " + student.id + "</p>";

        var table = "<table><tr><th>Số thứ tự</th><th>Tên kỳ thi</th><th>Điểm</th></tr>";
        var studentExams = data.filter(function (item) {
            return item.id.toUpperCase() === studentId.toUpperCase();
        });
        console.log(studentExams)
        studentExams.forEach(function (item, index) {

            table += "<tr><td>" + (index + 1) + "</td><td>" + item.exam + "</td><td>" + item.score + "</td></tr>";
        });
        table += "</table>";

        resultDiv.innerHTML += table;
    } else {
        resultDiv.innerHTML = "<p>Không tìm thấy " + studentId + "</p>";
    }
    document.getElementById("student-id").value = "";
});
