// ============================================================================
// [여주성결교회 홈페이지 공통 메뉴 관리 파일]
// 앞으로 메뉴 이름이나 주소를 바꿀 때는 이 파일만 수정하면 모든 페이지가 바뀝니다!
// ============================================================================

const MENU_DATA = [
    {
        title: "환영합니다",
        links: [
            { name: "인사말", url: "welcome/greeting.html" },
            { name: "교회연혁", url: "welcome/history/history.html" },
            { name: "섬기는 분들", url: "welcome/serve/serve.html" },
            { name: "예배안내", url: "welcome/worship/worship.html" },
            { name: "차량운행안내", url: "welcome/bus/bus.html" },
            { name: "오시는길", url: "welcome/map/map.html" },
            { name: "새가족안내", url: "welcome/newcomer/newcomer.html" }
        ]
    },
    {
        title: "말씀과 찬양",
        links: [
            { name: "주일 예배", url: "word/sunday.html" },
            { name: "주일설교요약", url: "#" },
            { name: "주일 오후 예배", url: "#" },
            { name: "수요 예배", url: "#" },
            { name: "특별집회", url: "#" },
            { name: "찬양대/중창단", url: "word/praise.html" },
            { name: "여주미디어", url: "word/media.html" }
        ]
    },
    {
        title: "공동체",
        links: [
            { name: "교구", url: "community/parish.html" },
            { name: "기관", url: "community/organization.html" },
            { name: "양육&훈련", url: "community/training.html" },
            { name: "청춘대학", url: "community/senior.html" },
            { name: "성도기업", url: "community/company.html" }
        ]
    },
    {
        title: "다음세대",
        links: [
            { name: "영아부", url: "nextgen/infant.html" },
            { name: "유치부", url: "nextgen/kindergarten.html" },
            { name: "유년부", url: "nextgen/children.html" },
            { name: "초등부", url: "nextgen/elementary.html" },
            { name: "어와나", url: "nextgen/awana.html" },
            { name: "중등부", url: "nextgen/middle.html" },
            { name: "고등부", url: "nextgen/high.html" },
            { name: "청년사역위원회", url: "nextgen/youth.html" }
        ]
    },
    {
        title: "전도와 선교",
        links: [
            { name: "전도대", url: "mission/evangelism.html" },
            { name: "국내선교", url: "mission/domestic.html" },
            { name: "해외선교", url: "mission/overseas.html" },
            { name: "선교지 소식", url: "mission/news.html" },
            { name: "동호인선교회", url: "mission/club.html" }
        ]
    },
    {
        title: "교회소식",
        links: [
            { name: "교회주보", url: "news/weekly.html" },
            { name: "새가족소식", url: "news/newcomer.html" },
            { name: "성도소식", url: "news/member.html" },
            { name: "행사사진", url: "news/gallery.html" }
        ]
    },
    {
        title: "행정서비스",
        links: [
            { name: "신청서류", url: "service/application.html" }
        ]
    }
];

function renderCommonUI() {
    // ROOT_PATH는 각 html 파일에서 설정합니다. (메인화면은 "", 서브페이지는 "../")
    const pathPrefix = typeof ROOT_PATH !== 'undefined' ? ROOT_PATH : '';

    let desktopNavHtml = '';
    let mobileNavHtml = '';
    let sitemapListHtml = '';

    MENU_DATA.forEach(menu => {
        let dropdownHtml = '';
        let sitemapItemsHtml = '';
        
        menu.links.forEach(link => {
            const linkUrl = link.url === '#' ? '#' : pathPrefix + link.url;
            dropdownHtml += `<a href="${linkUrl}" class="block px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">${link.name}</a>`;
            sitemapItemsHtml += `<li class="border-b border-dashed border-gray-300 py-2.5 hover:text-blue-600 transition"><a href="${linkUrl}" class="block w-full">${link.name}</a></li>`;
        });

        const firstLink = menu.links[0].url === '#' ? '#' : pathPrefix + menu.links[0].url;

        desktopNavHtml += `
            <div class="relative group py-2">
                <a href="${firstLink}" class="hover:text-blue-300 transition">${menu.title}</a>
                <div class="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div class="w-48 bg-white text-gray-800 rounded-2xl shadow-xl py-3 border border-gray-100">
                        ${dropdownHtml}
                    </div>
                </div>
            </div>
        `;

        mobileNavHtml += `<a href="${firstLink}" class="text-white hover:text-blue-300">${menu.title}</a>`;

        sitemapListHtml += `
            <div class="flex flex-col gap-10">
                <div>
                    <h3 class="font-bold text-gray-800 text-center border-t-2 border-gray-400 pt-3 pb-4">${menu.title}</h3>
                    <ul class="border-t border-gray-300 text-sm text-gray-600">
                        ${sitemapItemsHtml}
                    </ul>
                </div>
            </div>
        `;
    });

    // 1. 공통 상단 메뉴바 (Header) 넣기
    const headerContainer = document.getElementById('common-header');
    if (headerContainer) {
        headerContainer.innerHTML = `
            <header class="bg-[#244177] text-white w-full z-50 relative">
                <div class="hidden md:block border-b border-white/20 bg-[#1b315b]">
                    <div class="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-sm font-light">
                        <span class="text-blue-200 tracking-wide">교회창립일: 1932. 5. 17.</span>
                        <a href="https://www.youtube.com/@여주성결교회" target="_blank" class="hover:text-blue-300 flex items-center gap-1.5 transition"><i class="fab fa-youtube text-red-500 text-lg"></i> 유튜브채널</a>
                    </div>
                </div>
                
                <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    <a href="${pathPrefix}index.html" class="flex items-center gap-1 cursor-pointer z-50">
                        <img src="${pathPrefix}images/교회마크만01.png" alt="여주성결교회 마크" class="h-8 md:h-11 w-auto object-contain">
                        <img src="${pathPrefix}images/여주성결교회 로고타입1_3.png" alt="여주성결교회 로고" class="h-6 md:h-8 w-auto object-contain brightness-0 invert">
                    </a>
                    
                    <button class="md:hidden border border-white/40 w-10 h-10 flex items-center justify-center rounded text-white text-xl z-50 hover:bg-white/10 transition" onclick="toggleMobileMenu()">
                        <i class="fas fa-bars"></i>
                    </button>

                    <nav class="hidden md:flex items-center space-x-8 text-lg font-medium">
                        ${desktopNavHtml}
                        <button class="border border-white/40 w-10 h-10 hidden md:flex items-center justify-center rounded text-white text-xl hover:bg-white/10 transition" onclick="toggleSitemap()">
                            <i class="fas fa-bars"></i>
                        </button>
                    </nav>
                </div>

                <div id="mobile-menu" class="absolute top-full left-0 w-full bg-[#1a3668] flex-col items-center py-4 space-y-4 shadow-xl z-50 text-lg" style="display: none;">
                    ${mobileNavHtml}
                    <div class="border-t border-white/20 w-3/4 pt-4 flex justify-center space-x-6">
                        <a href="https://www.youtube.com/@여주성결교회" target="_blank" class="text-white hover:text-blue-300 flex items-center gap-2 text-sm"><i class="fab fa-youtube text-xl text-red-500"></i> 유튜브채널</a>
                    </div>
                </div>
            </header>
        `;
    }

    // 2. 공통 하단 꼬리말 (Footer) 넣기
    const footerContainer = document.getElementById('common-footer');
    if (footerContainer) {
        footerContainer.innerHTML = `
            <footer class="bg-gray-50 border-t border-gray-200 py-10 md:py-16 mt-10">
                <div class="max-w-6xl mx-auto px-4 flex flex-col items-center text-center">
                    <h3 class="font-extrabold text-3xl md:text-5xl text-[#3b82f6] mb-4 md:mb-6 tracking-tight">여주성결교회</h3>
                    <div class="text-sm md:text-lg text-gray-500 space-y-1 md:space-y-2 mb-8">
                        <p>(12625) 경기도 여주시 우암로 96 (하동, 여주성결교회)</p>
                        <p>TEL . 031-882-9966 &nbsp;&nbsp; FAX . 031-882-9965</p>
                    </div>
                    <div class="text-[0.65rem] md:text-sm text-gray-400 mb-8">
                        <p>COPYRIGHT (C) 여주성결교회. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        `;
    }

    // 3. 공통 사이트맵 팝업 넣기
    const sitemapContainer = document.getElementById('common-sitemap');
    if (sitemapContainer) {
        sitemapContainer.innerHTML = `
            <div id="sitemap-modal" class="fixed inset-0 z-[100] hidden">
                <div class="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onclick="toggleSitemap()"></div>
                <div class="relative w-full max-w-[1000px] mx-auto mt-16 md:mt-24 bg-white shadow-2xl z-10 flex flex-col max-h-[80vh]">
                    <div class="bg-black text-white px-6 py-4 flex justify-between items-center shrink-0">
                        <div class="flex items-center gap-4">
                            <h2 class="text-2xl font-extrabold tracking-tight">사이트맵</h2>
                            <span class="text-sm font-light text-gray-300 hidden sm:inline-block">홈페이지에 오신것을 진심으로 환영합니다. 메뉴를 클릭하시면 해당페이지로 이동합니다.</span>
                        </div>
                        <button onclick="toggleSitemap()" class="text-white hover:text-gray-300 transition-colors">
                            <i class="fas fa-times text-2xl"></i>
                        </button>
                    </div>
                    <div class="p-8 md:p-10 overflow-y-auto" id="sitemap-content">
                        <div class="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-12">
                            ${sitemapListHtml}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

// 팝업 열기/닫기 기능
window.toggleSitemap = function() {
    const modal = document.getElementById('sitemap-modal');
    if (modal) {
        if (modal.classList.contains('hidden')) {
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; 
        } else {
            modal.classList.add('hidden');
            document.body.style.overflow = ''; 
        }
    }
};

window.toggleMobileMenu = function() {
    const menu = document.getElementById('mobile-menu');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
};

// 화면이 열리면 위에서 만든 메뉴와 꼬리말을 홈페이지에 찰칵! 하고 끼워 넣습니다.
document.addEventListener('DOMContentLoaded', renderCommonUI);
