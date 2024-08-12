function prepare_msg(){
    alert("Sorry, this feature is currently being prepared and  \r will be available soon.");
}

function floating_func(){
    const menu = document.getElementById('floatingMenu');
    // 切换菜单的显示和隐藏
    if (menu.style.left === '0px') {
        menu.style.left = '-300px'; // 隐藏菜单
    } else {
        menu.style.left = '0px'; // 显示菜单
    }
}

// 添加事件监听器，点击页面其他地方时关闭菜单
document.addEventListener('click', function(event) {
    const menu = document.getElementById('floatingMenu');
    const menuButton = document.getElementById('menuButton');

    // 如果点击的不是菜单或按钮本身，并且菜单是展开状态
    if (menu.style.left === '0px' && !menu.contains(event.target) && !menuButton.contains(event.target)) {
        menu.style.left = '-300px'; // 隐藏菜单
    }
});

