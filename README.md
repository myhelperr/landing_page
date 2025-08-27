# landing_page
Code repository for Helperr landing page

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

### Charts & Data Visualization

Chart colors are mapped to the custom palette:
- **chart-1**: Navy Blue
- **chart-2**: Bright Cyan  
- **chart-3**: Purple
- **chart-4**: Dark Olive
- **chart-5**: Medium Gray-Blue

Use these for consistent data visualization that matches your brand.
