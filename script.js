// 打开/关闭语言菜单
const btn = document.getElementById("language-btn");
const menu = document.getElementById("language-menu");

if (btn && menu) {
    btn.addEventListener("click", () => {
        menu.style.display =
            menu.style.display === "block" ? "none" : "block";
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

    console.log("当前语言：", lang);

}
