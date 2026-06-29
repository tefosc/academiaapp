# CLAUDE.md — AcademIA Landing

## Language

Always respond in Spanish.

## Project

Landing page de AcademIA en Astro. Deploy a GitHub Pages con dominio `academiaapp.online`.
Repo: https://github.com/tefosc/academiaapp

## Brand

- App: AcademIA (preparación examen admisión UNC, Cajamarca, Perú)
- Colores: navy #1B3D6E, navy-deep #0F2748, gold #F5A623, teal #15A98C, bg #F7F6F3, ink #15181F, muted #6B7280
- Tipografía: system font (-apple-system, SF Pro, Segoe UI, Roboto)
- Tono: directo, académico, cálido. Sin emojis.

## Stack

- Astro (output: static)
- Sin frameworks UI — HTML/CSS/JS puro en componentes Astro
- Deploy: GitHub Actions → gh-pages branch → dominio custom

## Páginas

- / → landing principal
- /privacy-policy → política de privacidad
- /terms-of-use → términos de uso
- /delete-account → borrar cuenta
- /reset-password → resetear contraseña (tiene lógica JS para Supabase hash)

## Referencia de diseño

El archivo `promo/academia-promo.html` (en el repo MiAppTesis) contiene el mockup
interactivo del teléfono con 5 pantallas animadas. Ese componente va en el hero
de la landing tal cual, adaptado a componente Astro.
