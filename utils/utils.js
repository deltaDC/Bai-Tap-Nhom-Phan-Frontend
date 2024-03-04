// Hàm để tìm đường dẫn của navbar.html
function findNavbarPath() {
    let scripts = document.querySelectorAll('script[src]');
    let currentScriptPath = scripts[scripts.length - 1].src;
    let currentDirectory = currentScriptPath.substring(0, currentScriptPath.lastIndexOf('/'));
    return currentDirectory + '/navbar.html';
}

// Hàm includeNavbar() để include navbar vào các trang
function includeNavbar() {
    let navbarPath = findNavbarPath();
    fetch(navbarPath)
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching navbar:', error);
        });
}

// Gọi hàm includeNavbar() ở mỗi trang HTML
includeNavbar();
