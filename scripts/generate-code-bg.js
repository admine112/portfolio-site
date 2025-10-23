const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// Create canvas
const width = 1920;
const height = 1080;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

// Dark background
ctx.fillStyle = '#0a0a0a';
ctx.fillRect(0, 0, width, height);

// Add code-like text with syntax highlighting
const codeLines = [
  'fcomplex Csqrt(fcomplex z)',
  '{',
  '  float w;',
  '  if ((z.r = 0.0) && (z.i = 0.0))',
  '    return c;',
  '  w = sqrt((sqrt(z.r*z.r+z.i*z.i))+z.r);',
  '  if (z.i >= 0.0)',
  '    c.r = w;',
  '    c.i = z.i/(2.0*w);',
  '  else',
  '    c.r = w;',
  '    c.i = -z.i/(2.0*w);',
  '  return c;',
  '}',
];

const fontSize = 32;
const lineHeight = fontSize + 10;
const startY = 100;
const startX = 80;

ctx.font = `${fontSize}px 'Courier New', monospace`;
ctx.textBaseline = 'top';

// Draw code lines with syntax highlighting
codeLines.forEach((line, index) => {
  const y = startY + index * lineHeight;
  
  // Highlight keywords
  let displayLine = line;
  let x = startX;
  
  // Keywords in red
  if (line.includes('fcomplex') || line.includes('return') || line.includes('if') || line.includes('else')) {
    ctx.fillStyle = '#ff6b6b';
  } else if (line.includes('float') || line.includes('sqrt')) {
    ctx.fillStyle = '#ffd93d';
  } else if (line.includes('{') || line.includes('}')) {
    ctx.fillStyle = '#a8dadc';
  } else {
    ctx.fillStyle = '#e0e0e0';
  }
  
  ctx.fillText(displayLine, x, y);
});

// Add some visual effects - gradient overlay
const gradient = ctx.createLinearGradient(0, 0, width, height);
gradient.addColorStop(0, 'rgba(255, 107, 107, 0.1)');
gradient.addColorStop(0.5, 'rgba(0, 0, 0, 0)');
gradient.addColorStop(1, 'rgba(168, 218, 220, 0.1)');

ctx.fillStyle = gradient;
ctx.fillRect(0, 0, width, height);

// Save the image
const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const buffer = canvas.toBuffer('image/jpeg', { quality: 0.95 });
fs.writeFileSync(path.join(publicDir, 'code-background.jpg'), buffer);

console.log('✅ Code background image generated successfully!');
