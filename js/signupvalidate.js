//validate form đăng kí
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.signup__main__form');
    const usernameMessage = document.querySelector('.signup__username__error__message');
    const emailMessage = document.querySelector('.signup__email__error__message');
    const passwordMessage = document.querySelector('.signup__pw__error__message');
    const confirmPasswordMessage = document.querySelector('.signup__confirm__password__error__message');

    console.log(usernameMessage)
    console.log(emailMessage)
    console.log(passwordMessage)
    console.log(confirmPasswordMessage)

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('signup__username').value;
        const email = document.getElementById('signup__email').value;
        const password = document.getElementById('signup__password').value;
        const confirmPassword = document.getElementById('signup__confirm__password').value;

        // Xóa thông báo lỗi cũ nếu có
        usernameMessage.innerHTML = '';
        emailMessage.innerHTML = '';
        passwordMessage.innerHTML = '';
        confirmPasswordMessage.innerHTML = '';

        if (username.trim() === '') {
            usernameMessage.innerHTML = 'Vui lòng nhập tên người dùng.<br>';
        }

        if (email.trim() === '') {
            emailMessage.innerHTML = 'Vui lòng nhập địa chỉ email.<br>';
        }

        if (password.trim() === '') {
            passwordMessage.innerHTML = 'Vui lòng nhập mật khẩu.<br>';
        }

        if (confirmPassword.trim() === '') {
            confirmPasswordMessage.innerHTML = 'Vui lòng nhập xác nhận mật khẩu.<br>';
        }

        if (password !== confirmPassword) {
            confirmPasswordMessage.innerHTML += 'Mật khẩu không khớp.<br>';
        }

        if (username.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '' || password !== confirmPassword) {
            return;
        }

        console.log('Form hợp lệ, có thể gửi đăng ký tới server!');
        window.location.href = "../index.html"
    });
});