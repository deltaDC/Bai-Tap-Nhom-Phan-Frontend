var examSubjects = {
    "Luyện tập": [
        { name: "Trắc nghiệm Toán rời rạc", status: "free" },
        { name: "Lập trình Web", status: "free" }
    ],
    "Giữa kỳ": [
        { name: "Lý thuyết thông tin", status: "20/4/2024" }
    ],
    "Cuối kỳ": [
        { name: "Đại số", status: "30/4/2024" }
    ]
};

function displayAllSubjects() {
    var examInfoDiv = document.getElementById('examInfoList');
    examInfoDiv.innerHTML = '';
    var count = 1;

    Object.keys(examSubjects).forEach(function (examType) {
        var examSubjectsList = examSubjects[examType];
        if (examSubjectsList) {
            examSubjectsList.forEach(function (exam) {
                var subjectDiv = document.createElement('div');
                subjectDiv.classList.add('exam-info');

                var subjectNameSpan = document.createElement('span');
                subjectNameSpan.classList.add('exam-name');
                subjectNameSpan.textContent = count + ". " + exam.name;
                subjectDiv.appendChild(subjectNameSpan);

                var modeSpan = document.createElement('span');
                modeSpan.classList.add('exam-type');
                modeSpan.textContent = examType;
                subjectDiv.appendChild(modeSpan);

                var statusSpan = document.createElement('span');
                statusSpan.textContent = exam.status === 'free' ? 'Tự do' : exam.status;
                statusSpan.classList.add('exam-status');
                if (exam.status === 'free') {
                    statusSpan.classList.add('exam-status-free');
                } else {
                    statusSpan.classList.add('exam-status-timed');
                }
                subjectDiv.appendChild(statusSpan);

                examInfoDiv.appendChild(subjectDiv);
                count++;
            });
        }
    });
}

function showExams(examType) {
    var examInfoDiv = document.getElementById('examInfoList');
    examInfoDiv.innerHTML = '';
    var count = 1;

    var examSubjectsList = examSubjects[examType];
    if (examSubjectsList) {
        examSubjectsList.forEach(function (exam) {
            var subjectDiv = document.createElement('div');
            subjectDiv.classList.add('exam-info');

            var subjectNameSpan = document.createElement('span');
            subjectNameSpan.classList.add('exam-name');
            subjectNameSpan.textContent = count + ". " + exam.name;
            subjectDiv.appendChild(subjectNameSpan);

            var modeSpan = document.createElement('span');
            modeSpan.classList.add('exam-type');
            modeSpan.textContent = examType;
            subjectDiv.appendChild(modeSpan);

            var statusSpan = document.createElement('span');
            statusSpan.textContent = exam.status === 'free' ? 'Tự do' : exam.status;
            statusSpan.classList.add('exam-status');
            if (exam.status === 'free') {
                statusSpan.classList.add('exam-status-free');
            } else {
                statusSpan.classList.add('exam-status-timed');
            }
            subjectDiv.appendChild(statusSpan);

            examInfoDiv.appendChild(subjectDiv);
            count++;
        });
    }
}

function showAllExams() {
    var examInfoDiv = document.getElementById('examInfoList');
    examInfoDiv.innerHTML = ''; // Xóa nội dung cũ
    var count = 1; // Counter for numbering subjects

    Object.keys(examSubjects).forEach(function (examType) {
        var examSubjectsList = examSubjects[examType];
        if (examSubjectsList) {
            examSubjectsList.forEach(function (exam) {
                var subjectDiv = document.createElement('div');
                subjectDiv.classList.add('exam-info');

                var subjectNameSpan = document.createElement('span');
                subjectNameSpan.classList.add('exam-name');
                subjectNameSpan.textContent = count + ". " + exam.name;
                subjectDiv.appendChild(subjectNameSpan);

                var modeSpan = document.createElement('span');
                modeSpan.classList.add('exam-type');
                modeSpan.textContent = examType;
                subjectDiv.appendChild(modeSpan);

                var statusSpan = document.createElement('span');
                statusSpan.textContent = exam.status === 'free' ? 'Tự do' : exam.status;
                statusSpan.classList.add('exam-status');
                if (exam.status === 'free') {
                    statusSpan.classList.add('exam-status-free');
                } else {
                    statusSpan.classList.add('exam-status-timed');
                }
                subjectDiv.appendChild(statusSpan);

                examInfoDiv.appendChild(subjectDiv);
                count++;
            });
        }
    });
}

function searchExam() {
    var input, filter, examInfoDiv, examDiv, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    examInfoDiv = document.getElementById('examInfoList');
    examDiv = examInfoDiv.getElementsByTagName('div');

    for (var i = 0; i < examDiv.length; i++) {
        txtValue = examDiv[i].textContent || examDiv[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            examDiv[i].style.display = '';
        } else {
            examDiv[i].style.display = 'none';
        }
    }
}

displayAllSubjects();
