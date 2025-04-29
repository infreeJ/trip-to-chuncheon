

// 네비게이션 세부목록 확장

const navBox = document.querySelector(".nav-box");

let i = 0;

navBox.addEventListener('mouseenter', function() {
    if(i < 1) {
        const fullBackground = document.createElement('div');
        fullBackground.classList.add('full-background');
        document.body.appendChild(fullBackground);
        // 뒷배경 어둡게
        
        const detailList = document.createElement('div');;
        detailList.classList.add('detail-list');
        navBox.appendChild(detailList);
        // 세부목록 확장

        const menuTemplate = document.querySelector('.menu-template');
        const menuClone = menuTemplate.content. cloneNode(true);
        detailList.appendChild(menuClone)
        // 세부 장소 템플릿 삽입

        i++;
    }
})

// 네비게이션 세부목록 축소

navBox.addEventListener("mouseleave", function() {
    if(i == 1) {
        const fullBackground = document.querySelector(".full-background");
        fullBackground.remove();
        // 뒷배경 제거

        const detailList = document.querySelector(".detail-list");
        detailList.remove();
        // 세부목록 제거

        i = i - 1;
    }
})


