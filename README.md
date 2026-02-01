# Retro Web Portfolio

A retro-styled web portfolio featuring projects and contacts sections, built with React + Tailwind CSS frontend and PHP backend.

![Retro Portfolio](https://via.placeholder.com/800x400/000000/FFFFFF?text=RETRO+PORTFOLIO)

## ✨ Features

- 🎮 **Retro Design** - Pixel fonts, 8-bit style borders and shadows
- 📁 **Projects Section** - Showcase your work with retro-styled cards
- 📬 **Contact Form** - Get in touch functionality with validation
- 📱 **Responsive** - Works on all device sizes
- ⚡ **Fast** - Built with Vite for lightning-fast development

## 🛠️ Tech Stack

| Frontend | Backend |
|----------|---------|
| React 18 | PHP 8+ |
| Tailwind CSS | RESTful API |
| Vite | MySQL (optional) |

## 📁 Project Structure

```
portfolio-backend/
├── frontend/              # React + Tailwind CSS application
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
├── backend/               # PHP API
│   ├── api/
│   │   ├── projects.php
│   │   └── contact.php
│   ├── config/
│   │   ├── database.php
│   │   └── cors.php
│   └── index.php
├── .github/
│   └── copilot-instructions.md
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- PHP 8+ (for backend)
- MySQL (optional, for database)

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Start the PHP development server:
   ```bash
   php -S localhost:8000
   ```

3. API will be available at [http://localhost:8000](http://localhost:8000)

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/projects.php` | List all projects |
| GET | `/api/projects.php?id=1` | Get single project |
| POST | `/api/projects.php` | Create new project |
| GET | `/api/contact.php` | Get contact info |
| POST | `/api/contact.php` | Submit contact form |

## 🎨 Color Scheme

- **Primary**: `#FFFFFF` (White)
- **Secondary**: `#000000` (Black)

## 🔧 VS Code Tasks

Use the following tasks (Terminal → Run Task):

- **Start Frontend Dev Server** - Runs the React development server
- **Start PHP Backend Server** - Runs the PHP API server

## 📝 Customization

### Update Your Information

1. Edit `frontend/src/components/Hero.jsx` - Update the welcome message
2. Edit `frontend/src/components/Contact.jsx` - Update social links
3. Edit `backend/api/projects.php` - Add your actual projects
4. Edit `backend/api/contact.php` - Update contact details

### Database Configuration

Edit `backend/config/database.php` to configure your MySQL connection:

```php
private $host = "localhost";
private $db_name = "portfolio_db";
private $username = "root";
private $password = "";
```

## 📦 Build for Production

```bash
cd frontend
npm run build
```

The built files will be in `frontend/dist/`.

## 📄 License

MIT License - feel free to use this template for your portfolio!

---

<div align="center">
  <pre>
████████████████████████████████████
█  MADE WITH ♥ AND RETRO VIBES   █
████████████████████████████████████
  </pre>
</div>
