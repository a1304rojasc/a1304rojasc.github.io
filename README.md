# Portafolio de ciberseguridad

Sitio estático (HTML + CSS, sin build) publicado con GitHub Pages en **https://a1304rojasc.github.io**.

## Estructura

| Ruta | Qué es |
|---|---|
| `index.html` | Portada: proyectos, figuras y lista de writeups |
| `writeups/` | Un HTML por writeup |
| `figuras/` | Copia de las figuras de [anatomy-figuras](https://github.com/a1304rojasc/anatomy-figuras) (versión oscura y `-light`) |
| `assets/` | Estilos, script de tema e imágenes |
| `.nojekyll` | Le dice a Pages que sirva los archivos tal cual |

## Publicar

1. En GitHub: **Settings → Pages**.
2. En *Build and deployment*, elige **Deploy from a branch**, rama `main` y carpeta `/ (root)`.
3. Guarda. En uno o dos minutos el sitio aparece en https://a1304rojasc.github.io.

## Editar

- **Tu nombre o el título:** busca `EDITA` en `index.html`.
- **Nuevo proyecto:** copia un bloque `<div class="card">` dentro de `#proyectos`.
- **Nuevo writeup:** duplica un archivo de `writeups/`, cambia el contenido de `<article>` y añade un `<li>` en la lista de `#writeups` de `index.html`. En los retos del CTF, deja la flag como `CENTINELA{…}` para no arruinarlos.
- **Actualizar figuras:** vuelve a copiar `<nombre>.html` y `<nombre>-light.html` desde `anatomy-figuras`.

Para verlo en local:

```bash
python3 -m http.server 8000
```
