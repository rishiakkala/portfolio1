# Portfolio Website - Todo List

## Phase 1: Project Setup & Configuration

### 1.1 Initialize Project
- [x] Set up Next.js project with TypeScript support
- [x] Configure project structure (components, styles, utils, assets)
- [x] Install dependencies (React, Next.js, Tailwind CSS or CSS Modules)
- [x] Set up Git repository and initial commit
- [x] Configure ESLint and Prettier for code quality

### 1.2 Configure Styling System
- [x] Set up Tailwind CSS or CSS Modules
- [x] Define color palette variables (#F9FAFB, #F1F3F5, #1F2933, #4B5563, #C06A3E, #3B82F6)
- [x] Configure typography (Inter/Satoshi font family)
- [x] Set up responsive breakpoints
- [x] Create global styles and CSS reset

### 1.3 Performance & Accessibility Setup
- [x] Configure `prefers-reduced-motion` detection
- [x] Set up lazy loading configuration
- [x] Configure image optimization (WebP/SVG)
- [x] Set up semantic HTML structure
- [x] Configure SEO meta tags and Open Graph

---

## Phase 2: Hero Section

### 2.1 Basic Layout
- [x] Create Hero component structure
- [x] Implement two-column responsive layout
- [x] Add name, role, and tagline text (left column)
- [x] Style text with proper typography and hierarchy
- [x] Ensure mobile responsiveness

### 2.2 Avatar Implementation
- [x] Create or obtain 2D avatar image
- [x] Optimize avatar image (SVG/WebP format)
- [x] Position avatar in right column
- [x] Add soft radial glow effect using CSS
- [x] Test avatar responsiveness

### 2.3 Canvas Background Animation
- [x] Create canvas element for background
- [x] Implement F1 car graphic/sprite
- [x] Code smooth, bounded motion for F1 car
- [x] Implement tire-track visual effects with fade-over-time
- [x] Cap frame rate at 30-45 FPS
- [x] Ensure animation doesn't obstruct text or avatar
- [x] Pause animation when tab is inactive
- [x] Disable animation for `prefers-reduced-motion`
- [x] Test performance across devices

---

## Phase 3: About Section

### 3.1 Layout & Content
- [x] Create About component
- [x] Implement two-column layout
- [x] Write short narrative about mindset, interests, and focus areas
- [x] Add text content with proper formatting
- [x] Add thin accent line for structure
- [x] Ensure minimal imagery and text-focused design

### 3.2 Styling & Responsiveness
- [x] Style with generous line height and readable typography
- [x] Apply section background color (#F1F3F5)
- [x] Test mobile and tablet layouts
- [x] Add subtle spacing and padding

---

## Phase 4: Tech Skills Section

### 4.1 Content Structure
- [x] Create TechSkills component
- [x] Define skill categories (systems, ML, data, tools)
- [x] Organize skills data in structured format
- [x] Implement grid or stacked layout

### 4.2 Interaction & Styling
- [x] Style skills without progress bars or ratings
- [x] Add hover underline interaction
- [x] Ensure clear visual grouping by category
- [x] Test responsive behavior
- [x] Apply consistent spacing

---

## Phase 5: Education Section

### 5.1 Timeline Implementation
- [x] Create Education component
- [x] Implement vertical timeline layout
- [x] Add thin accent line for timeline
- [x] Create simple node indicators
- [x] Add education data (degree, institution, year)

### 5.2 Styling & Polish
- [x] Style timeline with accent color (#C06A3E)
- [x] Ensure clear hierarchy and readability
- [x] Test responsive behavior
- [x] Add subtle transitions

---

## Phase 6: Experience Section

### 6.1 Content Structure
- [x] Create Experience component
- [x] Implement stacked content blocks layout
- [x] Add experience data (role, organization, dates)
- [x] Write bullet points focused on outcomes and impact
- [x] Establish clear hierarchy

### 6.2 Styling & Formatting
- [x] Style role, organization, and impact with proper hierarchy
- [x] Apply consistent spacing between blocks
- [x] Ensure readability and scanability
- [x] Test responsive layout
- [x] Add subtle hover effects (optional)

---

## Phase 7: Publications Section

### 7.1 Content & Layout
- [x] Create Publications component
- [x] Implement minimal list format
- [x] Add publication data (title, venue, year)
- [x] Structure for credibility and readability

### 7.2 Styling & Links
- [x] Style with emphasis on readability
- [x] Add links to papers (if available)
- [x] Apply link accent color (#3B82F6)
- [x] Ensure proper spacing and typography
- [x] Test link accessibility

---

## Phase 8: Get in Touch Section

### 8.1 Layout & Content
- [x] Create GetInTouch component
- [x] Implement centered layout
- [x] Add friendly call-to-action text
- [x] Add email address display

### 8.2 Interactive Features
- [x] Implement copy-to-clipboard functionality for email
- [x] Add GitHub icon and link
- [x] Add LinkedIn icon and link
- [x] Style icon links with hover effects
- [x] Test clipboard functionality across browsers

### 8.3 Styling
- [x] Center align content
- [x] Style icons and links
- [x] Add spacing and padding
- [x] Ensure mobile responsiveness

---

## Phase 9: Motion & Interaction Polish

### 9.1 Transitions & Animations
- [ ] Add opacity transitions for section reveals
- [ ] Implement small transform effects on hover
- [ ] Ensure motion feels purposeful and restrained
- [ ] Limit looping animations to hero section only
- [ ] Test all animations with `prefers-reduced-motion`

### 9.2 Interaction Refinement
- [ ] Test keyboard navigation across all sections
- [ ] Ensure all interactive elements are accessible
- [ ] Add focus states for keyboard users
- [ ] Test tab order and navigation flow

---

## Phase 10: Accessibility & SEO

### 10.1 Accessibility Audit
- [ ] Verify semantic HTML throughout
- [ ] Test keyboard navigation completeness
- [ ] Check color contrast ratios (WCAG AA minimum)
- [ ] Add ARIA labels where needed
- [ ] Test with screen reader
- [ ] Ensure all images have alt text

### 10.2 SEO Optimization
- [ ] Add proper title tags for page
- [ ] Write compelling meta description
- [ ] Implement proper heading hierarchy (single h1)
- [ ] Add Open Graph tags for social sharing
- [ ] Create favicon and app icons
- [ ] Test SEO with Lighthouse

---

## Phase 11: Performance Optimization

### 11.1 Code Optimization
- [x] Implement lazy loading for non-critical sections
- [x] Optimize all images (convert to WebP/SVG)
- [x] Minimize bundle size
- [x] Remove unused CSS and JavaScript
- [x] Implement code splitting if needed

### 11.2 Performance Testing
- [x] Test load times on various connections
- [x] Run Lighthouse performance audit
- [x] Optimize canvas animation performance
- [x] Test on mobile devices
- [x] Ensure smooth 30-45 FPS animation
- [x] Verify tab inactive pause functionality

---

## Phase 12: Cross-Browser & Device Testing

### 12.1 Browser Testing
- [ ] Test on Chrome (latest)
- [ ] Test on Firefox (latest)
- [ ] Test on Safari (latest)
- [ ] Test on Edge (latest)
- [ ] Fix any browser-specific issues

### 12.2 Device Testing
- [ ] Test on mobile devices (iOS and Android)
- [ ] Test on tablets
- [ ] Test on desktop (various screen sizes)
- [ ] Verify responsive breakpoints work correctly
- [ ] Test touch interactions on mobile

---

## Phase 13: Deployment & CI/CD

### 13.1 Deployment Setup
- [ ] Create Vercel or Netlify account
- [ ] Connect GitHub repository
- [ ] Configure build settings
- [ ] Set up custom domain (if applicable)
- [ ] Configure environment variables

### 13.2 CI/CD Pipeline
- [ ] Set up automated builds on push
- [ ] Configure automated deployments
- [ ] Set up preview deployments for branches
- [ ] Test deployment pipeline
- [ ] Verify production build

---

## Phase 14: Final Review & Launch

### 14.1 Content Review
- [ ] Proofread all text content
- [ ] Verify all links work correctly
- [ ] Check email and social media links
- [ ] Ensure all data is up-to-date
- [ ] Review professional tone and messaging

### 14.2 Technical Review
- [ ] Run final Lighthouse audit (Performance, Accessibility, SEO)
- [ ] Verify all animations work as expected
- [ ] Test all interactive features
- [ ] Check console for errors
- [ ] Verify analytics setup (if implemented)

### 14.3 Launch
- [ ] Deploy to production
- [ ] Test production site thoroughly
- [ ] Share with initial audience for feedback
- [ ] Monitor performance and errors
- [ ] Document any post-launch issues

---

## Phase 15: Future Enhancements (Post-Launch)

### 15.1 Analytics & Monitoring
- [ ] Integrate analytics (Google Analytics or alternative)
- [ ] Set up error monitoring
- [ ] Track user engagement metrics
- [ ] Monitor performance metrics

### 15.2 Content Expansion
- [ ] Plan projects section structure
- [ ] Plan blog section (if desired)
- [ ] Consider CMS integration for easier updates
- [ ] Plan testimonials or recommendations section

### 15.3 Continuous Improvement
- [ ] Gather user feedback
- [ ] Iterate on design based on metrics
- [ ] Update content regularly
- [ ] Monitor and fix any reported issues
- [ ] Keep dependencies updated

---

## Notes & Reminders

### Design Principles
- Engineering maturity, clarity, and human warmth
- Intentional and calm, avoiding visual noise
- Motion should be purposeful and restrained
- High contrast text for readability

### Technical Constraints
- Frame rate: 30-45 FPS for animations
- Single canvas element for background
- Respect `prefers-reduced-motion`
- Modern evergreen browsers only
- Minimal bundle size

### Success Metrics to Track
- Increased recruiter engagement
- Longer average session duration
- Positive qualitative feedback on design and clarity
