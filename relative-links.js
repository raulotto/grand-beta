const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'out');
const basePath = '/banner-ts/test/'; // Ruta base real en el servidor

const fixLinks = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');

  // Reemplaza rutas absolutas /_next, /images, etc. por la ruta base real
  const patterns = [
    { regex: /href="\/_next/g, replacement: `href="${basePath}_next` },
    { regex: /src="\/_next/g, replacement: `src="${basePath}_next` },
    { regex: /src='\/_next/g, replacement: `src='${basePath}_next` },

    { regex: /src="\/images/g, replacement: `src="${basePath}images` },
    { regex: /src='\/images/g, replacement: `src='${basePath}images` },
    { regex: /href="\/images/g, replacement: `href="${basePath}images` },
    { regex: /href='\/images/g, replacement: `href='${basePath}images` },

    { regex: /data-src="\/images/g, replacement: `data-src="${basePath}images` },
    { regex: /data-src='\/images/g, replacement: `data-src='${basePath}images` },
    { regex: /url\("\/images/g, replacement: `url("${basePath}images` },
    { regex: /url\('\/images/g, replacement: `url('${basePath}images` },
  ];

  patterns.forEach(({ regex, replacement }) => {
    content = content.replace(regex, replacement);
  });

  fs.writeFileSync(filePath, content, 'utf8');
};

const processDir = (dir) => {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      processDir(filePath);
    } else if (file.endsWith('.html')) {
      fixLinks(filePath);
    }
  });
};

processDir(baseDir);
console.log('✅ Rutas corregidas con base en /banner-ts/test/');
