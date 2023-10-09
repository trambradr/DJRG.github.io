let headerH = document.querySelector("header").clientHeight;
let part1H = document.querySelector(".part-One").clientHeight;
let partZeroH = document.querySelector("#part-Zero").clientHeight;
let partOneH = document.querySelector("#part-One").clientHeight;
let part2H = document.querySelector(".part-Two").clientHeight;
let partTwoH = document.querySelector("#part-Two").clientHeight
let part3H = document.querySelector(".part-Three").clientHeight;
let partThreeH = document.querySelector("#part-Three").clientHeight
// 对话框



function showTitle(scrollH) {
    if (scrollH > 10 && scrollH <= headerH) {
        // 标题浮现效果
        var cover = document.getElementById("cover");
        var title = cover.querySelector("div");
        title.className = "bigtitle";
        cover.style = "position=relative"
        // 标题浮现效果
    }
}

function showthat(scrollH) {
    if (scrollH >= headerH + partZeroH - 10) {
        // 小标题浮现效果
        let hd1 = document.getElementById("hd1");
        let tempBox = hd1.querySelector("div");
        tempBox.className = "hdTitleIn";
    }
    else{
        let hd1 = document.getElementById("hd1")
        let tempBox = hd1.querySelector("div");
        tempBox.className = "hdTitleOut";
    };

    if (scrollH >= headerH + partZeroH + partOneH +part1H -10){
        // 小标题浮现效果
        let hd1 = document.getElementById("hd2");
        let tempBox = hd1.querySelector("div");
        tempBox.className = "hdTitleIn";
    }
    else{
        let hd1 = document.getElementById("hd2");
        let tempBox = hd1.querySelector("div");
        tempBox.className = "hdTitleOut";
    };

    if (scrollH >= headerH + partZeroH + partOneH +part1H +part2H +partTwoH -10){
        // 小标题浮现效果
        let hd1 = document.getElementById("hd3");
        let tempBox = hd1.querySelector("div");
        tempBox.className = "hdTitleIn";
    }
    else{
        let hd1 = document.getElementById("hd3");
        let tempBox = hd1.querySelector("div");
        tempBox.className = "hdTitleOut";
    };
    if (scrollH >= headerH + partZeroH + partOneH +part1H +part2H +partTwoH + part3H +partThreeH -10){
        // 小标题浮现效果
        let hd1 = document.getElementById("hd4");
        let tempBox = hd1.querySelector("div");
        tempBox.className = "hdTitleIn";
    }
    else{
        let hd1 = document.getElementById("hd4");
        let tempBox = hd1.querySelector("div");
        tempBox.className = "hdTitleOut";
    };
}

function bgMove(ele, bg) {
    var titlepos = GetRect(ele);
    var tempBox = bg.querySelector("div");
    if (titlepos.top <= 0) {
        tempBox.className = "bgTitleIn";
        if (titlepos.bottom <= Height && titlepos.bottom >= 0) {
            // 移动的距离
            // console.log(titlepos.top);
            bg.style.top = (titlepos.bottom - Height) + "px";
        }
    }
    else {
        tempBox.className = "bgTitleOut";
    }

}
