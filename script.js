// 获取按钮和菜单
const btn = document.getElementById("language-btn");
const menu = document.getElementById("language-menu");

// 点击按钮显示/隐藏菜单
if (btn && menu) {
    btn.addEventListener("click", function (e) {
        e.stopPropagation();

        if (menu.style.display === "block") {
            menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
    });

    // 点击页面其它地方关闭菜单
    document.addEventListener("click", function () {
        menu.style.display = "none";
    });

    // 点击菜单本身不要关闭
    menu.addEventListener("click", function (e) {
        e.stopPropagation();
    });
}

// 切换语言（目前先测试）
function setLanguage(lang) {

    const names = {
        zh: "中文",
        en: "English",
        ko: "한국어",
        ja: "日本語"
    };

    btn.innerHTML = `🌐 ${names[lang]} ▼`;

    menu.style.display = "none";

    console.log("切换到：" + lang);
}
