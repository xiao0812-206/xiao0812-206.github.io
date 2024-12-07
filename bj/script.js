// 获取按钮和 body 元素
const toggleAnimationButton = document.getElementById("toggleAnimationButton");
const toggleBackgroundButton = document.getElementById("toggleBackgroundButton");
const body = document.body;

// 动画状态变量
let isAnimating = true;
// 背景类型状态变量
let isGradientBackground = true;

// 控制动画的按钮点击事件
toggleAnimationButton.addEventListener("click", () => {
    if (isAnimating) {
        body.style.animationPlayState = "paused";
        toggleAnimationButton.textContent = "恢复动画";
    } else {
        body.style.animationPlayState = "running";
        toggleAnimationButton.textContent = "暂停动画";
    }
    isAnimating = !isAnimating;
});

// 切换背景类型的按钮点击事件
toggleBackgroundButton.addEventListener("click", () => {
    if (isGradientBackground) {
        body.style.background = getRandomColor(); // 切换为纯色背景
        body.style.animation = "none"; // 停止渐变动画
        toggleBackgroundButton.textContent = "切换为渐变背景";
        toggleAnimationButton.disabled = true; // 禁用动画控制按钮
    } else {
        body.style.background = "linear-gradient(45deg, #ff9a9e, #fad0c4, #fbc2eb)";
        body.style.animation = "gradientAnimation 10s infinite alternate"; // 恢复渐变动画
        toggleBackgroundButton.textContent = "切换为纯色背景";
        toggleAnimationButton.disabled = false; // 启用动画控制按钮
    }
    isGradientBackground = !isGradientBackground;
});

// 随机颜色生成函数
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
