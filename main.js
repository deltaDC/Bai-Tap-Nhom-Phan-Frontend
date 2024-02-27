// validate form đăng nhập
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.login__main__form')
    const usernameMessage = document.querySelector('.username__error__message')
    const pwMessage = document.querySelector('.pw__error__message')

    console.log(usernameMessage)
    console.log(pwMessage)

    form.addEventListener('submit', function (event) {
        event.preventDefault()

        const username = document.getElementById('login__user').value
        const password = document.getElementById('login__pw').value

        // Xóa thông báo lỗi cũ nếu có
        usernameMessage.innerHTML = '' // Đảm bảo xóa nội dung cũ của usernameMessage
        pwMessage.innerHTML = '' // Đảm bảo xóa nội dung cũ của pwMessage

        if (username.trim() === '') {
            usernameMessage.innerHTML = 'Vui lòng nhập tên đăng nhập.<br>'
        }

        if (password.trim() === '') {
            pwMessage.innerHTML = 'Vui lòng nhập mật khẩu.<br>'
        }

        if (username.trim() === '' || password.trim() === '') {
            return
        }
        console.log('Form hợp lệ, có thể gửi đăng nhập tới server!')
    })
})