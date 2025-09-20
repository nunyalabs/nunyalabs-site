const fs = require('fs-extra');
const path = require('path');
const { minify } = require('html-minifier-terser');
const CleanCSS = require('clean-css');

// Configuration
const SRC_DIR = './';
const DIST_DIR = './dist';
const ASSETS_DIR = './assets';

// HTML minification options
const htmlMinifyOptions = {
  collapseWhitespace: true,
  removeComments: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  useShortDoctype: true,
  minifyCSS: true,
  minifyJS: true
};

// CSS minifier
const cleanCSS = new CleanCSS({
  level: 2,
  returnPromise: false
});

async function build() {
  try {
    console.log('🏗️  Starting build process...');
    
    // Clean and create dist directory
    await fs.remove(DIST_DIR);
    await fs.ensureDir(DIST_DIR);
    console.log('✅ Cleaned dist directory');

    // Copy and minify HTML files
    const htmlFiles = ['index.html', 'learn.html'];
    
    for (const file of htmlFiles) {
      if (await fs.pathExists(file)) {
        console.log(`📄 Processing ${file}...`);
        
        let htmlContent = await fs.readFile(file, 'utf8');
        
        // Extract and minify inline CSS
        htmlContent = htmlContent.replace(/<style[^>]*>([\s\S]*?)<\/style>/gi, (match, css) => {
          const minifiedCSS = cleanCSS.minify(css);
          if (minifiedCSS.errors.length > 0) {
            console.warn(`⚠️  CSS minification warnings in ${file}:`, minifiedCSS.errors);
          }
          return `<style>${minifiedCSS.styles}</style>`;
        });
        
        // Minify HTML
        const minifiedHTML = await minify(htmlContent, htmlMinifyOptions);
        
        // Write minified HTML
        await fs.writeFile(path.join(DIST_DIR, file), minifiedHTML);
        console.log(`✅ Minified ${file}`);
      }
    }

    // Copy assets directory if it exists
    if (await fs.pathExists(ASSETS_DIR)) {
      await fs.copy(ASSETS_DIR, path.join(DIST_DIR, 'assets'));
      console.log('✅ Copied assets directory');
    }

    // Copy other necessary files
    const otherFiles = ['.gitignore'];
    for (const file of otherFiles) {
      if (await fs.pathExists(file)) {
        await fs.copy(file, path.join(DIST_DIR, file));
        console.log(`✅ Copied ${file}`);
      }
    }

    console.log('🎉 Build completed successfully!');
    console.log(`📁 Output directory: ${DIST_DIR}`);
    
    // Show build summary
    const stats = await getBuildStats();
    console.log('\n📊 Build Summary:');
    console.log(`   HTML files: ${stats.htmlFiles}`);
    console.log(`   Asset files: ${stats.assetFiles}`);
    console.log(`   Total files: ${stats.totalFiles}`);

  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

async function getBuildStats() {
  const htmlFiles = (await fs.readdir(DIST_DIR))
    .filter(file => file.endsWith('.html')).length;
  
  let assetFiles = 0;
  const assetsPath = path.join(DIST_DIR, 'assets');
  if (await fs.pathExists(assetsPath)) {
    assetFiles = (await fs.readdir(assetsPath)).length;
  }
  
  const allFiles = await getAllFiles(DIST_DIR);
  
  return {
    htmlFiles,
    assetFiles,
    totalFiles: allFiles.length
  };
}

async function getAllFiles(dir) {
  const files = [];
  const items = await fs.readdir(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = await fs.stat(fullPath);
    
    if (stat.isDirectory()) {
      const subFiles = await getAllFiles(fullPath);
      files.push(...subFiles);
    } else {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Run the build
build();