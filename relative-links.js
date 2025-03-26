const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'out');

// Función para contar niveles de directorios y generar rutas correctas
const fixLinks = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');

  // Obtener la profundidad de la carpeta donde está el archivo HTML
  const relativePath = path.relative(baseDir, path.dirname(filePath));
  const depth = relativePath === '' ? 0 : relativePath.split(path.sep).length;

  // Generar prefijo correcto para la ruta (_next debería estar siempre en la raíz)
  const prefix = depth === 0 ? './' : '../'.repeat(depth);

  // Reemplazar rutas absolutas con rutas relativas
  content = content.replace(/href="\/_next/g, `href="${prefix}_next`);
  content = content.replace(/src="\/_next/g, `src="${prefix}_next`);

  fs.writeFileSync(filePath, content, 'utf8');
};

// Recorrer todos los archivos en `out/` y ajustar rutas en los `.html`
const processDir = (dir) => {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      processDir(filePath); // Recursivo para subcarpetas
    } else if (file.endsWith('.html')) {
      fixLinks(filePath);
    }
  });
};

processDir(baseDir);
console.log('✅ Rutas corregidas en todos los archivos HTML.');
