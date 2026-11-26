# 🚀 دليل رفع ونشر الموقع — Deployment Guide
# موقع البورتفوليو: صفاء جمعة حامد طه — Nursing Educator Portfolio

---

## 📦 الخطوة الأولى: بناء المشروع (Build)

قبل أي طريقة رفع، لازم تعمل Build الأول:

```bash
npm run build
```

ده هينشئ مجلد `dist/` فيه كل الملفات الجاهزة للرفع.

---

## 1️⃣ الرفع على GitHub Pages (مجاني)

### أ) التجهيز:

```bash
# 1. إنشاء مستودع Git
git init
git add .
git commit -m "Initial commit - Nursing Educator Portfolio"

# 2. إنشاء ريبو جديد على GitHub من المتصفح
# https://github.com/new
# سمّيه مثلاً: safa-portfolio

# 3. ربط الريبو ورفع الكود
git remote add origin https://github.com/YOUR_USERNAME/safa-portfolio.git
git branch -M main
git push -u origin main
```

### ب) النشر التلقائي باستخدام GitHub Actions:

أنشئ الملف `.github/workflows/deploy.yml` (موجود بالفعل في المشروع):

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci --legacy-peer-deps

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### ج) تفعيل GitHub Pages:

1. روح لـ **Settings** → **Pages** في الريبو
2. في **Source** اختار **GitHub Actions**
3. بعد أول push، الموقع هيكون على:
   `https://YOUR_USERNAME.github.io/safa-portfolio/`

> ⚠️ لو استخدمت GitHub Pages بـ subdirectory، أضف في `vite.config.ts`:
> ```ts
> export default defineConfig({
>   base: '/safa-portfolio/',
>   plugins: [react()],
> })
> ```

---

## 2️⃣ الرفع على Netlify (مجاني — الأسهل)

### أ) بدون أي أوامر (Drag & Drop):

1. ابني المشروع: `npm run build`
2. روح لـ [https://app.netlify.com/drop](https://app.netlify.com/drop)
3. اسحب مجلد `dist/` وارميه في الصفحة
4. 🎉 الموقع هيكون أونلاين فوراً!

### ب) عن طريق Git (تحديث تلقائي):

1. سجّل في [netlify.com](https://netlify.com)
2. اضغط **"Add new site"** → **"Import from Git"**
3. اربط GitHub account واختار الريبو
4. ضبط الإعدادات:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. اضغط **Deploy**

---

## 3️⃣ الرفع على Vercel (مجاني)

```bash
# 1. تثبيت Vercel CLI
npm install -g vercel

# 2. تسجيل الدخول
vercel login

# 3. النشر
vercel

# 4. النشر للإنتاج
vercel --prod
```

أو من الموقع:
1. روح لـ [vercel.com](https://vercel.com)
2. **"Add New Project"** → اختار الريبو من GitHub
3. الإعدادات التلقائية هتكون صح (Vite detected)
4. اضغط **Deploy**

---

## 4️⃣ الرفع على Firebase Hosting (مجاني — من جوجل)

```bash
# 1. تثبيت Firebase CLI
npm install -g firebase-tools

# 2. تسجيل الدخول
firebase login

# 3. تهيئة المشروع
firebase init hosting
# اختار "dist" كـ public directory
# اختار "Yes" لـ single-page app

# 4. بناء المشروع
npm run build

# 5. النشر
firebase deploy --only hosting
```

---

## 5️⃣ الرفع على استضافة تقليدية (cPanel / FTP)

```bash
# 1. ابني المشروع
npm run build

# 2. ارفع محتويات مجلد dist/ على السيرفر
# استخدم FileZilla أو أي FTP client
# ارفع الملفات في مجلد public_html/
```

### الملفات اللي هترفعها من `dist/`:
```
dist/
├── index.html
├── sgt-crest.svg
└── assets/
    ├── index-XXXXX.css
    └── index-XXXXX.js
```

---

## 🌐 إعداد دومين مخصص (Custom Domain)

بعد الرفع على أي منصة، تقدر تربط دومين خاص:

1. اشتري دومين من (Namecheap, GoDaddy, Google Domains)
2. ضبط DNS Records:
   - **A Record:** يشير لـ IP المنصة
   - **CNAME:** يشير لـ رابط المنصة
3. فعّل HTTPS (مجاني تلقائي في معظم المنصات)

---

## ✅ قائمة المراجعة قبل النشر

- [ ] بناء المشروع بنجاح: `npm run build`
- [ ] اختبار البناء محلياً: `npm run preview`
- [ ] التأكد من عمل Dark/Light mode
- [ ] التأكد من عمل Arabic/English
- [ ] التأكد من responsive على الموبايل
- [ ] التأكد من تحميل SVG crest
- [ ] التأكد من عمل Contact form
