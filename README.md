# QRGen Pro - Professional QR Code Generator

QRGen Pro is a modern, high-performance web application for creating, customizing, and exporting high-resolution QR codes. Designed for both personal and enterprise use, it supports diverse data schemas and extensive visual styling options.

---

## Features

- **Multiple Data Formats**:
  - **URL & Text**: Encode links, plain text snippets, and notes.
  - **WiFi**: Connect directly with WPA, WEP, or open network configurations.
  - **vCard**: Digital business cards containing names, phone numbers, emails, addresses, and organizations.
  - **Communication**: Pre-filled SMS, Email (with subject/body), WhatsApp, and Phone dialer links.
  - **Payments & Location**: Direct UPI payment strings with payee info and GPS geolocation coordinates.

- **Real-Time Visual Customization**:
  - **Pattern Styles**: Square, Rounded, Dots, Classy, Classy Rounded, and Extra Rounded.
  - **Corner Markers**: Customizable corner squares and corner dots.
  - **Color Control**: Full hex and color-picker support for foreground and background colors.
  - **Logo Embedding**: Embed brand logos with automatic sizing and error correction recommendations.
  - **Error Correction Levels**: Low (7%), Medium (15%), Quartile (25%), and High (30%).

- **Export Formats**:
  - Download crisp vector **SVG** for print media.
  - Export raster **PNG** and **JPEG** for digital sharing.
  - Built-in browser **Print** optimization.

---

## Tech Stack

- **Framework**: Next.js 16 (App Router with Turbopack)
- **Language**: TypeScript 5
- **UI & Styling**: React 19, Tailwind CSS v4, Lucide Icons
- **State Management**: Zustand
- **QR Rendering Engine**: `qr-code-styling`

---

## Project Structure

```
├── src/
│   ├── app/                 # Next.js App Router pages and metadata
│   │   ├── layout.tsx       # Root layout with fonts & metadata
│   │   ├── page.tsx         # Main generator dashboard & SEO
│   │   ├── login/           # Authentication login page
│   │   └── signup/          # User registration page
│   ├── components/
│   │   ├── layout/          # Header, LeftPanel, RightPanel, BlogSection
│   │   └── qr-generator/    # DataForm, CustomizationPanel, QRPreview
│   ├── lib/                 # Utility functions
│   ├── store/               # Zustand state stores (qrStore, authStore)
│   └── types/               # TypeScript interfaces and QR type definitions
```
