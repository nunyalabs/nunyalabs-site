# NunyaLabs - Health Informatics & Digital Solutions

> Professional website for NunyaLabs, showcasing health informatics expertise, digital solutions, and comprehensive training programs.

## 🌟 Features

- **Professional Landing Page**: Showcasing NunyaLabs profile and expertise
- **Training Programs**: Comprehensive certificate programs in web development, data science, and health technology
- **Royal Orange Branding**: Consistent design theme across all pages
- **Responsive Design**: Bootstrap 5.3.3 for mobile-first responsive layout
- **Payment Integration**: WhatsApp-based enrollment and payment system
- **Automated Deployment**: GitHub Actions workflow with minification

## 🚀 Live Site

Visit the live site at: [https://nunyalabs.github.io/nunyalabs-site/](https://nunyalabs.github.io/nunyalabs-site/)

## 🛠️ Development

### Prerequisites
- Node.js (v18 or higher)
- Git

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/nunyalabs/nunyalabs-site.git
   cd nunyalabs-site
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```
   This will start a local server at `http://localhost:3000`

4. **Build for production**:
   ```bash
   npm run build
   ```
   This creates a minified version in the `dist/` directory.

### File Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── assets/
│   └── gee.png                # Profile image
├── index.html                 # Main landing page
├── learn.html                 # Training programs page
├── build.js                   # Build script for minification
├── package.json               # Node.js dependencies and scripts
└── .gitignore                 # Git ignore rules
```

## 🔄 Deployment

### Automatic Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch:

1. **GitHub Actions** runs the build workflow
2. **HTML and CSS are minified** for optimal performance
3. **Assets are copied** to the distribution folder
4. **Site is deployed** to GitHub Pages at the gh-pages branch

### Manual Deployment

To manually trigger deployment:
1. Go to the [Actions tab](https://github.com/nunyalabs/nunyalabs-site/actions)
2. Click "Build and Deploy to GitHub Pages"
3. Click "Run workflow"

### GitHub Pages Setup

Ensure your repository settings are configured:
1. Go to **Settings** → **Pages**
2. Set **Source** to "GitHub Actions"
3. The workflow will automatically handle the rest

## 🎨 Customization

### Colors
- **Primary Brand**: Royal Orange (`#FF8C00`)
- **Text**: Dark gray for body text
- **Backgrounds**: White with subtle shadows

### Key Components
- **Navigation**: Sticky navbar with smooth scrolling
- **Services**: Grid layout showcasing key offerings
- **Team Section**: Profile showcase with credentials
- **Contact Forms**: Integrated WhatsApp communication

## 📦 Technologies

- **Frontend**: HTML5, CSS3, Bootstrap 5.3.3
- **Icons**: Bootstrap Icons
- **Build Tools**: Node.js, html-minifier-terser, clean-css
- **Deployment**: GitHub Actions, GitHub Pages
- **Development**: Live Server for local development

## 📧 Contact

**Godsway Sackey**
- Email: [contact@nunyalabs.com](mailto:contact@nunyalabs.com)
- WhatsApp: [+233 XX XXX XXXX](https://wa.me/233XXXXXXXXX)

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

---

**NunyaLabs** - Empowering Digital Futures in Health Technology 🚀