# Project Screenshots

This folder contains screenshots and images for portfolio projects.

## Folder Structure

```
public/projects/
├── tictactoe/
│   ├── hero.jpg          # Main project image (1200x630px recommended)
│   ├── screenshot-1.jpg  # Gameplay screenshot
│   ├── screenshot-2.jpg  # Features screenshot
│   └── screenshot-3.jpg  # Mobile view
│
└── web-nepal/
    ├── hero.jpg          # Main project image (1200x630px recommended)
    ├── screenshot-1.jpg  # Dashboard screenshot
    ├── screenshot-2.jpg  # Code editor screenshot
    └── screenshot-3.jpg  # Learning path screenshot
```

## Image Guidelines

### Recommended Sizes:
- **Hero Image**: 1200x630px (16:9 aspect ratio)
- **Screenshots**: 1920x1080px or 1280x720px
- **Mobile Screenshots**: 375x812px (iPhone size)

### Format:
- Use `.jpg` for photos and screenshots
- Use `.png` for images with transparency
- Use `.webp` for better compression (optional)

### Optimization:
- Compress images before uploading
- Keep file sizes under 500KB for hero images
- Keep file sizes under 300KB for screenshots

## How to Add Screenshots

1. Take screenshots of your projects
2. Optimize/compress the images
3. Name them according to the structure above
4. Place them in the appropriate project folder

## Usage in Code

Images can be referenced in components like this:

```jsx
// Hero image
<img src="/projects/tictactoe/hero.jpg" alt="Tic Tac Toe Game" />

// Screenshots
<img src="/projects/tictactoe/screenshot-1.jpg" alt="Gameplay" />
```

## Current Projects

- **Tic Tac Toe**: https://tictactoe.ganeshsahu.com.np/
- **Web Nepal**: https://web-nepal.vercel.app

---

**Note**: Add your actual project screenshots to these folders to display them in your portfolio.
