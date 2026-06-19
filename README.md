# SOUL — 포트폴리오 + AIWORK 통합 사이트

**18년차 웹디자이너 쏘울(Soul)의 퍼스널 브랜드 사이트**
쇼핑몰 포트폴리오와 AI 컨설팅 비즈니스(AIWORK)를 하나의 내러티브로 통합한 정적 사이트입니다.

---

## 📁 파일 구조

```
soul-site/
├── index.html          # 홈 — 브랜드 소개 + 두 서비스 허브
├── about.html          # 소개 — 18년 여정 스토리
├── portfolio.html      # 포트폴리오 — Bento 그리드 쇼케이스
├── aiwork.html         # AI 컨설팅 — soul_v2 리파인 버전
├── journal.html        # 저널 — 인사이트/블로그
├── contact.html        # 연락 — 카카오톡/이메일
└── assets/
    ├── css/
    │   └── soul-system.css    # 공통 디자인 시스템 (색·타이포·컴포넌트)
    └── js/
        └── soul-common.js     # 공통 스크립트 (nav/scroll/reveal)
```

---

## 🎨 디자인 시스템

| 토큰 | 값 | 용도 |
|---|---|---|
| `--hero-bg` | `#120d08` | 다크 히어로 배경 |
| `--cream` | `#f5f0e8` | 메인 배경 |
| `--parchment` | `#ede6d8` | 서브 배경 |
| `--amber` | `#c8963e` | 포인트 컬러 |
| `--ink` | `#1a1613` | 본문 텍스트 |
| `--muted` | `#6b5d4f` | 보조 텍스트 |

- **Serif**: Cormorant Garamond (헤드라인, 키네틱 타이포)
- **Sans**: Noto Sans KR (본문, UI)

---

---

## 🔧 커스터마이징 가이드

### 색상 바꾸기
`assets/css/soul-system.css` 상단 `:root` 변수만 수정하면 전 페이지 일괄 적용.

### 새 포트폴리오 추가
`portfolio.html` 의 `.bento-grid` 안에 `<article class="bento-item">` 블록 복사해서 추가.

### 카카오톡 채팅 링크
전 페이지에서 `http://pf.kakao.com/_EjXzM/chat` 검색 → 본인 채널로 교체.

---

## 🛠️ 향후 확장 로드맵

| 단계 | 항목 | 난이도 |
|---|---|---|
| 1 | **이미지 최적화** — 포트폴리오 실제 이미지 넣기 (WebP 권장) | 쉬움 |
| 2 | **Google Analytics / Search Console** 연결 | 쉬움 |
| 3 | **저널 CMS화** — Notion API 또는 마크다운 빌드 | 중간 |
| 4 | **예약 시스템** — Calendly iframe 또는 직접 구축 | 중간 |
| 5 | **다국어(EN)** — 해외 1인 사업자 타깃 확장 | 중간 |
| 6 | **AI 챗봇 상담 봇** — Claude API로 사전 진단 자동화 | 고급 |

---

## 📌 기술 특징

- ✅ **Pure HTML/CSS/JS** — 빌드 도구 없음, 어디든 배포 가능
- ✅ **반응형** — 1000px 이하 모바일 메뉴 자동 전환
- ✅ **접근성** — 시멘틱 마크업, `aria-label`, 키보드 내비게이션
- ✅ **성능** — Google Fonts preconnect, 최소 JS, CSS 1개 파일
- ✅ **SEO** — `<meta description>`, 시멘틱 헤딩 구조

---

## 📞 문의

**SOUL (쏘울)**
- KakaoTalk: [pf.kakao.com/_EjXzM/chat](http://pf.kakao.com/_EjXzM/chat)
- 18년차 웹디자이너 · AI 인재개발원 운영 · 1인 사업자 AI 컨설팅

---

© 2026 soul. All rights reserved.
