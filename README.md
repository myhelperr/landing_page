# Helperr Landing Page

A modern, responsive landing page for **Helperr** - the on-demand task assistance platform that connects users with reliable helpers for everyday tasks.

## About Helperr

Helperr is a revolutionary platform designed to help people reclaim their time by connecting them with trusted neighbors and local helpers for various tasks. Whether you need help with:

- 🛠️ **Quick fixes** (flat tire repair, minor repairs)
- 🧹 **Daily chores** (cleaning, organization)
- 📦 **Moving assistance** (furniture, heavy items)
- ❄️ **Seasonal tasks** (snow removal, yard work)
- 🏠 **Home maintenance** (assembly, installations)

Helperr makes it easy to find reliable help instantly, allowing users to focus on what truly matters to them.

## Project Features

This landing page showcases:

- **🎨 Modern Design**: Clean, professional interface with custom brand colors
- **📱 Responsive Layout**: Mobile-first design that works on all devices
- **🎠 Interactive Carousels**: Auto-scrolling hero and testimonial sections
- **📝 Waitlist System**: Complete form validation with database storage and email notifications
- **👥 Social Proof**: Customer testimonials and user count displays
- **❓ FAQ Section**: Expandable accordion with common questions
- **⚡ Performance Optimized**: Next.js Image optimization and fast loading
- **🎯 Call-to-Actions**: Strategic placement of conversion elements


## Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation
```bash
# Clone the repository
git clone https://github.com/myhelperr/landing_page.git
cd landing_page

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your configuration

# Set up the database
pnpm db:push
pnpm db:generate

# Start development server
pnpm dev
```

### Database Management
```bash
pnpm db:studio    # Open Prisma Studio
pnpm db:reset     # Reset database
pnpm db:migrate   # Run migrations
```

## Design System & Colors

This project uses a custom color palette integrated with ui components and supports both light and dark themes.

### Custom Color Palette

The following brand colors are defined in `tailwind.config.ts`:

- **primaryColor1**: `#666600` (Dark Olive/Yellow-Green)
- **primaryColor2**: `#000066` (Navy Blue) 
- **primaryColor3**: `#0D0D0D` (Very Dark Gray/Black)
- **secondaryColor1**: `#20DBFE` (Bright Cyan/Sky Blue)
- **secondaryColor2**: `#BE85FE` (Purple/Lavender)
- **secondaryColor3**: `#676D81` (Medium Gray-Blue)

### Color System Integration

These custom colors have been integrated into the CSS variables system in `app/globals.css`:

#### Light Theme Usage:
- **Primary**: Navy Blue (`#000066`) - for main actions, links
- **Secondary**: Dark Olive (`#666600`) - for secondary elements  
- **Accent**: Bright Cyan (`#20DBFE`) - for highlights, CTAs
- **Foreground**: Very Dark Gray (`#0D0D0D`) - for text
- **Muted**: Medium Gray-Blue (`#676D81`) - for subdued text
- **Ring**: Purple (`#BE85FE`) - for focus states

#### Dark Theme Usage:
- **Background**: Very Dark Gray (`#0D0D0D`)
- **Primary**: Bright Cyan (`#20DBFE`) - more vibrant for dark mode
- **Accent**: Purple (`#BE85FE`)
- **Cards**: Navy Blue (`#000066`) - for contrast on dark background

### How to Use Colors

#### With Tailwind Classes:
```jsx
// Using semantic color names (recommended)
<button className="bg-primary text-primary-foreground">Primary Button</button>
<div className="bg-accent text-accent-foreground">Accent Element</div>
<p className="text-muted-foreground">Subdued text</p>

// Using custom color names (for specific brand elements)
<div className="bg-primaryColor1">Olive background</div>
<span className="text-secondaryColor2">Purple text</span>
```

#### With CSS Variables:
```css
.custom-element {
  background-color: var(--primary);
  color: var(--primary-foreground);
  border: 1px solid var(--accent);
}
```

### Theme Switching

The app supports automatic light/dark theme switching. All colors adapt automatically when the `.dark` class is applied to the root element.

<!-- ### Charts & Data Visualization

Chart colors are mapped to the custom palette:
- **chart-1**: Navy Blue
- **chart-2**: Bright Cyan  
- **chart-3**: Purple
- **chart-4**: Dark Olive
- **chart-5**: Medium Gray-Blue

Use these for consistent data visualization that matches your brand. -->
