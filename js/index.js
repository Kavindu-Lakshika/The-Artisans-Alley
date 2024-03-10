let login_btn = document.getElementById("login_btn");
login_btn.addEventListener('click', function () {
    const modalItem = document.getElementById('login_modal');
    new bootstrap.Modal(modalItem).show();
});
