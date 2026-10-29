/* Phần dùng chung cho mọi trang của busanfirstdesign: danh sách menu + footer.
   Sửa menu/footer ở đây là tất cả các trang đổi theo. */
/* Menu: [tên, mục con, đường dẫn trang riêng (nếu có)] */
const MENU = [
  ['회사소개',[]],
  ['브랜딩 · 로고 제작',[]],
  ['인쇄 · 홍보물 제작',['카탈로그 · 카다로그','리플렛 · 리플릿','팜플렛 · 팜플릿','브로슈어 · 브로셔','포스터']],
  ['PPT · 제안서',[]],
  ['홈페이지 · 웹',[]],
  ['촬영 · 스튜디오',[]],
  ['마케팅 · 광고',[]],
  ['포트폴리오',[],'portfolio.html'],
  ['정부지원사업',[]],   // nội dung trang sẽ thêm sau
  ['블로그',[]]
];

(function(){
  const onHome = /(^|\/)(index\.html)?$/.test(location.pathname);
  // liên kết tới một phần trên trang chủ (#about…) thì ở trang khác phải đi qua index.html
  const link = h => !h || h === '#' ? '#' : (h[0] === '#' && !onHome ? 'index.html' + h : h);
  const el = document.getElementById('siteFooter');
  if (!el) return;
  el.innerHTML = `  <div class="wrap">
    <div class="ft-col ft-info">
      <p class="ft-logo">퍼스트<b>디자인</b><span>부산·경남지사</span></p>
      <p class="ft-co">퍼스트디자인 부산·경남지사</p>
      <address class="ft-addr">
        상호 : 퍼스트디자인 부산·경남지사(㈜퍼스트마케팅컴퍼니)<i></i>대표자 : 김우석<i></i>사업자 번호 : 884-88-01123<br>
        소재지 : 주소를 입력하세요<i></i>이메일 : <a href="mailto:work@firstmkt.co.kr">work@firstmkt.co.kr</a>
      </address>
      <p class="ft-copy"><a href="#" class="ft-privacy">개인정보처리방침</a>ⓒ FIRST DESIGN. ALL RIGHTS RESERVED</p>
    </div>
    <ul class="ft-col ft-menu">${MENU.map(([t,,href]) => `<li><a href="${link(href)}">${t}</a></li>`).join('')}</ul>
    <div class="ft-col ft-cs">
      <h5>전화 상담</h5>
      <a class="ft-tel" href="tel:1600-9487">1600-9487</a>
      <p class="ft-time">상담 가능 시간 : 평일 09:00 ~ 18:00 <span style="color:#999">(주말 · 공휴일 휴무)</span></p>
      <p class="ft-note">주말 및 공휴일에는 견적 문의를 남겨주세요.<br>영업일에 확인 후 순서대로 연락드리겠습니다.</p>
      <div class="ft-btns"><a href="${link('#contact')}">자주묻는질문</a><a href="${link('#ask')}">견적 문의</a></div>
    </div>
  </div>`;
})();
