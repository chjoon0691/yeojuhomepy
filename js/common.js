/**
 * 여주성결교회 공통 스크립트 (마법의 파일)
 * 모든 페이지의 헤더(상단메뉴), 푸터(하단정보), 사이트맵을 이 파일 하나로 통제합니다.
 */
document.addEventListener('DOMContentLoaded', () => {
    
    // 각 페이지마다 폴더 깊이가 다르므로, 미리 정의된 ROOT_PATH를 사용해 경로를 맞춥니다.
    const root = typeof ROOT_PATH !== 'undefined' ? ROOT_PATH : '';

    // 1. 공통 헤더(상단 메뉴) HTML
    const headerHTML = `
    // 사이트맵(전체메뉴) HTML 정의
    const sitemapHtml = `
    <!-- 사이트맵 모달 -->
    <div id="sitemap-modal" class="fixed inset-0 z-[999] hidden bg-black/60 backdrop-blur-sm justify-center items-start pt-4 md:pt-20 px-0 md:px-4 transition-opacity duration-300 opacity-0">
        <!-- 모바일에서 가로 너비를 화면의 85%로 줄여서 답답함을 없앰 -->
        <div class="bg-white w-[85%] md:w-full max-w-6xl rounded-lg shadow-2xl flex flex-col max-h-[90vh] md:max-h-[80vh]">
            
            <!-- 헤더 -->
            <div class="bg-[#1b315b] text-white px-4 md:px-6 py-3 flex justify-between items-center rounded-t-lg shrink-0">
                <div class="flex items-center gap-2">
                    <h2 class="text-base md:text-xl font-bold">전체 메뉴</h2>
                    <span class="text-xs md:text-sm hidden sm:inline text-blue-200">홈페이지에 오신것을 진심으로 환영합니다.</span>
                </div>
                <button onclick="closeSitemap()" class="text-white hover:text-red-400 text-xl md:text-2xl focus:outline-none"><i class="fas fa-times"></i></button>
            </div>

            <!-- 내용 (줄간격 축소, 모바일 1열 세로정렬, 데스크탑 5열) -->
            <div id="sitemap-content" class="p-4 md:p-8 overflow-y-auto w-full">
                <div class="grid grid-cols-1 md:grid-cols-5 gap-x-6 gap-y-5 md:gap-y-0">
                    
                    <!-- 1. 환영합니다 -->
                    <div class="flex flex-col">
                        <h3 class="text-[14px] md:text-lg font-bold text-gray-900 border-b-2 border-[#1b315b] pb-1.5 mb-1.5">환영합니다</h3>
                        <ul class="flex flex-col gap-0.5 md:gap-1.5 text-[12px] md:text-[14px] text-gray-600">
                            <li><a href="${ROOT_PATH}welcome/greeting.html" class="hover:text-blue-600 block py-0.5">인사말</a></li>
                            <li class="font-bold text-gray-800 mt-1 md:mt-2">교회연혁</li>
                            <li><a href="${ROOT_PATH}welcome/history/building.html" class="hover:text-blue-600 ml-2 block py-0.5">- 성전건축이야기</a></li>
                            <li><a href="${ROOT_PATH}welcome/history/edu_building.html" class="hover:text-blue-600 ml-2 block py-0.5">- 교육관건축사진</a></li>
                            <li><a href="${ROOT_PATH}welcome/history/old_photos.html" class="hover:text-blue-600 ml-2 block py-0.5">- 이전 홈피 사진들</a></li>
                            <li class="mt-1 md:mt-2"><a href="${ROOT_PATH}welcome/serve/serve.html" class="hover:text-blue-600 block py-0.5">섬기는 분들</a></li>
                            <li><a href="${ROOT_PATH}welcome/worship/worship.html" class="hover:text-blue-600 block py-0.5">예배안내</a></li>
                            <li><a href="${ROOT_PATH}welcome/bus/bus.html" class="hover:text-blue-600 block py-0.5">차량운행안내</a></li>
                            <li><a href="${ROOT_PATH}welcome/map/map.html" class="hover:text-blue-600 block py-0.5">오시는길</a></li>
                            <li><a href="${ROOT_PATH}welcome/newcomer/newcomer.html" class="hover:text-blue-600 block py-0.5">새가족안내</a></li>
                        </ul>
                    </div>

                    <!-- 2. 말씀과 찬양 -->
                    <div class="flex flex-col">
                        <h3 class="text-[14px] md:text-lg font-bold text-gray-900 border-b-2 border-[#1b315b] pb-1.5 mb-1.5">말씀과 찬양</h3>
                        <ul class="flex flex-col gap-0.5 md:gap-1.5 text-[12px] md:text-[14px] text-gray-600">
                            <li class="font-bold text-gray-800">말씀</li>
                            <li><a href="${ROOT_PATH}word/sunday.html" class="hover:text-blue-600 ml-2 bg-gray-50 block py-0.5">- 주일예배</a></li>
                            <li><a href="${ROOT_PATH}word/sunday_pm.html" class="hover:text-blue-600 ml-2 bg-gray-50 block py-0.5">- 주일오후예배</a></li>
                            <li><a href="${ROOT_PATH}word/wednesday.html" class="hover:text-blue-600 ml-2 bg-gray-50 block py-0.5">- 수요예배</a></li>
                            <li><a href="${ROOT_PATH}word/special.html" class="hover:text-blue-600 ml-2 bg-gray-50 block py-0.5">- 특별집회</a></li>
                            <li class="font-bold text-gray-800 mt-1 md:mt-2">찬양대/중창단</li>
                            <li><a href="${ROOT_PATH}word/praise.html" class="hover:text-blue-600 ml-2 bg-gray-50 block py-0.5">- 시온찬양대</a></li>
                            <li><a href="${ROOT_PATH}word/hallelujah.html" class="hover:text-blue-600 ml-2 bg-gray-50 block py-0.5">- 할렐루야찬양대</a></li>
                            <li><a href="${ROOT_PATH}word/dreamnlove.html" class="hover:text-blue-600 ml-2 bg-gray-50 block py-0.5">- 꿈과사랑의찬양대</a></li>
                            <li><a href="${ROOT_PATH}word/silver.html" class="hover:text-blue-600 ml-2 bg-gray-50 block py-0.5">- 은빛찬양대</a></li>
                            <li><a href="${ROOT_PATH}word/sunday_offering.html" class="hover:text-blue-600 ml-2 bg-gray-50 block py-0.5">- 주일봉헌찬양</a></li>
                            <li><a href="${ROOT_PATH}word/special_praise.html" class="hover:text-blue-600 ml-2 bg-gray-50 block py-0.5">- 특별찬양</a></li>
                            <li class="font-bold text-gray-800 mt-1 md:mt-2"><a href="${ROOT_PATH}word/media.html" class="hover:text-blue-600 block py-0.5">여주미디어</a></li>
                        </ul>
                    </div>

                    <!-- 3. 공동체 & 행정서비스 -->
                    <div class="flex flex-col gap-5 md:gap-8">
                        <div>
                            <h3 class="text-[14px] md:text-lg font-bold text-gray-900 border-b-2 border-[#1b315b] pb-1.5 mb-1.5">공동체</h3>
                            <ul class="flex flex-col gap-0.5 md:gap-1.5 text-[12px] md:text-[14px] text-gray-600">
                                <li><a href="${ROOT_PATH}community/parish.html" class="hover:text-blue-600 block py-0.5">교구</a></li>
                                <li><a href="${ROOT_PATH}community/organization.html" class="hover:text-blue-600 block py-0.5">기관</a></li>
                                <li><a href="${ROOT_PATH}community/training.html" class="hover:text-blue-600 block py-0.5">양육&훈련</a></li>
                                <li><a href="${ROOT_PATH}community/senior.html" class="hover:text-blue-600 block py-0.5">청춘대학</a></li>
                                <li><a href="${ROOT_PATH}community/company.html" class="hover:text-blue-600 block py-0.5">성도기업</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="text-[14px] md:text-lg font-bold text-gray-900 border-b-2 border-[#1b315b] pb-1.5 mb-1.5">행정서비스</h3>
                            <ul class="flex flex-col gap-0.5 md:gap-1.5 text-[12px] md:text-[14px] text-gray-600">
                                <li><a href="${ROOT_PATH}service/application.html" class="hover:text-blue-600 block py-0.5">신청서류</a></li>
                            </ul>
                        </div>
                    </div>

                    <!-- 4. 다음세대 -->
                    <div class="flex flex-col">
                        <h3 class="text-[14px] md:text-lg font-bold text-gray-900 border-b-2 border-[#1b315b] pb-1.5 mb-1.5">다음세대</h3>
                        <ul class="flex flex-col gap-0.5 md:gap-1.5 text-[12px] md:text-[14px] text-gray-600">
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

                    <!-- 5. 전도와 선교 & 교회소식 -->
                    <div class="flex flex-col gap-5 md:gap-8">
                        <div>
                            <h3 class="text-[14px] md:text-lg font-bold text-gray-900 border-b-2 border-[#1b315b] pb-1.5 mb-1.5">전도와 선교</h3>
                            <ul class="flex flex-col gap-0.5 md:gap-1.5 text-[12px] md:text-[14px] text-gray-600">
                                <li><a href="${ROOT_PATH}mission/evangelism.html" class="hover:text-blue-600 block py-0.5">전도대</a></li>
                                <li><a href="${ROOT_PATH}mission/domestic.html" class="hover:text-blue-600 block py-0.5">국내선교</a></li>
                                <li><a href="${ROOT_PATH}mission/overseas.html" class="hover:text-blue-600 block py-0.5">해외선교</a></li>
                                <li><a href="${ROOT_PATH}mission/news.html" class="hover:text-blue-600 block py-0.5">선교지소식</a></li>
                                <li><a href="${ROOT_PATH}mission/club.html" class="hover:text-blue-600 block py-0.5">동호인선교회</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="text-[14px] md:text-lg font-bold text-gray-900 border-b-2 border-[#1b315b] pb-1.5 mb-1.5">교회소식</h3>
                            <ul class="flex flex-col gap-0.5 md:gap-1.5 text-[12px] md:text-[14px] text-gray-600">
                                <li><a href="${ROOT_PATH}news/weekly.html" class="hover:text-blue-600 block py-0.5">교회주보</a></li>
                                <li><a href="${ROOT_PATH}news/newcomer.html" class="hover:text-blue-600 block py-0.5">새가족소식</a></li>
                                <li><a href="${ROOT_PATH}news/member.html" class="hover:text-blue-600 block py-0.5">성도소식</a></li>
                                <li><a href="${ROOT_PATH}news/gallery.html" class="hover:text-blue-600 block py-0.5">행사사진</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    `;
    `;

    // 2. 공통 푸터(하단 정보) HTML
    const footerHTML = `
    <footer class="bg-white border-t border-gray-100 py-10 md:py-16 mt-10 w-full">
        <div class="max-w-6xl mx-auto px-4 flex flex-col items-center text-center">
            <h3 class="font-extrabold text-3xl md:text-5xl text-[#3b82f6] mb-4 md:mb-6 tracking-tight">여주성결교회</h3>
            <div class="text-sm md:text-lg text-gray-500 space-y-1 md:space-y-2 mb-8">
                <p>(12625) 경기도 여주시 우암로 96 (하동, 여주성결교회)</p>
                <p>TEL . 031-882-9966 &nbsp;&nbsp; FAX . 031-882-9965</p>
            </div>
            <div class="text-xs md:text-base text-gray-400">
                <p>COPYRIGHT (C) 여주성결교회. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
    `;

    // 3. 공통 사이트맵 모달창 HTML (모바일 2단, PC 4단 반응형, 줄간격 최적화)
    const sitemapHTML = `
    F
    `;

    // 4. 각 페이지의 빈 공간(div)에 생성한 HTML을 밀어 넣습니다.
    const headerEl = document.getElementById('common-header');
    const footerEl = document.getElementById('common-footer');
    const sitemapEl = document.getElementById('common-sitemap');

    if (headerEl) headerEl.innerHTML = headerHTML;
    if (footerEl) footerEl.innerHTML = footerHTML;
    if (sitemapEl) sitemapEl.innerHTML = sitemapHTML;
});

// 전역 함수: 사이트맵 모달 토글
window.toggleGlobalSitemap = function() {
    const modal = document.getElementById('global-sitemap-modal');
    if (modal) {
        if (modal.classList.contains('hidden')) {
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            document.body.style.overflow = 'hidden';
        } else {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            document.body.style.overflow = '';
        }
    }
};

// 모바일 서브 메뉴 토글 (중간 네비게이션 바용)
window.toggleMobileSubMenu = function(menuId) {
    const targetMenu = document.getElementById(menuId);
    const otherMenuId = menuId === 'menu-depth1' ? 'menu-depth2' : 'menu-depth1';
    const otherMenu = document.getElementById(otherMenuId);
    
    if (otherMenu && !otherMenu.classList.contains('hidden')) {
        otherMenu.classList.add('hidden');
        const otherIcon = otherMenu.previousElementSibling.querySelector('.fas');
        if(otherIcon) {
            otherIcon.classList.remove('fa-minus');
            otherIcon.classList.add('fa-plus');
        }
    }
    
    if (targetMenu) {
        targetMenu.classList.toggle('hidden');
        const icon = targetMenu.previousElementSibling.querySelector('.fas');
        if(icon) {
            if(targetMenu.classList.contains('hidden')) {
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
            } else {
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
            }
        }
    }
};
