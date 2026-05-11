# 🌸 Sakura - Angular App

> Eine elegante Angular-Anwendung mit modernem Design und responsivem Layout.

## 🎨 Features

- ✅ **Modernes Design** - Sakura-inspirierte Ästhetik
- ✅ **Responsive Layout** - Mobile-First Approach
- ✅ **Angular Best Practices** - Standalone Components
- ✅ **Optimierte Performance** - Schnelle Ladezeiten
- ✅ **Accessible UI** - WCAG-konform
- ✅ **Dark/Light Mode** (optional) - Benutzer-Preferenz

## 🔧 Tech Stack

- **Framework:** Angular 17+
- **Language:** TypeScript
- **Styling:** SCSS/CSS3
- **Build Tool:** Angular CLI
- **Package Manager:** npm

## 🚀 Quick Start

```bash
# Dependencies installieren
npm install

# Dev-Server starten
npm start

# Im Browser öffnen
# http://localhost:4200
```

## 📖 Entwicklung

```bash
# Development-Server mit Hot Reload
npm start

# Production Build
npm run build

# Tests ausführen
npm test

# Code-Analyse
npm run lint
```

## 📁 Projektstruktur

```
src/
├── app/
│   ├── components/       # UI-Komponenten
│   ├── pages/           # Seiten/Routes
│   ├── services/        # Business Logic
│   └── shared/          # Gemeinsame Utilities
├── assets/              # Bilder & Icons
├── styles/             # Globale Styles
└── environments/       # Environment-Konfigurationen
```

## 🎯 Konfiguration

### Umgebungsvariablen

Bearbeite `src/environments/environment.ts` für lokale Entwicklung:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000'
};
```

## 🚢 Deployment

```bash
# Production Build
npm run build

# Deploy mit Firebase Hosting
firebase deploy

# Oder mit Vercel
vercel deploy
```

## 📞 Support

- **Issues:** Fehlerberichte im GitHub Repository einreichen
- **Fragen:** Diskussionen im GitHub Discussions Board

---

_Ein elegantes Angular-Projekt mit Sakura-Inspiration._