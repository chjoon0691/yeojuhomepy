/**
 * 여주성결교회 공통 스크립트 (마법의 파일)
 * 모든 페이지의 헤더(상단메뉴), 푸터(하단정보), 사이트맵을 이 파일 하나로 통제합니다.
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
                <a href="https://www.youtube.com/@여주성결교회" target="_blank" class="hover:text-blue-300 flex items-center gap-1.5 transition"><i class="fab fa-youtube text-red-500 text-lg"></i> 유튜브채널</a>
            </div>
        </div>
        
        <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <!-- Logo -->
            <a href="${root}index.html" class="flex items-center gap-1 cursor-pointer z-50">
                <img src="${root}images/교회마크만01.png" alt="여주성결교회 마크" class="h-8 md:h-11 w-auto object-contain">
                <img src="${root}images/여주성결교회 로고타입1_3.png" alt="여주성결교회 로고" class="h-6 md:h-8 w-auto object-contain brightness-0 invert">
            </a>
            
            <button class="md:hidden border border-white/40 w-10 h-10 flex items-center justify-center rounded text-white text-xl z-50 hover:bg-white/10 transition" onclick="toggleMobileMenu()">
                <i class="fas fa-bars"></i>
            </button>

            <!-- Menu (Desktop) -->
            <nav class="hidden md:flex items-center space-x-8 text-lg font-medium">
                <div class="relative group py-2">
                    <a href="${root}welcome/greeting.html" class="hover:text-blue-300 transition">환영합니다</a>
                    <div class="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                        <div class="w-48 bg-white text-gray-800 rounded-2xl shadow-xl py-3 border border-gray-100 flex flex-col">
                            <a href="${root}welcome/greeting.html" class="block px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">인사말</a>
                            <a href="${root}welcome/history/history.html" class="block px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">교회연혁</a>
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
                            <a href="${root}word/sunday.html" class="block px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">주일 예배</a>
                            <a href="#" class="block px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">주일 오후 예배</a>
                            <a href="#" class="block px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">수요 예배</a>
                            <a href="#" class="block px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">특별집회</a>
                            <a href="${root}word/praise.html" class="block px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">찬양대/중창단</a>
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
                            <a href="${root}mission/news.html" class="block px-6 py-2.5 text-base font-medium hover:text-[#3b82f6] hover:bg-gray-50 transition">선교지 소식</a>
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
                
                <button class="border border-white/40 w-10 h-10 hidden md:flex items-center justify-center rounded text-white text-xl hover:bg-white/10 transition" onclick="toggleGlobalSitemap()">
                    <i class="fas fa-bars"></i>
                </button>
            </nav>
        </div>

        <!-- 모바일 전체 메뉴 -->
        <div id="global-mobile-menu" class="absolute top-full left-0 w-full bg-[#1a3668] flex-col items-center py-4 space-y-4 shadow-xl z-50 text-lg hidden">
            <a href="${root}welcome/greeting.html" class="text-white hover:text-blue-300">환영합니다</a>
            <a href="${root}word/sunday.html" class="text-white hover:text-blue-300">말씀과 찬양</a>
            <a href="${root}community/parish.html" class="text-white hover:text-blue-300">공동체</a>
            <a href="${root}nextgen/infant.html" class="text-white hover:text-blue-300">다음세대</a>
            <a href="${root}mission/evangelism.html" class="text-white hover:text-blue-300">전도와 선교</a>
            <a href="${root}news/weekly.html" class="text-white hover:text-blue-300">교회소식</a>
            <a href="${root}service/application.html" class="text-white hover:text-blue-300">행정서비스</a>
        </div>
    </header>
    `;

    // 2. 공통 푸터(하단 정보) HTML - (수정: 사이트맵, 개인정보처리방침 등 삭제)
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
    <div id="global-sitemap-modal" class="fixed inset-0 z-[100] hidden">
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onclick="toggleGlobalSitemap()"></div>
        <div class="relative w-full max-w-[1000px] mx-auto mt-16 md:mt-24 bg-white shadow-2xl z-10 flex flex-col max-h-[80vh]">
            <div class="bg-black text-white px-6 py-4 flex justify-between items-center shrink-0">
                <div class="flex items-center gap-4">
                    <h2 class="text-2xl font-extrabold tracking-tight">사이트맵</h2>
                    <span class="text-sm font-light text-gray-300 hidden sm:inline-block">홈페이지에 오신것을 진심으로 환영합니다. 메뉴를 클릭하시면 해당페이지로 이동합니다.</span>
                </div>
                <button onclick="toggleGlobalSitemap()" class="text-white hover:text-gray-300 transition-colors">
                    <i class="fas fa-times text-2xl"></i>
                </button>
            </div>
            
            <div id="sitemap-content" class="p-8 md:p-10 overflow-y-auto">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-12">
                    <div class="flex flex-col gap-10">
                        <div>
                            <h3 class="font-bold text-gray-800 text-center border-t-2 border-gray-400 pt-3 pb-4">환영합니다</h3>
                            <ul class="border-t border-gray-300 text-sm text-gray-600">
                                <li class="border-b border-dashed border-gray-300 py-2.5 hover:text-blue-600 transition"><a href="${root}welcome/greeting.html" class="block w-full">인사말</a></li>
                                <li class="border-b border-dashed border-gray-300 py-2.5 hover:text-blue-600 transition">
                                    <a href="${root}welcome/history/history.html" class="block w-full">교회연혁</a>
                                </li>
                                <li class="border-b border-dashed border-gray-300 py-2.5 hover:text-blue-600 transition"><a href="${root}welcome/serve/serve.html" class="block w-full">섬기는 분들</a></li>
                                <li class="border-b border-dashed border-gray-300 py-2.5 hover:text-blue-600 transition"><a href="${root}welcome/worship/worship.html" class="block w-full">예배안내</a></li>
                                <li class="border-b border-dashed border-gray-300 py-2.5 hover:text-blue-600 transition"><a href="${root}welcome/bus/bus.html" class="block w-full">차량운행안내</a></li>
                                <li class="border-b border-dashed border-gray-300 py-2.5 hover:text-blue-600 transition"><a href="${root}welcome/map/map.html" class="block w-full">오시는길</a></li>
                                <li class="border-b border-dashed border-gray-300 py-2.5 hover:text-blue-600 transition"><a href="${root}welcome/newcomer/newcomer.html" class="block w-full">새가족안내</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="font-bold text-gray-800 text-center border-t-2 border-gray-400 pt-3 pb-4">전도와 선교</h3>
                            <ul class="border-t border-gray-300 text-sm text-gray-600">
                                <li class="border-b border-dashed border-gray-300 py-2.5 hover:text-blue-600 transition"><a href="${root}mission/evangelism.html" class="block w-full">전도대</a></li>
                                <li class="border-b border-dashed border-gray-300 py-2.5 hover:text-blue-600 transition"><a href="${root}mission/domestic.html" class="block w-full">국내선교</a></li>
                                <li class="border-b border-dashed border-gray-300 py-2.5 hover:text-blue-600 transition"><a href="${root}mission/overseas.html" class="block w-full">해외선교</a></li>
                                <li class="border-b border-dashed border-gray-300 py-2.5 hover:text-blue-600 transition"><a href="${root}mission/news.html" class="block w-full">선교지 소식</a></li>
                                <li class="border-b border-dashed border-gray-300 py-2.5 hover:text-blue-600 transition"><a href="${root}mission/club.html" class="block w-full">동호인선교회</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="flex flex-col gap-10">
                        <div>
                            <h3 class="font-bold text-gray-800 text-center border-t-2 border-gray-400 pt-3 pb-4">말씀과 찬양</h3>
                            <ul class="border-t border-gray-300 text-sm text-gray-600">
                                <li class="py-2.5 text-gray-800 font-medium">말씀</li>
                                <li class="bg-gray-50 p-3 space-y-2 text-[13px] text-gray-500 mb-2">
                                    <a href="${root}word/sunday.html" class="block hover:text-blue-600">- 주일 예배</a>
                                    <a href="#" class="block hover:text-blue-600">- 주일 오후 예배</a>
                                    <a href="#" class="block hover:text-blue-600">- 수요 예배</a>
                                    <a href="#" class="block hover:text-blue-600">- 특별집회</a>
                                </li>
                                <li class="py-2.5 text-gray-800 font-medium">찬양</li>
                                <li class="bg-gray-50 p-3 space-y-2 text-[13px] text-gray-500 mb-2">
                                    <a href="${root}word/praise.html" class="block hover:text-blue-600">- 시온성가대</a>
                                    <a href="#" class="block hover:text-blue-600">- 할렐루야찬양대</a>
                                    <a href="#" class="block hover:text-blue-600">- 꿈과사랑의찬양대</a>
                                    <a href="#" class="block hover:text-blue-600">- 은빛찬양대</a>
                                    <a href="#" class="block hover:text-blue-600">- 주일봉헌찬양</a>
                                    <a href="#" class="block hover:text-blue-600">- 특별찬양</a>
                                </li>
                                <li class="border-b border-dashed border-gray-300 py-2.5 hover:text-blue-600 transition"><a href="${root}word/media.html" class="block w-full">여주미디어</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="font-bold text-gray-800 text-center border-t-2 border-gray-400 pt-3 pb-4">교회소식</h3>
                            <ul class="border-t border-gray-300 text-sm text-gray-600">
                                <li class="border-b border-dashed border-gray-300 py-2.5 hover:text-blue-600 transition"><a href="${root}news/weekly.html" class="block w-full">교회주보</a></li>
                                <li class="border-b border-dashed border-gray-300 py-2.5 hover:text-blue-600 transition"><a href="${root}news/newcomer.html" class="block w-full">새가족소식</a></li>
                                <li class="border-b border-dashed border-gray-300 py-2.5 hover:text-blue-600 transition"><a href="${root}news/member.html" class="block w-full">성도소식</a></li>
                                <li class="border-b border-dashed border-gray-300 py-2.5 hover:text-blue-600 transition"><a href="${root}news/gallery.html" class="block w-full">행사사진</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="flex flex-col gap-10">
                        <div>
                            <h3 class="font-bold text-gray-800 text-center border-t-2 border-gray-400 pt-3 pb-4">공동체</h3>
                            <ul class="border-t border-gray-300 text-sm text-gray-600">
                                <li class="border-b border-dashed border-gray-300 py-2.5 hover:text-blue-600 transition"><a href="${root}community/parish.html" class="block w-full">교구</a></li>
                                <li class="border-b border-dashed border-gray-300 py-2.5 hover:text-blue-600 transition"><a href="${root}community/organization.html" class="block w-full">기관</a></li>
                                <li class="border-b border-dashed border-gray-300 py-2.5 hover:text-blue-600 transition"><a href="${root}community/training.html" class="block w-full">양육&훈련</a></li>
                                <li class="border-b border-dashed border-gray-300 py-2.5 hover:text-blue-600 transition"><a href="${root}community/senior.html" class="block w-full">청춘대학</a></li>
                                <li class="border-b border-dashed border-gray-300 py-2.5 hover:text-blue-600 transition"><a href="${root}community/company.html" class="block w-full">성도기업</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="font-bold text-gray-800 text-center border-t-2 border-gray-400 pt-3 pb-4">행정서비스</h3>
                            <ul class="border-t border-gray-300 text-sm text-gray-600">
                                <li class="border-b border-dashed border-gray-300 py-2.5 hover:text-blue-600 transition"><a href="${root}service/application.html" class="block w-full">신청서류</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="flex flex-col gap-10">
                        <div>
                            <h3 class="font-bold text-gray-800 text-center border-t-2 border-gray-400 pt-3 pb-4">다음세대</h3>
                            <ul class="border-t border-gray-300 text-sm text-gray-600">
                                <li class="border-b border-dashed border-gray-300 py-2.5 hover:text-blue-600 transition"><a href="${root}nextgen/infant.html" class="block w-full">영아부</a></li>
                                <li class="border-b border-dashed border-gray-300 py-2.5 hover:text-blue-600 transition"><a href="${root}nextgen/kindergarten.html" class="block w-full">유치부</a></li>
                                <li class="border-b border-dashed border-gray-300 py-2.5 hover:text-blue-600 transition"><a href="${root}nextgen/children.html" class="block w-full">유년부</a></li>
                                <li class="border-b border-dashed border-gray-300 py-2.5 hover:text-blue-600 transition"><a href="${root}nextgen/elementary.html" class="block w-full">초등부</a></li>
                                <li class="border-b border-dashed border-gray-300 py-2.5 hover:text-blue-600 transition"><a href="${root}nextgen/awana.html" class="block w-full">어와나</a></li>
                                <li class="border-b border-dashed border-gray-300 py-2.5 hover:text-blue-600 transition"><a href="${root}nextgen/middle.html" class="block w-full">중등부</a></li>
                                <li class="border-b border-dashed border-gray-300 py-2.5 hover:text-blue-600 transition"><a href="${root}nextgen/high.html" class="block w-full">고등부</a></li>
                                <li class="border-b border-dashed border-gray-300 py-2.5 hover:text-blue-600 transition"><a href="${root}nextgen/youth.html" class="block w-full">청년사역위원회</a></li>
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
});

// 전역 함수: 상단 모바일 메뉴바 토글 (공통 적용)
window.toggleMobileMenu = function() {
    const menu = document.getElementById('global-mobile-menu');
    if (menu) {
        menu.classList.toggle('hidden');
        menu.classList.toggle('flex');
    }
};

// 전역 함수: 사이트맵 모달 토글 (공통 적용)
window.toggleGlobalSitemap = function() {
    const modal = document.getElementById('global-sitemap-modal');
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
