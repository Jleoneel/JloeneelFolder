# Portafolio — Janerson Arrunategui

React + Vite + Tailwind CSS v4 + Framer Motion.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera dist/
```

## Contenido
Todo el texto (perfil, proyectos, experiencia, stack) vive en `src/data/content.js`.
Las capturas están en `public/assets/img/<PROYECTO>/` y el CV en `public/assets/cv-janerson-arrunategui.pdf`.

## Formulario (Formspree)
1. Crea un formulario en https://formspree.io y copia su ID (`https://formspree.io/f/<ID>`).
2. Defínelo como `VITE_FORMSPREE_ID` en `.env.local` y en Vercel → Settings → Environment Variables.

Sin ID configurado, el formulario abre el cliente de correo con el mensaje ya armado.

## Deploy
`vercel deploy` (o `vercel --prod`). `vercel.json` ya declara Vite, el build y la carpeta `dist`.

## Imagen para compartir
`public/og.jpg` (1200×630) se usa como vista previa en WhatsApp, LinkedIn, etc. Cuando tengas el dominio
definitivo, cambia `/og.jpg` por la URL absoluta en `index.html` (LinkedIn y Facebook la requieren).
La foto original está en `assets-src/` (no se publica).
