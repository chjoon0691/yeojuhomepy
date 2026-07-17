// 현재 페이지 위치에 따른 상대 경로 설정 (루트 경로 보정)
if (typeof ROOT_PATH === 'undefined') {
    var ROOT_PATH = '';
}

// ==========================================
// 1. 공통 헤더 (상단 메뉴바)
// ==========================================
const headerHtml = `
<!-- 최상단 작은 정보바 (PC에서만 보임) -->
<div class="hidden md:flex justify-between items-center bg-[#1b315b] text-white/80 text-xs px-6 py-1.5 border-b border-white/10">
    <div>교회창립일: 1932. 5. 13.</div>
    <div>
        <a href="https://www.youtube.com/@여주성결교회" target="_blank" class="hover:text-white transition flex items-center">
            <i class="fab fa-youtube text-red-500 mr-1 text-sm"></i> 유튜브채널
        </a>
    </div>
</div>

<!-- 메인 네비게이션 바 -->
<header class="bg-[#2a4365] text-white shadow-md relative z-40">
    <div class="max-w-7xl mx-auto px-4">
        <div class="flex justify-between items-center h-16 md:h-20">
            <!-- 로고 및 교회이름 -->
            <a href="${ROOT_PATH}index.html" class="flex items-center gap-2">
                <!-- 엑스박스 방지: 사진이 없으면 글씨만 굵게 나옵니다 -->
                <img src="${ROOT_PATH}images/image_8bddfb.png" alt="로고" class="h-8 md:h-10 bg-white rounded p-0.5 hidden sm:block" onerror="this.style.display='none'">
                <span class="font-extrabold text-lg md:text-2xl tracking-tight">여주성결교회</span>
            </a>

            <!-- PC 메인 메뉴 -->
            <nav class="hidden md:flex space-x-5 lg:space-x-8 font-bold text-[14px] lg:text-base items-center">
                <a href="${ROOT_PATH}welcome/greeting.html" class="hover:text-blue-300 transition">환영합니다</a>
                <a href="${ROOT_PATH}word/sunday.html" class="hover:text-blue-300 transition">말씀과 찬양</a>
                <a href="${ROOT_PATH}community/parish.html" class="hover:text-blue-300 transition">공동체</a>
                <a href="${ROOT_PATH}nextgen/infant.html" class="hover:text-blue-300 transition">다음세대</a>
                <a href="${ROOT_PATH}mission/evangelism.html" class="hover:text-blue-300 transition">전도와 선교</a>
                <a href="${ROOT_PATH}news/weekly.html" class="hover:text-blue-300 transition">교회소식</a>
                <a href="${ROOT_PATH}service/application.html" class="hover:text-blue-300 transition">행정서비스</a>
                
                <!-- PC 햄버거 버튼 -->
                <button onclick="openSitemap()" class="ml-2 border border-white/30 rounded p-1.5 hover:bg-white/20 transition focus:outline-none">
                    <i class="fas fa-bars text-xl"></i>
                </button>
            </nav>

            <!-- 모바일 햄버거 버튼 -->
            <button onclick="openSitemap()" class="md:hidden border border-white/30 rounded p-1.5 hover:bg-white/20 transition focus:outline-none">
                <i class="fas fa-bars text-xl"></i>
            </button>
        </div>
    </div>
</header>
`;

// ==========================================
// 2. 공통 푸터 (하단 연락처 및 정보)
// ==========================================
const footerHtml = `
<footer class="bg-[#1a202c] text-gray-400 py-10 md:py-12 border-t-4 border-[#3b82f6]">
    <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
        <div class="flex flex-col items-center md:items-start text-center md:text-left">
            <div class="flex items-center gap-2 mb-4 text-white">
                <i class="fas fa-church text-2xl md:text-3xl text-[#3b82f6]"></i>
                <span class="font-extrabold text-xl md:text-2xl tracking-tight">여주성결교회</span>
            </div>
            <p class="text-[13px] md:text-sm leading-relaxed text-gray-400">
                경기도 여주시 우암로 96 (하동, 여주성결교회)<br>
                <span class="inline-block mt-1">
                    <i class="fas fa-phone-alt mr-1"></i> 사무실: 031)882-9966 &nbsp;|&nbsp; 
                    <i class="fas fa-fax mr-1"></i> 팩스: 031)882-9965
                </span>
            </p>
        </div>
        <div class="flex flex-col items-center md:items-end mt-4 md:mt-0">
            <div class="flex space-x-4 mb-4">
                <a href="https://www.youtube.com/@여주성결교회" target="_blank" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition duration-300">
                    <i class="fab fa-youtube text-lg"></i>
                </a>
            </div>
            <p class="text-xs text-gray-500 text-center md:text-right">
                Copyright © Yeoju Evangelical Holiness Church.<br class="md:hidden"> All Rights Reserved.
            </p>
        </div>
    </div>
</footer>
`;

// ==========================================
// 3. 전체메뉴 (햄버거 사이트맵) 모달
// ==========================================
const sitemapHtml = `
<div id="sitemap-modal" class="fixed inset-0 z-[999] hidden bg-black/60 backdrop-blur-sm justify-center items-start pt-4 md:pt-20 px-0 md:px-4 transition-opacity duration-300 opacity-0">
    <!-- 모바일 가로 너비를 화면의 65% 정도로 대폭 줄여서 스마트폰에서 1줄로 예쁘게 내려오게 설정 -->
    <div class="bg-white w-[65%] sm:w-[50%] md:w-full max-w-6xl rounded-lg shadow-2xl flex flex-col max-h-[90vh] md:max-h-[80vh]">
        
        <!-- 메뉴 헤더 (제목 및 닫기버튼) -->
        <div class="bg-[#1b315b] text-white px-3 md:px-6 py-2 md:py-3 flex justify-between items-center rounded-t-lg shrink-0">
            <div class="flex items-center gap-2">
                <h2 class="text-[15px] md:text-xl font-bold">전체 메뉴</h2>
                <span class="text-xs md:text-sm hidden sm:inline text-blue-200">환영합니다.</span>
            </div>
            <button onclick="closeSitemap()" class="text-white hover:text-red-400 text-lg md:text-2xl focus:outline-none"><i class="fas fa-times"></i></button>
        </div>

        <!-- 메뉴 목록 (순서 완벽 정렬, 줄간격 촘촘하게 축소 완료) -->
        <div id="sitemap-content" class="p-3 md:p-8 overflow-y-auto w-full">
            <div class="grid grid-cols-1 md:grid-cols-5 gap-x-6 gap-y-4 md:gap-y-0">
                
                <!-- 1. 환영합니다 -->
                <div class="flex flex-col">
                    <h3 class="text-[13px] md:text-lg font-bold text-gray-900 border-b-2 border-[#1b315b] pb-1 mb-1 md:pb-1.5 md:mb-1.5">환영합니다</h3>
                    <ul class="flex flex-col gap-0 md:gap-1.5 text-[11px] md:text-[14px] text-gray-600">
                        <li><a href="${ROOT_PATH}welcome/greeting.html" class="hover:text-blue-600 block py-0.5">인사말</a></li>
                        <li class="font-bold text-gray-800 mt-1 md:mt-2">교회연혁</li>
                        <li><a href="${ROOT_PATH}welcome/history/building.html" class="hover:text-blue-600 ml-1.5 block py-0.5">- 성전건축이야기</a></li>
                        <li><a href="${ROOT_PATH}welcome/history/edu_building.html" class="hover:text-blue-600 ml-1.5 block py-0.5">- 교육관건축사진</a></li>
                        <li><a href="${ROOT_PATH}welcome/history/old_photos.html" class="hover:text-blue-600 ml-1.5 block py-0.5">- 이전 홈피 사진들</a></li>
                        <li class="mt-1 md:mt-2"><a href="${ROOT_PATH}welcome/serve/serve.html" class="hover:text-blue-600 block py-0.5">섬기는 분들</a></li>
                        <li><a href="${ROOT_PATH}welcome/worship/worship.html" class="hover:text-blue-600 block py-0.5">예배안내</a></li>
                        <li><a href="${ROOT_PATH}welcome/bus/bus.html" class="hover:text-blue-600 block py-0.5">차량운행안내</a></li>
                        <li><a href="${ROOT_PATH}welcome/map/map.html" class="hover:text-blue-600 block py-0.5">오시는길</a></li>
                        <li><a href="${ROOT_PATH}welcome/newcomer/newcomer.html" class="hover:text-blue-600 block py-0.5">새가족안내</a></li>
                    </ul>
                </div>

                <!-- 2. 말씀과 찬양 -->
                <div class="flex flex-col">
                    <h3 class="text-[13px] md:text-lg font-bold text-gray-900 border-b-2 border-[#1b315b] pb-1 mb-1 md:pb-1.5 md:mb-1.5">말씀과 찬양</h3>
                    <ul class="flex flex-col gap-0 md:gap-1.5 text-[11px] md:text-[14px] text-gray-600">
                        <li class="font-bold text-gray-800">말씀</li>
                        <li><a href="${ROOT_PATH}word/sunday.html" class="hover:text-blue-600 ml-1.5 bg-gray-50 block py-0.5">- 주일예배</a></li>
                        <li><a href="${ROOT_PATH}word/sunday_pm.html" class="hover:text-blue-600 ml-1.5 bg-gray-50 block py-0.5">- 주일오후예배</a></li>
                        <li><a href="${ROOT_PATH}word/wednesday.html" class="hover:text-blue-600 ml-1.5 bg-gray-50 block py-0.5">- 수요예배</a></li>
                        <li><a href="${ROOT_PATH}word/special.html" class="hover:text-blue-600 ml-1.5 bg-gray-50 block py-0.5">- 특별집회</a></li>
                        <li class="font-bold text-gray-800 mt-1 md:mt-2">찬양대/중창단</li>
                        <li><a href="${ROOT_PATH}word/praise.html" class="hover:text-blue-600 ml-1.5 bg-gray-50 block py-0.5">- 시온찬양대</a></li>
                        <li><a href="${ROOT_PATH}word/hallelujah.html" class="hover:text-blue-600 ml-1.5 bg-gray-50 block py-0.5">- 할렐루야찬양대</a></li>
                        <li><a href="${ROOT_PATH}word/dreamnlove.html" class="hover:text-blue-600 ml-1.5 bg-gray-50 block py-0.5">- 꿈과사랑의찬양대</a></li>
                        <li><a href="${ROOT_PATH}word/silver.html" class="hover:text-blue-600 ml-1.5 bg-gray-50 block py-0.5">- 은빛찬양대</a></li>
                        <li><a href="${ROOT_PATH}word/sunday_offering.html" class="hover:text-blue-600 ml-1.5 bg-gray-50 block py-0.5">- 주일봉헌찬양</a></li>
                        <li><a href="${ROOT_PATH}word/special_praise.html" class="hover:text-blue-600 ml-1.5 bg-gray-50 block py-0.5">- 특별찬양</a></li>
                        <li class="font-bold text-gray-800 mt-1 md:mt-2"><a href="${ROOT_PATH}word/media.html" class="hover:text-blue-600 block py-0.5">여주미디어</a></li>
                    </ul>
                </div>

                <!-- 3. 공동체 -->
                <div class="flex flex-col">
                    <h3 class="text-[13px] md:text-lg font-bold text-gray-900 border-b-2 border-[#1b315b] pb-1 mb-1 md:pb-1.5 md:mb-1.5">공동체</h3>
                    <ul class="flex flex-col gap-0 md:gap-1.5 text-[11px] md:text-[14px] text-gray-600">
                        <li><a href="${ROOT_PATH}community/parish.html" class="hover:text-blue-600 block py-0.5">교구</a></li>
                        <li><a href="${ROOT_PATH}community/organization.html" class="hover:text-blue-600 block py-0.5">기관</a></li>
                        <li><a href="${ROOT_PATH}community/training.html" class="hover:text-blue-600 block py-0.5">양육&훈련</a></li>
                        <li><a href="${ROOT_PATH}community/senior.html" class="hover:text-blue-600 block py-0.5">청춘대학</a></li>
                        <li><a href="${ROOT_PATH}community/company.html" class="hover:text-blue-600 block py-0.5">성도기업</a></li>
                    </ul>
                </div>

                <!-- 4. 다음세대 -->
                <div class="flex flex-col">
                    <h3 class="text-[13px] md:text-lg font-bold text-gray-900 border-b-2 border-[#1b315b] pb-1 mb-1 md:pb-1.5 md:mb-1.5">다음세대</h3>
                    <ul class="flex flex-col gap-0 md:gap-1.5 text-[11px] md:text-[14px] text-gray-600">
                        <li><a href="${ROOT_PATH}nextgen/infant.html" class="hover:text-blue-600 block border-b border-gray-50 pb-0.5">영아부</a></li>
                        <li><a href="${ROOT_PATH}nextgen/kinder.html" class="hover:text-blue-600 block border-b border-gray-50 pb-0.5">유치부</a></li>
                        <li><a href="${ROOT_PATH}nextgen/child1.html" class="hover:text-blue-600 block border-b border-gray-50 pb-0.5">유년부</a></li>
                        <li><a href="${ROOT_PATH}nextgen/child2.html" class="hover:text-blue-600 block border-b border-gray-50 pb-0.5">초등부</a></li>
                        <li><a href="${ROOT_PATH}nextgen/awana.html" class="hover:text-blue-600 block border-b border-gray-50 pb-0.5">어와나</a></li>
                        <li><a href="${ROOT_PATH}nextgen/middle.html" class="hover:text-blue-600 block border-b border-gray-50 pb-0.5">중등부</a></li>
                        <li><a href="${ROOT_PATH}nextgen/high.html" class="hover:text-blue-600 block border-b border-gray-50 pb-0.5">고등부</a></li>
                        <li><a href="${ROOT_PATH}nextgen/youth.html" class="hover:text-blue-600 block border-b border-gray-50 pb-0.5">청년사역위원회</a></li>
                    </ul>
                </div>

                <!-- 5. 전도와 선교 & 교회소식 & 행정서비스 -->
                <div class="flex flex-col gap-4 md:gap-8">
                    <div>
                        <h3 class="text-[13px] md:text-lg font-bold text-gray-900 border-b-2 border-[#1b315b] pb-1 mb-1 md:pb-1.5 md:mb-1.5">전도와 선교</h3>
                        <ul class="flex flex-col gap-0 md:gap-1.5 text-[11px] md:text-[14px] text-gray-600">
                            <li><a href="${ROOT_PATH}mission/evangelism.html" class="hover:text-blue-600 block py-0.5">전도대</a></li>
                            <li><a href="${ROOT_PATH}mission/domestic.html" class="hover:text-blue-600 block py-0.5">국내선교</a></li>
                            <li><a href="${ROOT_PATH}mission/overseas.html" class="hover:text-blue-600 block py-0.5">해외선교</a></li>
                            <li><a href="${ROOT_PATH}mission/news.html" class="hover:text-blue-600 block py-0.5">선교지소식</a></li>
                            <li><a href="${ROOT_PATH}mission/club.html" class="hover:text-blue-600 block py-0.5">동호인선교회</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="text-[13px] md:text-lg font-bold text-gray-900 border-b-2 border-[#1b315b] pb-1 mb-1 md:pb-1.5 md:mb-1.5">교회소식</h3>
                        <ul class="flex flex-col gap-0 md:gap-1.5 text-[11px] md:text-[14px] text-gray-600">
                            <li><a href="${ROOT_PATH}news/weekly.html" class="hover:text-blue-600 block py-0.5">교회주보</a></li>
                            <li><a href="${ROOT_PATH}news/newcomer.html" class="hover:text-blue-600 block py-0.5">새가족소식</a></li>
                            <li><a href="${ROOT_PATH}news/member.html" class="hover:text-blue-600 block py-0.5">성도소식</a></li>
                            <li><a href="${ROOT_PATH}news/gallery.html" class="hover:text-blue-600 block py-0.5">행사사진</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="text-[13px] md:text-lg font-bold text-gray-900 border-b-2 border-[#1b315b] pb-1 mb-1 md:pb-1.5 md:mb-1.5">행정서비스</h3>
                        <ul class="flex flex-col gap-0 md:gap-1.5 text-[11px] md:text-[14px] text-gray-600">
                            <li><a href="${ROOT_PATH}service/application.html" class="hover:text-blue-600 block py-0.5">신청서류</a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
`;

// ==========================================
// 4. 각각의 빈 공간에 HTML을 쏙쏙 집어넣는 마법
// ==========================================
document.addEventListener("DOMContentLoaded", function() {
    // 헤더(메뉴바) 넣기
    const headerEl = document.getElementById('common-header');
    if (headerEl) headerEl.innerHTML = headerHtml;

    // 푸터(하단정보) 넣기
    const footerEl = document.getElementById('common-footer');
    if (footerEl) footerEl.innerHTML = footerHtml;

    // 사이트맵(햄버거메뉴) 넣기
    const sitemapEl = document.getElementById('common-sitemap');
    if (sitemapEl) sitemapEl.innerHTML = sitemapHtml;
});

// ==========================================
// 5. 사이트맵 열기/닫기 작동 스위치 기능
// ==========================================
function openSitemap() {
    const modal = document.getElementById('sitemap-modal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        // 부드럽게 나타나는 효과 (애니메이션)
        setTimeout(() => {
            modal.classList.remove('opacity-0');
        }, 10);
        document.body.style.overflow = 'hidden'; // 메뉴가 열렸을 때 뒷배경이 위아래로 움직이지 않도록 고정
    }
}

function closeSitemap() {
    const modal = document.getElementById('sitemap-modal');
    if (modal) {
        modal.classList.add('opacity-0');
        // 부드럽게 사라지는 효과가 끝난 뒤에 완전히 숨김
        setTimeout(() => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            document.body.style.overflow = ''; // 메뉴를 닫으면 다시 스크롤 가능하게 풀기
        }, 300);
    }
}

// 모바일 전용 서브 메뉴 열기/닫기 (필요시 사용)
function toggleMobileSubMenu(menuId) {
    const menu = document.getElementById(menuId);
    if (menu) {
        menu.classList.toggle('hidden');
    }
}
