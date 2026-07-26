/**
 * 여주성결교회 공통 스크립트 (마법의 파일)
 * 모든 페이지의 헤더(상단메뉴), 푸터(하단정보), 사이트맵, 그리고 좌측 사이드바(LNB)를 이 파일 하나로 통제합니다.
 */
document.addEventListener('DOMContentLoaded', () => {
    
    // 각 페이지마다 폴더 깊이가 다르므로, 미리 정의된 ROOT_PATH를 사용해 경로를 맞춥니다.
    const root = typeof ROOT_PATH !== 'undefined' ? ROOT_PATH : '';

    // 1. 공통 헤더(상단 메뉴) HTML
    const headerHTML = `
    <header class="bg-[#244177] text-white w-full z-50 relative">
        <div class="hidden md:block border-b border-white/20 bg-[#1b315b]">
            <div class="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-sm font-light">
                <span class="text-blue-200 tracking-wide">교회창립일: 1932. 5. 13.</span>
                <div class="flex items-center space-x-6">
                    <a href="https://www.youtube.com/@여주성결교회" target="_blank" class="hover:text-blue-300 flex items-center gap-1.5 transition"><i class="fab fa-youtube text-red-500 text-lg"></i> 유튜브채널</a>
                </div>
            </div>
        </div>
        
        <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <!-- Logo -->
            <a href="${root}index.html" class="flex items-center gap-1 cursor-pointer z-50">
                <img src="${root}images/교회마크만01.png" alt="여주성결교회 마크" class="h-8 md:h-11 w-auto object-contain">
                <img src="${root}images/여주성결교회 로고타입1_3.png" alt="여주성결교회 로고" class="h-6 md:h-8 w-auto object-contain brightness-0 invert">
            </a>
            
            <!-- 모바일 햄버거 버튼 -->
            <button class="md:hidden border border-white/40 w-10 h-10 flex items-center justify-center rounded text-white text-xl z-50 hover:bg-white/10 transition" onclick="toggleGlobalSitemap()">
                <i class="fas fa-bars"></i>
            </button>

            <!-- Menu (Desktop) -->
            <nav class="hidden md:flex items-center space-x-4 lg:space-x-8 text-[15px] lg:text-lg font-medium whitespace-nowrap">
                <div class="relative group py-2">
                    <a href="${root}welcome/greeting.html" class="hover:text-blue-300 transition">환영합니다</a>
                    <div class="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                        <div class="w-48 bg-white text-gray-800 rounded-2xl shadow-xl py-3 border border-gray-100 flex flex-col">
                            <a href="${root}welcome/greeting.html" class="block px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">인사말</a>
                            
                            <!-- 교회연혁 2단 드롭다운 -->
                            <div class="relative group/sub">
                                <a href="${root}welcome/history/history.html" class="flex justify-between items-center px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">
                                    교회연혁 <i class="fas fa-chevron-right text-[0.6rem] text-gray-400"></i>
                                </a>
                                <div class="absolute top-0 left-full ml-1 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300">
                                    <div class="w-48 bg-white text-gray-800 rounded-2xl shadow-xl py-3 border border-gray-100 flex flex-col">
                                        <a href="${root}welcome/history/building.html" class="block px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">성전건축이야기</a>
                                        <a href="${root}welcome/history/edu_building.html" class="block px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">교육관건축사진</a>
                                        <a href="${root}welcome/history/old_photos.html" class="block px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">이전 홈피 사진들</a>
                                    </div>
                                </div>
                            </div>

                            <!-- 역대 교역자 및 장로 단독 페이지 추가 -->
                            <a href="${root}welcome/pastors_elders.html" class="block px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">역대 교역자 및 장로</a>
                            <a href="${root}welcome/serve/serve.html" class="block px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">섬기는 분들</a>
                            <a href="${root}welcome/worship/worship.html" class="block px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">예배안내</a>
                            <a href="${root}welcome/bus/bus.html" class="block px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">차량운행안내</a>
                            <a href="${root}welcome/map/map.html" class="block px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">오시는길</a>
                            <a href="${root}welcome/newcomer/newcomer.html" class="block px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">새가족안내</a>
                        </div>
                    </div>
                </div>

                <div class="relative group py-2">
                    <a href="${root}word/sunday.html" class="hover:text-blue-300 transition">말씀과 찬양</a>
                    <div class="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                        <div class="w-48 bg-white text-gray-800 rounded-2xl shadow-xl py-3 border border-gray-100 flex flex-col">
                            <!-- 말씀 2단 드롭다운 -->
                            <div class="relative group/sub">
                                <a href="#" class="flex justify-between items-center px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">
                                    말씀 <i class="fas fa-chevron-right text-[0.6rem] text-gray-400"></i>
                                </a>
                                <div class="absolute top-0 left-full ml-1 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300">
                                    <div class="w-48 bg-white text-gray-800 rounded-2xl shadow-xl py-3 border border-gray-100 flex flex-col">
                                        <a href="${root}word/sunday.html" class="block px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">주일예배</a>
                                        <a href="${root}word/afternoon.html" class="block px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">주일오후예배</a>
                                        <a href="${root}word/wednesday.html" class="block px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">수요예배</a>
                                        <a href="${root}word/special_worship.html" class="block px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">특별집회</a>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- 찬양 2단 드롭다운 -->
                            <div class="relative group/sub">
                                <a href="#" class="flex justify-between items-center px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">
                                    찬양대/중창단 <i class="fas fa-chevron-right text-[0.6rem] text-gray-400"></i>
                                </a>
                                <div class="absolute top-0 left-full ml-1 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300">
                                    <div class="w-48 bg-white text-gray-800 rounded-2xl shadow-xl py-3 border border-gray-100 flex flex-col">
                                        <a href="${root}word/praise.html" class="block px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">시온찬양대</a>
                                        <a href="${root}word/hallelujah.html" class="block px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">할렐루야찬양대</a>
                                        <a href="${root}word/dreamnlove.html" class="block px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">꿈과사랑의찬양대</a>
                                        <a href="${root}word/silver.html" class="block px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">은빛찬양대</a>
                                        <a href="${root}word/sundayoffering.html" class="block px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">주일봉헌찬양</a>
                                        <a href="${root}word/special.html" class="block px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">특별찬양</a>
                                    </div>
                                </div>
                            </div>

                            <a href="${root}word/media.html" class="block px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">여주미디어</a>
                        </div>
                    </div>
                </div>

                <div class="relative group py-2">
                    <a href="${root}community/parish.html" class="hover:text-blue-300 transition">공동체</a>
                    <div class="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                        <div class="w-48 bg-white text-gray-800 rounded-2xl shadow-xl py-3 border border-gray-100 flex flex-col">
                            <a href="${root}community/parish.html" class="block px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">교구</a>
                            <a href="${root}community/organization.html" class="block px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">기관</a>
                            <a href="${root}community/training.html" class="block px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">양육&훈련</a>
                            <a href="${root}community/senior.html" class="block px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">청춘대학</a>
                            <a href="${root}community/company.html" class="block px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">성도기업</a>
                        </div>
                    </div>
                </div>

                <div class="relative group py-2">
                    <a href="${root}nextgen/infant.html" class="hover:text-blue-300 transition">다음세대</a>
                    <div class="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                        <div class="w-48 bg-white text-gray-800 rounded-2xl shadow-xl py-3 border border-gray-100 flex flex-col">
                            <a href="${root}nextgen/infant.html" class="block px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">영아부</a>
                            <a href="${root}nextgen/kindergarten.html" class="block px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">유치부</a>
                            <a href="${root}nextgen/children.html" class="block px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">유년부</a>
                            <a href="${root}nextgen/elementary.html" class="block px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">초등부</a>
                            <a href="${root}nextgen/awana.html" class="block px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">어와나</a>
                            <a href="${root}nextgen/middle.html" class="block px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">중등부</a>
                            <a href="${root}nextgen/high.html" class="block px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">고등부</a>
                            <a href="${root}nextgen/youth.html" class="block px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">청년사역위원회</a>
                        </div>
                    </div>
                </div>

                <div class="relative group py-2">
                    <a href="${root}mission/evangelism.html" class="hover:text-blue-300 transition">전도와 선교</a>
                    <div class="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                        <div class="w-48 bg-white text-gray-800 rounded-2xl shadow-xl py-3 border border-gray-100 flex flex-col">
                            <a href="${root}mission/evangelism.html" class="block px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">전도대</a>
                            <a href="${root}mission/domestic.html" class="block px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">국내선교</a>
                            <a href="${root}mission/overseas.html" class="block px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">해외선교</a>
                            <a href="${root}mission/news.html" class="block px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">선교지소식</a>
                            <a href="${root}mission/club.html" class="block px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">동호인선교회</a>
                        </div>
                    </div>
                </div>

                <div class="relative group py-2">
                    <a href="${root}news/weekly.html" class="hover:text-blue-300 transition">교회소식</a>
                    <div class="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                        <div class="w-48 bg-white text-gray-800 rounded-2xl shadow-xl py-3 border border-gray-100 flex flex-col">
                            <a href="${root}news/weekly.html" class="block px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">교회주보</a>
                            <a href="${root}news/newcomer.html" class="block px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">새가족소식</a>
                            <a href="${root}news/member.html" class="block px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">성도소식</a>
                            <a href="${root}news/gallery.html" class="block px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">행사사진</a>
                        </div>
                    </div>
                </div>

                <div class="relative group py-2">
                    <a href="${root}service/application.html" class="hover:text-blue-300 transition">행정서비스</a>
                    <div class="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                        <div class="w-48 bg-white text-gray-800 rounded-2xl shadow-xl py-3 border border-gray-100 flex flex-col">
                            <a href="${root}service/application.html" class="block px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">신청서류</a>
                        </div>
                    </div>
                </div>
                
                <!-- PC 사이트맵 햄버거 버튼 -->
                <button class="border border-white/40 w-10 h-10 hidden md:flex items-center justify-center rounded text-white text-xl hover:bg-white/10 transition" onclick="toggleGlobalSitemap()">
                    <i class="fas fa-bars"></i>
                </button>
            </nav>
        </div>
    </header>
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

    // 3. 공통 사이트맵 모달창 HTML
    const sitemapHTML = `
    <div id="global-sitemap-modal" class="fixed inset-0 z-[100] hidden md:items-center md:justify-center p-0 md:p-6">
        <!-- 반투명 배경 -->
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onclick="toggleGlobalSitemap()"></div>
        
        <!-- 팝업창 본체 -->
        <div class="relative w-[65%] max-w-[280px] md:max-w-[1000px] md:w-full bg-white shadow-2xl z-10 flex flex-col h-full md:h-auto md:max-h-[90vh] md:rounded-2xl ml-auto md:ml-0 overflow-hidden">
            
            <!-- 상단 타이틀 바 -->
            <div class="bg-[#1b315b] text-white px-4 py-3 flex justify-between items-center shrink-0">
                <div class="flex items-center gap-3">
                    <h2 class="text-lg font-extrabold tracking-tight">전체 메뉴</h2>
                    <span class="text-xs font-light text-blue-200 hidden md:inline-block">홈페이지에 오신것을 진심으로 환영합니다.</span>
                </div>
                <button onclick="toggleGlobalSitemap()" class="text-white hover:text-gray-300 transition-colors focus:outline-none p-1">
                    <i class="fas fa-times text-xl"></i>
                </button>
            </div>
            
            <!-- 사이트맵 링크 영역 -->
            <div id="sitemap-content" class="p-4 md:p-8 overflow-y-auto bg-white flex-1">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-6">
                    
                    <!-- 1열. 환영합니다 -->
                    <div>
                        <h3 class="font-bold text-gray-900 border-t-2 border-[#1b315b] pt-1.5 pb-1 text-[14px] md:text-base">환영합니다</h3>
                        <ul class="border-t border-gray-200 text-[13px] md:text-sm text-gray-700">
                            <li class="border-b border-dashed border-gray-100 py-1 hover:text-blue-600 transition"><a href="${root}welcome/greeting.html" class="block w-full">인사말</a></li>
                            <li class="border-b border-dashed border-gray-100 py-1 hover:text-blue-600 transition">
                                <a href="${root}welcome/history/history.html" class="block w-full font-bold text-gray-900">교회연혁</a>
                                <ul class="pl-2 mt-0.5 space-y-0.5 text-[12px] md:text-[13px] text-gray-500">
                                    <li>- <a href="${root}welcome/history/building.html" class="hover:text-blue-500">성전건축이야기</a></li>
                                    <li>- <a href="${root}welcome/history/edu_building.html" class="hover:text-blue-500">교육관건축사진</a></li>
                                    <li>- <a href="${root}welcome/history/old_photos.html" class="hover:text-blue-500">이전 홈피 사진들</a></li>
                                </ul>
                            </li>
                            <li class="border-b border-dashed border-gray-100 py-1 hover:text-blue-600 transition"><a href="${root}welcome/pastors_elders.html" class="block w-full font-bold text-gray-900">역대 교역자 및 장로</a></li>
                            <li class="border-b border-dashed border-gray-100 py-1 hover:text-blue-600 transition"><a href="${root}welcome/serve/serve.html" class="block w-full">섬기는 분들</a></li>
                            <li class="border-b border-dashed border-gray-100 py-1 hover:text-blue-600 transition"><a href="${root}welcome/worship/worship.html" class="block w-full">예배안내</a></li>
                            <li class="border-b border-dashed border-gray-100 py-1 hover:text-blue-600 transition"><a href="${root}welcome/bus/bus.html" class="block w-full">차량운행안내</a></li>
                            <li class="border-b border-dashed border-gray-100 py-1 hover:text-blue-600 transition"><a href="${root}welcome/map/map.html" class="block w-full">오시는길</a></li>
                            <li class="border-b border-dashed border-gray-100 py-1 hover:text-blue-600 transition"><a href="${root}welcome/newcomer/newcomer.html" class="block w-full">새가족안내</a></li>
                        </ul>
                    </div>
                    
                    <!-- 2열. 말씀과 찬양 -->
                    <div>
                        <h3 class="font-bold text-gray-900 border-t-2 border-[#1b315b] pt-1.5 pb-1 text-[14px] md:text-base">말씀과 찬양</h3>
                        <ul class="border-t border-gray-200 text-[13px] md:text-sm text-gray-700">
                            <li class="py-1 text-gray-900 font-bold border-b border-gray-100">말씀</li>
                            <li class="bg-gray-50/80 p-1.5 space-y-0.5 text-[12px] md:text-[13px] text-gray-600 mb-1 border-b border-dashed border-gray-100 rounded-sm">
                                <a href="${root}word/sunday.html" class="block hover:text-blue-600">- 주일예배</a>
                                <a href="${root}word/afternoon.html" class="block hover:text-blue-600">- 주일오후예배</a>
                                <a href="${root}word/wednesday.html" class="block hover:text-blue-600">- 수요예배</a>
                                <a href="${root}word/special_worship.html" class="block hover:text-blue-600">- 특별집회</a>
                            </li>
                            <li class="py-1 text-gray-900 font-bold border-b border-gray-100">찬양대/중창단</li>
                            <li class="bg-gray-50/80 p-1.5 space-y-0.5 text-[12px] md:text-[13px] text-gray-600 mb-1 border-b border-dashed border-gray-100 rounded-sm">
                                <a href="${root}word/praise.html" class="block hover:text-blue-600">- 시온찬양대</a>
                                <a href="${root}word/hallelujah.html" class="block hover:text-blue-600">- 할렐루야찬양대</a>
                                <a href="${root}word/dreamnlove.html" class="block hover:text-blue-600">- 꿈과사랑의찬양대</a>
                                <a href="${root}word/silver.html" class="block hover:text-blue-600">- 은빛찬양대</a>
                                <a href="${root}word/sundayoffering.html" class="block hover:text-blue-600">- 주일봉헌찬양</a>
                                <a href="${root}word/special.html" class="block hover:text-blue-600">- 특별찬양</a>
                            </li>
                            <li class="py-1 hover:text-blue-600 transition"><a href="${root}word/media.html" class="block w-full font-bold text-gray-900">여주미디어</a></li>
                        </ul>
                    </div>

                    <!-- 3열. 공동체 & 다음세대 (세로정렬) -->
                    <div class="flex flex-col gap-y-6">
                        <div>
                            <h3 class="font-bold text-gray-900 border-t-2 border-[#1b315b] pt-1.5 pb-1 text-[14px] md:text-base">공동체</h3>
                            <ul class="border-t border-gray-200 text-[13px] md:text-sm text-gray-700">
                                <li class="border-b border-dashed border-gray-100 py-1 hover:text-blue-600 transition"><a href="${root}community/parish.html" class="block w-full">교구</a></li>
                                <li class="border-b border-dashed border-gray-100 py-1 hover:text-blue-600 transition"><a href="${root}community/organization.html" class="block w-full">기관</a></li>
                                <li class="border-b border-dashed border-gray-100 py-1 hover:text-blue-600 transition"><a href="${root}community/training.html" class="block w-full">양육&훈련</a></li>
                                <li class="border-b border-dashed border-gray-100 py-1 hover:text-blue-600 transition"><a href="${root}community/senior.html" class="block w-full">청춘대학</a></li>
                                <li class="border-b border-dashed border-gray-100 py-1 hover:text-blue-600 transition"><a href="${root}community/company.html" class="block w-full">성도기업</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="font-bold text-gray-900 border-t-2 border-[#1b315b] pt-1.5 pb-1 text-[14px] md:text-base">다음세대</h3>
                            <ul class="border-t border-gray-200 text-[13px] md:text-sm text-gray-700">
                                <li class="border-b border-dashed border-gray-100 py-1 hover:text-blue-600 transition"><a href="${root}nextgen/infant.html" class="block w-full">영아부</a></li>
                                <li class="border-b border-dashed border-gray-100 py-1 hover:text-blue-600 transition"><a href="${root}nextgen/kindergarten.html" class="block w-full">유치부</a></li>
                                <li class="border-b border-dashed border-gray-100 py-1 hover:text-blue-600 transition"><a href="${root}nextgen/children.html" class="block w-full">유년부</a></li>
                                <li class="border-b border-dashed border-gray-100 py-1 hover:text-blue-600 transition"><a href="${root}nextgen/elementary.html" class="block w-full">초등부</a></li>
                                <li class="border-b border-dashed border-gray-100 py-1 hover:text-blue-600 transition"><a href="${root}nextgen/awana.html" class="block w-full">어와나</a></li>
                                <li class="border-b border-dashed border-gray-100 py-1 hover:text-blue-600 transition"><a href="${root}nextgen/middle.html" class="block w-full">중등부</a></li>
                                <li class="border-b border-dashed border-gray-100 py-1 hover:text-blue-600 transition"><a href="${root}nextgen/high.html" class="block w-full">고등부</a></li>
                                <li class="border-b border-dashed border-gray-100 py-1 hover:text-blue-600 transition"><a href="${root}nextgen/youth.html" class="block w-full">청년사역위원회</a></li>
                            </ul>
                        </div>
                    </div>

                    <!-- 4열. 전도와 선교 & 교회소식 & 행정서비스 (세로정렬) -->
                    <div class="flex flex-col gap-y-6">
                        <div>
                            <h3 class="font-bold text-gray-900 border-t-2 border-[#1b315b] pt-1.5 pb-1 text-[14px] md:text-base">전도와 선교</h3>
                            <ul class="border-t border-gray-200 text-[13px] md:text-sm text-gray-700">
                                <li class="border-b border-dashed border-gray-100 py-1 hover:text-blue-600 transition"><a href="${root}mission/evangelism.html" class="block w-full">전도대</a></li>
                                <li class="border-b border-dashed border-gray-100 py-1 hover:text-blue-600 transition"><a href="${root}mission/domestic.html" class="block w-full">국내선교</a></li>
                                <li class="border-b border-dashed border-gray-100 py-1 hover:text-blue-600 transition"><a href="${root}mission/overseas.html" class="block w-full">해외선교</a></li>
                                <li class="border-b border-dashed border-gray-100 py-1 hover:text-blue-600 transition"><a href="${root}mission/news.html" class="block w-full">선교지소식</a></li>
                                <li class="border-b border-dashed border-gray-100 py-1 hover:text-blue-600 transition"><a href="${root}mission/club.html" class="block w-full">동호인선교회</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="font-bold text-gray-900 border-t-2 border-[#1b315b] pt-1.5 pb-1 text-[14px] md:text-base">교회소식</h3>
                            <ul class="border-t border-gray-200 text-[13px] md:text-sm text-gray-700">
                                <li class="border-b border-dashed border-gray-100 py-1 hover:text-blue-600 transition"><a href="${root}news/weekly.html" class="block w-full">교회주보</a></li>
                                <li class="border-b border-dashed border-gray-100 py-1 hover:text-blue-600 transition"><a href="${root}news/newcomer.html" class="block w-full">새가족소식</a></li>
                                <li class="border-b border-dashed border-gray-100 py-1 hover:text-blue-600 transition"><a href="${root}news/member.html" class="block w-full">성도소식</a></li>
                                <li class="border-b border-dashed border-gray-100 py-1 hover:text-blue-600 transition"><a href="${root}news/gallery.html" class="block w-full">행사사진</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="font-bold text-gray-900 border-t-2 border-[#1b315b] pt-1.5 pb-1 text-[14px] md:text-base">행정서비스</h3>
                            <ul class="border-t border-gray-200 text-[13px] md:text-sm text-gray-700">
                                <li class="border-b border-dashed border-gray-100 py-1 hover:text-blue-600 transition"><a href="${root}service/application.html" class="block w-full">신청서류</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    `;

    // 4. 각 페이지의 빈 공간(div)에 생성한 HTML을 밀어 넣습니다.
    const headerEl = document.getElementById('common-header');
    const footerEl = document.getElementById('common-footer');
    const sitemapEl = document.getElementById('common-sitemap');

    if (headerEl) headerEl.innerHTML = headerHTML;
    if (footerEl) footerEl.innerHTML = footerHTML;
    if (sitemapEl) sitemapEl.innerHTML = sitemapHTML;

    // ==========================================
    // 5. 공통 사이드바(LNB) 자동 생성 로직
    // ==========================================
    const sidebarEl = document.getElementById('common-sidebar');
    if (sidebarEl) {
        const category = sidebarEl.getAttribute('data-category');
        const activeId = sidebarEl.getAttribute('data-active');

        // 전체 메뉴 트리 데이터
        const sidebarData = {
            "welcome": {
                title: "환영합니다",
                items: [
                    { id: "greeting", name: "인사말", href: "welcome/greeting.html" },
                    { id: "history", name: "교회연혁", href: "welcome/history/history.html",
                      subs: [
                          { id: "building", name: "성전건축이야기", href: "welcome/history/building.html" },
                          { id: "edu_building", name: "교육관건축사진", href: "welcome/history/edu_building.html" },
                          { id: "old_photos", name: "이전 홈피 사진들", href: "welcome/history/old_photos.html" }
                      ]
                    },
                    { id: "pastors_elders", name: "역대 교역자 및 장로", href: "welcome/pastors_elders.html" },
                    { id: "serve", name: "섬기는 분들", href: "welcome/serve/serve.html" },
                    { id: "worship", name: "예배안내", href: "welcome/worship/worship.html" },
                    { id: "bus", name: "차량운행안내", href: "welcome/bus/bus.html" },
                    { id: "map", name: "오시는길", href: "welcome/map/map.html" },
                    { id: "newcomer", name: "새가족안내", href: "welcome/newcomer/newcomer.html" }
                ]
            },
            "word": {
                title: "말씀과 찬양",
                items: [
                    { id: "word_group", name: "말씀", href: "word/sunday.html",
                      subs: [
                          { id: "sunday", name: "주일 예배", href: "word/sunday.html" },
                          { id: "afternoon", name: "주일 오후 예배", href: "word/afternoon.html" },
                          { id: "wednesday", name: "수요 예배", href: "word/wednesday.html" },
                          { id: "special_worship", name: "특별집회", href: "word/special_worship.html" }
                      ]
                    },
                    { id: "praise_group", name: "찬양대/중창단", href: "word/praise.html",
                      subs: [
                          { id: "praise", name: "시온찬양대", href: "word/praise.html" },
                          { id: "hallelujah", name: "할렐루야찬양대", href: "word/hallelujah.html" },
                          { id: "dreamnlove", name: "꿈과사랑의찬양대", href: "word/dreamnlove.html" },
                          { id: "silver", name: "은빛찬양대", href: "word/silver.html" },
                          { id: "sundayoffering", name: "주일봉헌찬양", href: "word/sundayoffering.html" },
                          { id: "special", name: "특별찬양", href: "word/special.html" }
                      ]
                    },
                    { id: "media", name: "여주미디어", href: "word/media.html" }
                ]
            },
            "community": {
                title: "공동체",
                items: [
                    { id: "parish", name: "교구", href: "community/parish.html" },
                    { id: "organization", name: "기관", href: "community/organization.html" },
                    { id: "training", name: "양육&훈련", href: "community/training.html" },
                    { id: "senior", name: "청춘대학", href: "community/senior.html" },
                    { id: "company", name: "성도기업", href: "community/company.html" }
                ]
            },
            "nextgen": {
                title: "다음세대",
                items: [
                    { id: "infant", name: "영아부", href: "nextgen/infant.html" },
                    { id: "kindergarten", name: "유치부", href: "nextgen/kindergarten.html" },
                    { id: "children", name: "유년부", href: "nextgen/children.html" },
                    { id: "elementary", name: "초등부", href: "nextgen/elementary.html" },
                    { id: "awana", name: "어와나", href: "nextgen/awana.html" },
                    { id: "middle", name: "중등부", href: "nextgen/middle.html" },
                    { id: "high", name: "고등부", href: "nextgen/high.html" },
                    { id: "youth", name: "청년사역위원회", href: "nextgen/youth.html" }
                ]
            },
            "mission": {
                title: "전도와 선교",
                items: [
                    { id: "evangelism", name: "전도대", href: "mission/evangelism.html" },
                    { id: "domestic", name: "국내선교", href: "mission/domestic.html" },
                    { id: "overseas", name: "해외선교", href: "mission/overseas.html" },
                    { id: "news", name: "선교지 소식", href: "mission/news.html" },
                    { id: "club", name: "동호인선교회", href: "mission/club.html" }
                ]
            },
            "news": {
                title: "교회소식",
                items: [
                    { id: "weekly", name: "교회주보", href: "news/weekly.html" },
                    { id: "newcomer", name: "새가족소식", href: "news/newcomer.html" },
                    { id: "member", name: "성도소식", href: "news/member.html" },
                    { id: "gallery", name: "행사사진", href: "news/gallery.html" }
                ]
            },
            "service": {
                title: "행정서비스",
                items: [
                    { id: "application", name: "신청서류", href: "service/application.html" }
                ]
            }
        };

        const currentData = sidebarData[category];
        if (currentData) {
            let ulHtml = '';
            
            currentData.items.forEach((item, index) => {
                let isItemActive = (item.id === activeId);
                let hasActiveSub = false;
                
                if (item.subs) {
                    hasActiveSub = item.subs.some(sub => sub.id === activeId);
                }
                
                let liClass = index === currentData.items.length - 1 ? "" : "border-b border-gray-200";
                
                if (item.subs) {
                    // 서브 메뉴가 있는 그룹 메뉴 (예: 교회연혁, 말씀, 찬양대 등)
                    let groupActive = isItemActive || hasActiveSub;
                    let titleColor = groupActive ? "text-[#3b82f6] font-bold bg-gray-50" : "text-gray-700 hover:text-blue-600 hover:bg-gray-50";
                    let iconHtml = groupActive 
                        ? `<i class="fas fa-chevron-down text-xs text-[#3b82f6] group-hover:rotate-180 transition-transform duration-300"></i>`
                        : `<i class="fas fa-chevron-down text-xs text-gray-400 group-hover:rotate-180 transition-transform duration-300"></i>`;
                    
                    let subsHtml = '';
                    item.subs.forEach(sub => {
                        let isSubActive = (sub.id === activeId);
                        let subColor = isSubActive ? "text-[#3b82f6] font-bold bg-gray-50" : "text-gray-500 hover:text-blue-600 hover:bg-gray-50";
                        subsHtml += `<li><a href="${root}${sub.href}" class="block px-8 py-1.5 text-sm ${subColor} transition">${sub.name}</a></li>`;
                    });

                    ulHtml += `
                    <li class="${liClass} group">
                        <a href="${root}${item.href}" class="flex justify-between items-center px-5 py-3 ${titleColor} transition">
                            ${item.name} ${iconHtml}
                        </a>
                        <div class="${groupActive ? '' : 'max-h-0'} overflow-hidden group-hover:max-h-96 transition-all duration-500 ease-in-out">
                            <ul class="py-2 bg-white border-t border-gray-100">
                                ${subsHtml}
                            </ul>
                        </div>
                    </li>`;
                } else {
                    // 단일 메뉴 (예: 인사말, 예배안내 등)
                    let itemColor = isItemActive ? "text-[#3b82f6] font-bold bg-gray-50 hover:bg-gray-100" : "text-gray-700 hover:text-blue-600 hover:bg-gray-50";
                    let iconHtml = isItemActive ? `<i class="fas fa-chevron-right text-xs"></i>` : '';
                    let aClassAdd = index === currentData.items.length - 1 ? "rounded-b-lg" : "";
                    
                    ulHtml += `
                    <li class="${liClass}">
                        <a href="${root}${item.href}" class="flex justify-between items-center px-5 py-3 ${itemColor} transition ${aClassAdd}">
                            ${item.name} ${iconHtml}
                        </a>
                    </li>`;
                }
            });

            // 사이드바 컨테이너에 최종 HTML 삽입
            sidebarEl.innerHTML = `
                <div class="bg-[#6b8cba] text-white text-center py-4 text-xl font-bold rounded-t-lg">${currentData.title}</div>
                <ul class="border border-t-0 border-gray-200 flex flex-col bg-white rounded-b-lg">
                    ${ulHtml}
                </ul>
            `;
        }
    }
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

// ==========================================
// 6. 스마트폰 유튜브 앱 자동 실행 마법
// ==========================================
window.openYoutubeLink = function(url) {
    if (!url || url === '#') return;
    
    // 스마트폰인지 컴퓨터인지 확인합니다
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        // 스마트폰일 경우, 유튜브 전용 앱(App)을 강제로 먼저 부릅니다!
        let appUrl = url;
        
        if (url.includes('youtu.be/')) {
            const videoIdAndQuery = url.split('youtu.be/')[1];
            appUrl = 'vnd.youtube://' + videoIdAndQuery;
        } else if (url.includes('youtube.com/watch?v=')) {
            const videoIdAndQuery = url.split('youtube.com/watch?v=')[1];
            appUrl = 'vnd.youtube://' + videoIdAndQuery;
        }

        window.location.href = appUrl;
        setTimeout(function() {
            window.location.href = url;
        }, 500);

    } else {
        // 일반 컴퓨터일 경우 평소처럼 새 창으로 엽니다
        window.open(url, '_blank');
    }
};
