function showPanel(panelId) {
    hideAllPanels();
    document.getElementById(panelId).style.display = 'block';
}

function hideAllPanels() {
    document.querySelectorAll('.panel').forEach(panel => {
        panel.style.display = 'none';
    });
}

let exams = [];

function addExam() {
    let examName = document.getElementById('exam_name').value;
    let examMode = document.getElementById('exam_mode').value;
    let examDate = document.getElementById('exam_date').value;

    if (examName.trim() !== '') {
        if (examMode === 'Luyện tập') {
            examDate = '';
        } else {
            if (examDate.trim() === '') {
                alert('Vui lòng chọn ngày/tháng cho kỳ thi.');
                return;
            }
        }

        exams.push({ name: examName, mode: examMode, date: examDate });
        updateExamList();
    }
}

// Hàm cập nhật danh sách kỳ thi
function updateExamList() {
    let examList = document.getElementById('exam_list');
    examList.innerHTML = '';
    exams.forEach((exam, index) => {
        let li = document.createElement('li');
        li.textContent = `${exam.name} - ${exam.mode} - ${exam.date}`;
        examList.appendChild(li);

        //sửa
        let editButton = document.createElement('button');
        editButton.classList.add('edit');
        editButton.textContent = 'Sửa';
        editButton.onclick = function () {
            editExam(index);
        };
        li.appendChild(editButton);

        //xóa
        let deleteButton = document.createElement('button');
        deleteButton.classList.add('del');
        deleteButton.textContent = 'Xóa';
        deleteButton.onclick = function () {
            showDeleteForm(index);
        };
        li.appendChild(deleteButton);
    });
}

// Hàm chỉnh sửa kỳ thi
function editExam(index) {
    let exam = exams[index];
    let examName = prompt('Nhập tên mới cho kỳ thi:', exam.name);
    if (examName !== null) {
        let examMode = exam.mode;
        let examDate = exam.date;

        // Kiểm tra xem có phải chế độ "Luyện tập" không để xử lý ngày/tháng
        if (examMode !== 'Luyện tập') {
            examDate = prompt('Nhập ngày mới cho kỳ thi (YYYY-MM-DD):', exam.date);
            if (examDate !== null) {
                // Kiểm tra tính hợp lệ của ngày/tháng
                let regex = /^\d{4}-\d{2}-\d{2}$/;
                if (!regex.test(examDate)) {
                    alert('Ngày không hợp lệ! Vui lòng nhập theo định dạng YYYY-MM-DD.');
                    return;
                }
            } else {
                examDate = exam.date; // Người dùng đã hủy thao tác, không thay đổi ngày/tháng
            }
        }

        exams[index] = { name: examName, mode: examMode, date: examDate };
        updateExamList();
    }
}

// Hàm hiện form xác nhận xóa kỳ thi
function showDeleteForm(index) {
    let deleteForm = document.getElementById('delete_form');
    deleteForm.style.display = 'block';

    // Thiết lập sự kiện cho nút xác nhận xóa
    let confirmButton = document.getElementById('confirm_delete_button');
    confirmButton.onclick = function () {
        deleteExam(index);
        deleteForm.style.display = 'none'; // Ẩn form xóa sau khi xác nhận
    };

    // Thiết lập sự kiện cho nút hủy
    let cancelButton = document.getElementById('cancel_delete_button');
    cancelButton.onclick = function () {
        deleteForm.style.display = 'none'; // Ẩn form xóa nếu hủy
    };
}

// Hàm xóa kỳ thi
function deleteExam(index) {
    exams.splice(index, 1);
    updateExamList();
}

/////// Quản lý người dùng

let users = [];

function addUser() {
    let fullName = document.getElementById('full_name').value;
    let birthDate = document.getElementById('birth_date').value;
    let studentId = document.getElementById('student_id').value;
    let userClass = document.getElementById('class').value;

    if (fullName.trim() !== '' && birthDate.trim() !== '' && studentId.trim() !== '' && userClass.trim() !== '') {
        users.push({ name: fullName, birth: birthDate, id: studentId, class: userClass });
        updateUserList();
    } else {
        alert('Vui lòng nhập đầy đủ thông tin người dùng.');
    }
}

function updateUserList() {
    let userList = document.getElementById('user_list');
    userList.innerHTML = '';
    users.forEach((user, index) => {
        let li = document.createElement('li');
        li.textContent = `${user.name} - ${user.birth} - ${user.id} - ${user.class}`;
        userList.appendChild(li);

        let editButton = document.createElement('button');
        editButton.classList.add('edit');
        editButton.textContent = 'Sửa';
        editButton.onclick = function () {
            editUser(index);
        };
        li.appendChild(editButton);

        let deleteButton = document.createElement('button');
        deleteButton.classList.add('del');
        deleteButton.textContent = 'Xóa';
        deleteButton.onclick = function () {
            deleteUser(index);
        };
        li.appendChild(deleteButton);
    });
}

function editUser(index) {
    let user = users[index];
    let fullName = prompt('Nhập tên mới:', user.name);
    let birthDate = prompt('Nhập ngày sinh mới (YYYY-MM-DD):', user.birth);
    let studentId = prompt('Nhập mã sinh viên mới:', user.id);
    let userClass = prompt('Nhập lớp mới:', user.class);

    if (fullName !== null && birthDate !== null && studentId !== null && userClass !== null) {
        users[index] = { name: fullName, birth: birthDate, id: studentId, class: userClass };
        updateUserList();
    }
}


function showDeleteForm(index) {
    let deleteForm = document.getElementById('delete_form');
    deleteForm.style.display = 'block';

    // Thiết lập sự kiện cho nút xác nhận xóa
    let confirmButton = document.getElementById('confirm_delete_button');
    confirmButton.onclick = function () {
        deleteUser(index);
        deleteForm.style.display = 'none'; // Ẩn form xóa sau khi xác nhận
    };

    // Thiết lập sự kiện cho nút hủy
    let cancelButton = document.getElementById('cancel_delete_button');
    cancelButton.onclick = function () {
        deleteForm.style.display = 'none'; // Ẩn form xóa nếu hủy
    };
}

function deleteUser(index) {
    users.splice(index, 1);
    updateUserList();
}


///// Thống kê

let examParticipants = [
    { examName: 'Đại Số', participants: 100, completionRate: 80, averageScore: 7.5 },
    { examName: 'Toán rời rạc', participants: 150, completionRate: 75, averageScore: 8.0 },
    { examName: 'Lí thuyết thông tin', participants: 80, completionRate: 90, averageScore: 8.5 },
    { examName: 'Tin học cơ sở', participants: 120, completionRate: 85, averageScore: 7.8 },
    { examName: 'Triết học', participants: 200, completionRate: 70, averageScore: 7.0 }
];

function updateStatistics() {
    let statisticsContent = document.getElementById('statistics_content');
    statisticsContent.innerHTML = '';

    examParticipants.forEach(exam => {
        let statisticItem = document.createElement('div');
        statisticItem.innerHTML = `
            <p>Kỳ thi: ${exam.examName}</p>
            <p>Số lượng người dùng tham gia: ${exam.participants}</p>
            <p>Tỷ lệ hoàn thành: ${exam.completionRate}%</p>
            <p>Điểm trung bình: ${exam.averageScore}</p>
            <hr>
        `;
        statisticsContent.appendChild(statisticItem);
    });
}

window.onload = function () {
    updateStatistics(); // Cập nhật thống kê
};