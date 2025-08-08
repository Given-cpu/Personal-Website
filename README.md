# Personal Website with Resume & Journal

A modern, responsive personal website featuring both a professional resume section and a personal journal/blog segment. Built with HTML, CSS, and JavaScript.

## 🌟 Features

### Resume Section
- **Professional Hero Section** - Eye-catching introduction with call-to-action buttons
- **About Me** - Personal introduction with statistics
- **Work Experience** - Timeline-based experience showcase
- **Skills & Technologies** - Animated skill bars with progress indicators
- **Projects Portfolio** - Featured projects with technology tags and links
- **Contact Form** - Professional contact section with social links

### Journal Section
- **Personal Journal Entries** - Add, view, and manage personal thoughts and experiences
- **Category Filtering** - Filter entries by Technology, Life & Personal, Learning, or Travel
- **Mood Tracking** - Add mood indicators to each journal entry
- **Local Storage** - Entries are saved locally in the browser
- **Responsive Design** - Works perfectly on all devices
- **Modal Interface** - Clean, modern interface for adding and viewing entries

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Basic knowledge of HTML, CSS, and JavaScript (for customization)

### Installation
1. Download or clone the repository
2. Open `index.html` in your web browser
3. The website is ready to use!

### Local Development
If you want to run it locally with a server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 🎨 Customization

### Personal Information
Update the following in `index.html`:

1. **Name and Title**
   ```html
   <title>Your Name - Personal Website</title>
   <div class="nav-logo">
       <a href="#home">Your Name</a>
   </div>
   <h1 class="hero-title">Hi, I'm <span class="highlight">Your Name</span></h1>
   ```

2. **Professional Information**
   - Update the hero subtitle and description
   - Modify the about section content
   - Update work experience timeline
   - Customize skills and their proficiency levels
   - Add your own projects

3. **Contact Information**
   ```html
   <div class="contact-item">
       <i class="fas fa-envelope"></i>
       <span>your.email@example.com</span>
   </div>
   <div class="contact-item">
       <i class="fas fa-phone"></i>
       <span>+1 (555) 123-4567</span>
   </div>
   <div class="contact-item">
       <i class="fas fa-map-marker-alt"></i>
       <span>Your City, Country</span>
   </div>
   ```

4. **Social Links**
   ```html
   <div class="social-links">
       <a href="#" class="social-link"><i class="fab fa-linkedin"></i></a>
       <a href="#" class="social-link"><i class="fab fa-github"></i></a>
       <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
       <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
   </div>
   ```

### Styling Customization
Modify `styles.css` to change the appearance:

1. **Color Scheme**
   ```css
   :root {
       --primary-color: #2563eb;
       --secondary-color: #fbbf24;
       --text-color: #333;
       --background-color: #f8fafc;
   }
   ```

2. **Fonts**
   ```css
   body {
       font-family: 'Inter', sans-serif;
   }
   ```

3. **Layout**
   - Adjust container max-widths
   - Modify grid layouts
   - Change spacing and padding

### Journal Customization

1. **Categories**
   Edit the category options in both HTML and JavaScript:
   ```html
   <select id="entryCategory" name="category" required>
       <option value="tech">Technology</option>
       <option value="life">Life & Personal</option>
       <option value="learning">Learning</option>
       <option value="travel">Travel</option>
   </select>
   ```

2. **Mood Options**
   Update the mood emojis in `script.js`:
   ```javascript
   const moodEmojis = {
       happy: '😊',
       excited: '🤩',
       thoughtful: '🤔',
       inspired: '💡',
       challenged: '💪',
       peaceful: '😌'
   };
   ```

## 📱 Responsive Design

The website is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🔧 Technical Features

### JavaScript Functionality
- **Smooth Scrolling** - Navigation links smoothly scroll to sections
- **Mobile Menu** - Hamburger menu for mobile devices
- **Modal System** - For adding journal entries and viewing full entries
- **Local Storage** - Journal entries persist between sessions
- **Animations** - Scroll-triggered animations and skill bar animations
- **Form Handling** - Contact form and journal entry form with validation

### CSS Features
- **CSS Grid & Flexbox** - Modern layout techniques
- **CSS Variables** - Easy customization
- **Animations & Transitions** - Smooth user experience
- **Backdrop Filters** - Modern glassmorphism effects
- **Responsive Breakpoints** - Mobile-first approach

## 📝 Using the Journal

### Adding Entries
1. Click the "Add New Entry" button in the Journal section
2. Fill in the title, category, content, and mood
3. Click "Save Entry" to add it to your journal

### Viewing Entries
- Click on any journal entry to view the full content
- Use the category filter to view specific types of entries
- Entries are automatically saved to your browser's local storage

### Managing Entries
- Entries are stored locally in your browser
- Clear browser data to reset journal entries
- Export functionality can be added for backup purposes

## 🎯 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you make improvements that could benefit others, consider submitting a pull request.

## 📞 Support

If you have any questions or need help customizing the website, feel free to reach out!

---

**Note**: This is a static website that runs entirely in the browser. For production use, consider hosting it on platforms like:
- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Any web hosting service
