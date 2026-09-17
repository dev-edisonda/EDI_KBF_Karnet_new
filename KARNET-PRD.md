# Product Requirements Document: KARNET

**UX/UI & Accessibility Specification for a cultural events discovery platform for Kraków, Poland**

Version 2.0 | Draft

---

## 1. Overview

KARNET is a website for discovering cultural events in Kraków — concerts, exhibitions, theatre, festivals, workshops, and more. It combines editorial content (articles and picks written by a real, named team) with structured event and venue information, and gives people with disabilities clear, reliable information about whether they can attend a given event.

This document covers **UX/UI direction and accessibility support only**. It intentionally excludes technology choices, data modeling, and infrastructure — those are handled separately. The one exception: map data comes from **OpenStreetMap**, since that determines what a map looks and feels like to the person using it (attribution, tile style, level of detail), which is a UX concern.

## 2. Goals

- Make it fast and easy to find relevant events in Kraków, by browsing, searching, filtering, or exploring a map.
- Present rich, clear event detail views that connect an event to its place, category, tickets, and related articles.
- Support both Polish and English audiences equally (not a translated afterthought).
- Let anyone save events they care about, with or without an account, and get them into their own calendar.
- Be genuinely usable by people with disabilities — both the site itself (WCAG 2.1 AA) and the event information (accessibility of the event/venue).
- Feel like it's made by people, not a database dump: named editors curate what's worth seeing, write about it, and put their name on it.
- Work as a genuinely good mobile experience, not a shrunk-down desktop site — most visitors will be checking "what's on tonight" from their phone.

## 3. Non-goals (out of scope for v1)

- Ticket sales/checkout — KARNET links out to ticket providers, it does not process payments.
- Native mobile apps.
- Organizer/public event submission workflow.
- User-generated content (reviews, comments).
- Multi-city expansion.

## 4. Personas (brief)

- **Local resident** — browses regularly, wants filters and favourites, checks accessibility for a friend or family member.
- **Tourist** — arrives via search or a travel article, wants a quick "what's on" view, likely English-language, map-oriented, mostly on a phone.
- **Person with a disability (or planning for one)** — needs to know *before* they go whether a venue/event works for their access needs.
- **Content author / editor** — writes articles, picks what's worth featuring.

## 5. Editorial & Human Voice

This is a product principle as much as a feature, and it should shape the UI throughout:

- Every event or place shown as a highlight is a **human decision**, not an algorithmic sort — someone on the team chose it and, ideally, can say why in a line or two.
- **Authors are visible people**, not "admin" — name, photo, and role (e.g. "editor-in-chief", "editorial team") appear next to what they write and what they pick. The Team page exists specifically to make this team visible and credible.
- Editorial judgment should be visible in at least three places:
  1. **Homepage hero/featured carousel** — a small, hand-picked rotating set of events.
  2. **"Recommended by the editors" rail** — a larger curated list, each optionally carrying a short editor's note explaining the pick.
  3. **Articles** — previews, interviews, and reviews that give context a raw listing can't.
- Language throughout the site should reinforce this: "chosen by our editors," not "trending" or "popular" — the framing is curatorial, not algorithmic.

## 6. Information Architecture

Primary navigation: Home, Events, Places, Articles, Magazine, Favourites, Team.

Every page exists in Polish and English, with a visible language switch, and every page has a clear, human-readable URL structure with matching content in both languages (not a machine-translated fallback dressed up as English).

## 7. UX/UI Instructions

### 7.1 Visual design system
- Light colour scheme with a pink/maroon undertone — modern and sleek, not saccharine. A dark hero/featured banner against an otherwise light, airy page is a strong contrast anchor.
- A consistent **card pattern** used everywhere an event appears (homepage rails, list view, favourites, search results): image, colour-coded category tag, title, place, date, price or "free entry," accessibility badges, and a one-tap save action.
- **Category colour-coding** stays consistent everywhere it appears — list cards, map pins, filter chips — so a person learns the colour system once and it holds everywhere.
- All colour choices, especially the pink palette against white/light backgrounds, must be checked for contrast — not assumed — since this feeds directly into the accessibility requirements in Section 8.
- Accessibility badges (see 8.2) are their own small, consistent visual language: same icon, same label, same colour treatment wherever they appear, so a person scanning results can recognize them instantly.

### 7.2 Homepage structure
Top to bottom: a small rotating **featured/hero carousel** (editorial picks); a **search bar with quick category tiles** directly beneath it; a **quick date-chip row** ("Today," "Tomorrow," "This weekend," "Next week") for one-tap date filtering; a **"Recommended by the editors" rail**; one or more **category rails**; a **"Free entry" rail**; an **articles/news section** with type-tagged teasers (news, interview, preview, review); a **current magazine issue teaser** (7.10); a **places category grid** (tappable tiles by place category); a **team/"made by us" teaser** linking to the Team page; and a **newsletter signup**. Footer includes primary navigation, contact details, social links, and the **accessibility statement page** (8.3).

### 7.3 Browse, filter, search — list and map
- **List view**: paginated or infinite-scroll event cards.
- **Map view**: pins on an OpenStreetMap base map, clustered by location and colour-coded by category; tapping a pin surfaces a mini event card without leaving the map. On mobile, the map should default to centering on the person's current location (with a graceful fallback to the city centre if location access isn't granted), since a phone is the device most likely to be used at or near a venue.
- **Quick date filters** as one-tap chips, in addition to a full date-range picker.
- **Combinable filters**: date/date range, event category, place category, neighbourhood/area, accessibility needs, free vs. paid.
- **Full-text search** across event and place titles/descriptions, in both languages, with helpful placeholder examples (e.g. "Type a title, place, or organizer").
- Filter and search state should be reflected in the page's URL so results are shareable and bookmarkable.

### 7.4 Event details page
Should clearly present: dates (including multi-day handling), category, place with an embedded mini-map, ticket link and price information (or "Free entry"), related articles, a clearly labeled accessibility panel (8.2), a share action, a save-to-favourites action, and an "Add to calendar" action.

### 7.5 Category pages
Dedicated landing pages per event category and per place category, listing everything tagged with that category — a normal, browsable page rather than just a filter state.

### 7.6 Favourites
- Add or remove a favourite with a single tap from any card or detail view.
- A dedicated Favourites page, using the same list UI as browsing.
- Favourites should work without requiring an account, with an optional, non-blocking prompt to create an account so favourites aren't lost if the person switches devices or clears their browser data.

### 7.7 Sharing & calendar export
- Sharing should use the device's native share sheet where available, with a copy-link and social-share fallback.
- "Add to calendar" should let a person add a single event, or all of their current favourites at once, to their own personal calendar app.

### 7.8 Articles & authors
- An article listing page, filterable by type (news, preview, interview, review), and individual article pages that clearly link back to the event(s) they're about.
- Every article is attributed to a named author with a link to their author profile.

### 7.9 Team page
Lists every author with photo, name, role, a short bio, and a link to what they've written — framed as "Karnet is made by people," not a generic staff directory.

### 7.10 Monthly magazine (current issue + archive)
- A **current issue** teaser on the homepage: cover image, issue theme, short summary, and a clear "Read this issue" action.
- A dedicated page per issue, showing the cover, summary, and the issue itself (embedded viewer or a "read online" link).
- An **archive page** listing every past issue, newest first, each linking to its own page.

### 7.11 Mobile-first requirements
Designed mobile-first, not adapted afterward:
- **Bottom tab navigation** on mobile (Home / Events / Places / Favourites / more) rather than a squeezed-down top nav — within thumb's reach.
- **Horizontally swipeable rails** for featured events, editorial picks, and category rows.
- **Filters as a bottom sheet** that expands from the bottom of the screen, keeping results visible underneath rather than replacing them.
- **A sticky, collapsible search/filter bar** while scrolling a list, so search stays one tap away.
- **Map view defaults to "near me"** using device location, as described in 7.3.
- **Native share sheet** for the share action rather than a custom in-page share modal.
- **Large, tap-friendly badges and chips** for accessibility tags and category labels — sized for a finger, not just legible for an eye.

## 8. Accessibility Support

### 8.1 Site accessibility (WCAG 2.1 Level AA)
The site itself must conform to WCAG 2.1 AA throughout:
- Full keyboard navigation with visible focus states on every interactive element.
- Semantic HTML and correct ARIA usage wherever custom components are used (filter chips, bottom sheets, carousels).
- Sufficient colour contrast everywhere — this needs deliberate checking given the light/pink palette in 7.1, not an assumption that "light and pretty" is automatically legible.
- Meaningful alt text on every image, written by whoever adds the content — not left blank or auto-generated from a filename.
- Text that can be resized by the person viewing the page without breaking the layout.
- Key flows — search, filter, save a favourite, export to calendar, switch language — tested with a screen reader, not just visually reviewed.

This is distinct from, and in addition to, the *event accessibility information* described next — one is about the website being usable, the other is about the physical event/venue being attendable.

### 8.2 Accessibility information for events and places
Every event and place should show clear, honest accessibility information, covering at minimum:
- **Wheelchair access**
- **Induction loop** availability (for hearing aid users)
- **Captions/subtitles** availability
- **Audio description** availability
- **A quiet/low-stimulation zone or sensory-friendly designation**, where relevant
- Accessible toilet and accessible parking, where relevant

Display rules:
- A badge should appear only for what's actually confirmed — the *absence* of a badge should mean "not yet confirmed," never be read as "definitely not accessible."
- People should be able to **filter events by any combination of these accessibility needs**, from both the list view and the map view.
- An event's accessibility information should be presented as clearly resolved, complete information at the point the person needs it (on the card and on the detail page) — not scattered or requiring extra taps to piece together.

### 8.3 Accessibility statement page
A published, easy-to-find accessibility statement page, linked from the footer, stating the site's conformance target and how a person can report an accessibility problem they encounter.

## 9. Open Questions

1. **Multi-date events** — for a festival running many nights or a touring show at multiple venues, does the UX show one page per festival with multiple dates inside it, or a separate page per date? This affects the browse/filter experience and how a person navigates back and forth between dates.
2. **Accessibility data sourcing** — who confirms these attributes for each venue/event (self-reported, verified by the editorial team, or crowd-sourced later)? Affects how confidently the UI can state a badge versus needing to keep an "unknown" state visible and honest.
3. **Magazine reading experience** — a simple embedded document viewer versus a fully custom "read online" reading experience is a meaningfully different UX investment, particularly on mobile; worth deciding deliberately rather than defaulting.
4. **Organizer event submission** — out of scope for v1 per Section 3, but if this is wanted later, the UX for submitting, reviewing, and publishing an organizer-submitted event should be scoped as its own flow rather than bolted onto the editorial one.
