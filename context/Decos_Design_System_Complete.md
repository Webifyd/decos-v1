# DECOS Design System
## Complete Brand & Digital Standards Guide v2.0

---

# Table of Contents

1. [System Overview](#system-overview)
2. [Brand Foundations](#brand-foundations)
3. [Logo System](#logo-system)
4. [Color System](#color-system)
5. [Typography System](#typography-system)
6. [Spacing & Grid System](#spacing--grid-system)
7. [Iconography & Visual Language](#iconography--visual-language)
8. [Component Library](#component-library)
9. [Photography & Imagery](#photography--imagery)
10. [Motion & Animation](#motion--animation)
11. [Voice & Tone](#voice--tone)
12. [Accessibility Standards](#accessibility-standards)
13. [Platform Applications](#platform-applications)
14. [Implementation Guidelines](#implementation-guidelines)
15. [Quality Assurance](#quality-assurance)

---

## System Overview

### Purpose
This Design System serves as the single source of truth for all Decos brand expressions across digital and physical touchpoints. It ensures consistency, accessibility, and scalability while maintaining the professional, innovative character of the Decos brand.

### Design Principles

#### 1. **Industrial Precision**
- Clean, structured layouts reflecting engineering excellence
- Systematic organization mirroring technical documentation
- Precise measurements and consistent spacing

#### 2. **Accessible Innovation**
- WCAG 3.1 Level AA compliance minimum
- Progressive enhancement for all users
- Clear, understandable interfaces

#### 3. **Sustainable Scalability**
- Modular components for efficient development
- Performance-optimized assets
- Future-proof design patterns

#### 4. **Professional Trust**
- Consistent brand expression
- Reliable user experiences
- Clear communication hierarchy

#### 5. **Solution-Focused Clarity**
- Purpose-driven design decisions
- Intuitive navigation patterns
- Result-oriented layouts

---

## Brand Foundations

### Brand Architecture

#### Core Brand Values
```
Innovation    → Leading-edge solutions
Reliability   → Consistent quality
Sustainability → Environmental responsibility
Excellence    → Uncompromising standards
Partnership   → Collaborative approach
```

### Brand Personality Matrix

| Attribute | Expression | Implementation |
|-----------|------------|----------------|
| **Professional** | Expert, Competent | Clean layouts, technical precision |
| **Trustworthy** | Reliable, Dependable | Consistent patterns, clear messaging |
| **Forward-thinking** | Innovative, Progressive | Modern design, future-ready tech |
| **Solution-oriented** | Practical, Efficient | Clear CTAs, logical flow |
| **Accessible** | Clear, Approachable | Plain language, intuitive UI |

### Brand Positioning
"Connecting Solutions, Building Tomorrow" - Decos delivers innovative PVC pipe solutions that connect communities and build sustainable infrastructure.

---

## Logo System

### Logo Construction

#### Primary Logo Specifications
```
Minimum Size:
- Digital: 120px width
- Print: 1.5" width
- Mobile: 80px width

Clear Space:
- Minimum clearance = Height of 'D' in Decos
- Applied to all four sides
- No elements within protected area
```

#### Logo Variations

**1. Primary Mark**
- Full color (Decos Gold + Charcoal)
- Use on light backgrounds (#F5F5F5 - #FFFFFF)
- Preferred for all primary applications

**2. Reversed Mark**
- White on dark backgrounds
- Use when background luminosity < 50%
- Maintain contrast ratio ≥ 4.5:1

**3. Monochrome**
- Single color applications
- Decos Gold (#FFD700) or Charcoal (#1C1C1C)
- For limited color reproduction

**4. Symbol Only**
- Orbital/spiral mark without wordmark
- Minimum size: 24px digital, 0.5" print
- App icons, social avatars, space-constrained uses

### Logo Usage Rules

#### Correct Usage ✓
- Always use approved logo files
- Maintain aspect ratio
- Ensure adequate contrast
- Use appropriate color version
- Follow minimum size guidelines

#### Prohibited Usage ✗
- Do not stretch or distort
- Do not rotate or skew
- Do not add effects (shadows, outlines)
- Do not change colors
- Do not place on complex backgrounds
- Do not recreate or modify

---

## Color System

### Color Architecture

#### Primary Palette

**Decos Gold** `#FFD700`
```css
RGB: 255, 215, 0
HSL: 51°, 100%, 50%
CMYK: 0, 16, 100, 0
Pantone: 116 C
Usage: Primary brand, CTAs, key messaging
WCAG Contrast: 1.94:1 (Use with dark text only)
```

**Industrial Red** `#DC143C`
```css
RGB: 220, 20, 60
HSL: 348°, 83%, 47%
CMYK: 0, 91, 73, 14
Pantone: 186 C
Usage: Alerts, emphasis, secondary CTAs
WCAG Contrast: 4.45:1 (on white)
```

#### Secondary Palette

**Technical Blue** `#4169E1`
```css
RGB: 65, 105, 225
HSL: 225°, 73%, 57%
CMYK: 71, 53, 0, 12
Pantone: 2728 C
Usage: Links, data, technical content
WCAG Contrast: 3.95:1 (on white)
```

**Solution Green** `#32CD32`
```css
RGB: 50, 205, 50
HSL: 120°, 61%, 50%
CMYK: 76, 0, 76, 20
Pantone: 361 C
Usage: Success, sustainability, confirmation
WCAG Contrast: 2.23:1 (Requires dark text)
```

#### Neutral Palette

```css
--charcoal-black: #1C1C1C;  /* Primary text */
--industrial-slate: #2F4F4F; /* Dark backgrounds */
--steel-gray: #708090;       /* Secondary text */
--light-gray: #B8BCC4;       /* Borders, dividers */
--soft-gray: #E5E7EB;        /* Light backgrounds */
--clean-white: #F5F5F5;      /* Primary background */
--pure-white: #FFFFFF;       /* Cards, modals */
```

#### Functional Colors

```css
--warning: #FF8C00;    /* Warning Orange */
--error: #DC143C;      /* Industrial Red */
--success: #32CD32;    /* Solution Green */
--info: #00CED1;       /* Info Cyan */
--focus: #4169E1;      /* Technical Blue */
```

### Color Ratios & Usage

#### Primary Applications (60-30-10 Rule)
- **60%**: Clean White/Soft Gray (Background)
- **30%**: Decos Gold/Industrial Slate (Brand elements)
- **10%**: Technical Blue/Industrial Red (Accents)

#### Accessibility Combinations

| Foreground | Background | Ratio | WCAG Level |
|------------|------------|-------|------------|
| Charcoal | Clean White | 16.4:1 | AAA |
| White | Industrial Slate | 8.7:1 | AAA |
| White | Industrial Red | 9.2:1 | AAA |
| White | Technical Blue | 4.9:1 | AA |
| Charcoal | Decos Gold | 8.5:1 | AAA |

---

## Typography System

### Type Scale

#### Base Configuration
```css
:root {
  --base-font-size: 16px;
  --type-scale: 1.250; /* Major Third */
  --line-height-tight: 1.2;
  --line-height-base: 1.6;
  --line-height-loose: 1.8;
}
```

#### Font Stack

**Primary: System Sans-Serif**
```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", 
             "Helvetica Neue", Arial, sans-serif;
```

**Secondary: System Serif**
```css
font-family: Georgia, Cambria, "Times New Roman", serif;
```

**Monospace: Code**
```css
font-family: "SF Mono", Monaco, "Cascadia Code", monospace;
```

### Typography Scale

| Level | Size | Line Height | Weight | Usage |
|-------|------|-------------|--------|-------|
| **Display 1** | 3.815rem (61px) | 1.2 | 900 | Hero headlines |
| **Display 2** | 3.052rem (49px) | 1.2 | 800 | Page titles |
| **H1** | 2.441rem (39px) | 1.3 | 700 | Section headers |
| **H2** | 1.953rem (31px) | 1.4 | 700 | Subsections |
| **H3** | 1.563rem (25px) | 1.5 | 600 | Card titles |
| **H4** | 1.25rem (20px) | 1.5 | 600 | Widget headers |
| **Body Large** | 1.125rem (18px) | 1.7 | 400 | Lead text |
| **Body** | 1rem (16px) | 1.6 | 400 | Default text |
| **Body Small** | 0.875rem (14px) | 1.5 | 400 | Secondary text |
| **Caption** | 0.75rem (12px) | 1.4 | 400 | Labels, hints |

### Typography Guidelines

#### Responsive Typography
```css
/* Fluid Typography Formula */
.heading-1 {
  font-size: clamp(1.953rem, 4vw, 2.441rem);
}

.body-text {
  font-size: clamp(0.875rem, 2vw, 1rem);
}
```

#### Text Accessibility
- Minimum font size: 14px (0.875rem)
- Maximum line length: 75 characters
- Paragraph spacing: 1.5x font size
- Link underlines: Always visible or on focus
- Text zoom: Support up to 200% without horizontal scroll

---

## Spacing & Grid System

### Spacing Scale

#### Base Unit System (8px)
```css
--space-0: 0;
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-5: 1.5rem;   /* 24px */
--space-6: 2rem;     /* 32px */
--space-7: 3rem;     /* 48px */
--space-8: 4rem;     /* 64px */
--space-9: 6rem;     /* 96px */
--space-10: 8rem;    /* 128px */
```

### Grid System

#### Container Widths
```css
.container-xs { max-width: 480px; }
.container-sm { max-width: 640px; }
.container-md { max-width: 768px; }
.container-lg { max-width: 1024px; }
.container-xl { max-width: 1280px; }
.container-2xl { max-width: 1536px; }
```

#### Grid Configuration
```css
.grid {
  display: grid;
  gap: var(--space-4);
  grid-template-columns: repeat(12, 1fr);
}

/* Responsive Breakpoints */
@media (min-width: 640px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1280px) { /* Wide */ }
```

#### Layout Patterns

**1. Content Grid**
- Desktop: 12 columns, 32px gutter
- Tablet: 8 columns, 24px gutter
- Mobile: 4 columns, 16px gutter

**2. Card Grid**
```css
.card-grid {
  display: grid;
  gap: var(--space-5);
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}
```

---

## Iconography & Visual Language

### Icon System

#### Icon Specifications
```
Sizes: 16px, 20px, 24px, 32px, 48px, 64px
Stroke Weight: 2px (consistent across sizes)
Corner Radius: 2px
Style: Outlined (primary), Filled (selected state)
Grid: 24x24 base grid with 2px padding
```

#### Icon Categories

**1. Navigation**
- Menu, Home, Search, Filter, Sort
- Arrow (up, down, left, right)
- Close, Back, Forward

**2. Infrastructure**
- Pipe, Valve, Connection, Flow
- Pressure, Temperature, Volume
- System, Network, Grid

**3. Actions**
- Download, Upload, Share, Print
- Edit, Delete, Add, Remove
- Settings, Configure, Tools

**4. Communication**
- Phone, Email, Chat, Message
- Location, Map, Direction
- Calendar, Time, Schedule

**5. Status**
- Success, Warning, Error, Info
- Complete, Pending, In-progress
- Online, Offline, Maintenance

### Visual Elements

#### Connecting Lines Pattern
```css
.flow-line {
  stroke: var(--decos-gold);
  stroke-width: 2px;
  stroke-dasharray: 8, 4;
  animation: flow 2s linear infinite;
}
```

#### Technical Patterns
- Grid overlays: 10% opacity Steel Gray
- Pipe cross-sections: SVG patterns
- Flow indicators: Animated arrows
- Connection points: Circular nodes

---

## Component Library

### Core Components

#### 1. Buttons

**Primary Button**
```css
.btn-primary {
  background: var(--decos-gold);
  color: var(--charcoal-black);
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 600;
  min-height: 44px; /* WCAG touch target */
}

.btn-primary:hover {
  background: #F4C700;
  transform: translateY(-1px);
}

.btn-primary:focus-visible {
  outline: 3px solid var(--technical-blue);
  outline-offset: 2px;
}
```

**Button Variants**
- Secondary: Industrial Red background
- Tertiary: Outlined, transparent
- Ghost: Text only, no background
- Icon: Square, icon-only buttons

#### 2. Form Elements

**Input Fields**
```css
.input {
  border: 2px solid var(--light-gray);
  padding: 10px 16px;
  border-radius: 4px;
  min-height: 44px;
  font-size: 16px; /* Prevent zoom on mobile */
}

.input:focus {
  border-color: var(--technical-blue);
  outline: 3px solid rgba(65, 105, 225, 0.2);
}

.input[aria-invalid="true"] {
  border-color: var(--error);
}
```

**Field States**
- Default: Light gray border
- Focus: Technical Blue border + glow
- Error: Industrial Red border
- Success: Solution Green border
- Disabled: 50% opacity

#### 3. Cards

**Standard Card**
```css
.card {
  background: var(--pure-white);
  border-radius: 8px;
  padding: var(--space-5);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
```

#### 4. Navigation

**Primary Navigation**
```css
.nav-primary {
  background: var(--industrial-slate);
  padding: var(--space-4);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-link {
  color: var(--clean-white);
  padding: var(--space-2) var(--space-4);
  text-decoration: none;
  position: relative;
}

.nav-link[aria-current="page"]::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--decos-gold);
}
```

#### 5. Modals & Overlays

**Modal Structure**
```html
<div role="dialog" aria-modal="true" aria-labelledby="modal-title">
  <div class="modal-backdrop"></div>
  <div class="modal-content">
    <h2 id="modal-title">Modal Title</h2>
    <button aria-label="Close modal">×</button>
    <!-- Content -->
  </div>
</div>
```

#### 6. Tables

**Data Table**
```css
.table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
}

.table th {
  background: var(--soft-gray);
  font-weight: 600;
  text-align: left;
  padding: var(--space-3);
  border-bottom: 2px solid var(--decos-gold);
}

.table td {
  padding: var(--space-3);
  border-bottom: 1px solid var(--light-gray);
}
```

---

## Photography & Imagery

### Photography Guidelines

#### Style Direction
- **Lighting**: Bright, clean, professional
- **Composition**: Rule of thirds, clear focal points
- **Color**: Enhanced blues and golds
- **Focus**: Sharp on key elements, subtle depth
- **Perspective**: Eye-level or slightly elevated

#### Content Categories

**1. Infrastructure**
- Installation sites
- Pipe systems in use
- Technical applications
- Scale and scope

**2. Process**
- Manufacturing excellence
- Quality control
- Installation procedures
- Testing protocols

**3. People**
- Professional teams
- Safety equipment
- Collaborative work
- Customer interactions

**4. Products**
- Hero product shots
- Technical details
- Application contexts
- Comparison displays

### Image Specifications

#### Responsive Images
```html
<picture>
  <source media="(min-width: 1024px)" 
          srcset="image-desktop.webp 1x, image-desktop@2x.webp 2x">
  <source media="(min-width: 640px)" 
          srcset="image-tablet.webp 1x, image-tablet@2x.webp 2x">
  <img src="image-mobile.webp" 
       srcset="image-mobile@2x.webp 2x"
       alt="Descriptive alt text"
       loading="lazy">
</picture>
```

#### Image Optimization
- Format: WebP with JPEG fallback
- Compression: 85% quality
- Lazy loading: Below the fold
- Alt text: Always required
- Aspect ratios: 16:9, 4:3, 1:1, 9:16

---

## Motion & Animation

### Animation Principles

#### Timing Functions
```css
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--spring: cubic-bezier(0.5, 1.5, 0.5, 1);
```

#### Duration Scale
```css
--duration-instant: 100ms;
--duration-fast: 200ms;
--duration-normal: 300ms;
--duration-slow: 500ms;
--duration-slower: 1000ms;
```

### Animation Patterns

#### Micro-interactions
```css
/* Hover States */
.interactive:hover {
  transform: translateY(-2px);
  transition: transform var(--duration-fast) var(--ease-out);
}

/* Focus States */
.focusable:focus-visible {
  animation: focus-pulse var(--duration-normal) var(--ease-in-out);
}

@keyframes focus-pulse {
  0%, 100% { outline-offset: 2px; }
  50% { outline-offset: 4px; }
}
```

#### Page Transitions
```css
/* Fade In */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Slide In */
@keyframes slideIn {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}
```

### Accessibility Considerations
```css
/* Respect motion preferences */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Voice & Tone

### Content Guidelines

#### Voice Characteristics

**Professional**
- Use industry-standard terminology
- Provide specific, accurate information
- Maintain formal tone in documentation
- Demonstrate expertise through precision

**Approachable**
- Explain complex concepts clearly
- Use active voice
- Break down technical information
- Provide helpful context

**Confident**
- Make definitive statements
- Highlight proven results
- Express leadership position
- Show conviction in solutions

**Solution-Focused**
- Address specific challenges
- Provide actionable information
- Emphasize outcomes and benefits
- Offer clear next steps

### Writing Patterns

#### Headlines
- **Format**: Sentence case
- **Length**: 60 characters max
- **Style**: Direct, benefit-focused
- **Example**: "Connect your infrastructure with proven solutions"

#### Body Copy
- **Paragraphs**: 3-4 sentences max
- **Sentences**: 20 words average
- **Reading level**: 8th-9th grade
- **Structure**: Problem → Solution → Benefit

#### CTAs
- **Primary**: Action verb + benefit
  - "Get Your Quote"
  - "Start Your Project"
- **Secondary**: Simple action
  - "Learn More"
  - "Contact Us"

#### Microcopy
- **Error messages**: Problem + Solution
  - "Email required. Please enter your email address."
- **Success messages**: Confirmation + Next step
  - "Request submitted. We'll contact you within 24 hours."
- **Helper text**: Context + Instruction
  - "Project size helps us provide accurate pricing."

---

## Accessibility Standards

### WCAG 3.1 Compliance

#### Level AA Requirements

**1. Perceivable**
- Color contrast: 4.5:1 minimum (text), 3:1 (UI)
- Images: Alt text for all informative images
- Video: Captions and transcripts
- Audio: Transcripts provided

**2. Operable**
- Keyboard: All functionality keyboard accessible
- Touch targets: Minimum 44×44px
- Timing: User control over time limits
- Navigation: Skip links, consistent navigation

**3. Understandable**
- Language: Simple, clear language
- Errors: Clear identification and correction
- Help: Context-sensitive assistance
- Consistency: Predictable functionality

**4. Robust**
- Semantic HTML: Proper element usage
- ARIA: Appropriate labels and roles
- Compatibility: Cross-browser support
- Progressive enhancement: Core functionality without JS

### Testing Checklist

#### Automated Testing
- [ ] Axe DevTools scan
- [ ] WAVE evaluation
- [ ] Lighthouse audit
- [ ] Color contrast checker

#### Manual Testing
- [ ] Keyboard navigation
- [ ] Screen reader testing (NVDA, JAWS, VoiceOver)
- [ ] Zoom to 200%
- [ ] Disable CSS
- [ ] Disable JavaScript
- [ ] Mobile device testing

### ARIA Implementation

#### Common Patterns
```html
<!-- Navigation -->
<nav aria-label="Main navigation">
  <ul role="list">
    <li><a href="/" aria-current="page">Home</a></li>
  </ul>
</nav>

<!-- Form -->
<form aria-labelledby="form-title">
  <h2 id="form-title">Contact Form</h2>
  <label for="email">
    Email <span aria-label="required">*</span>
  </label>
  <input id="email" type="email" required aria-required="true">
  <span id="email-error" role="alert" aria-live="polite"></span>
</form>

<!-- Loading State -->
<div aria-live="polite" aria-busy="true">
  <span class="sr-only">Loading content...</span>
</div>
```

---

## Platform Applications

### Web Applications

#### Desktop Requirements
- Viewport: 1920×1080 optimal
- Browser support: Last 2 versions
- Performance: LCP < 2.5s, FID < 100ms
- SEO: Meta tags, structured data

#### Mobile Web
- Viewport: 375×812 minimum
- Touch optimization: 44px targets
- Performance: 3G optimization
- Offline: Service worker caching

### Native Applications

#### iOS Standards
- Follow Human Interface Guidelines
- Support iOS 14+
- Dark mode support
- Dynamic Type support

#### Android Standards
- Follow Material Design principles
- Support Android 8+
- Material You theming
- Adaptive icons

### Marketing Materials

#### Print Specifications
- Color mode: CMYK
- Resolution: 300 DPI minimum
- Bleed: 3mm standard
- File formats: PDF/X-1a

#### Digital Assets
- Color mode: sRGB
- Resolution: 72-144 DPI
- Formats: SVG, PNG, WebP
- Optimization: Compressed

### Social Media

#### Platform Specifications
- LinkedIn: 1200×627px (shared image)
- Twitter/X: 1200×675px (summary card)
- Facebook: 1200×630px (link preview)
- Instagram: 1080×1080px (square post)

---

## Implementation Guidelines

### Development Setup

#### CSS Architecture
```scss
// Token System
styles/
├── tokens/
│   ├── _colors.scss
│   ├── _typography.scss
│   ├── _spacing.scss
│   └── _shadows.scss
├── base/
│   ├── _reset.scss
│   └── _typography.scss
├── components/
│   ├── _buttons.scss
│   ├── _cards.scss
│   └── _forms.scss
└── utilities/
    ├── _layout.scss
    └── _helpers.scss
```

#### Component Structure
```jsx
// React Component Example
const Button = ({ 
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
  children,
  ...props 
}) => {
  return (
    <button
      className={`btn btn--${variant} btn--${size}`}
      disabled={disabled}
      onClick={onClick}
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
```

### Version Control

#### Naming Conventions
- Components: PascalCase (`ButtonGroup`)
- Files: kebab-case (`button-group.scss`)
- CSS classes: BEM (`btn--primary`)
- JS variables: camelCase (`primaryColor`)
- Constants: UPPER_SNAKE (`MAX_WIDTH`)

#### Git Workflow
```bash
# Branch naming
feature/component-name
bugfix/issue-description
hotfix/critical-fix

# Commit messages
feat: Add new button component
fix: Correct color contrast issue
docs: Update typography guidelines
style: Format code according to standards
refactor: Simplify grid system
```

### Documentation Standards

#### Component Documentation
```markdown
## Component Name

### Description
Brief description of component purpose and usage.

### Props/Parameters
| Name | Type | Default | Description |
|------|------|---------|-------------|
| variant | string | 'primary' | Visual style variant |

### Usage
\`\`\`jsx
<Component variant="primary" />
\`\`\`

### Accessibility
- ARIA attributes used
- Keyboard interaction
- Screen reader behavior
```

---

## Quality Assurance

### Review Checklist

#### Design Review
- [ ] Follows brand guidelines
- [ ] Consistent with design system
- [ ] Responsive across breakpoints
- [ ] Accessibility compliant
- [ ] Performance optimized

#### Code Review
- [ ] Semantic HTML
- [ ] ARIA implementation
- [ ] CSS organization
- [ ] JavaScript best practices
- [ ] Cross-browser tested

#### Content Review
- [ ] Voice and tone consistent
- [ ] Grammar and spelling checked
- [ ] SEO optimized
- [ ] Alt text provided
- [ ] Links functional

### Performance Metrics

#### Target Metrics
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1
- **TTI** (Time to Interactive): < 3.8s
- **Bundle Size**: < 200KB (JS), < 50KB (CSS)

### Testing Matrix

| Browser | Versions | Desktop | Mobile |
|---------|----------|---------|--------|
| Chrome | Latest 2 | ✓ | ✓ |
| Safari | Latest 2 | ✓ | ✓ |
| Firefox | Latest 2 | ✓ | ✓ |
| Edge | Latest 2 | ✓ | ✓ |

### Maintenance Schedule

#### Regular Audits
- **Weekly**: Accessibility scan
- **Monthly**: Performance audit
- **Quarterly**: Design system review
- **Annually**: Complete system audit

---

## Appendix

### Resources & Tools

#### Design Tools
- Figma: Primary design tool
- Adobe CC: Image editing
- Sketch: Legacy files
- Abstract: Version control

#### Development Tools
- VS Code: Primary IDE
- Storybook: Component development
- Jest: Unit testing
- Cypress: E2E testing

#### Accessibility Tools
- axe DevTools: Automated testing
- WAVE: Web accessibility evaluation
- NVDA: Screen reader testing
- Contrast: Color contrast checker

### Support & Contact

**Design System Team**
- Email: design-system@decos.com
- Slack: #design-system
- Documentation: design.decos.com

**Brand Guidelines**
- Email: brand@decos.com
- Portal: brand.decos.com

### Changelog

#### Version 2.0 (Current)
- Added WCAG 3.1 compliance standards
- Updated component library
- Enhanced motion guidelines
- Improved accessibility documentation

#### Version 1.0
- Initial design system release
- Core components defined
- Brand guidelines established

---

*Last Updated: November 2024*  
*Next Review: February 2025*

© 2024 Decos PVC Pipe Solutions. All rights reserved.