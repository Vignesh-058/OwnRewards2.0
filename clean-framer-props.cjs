const fs = require('fs');

const filesToClean = [
  'src/components/WhyChoose.jsx',
  'src/components/TargetAudience.jsx',
  'src/components/Pricing.jsx',
  'src/components/Features.jsx',
  'src/components/AnalyticsFeatures.jsx',
  'src/components/about/CoreValues.jsx',
  'src/components/FeaturesGrid.jsx',
  'src/components/Differentiators.jsx'
];

filesToClean.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Remove lingering variants definitions
    content = content.replace(/const\s+(?:container|item|card)Variants\s*=\s*\{[\s\S]*?\};\n/g, '');

    // Remove variants={...}
    content = content.replace(/\s+variants=\{[a-zA-Z0-9]+\}/g, '');
    
    // Remove initial="..."
    content = content.replace(/\s+initial="[^"]+"/g, '');
    
    // Remove whileInView="..."
    content = content.replace(/\s+whileInView="[^"]+"/g, '');

    fs.writeFileSync(file, content);
    console.log(`Cleaned ${file}`);
  }
});
