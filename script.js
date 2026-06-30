// My Website JavaScript
const btn = document.getElementById("language-btn");
const menu = document.getElementById("language-menu");

if (btn && menu) {
    btn.onclick = () => {
        menu.style.display =
            menu.style.display === "block" ? "none" : "block";
    };
}

function setLanguage(lang) {
    document.getElementById("language-btn").innerHTML =
        "🌐 " +
        (lang === "zh" ? "中文" :
         lang === "en" ? "English" : "日本語")
        + " ▼";

    menu.style.display = "none";

    alert("下一步我们再让页面真正切换到：" + lang);
}
