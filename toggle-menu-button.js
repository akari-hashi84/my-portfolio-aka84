window.addEventListener('load', function () {
    var $button = document.querySelector('.toggle-menu-button');
    var $menu = document.querySelector('.header-site-menu');
    $button.addEventListener('click', function () {
        $menu.classList.toggle('is-show'); // is-showクラスの追加または削除
    });
});
