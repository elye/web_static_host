# Elye's Personal Landing Page

A simple, modern personal landing page website.

## Features

- Clean, responsive design
- Modern UI with smooth animations
- Placeholder sections for future projects
- Easy to customize and extend
- Mobile-friendly

## Getting Started

1. Open `index.html` in your web browser
2. Or serve it using a local server:
   ```bash
   # Using Python
   python3 -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

## Customization

### Adding Projects

When you're ready to add your web applications, you can use the `addProjectLink()` function in `script.js`. 

Example:
```javascript
// Uncomment and modify this line in script.js
addProjectLink(0, 'My Web App', 'A description of my awesome web application', 'https://myapp.com', 'Visit App');
```

### Styling

- Edit `styles.css` to customize colors, fonts, and layout
- The CSS uses CSS custom properties (variables) for easy theming
- All colors are defined in the `:root` selector for easy customization

### Content

- Edit `index.html` to update the content, add contact information, or modify sections
- The structure is semantic and easy to understand

## File Structure

```
├── index.html      # Main HTML file
├── styles.css      # Stylesheet
├── script.js       # JavaScript for interactions
└── README.md       # This file
```

## Future Enhancements

- Add contact form functionality
- Integrate with a CMS or headless CMS
- Add blog section
- Implement dark mode toggle
- Add more interactive animations
