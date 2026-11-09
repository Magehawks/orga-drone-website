# Orga Drone — cinematic product-first

Final visual approval package. Design refinement only. No production implementation is authorized by this document.

## Composition

Desktop: [1440 × 3450](1440.png). Tablet: [834 × 3985](834.png). Mobile: [390 × 3132](390.png). Open PNGs at native width for typography and spacing review. They are static visual compositions, not working website screens. Original images are available in ../../assets/.

The banner establishes the brand without extra overlays or repeated feature labels. The exact headline “Your flights. Your footage. Your stories.” sits below it. A real Studio screenshot shares the headline row on desktop, starting approximately 564px from the page top. The walkthrough retains precisely three capabilities: Organize, Explore and Create. The Studio hero preview is a product introduction, not a fourth capability.

Two prominent orange purchase actions: hero and closing ownership section. The label “Get Orga Drone for Windows” leads to the verified product URL, not an invented direct installer URL. No price is shown. Secondary “Explore the app” scrolls to the walkthrough. GitHub stays a quiet text link.

## Responsive layout

- Desktop, 1100px and above: maximum content width 1248px, centered; 96px gutters at 1440px. Header 72px plus 24px space before banner. Banner spans content width and retains 2048:682 proportions. Hero uses 510px text column, 60px gap and 678px screenshot column at the reference width. Workflow rows use 350px text, 72px gap and 826px screenshot. At narrower desktop widths make tracks fluid and switch to the stacked layout before copy or controls collide.
- Tablet, 600–1099px: 48px gutters; content 738px at 834px. Keep desktop text navigation where it fits. Stack hero text, controls and Studio preview. Stack feature text above each full-width screenshot. Buttons are intrinsic width and vertically arranged. The banner remains complete at approximately 738 × 246px. Headline 60px. Feature headings 40px; body 18px. Limit long copy to about 620px. This deliberate stacking prioritizes readable product imagery.
- Mobile, below 600px: 20px gutters; content 350px at 390px. Use brand and Menu button, 48px minimum target. Banner approximately 350 × 117px, with no cropping or text overlays. Headline is three lines at 40px. Stack primary and secondary 52px buttons at full content width, followed by subtle GitHub link. Place Studio preview below the copy. Feature chapters stack vertically; headings 30px and body 16px. Screenshots fit full width with an accessible full-size action directly below. The embedded screenshot UI cannot be read in detail at 350px; full-resolution access is essential rather than claiming the small preview is sufficient.
- Between references: use fluid gutters and type within these limits. At 320px, keep 20px gutters, allow headline/copy wrapping, and preserve all image proportions. Do not shrink controls or body copy to avoid wrapping. At 200% browser zoom adopt the narrower layout.

## Typography

Segoe UI with system-ui and sans-serif fallbacks. The supplied compositions use the actual Windows Segoe UI regular and bold fonts; no remote font dependency is needed. Use weights 400 for body and secondary labels, 700 for headings and controls.

- Desktop hero: 56px / approximately 78px line height, three explicit lines, weight 700.
- Tablet hero: 60px / 84px; mobile: 40px / 56px.
- Workflow section title: 32px / 45px desktop; 21px / 29px mobile.
- Feature headings: 37px / 52px desktop; 40px / 56px tablet; 30px / 42px mobile.
- Closing heading: 52px / 73px desktop, 36px / 50px mobile.
- Body: 19–20px / 27–28px desktop hero and closing; 18px / 25px desktop features; 16–17px / 22–24px mobile.
- Navigation and button labels: 15px, buttons bold. Chapter labels: 12px bold uppercase. Supporting image actions: 14px. Compatibility note: 13px / 18px.

## Color and surfaces

- Page: #141619.
- Default text: #F4F2EE. Secondary: #B9BDC3.
- Primary action and chapter accents: #FF7900. Filled action text: #141619.
- Surface #202327: secondary hover/menu/lightbox controls. Elevated surface #2A2D31: open navigation or image-viewer control bar.
- Structural divider/secondary button outline: #373B40. These subtle dividers are decorative; they must not be the only indication of an interactive control.
- No extra photographic backgrounds, decorative gradients, invented illustrations, cards around each section or shadows over product screenshots.

## Spacing and components

Base spacing scale: 4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 56, 64, 72 and 96px. Maintain the composed grouping rather than forcing every gap to the same size.

Buttons: 52px high, 26px radius. Desktop primary width 280px and secondary 196px; tablet primary 280px and secondary 210px; mobile both full width. Label centered. Two buttons share a row only when the labels and a minimum 16px gap fit. Primary hover darkens slightly while retaining at least 4.5:1 label contrast; pressed adds a subtle dark state layer. Secondary hover uses #202327. No animation is necessary.

Text links: underlined on hover and on keyboard focus. Source and original-image actions get at least a 48px-high clickable area despite their smaller visual type. Do not use color alone to identify links inside body text.

Images: flat, no perspective transforms, no crop, no UI retouching, width 100% with height auto. Reserve intrinsic aspect ratio before load. Banner loads eagerly; below-fold walkthrough images load lazily. Keep the first Studio preview available early. Do not recreate app UI as website controls.

## Exact asset mapping

- Hero banner: assets/orga-drone-cinematic-banner.png, 2048 × 682. The unchanged original banner is included in this draft PR.
- Hero Studio preview and Create chapter: assets/studio.webp, 2048 × 949.
- Organize chapter: assets/library.webp, 2048 × 959.
- Explore chapter: assets/map.webp, 2048 × 958.
- assets/home.webp, 2048 × 954: intentionally omitted from the final page to keep the three-part story focused; available in the review index as supporting reference.
- Existing favicon.svg remains the favicon. Header uses typographic ORGA DRONE identity; do not trace or regenerate the banner logo.

The review preparation verified SHA-256 hashes of the original assets. Resizing was applied only when compositing preview images. The original asset files remain unchanged. Use the repository assets for full-resolution viewing, distinct from the scaled composition previews.

## Link and interaction specification

- Brand → top of page.
- The app → first Studio preview/product introduction.
- Workflow and Explore the app → Organize section.
- Get Orga Drone for Windows → https://magehawks.itch.io/orga-drone. Product page purchase flow, no fake direct download or unverified pricing.
- GitHub and source links → https://github.com/Magehawks/orga-drone.
- Every screenshot and View original image action → original image, with native image URL fallback. Prefer opening a full-viewport accessible image dialog offering zoom and an explicit original-file link. Never upscale or repaint the underlying file.
- Mobile Menu is a button opening a compact navigation panel with the same destinations, not extra download actions. aria-expanded and aria-controls reflect state. Escape closes; return focus to Menu.
- Image dialog: named dialog, focus moved inside, focus contained, visible Close action, Escape closes, focus returned to trigger. Zoom controls have explicit labels and keyboard operation. Browser-native image opening remains available.
- Use standard same-tab links by default. If an external link opens a new tab, communicate that behavior in its accessible name and use appropriate rel attributes.

## Accessibility acceptance criteria for implementation

These are specifications, not claims that the static PNGs have working accessibility behavior.

- One h1 containing the exact original headline; h2 for major sections, h3 only where structurally necessary. Landmark header, named nav, main and footer. Skip-to-content link visible on focus.
- Text contrast: at least WCAG AA 4.5:1 for normal text and 3:1 for large text. Use dark labels on orange buttons. Check hover/pressed states too. Keep focus indicators at least 3:1 against adjacent colors.
- Focus: visible 3px orange or warm-white outline with 4px offset; use warm-white where an orange control would hide the orange ring. Never remove native focus without a replacement.
- Minimum 48 × 48px touch and keyboard action targets, including Menu and the full-size screenshot links. Reading and tab orders follow the visual order.
- Banner alternative text: “Orga Drone — Organize. Explore. Create. Drone above a river valley at sunset.” Treat embedded decorative feature icons as part of this one image, not separate controls.
- Studio alternative text: “Orga Drone Studio with photo preview, image adjustments and story timeline.” Library: “Orga Drone media library with filters and photo and video thumbnails.” Map: “Orga Drone flight map showing GPS-tagged media locations and a media list.”
- No autoplay, parallax, moving background or required animation. Under prefers-reduced-motion use instant anchor scrolling and suppress optional transitions. Any optional standard transition: 120–160ms, never delays interaction.
- Test reflow at 320px and browser zoom at 200%; verify no horizontal page scroll and no clipped labels. Full-size screenshot viewer may pan its image without making the page itself overflow.

## Messaging and improvement

Copy checked against the local application README at the application repository README on 2026-11-09. Public source: https://github.com/Magehawks/orga-drone. The itch.io page was not readable during source checks, so price is deliberately absent. Compatibility is qualified; maps may require internet; source transparency and non-destructive local ownership reflect the README.

Compared with Concept A, real software appears earlier and the banner no longer carries the entire conversion argument. Compared with Concept B, the original cinematic artwork and original headline restore a stronger brand identity. Unlike the generated exploration images, all preview artwork and screenshot content now come directly from unchanged source files. The result uses quieter navigation, only two prominent purchase CTAs, three consistent workflow chapters and a separate ownership close.

Await explicit final design approval before touching production files, branches, commits, PRs or deployment.

