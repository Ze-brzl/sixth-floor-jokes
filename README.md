# 🎭 Sixth Floor Jokes
A web application for managing and sharing jokes, developed with Next.js and TypeScript.

## ✨ Features
- **Find Jokes**: Search for jokes by identification number
- **Joke Counter**: System to count how many times each joke has been told
- **Responsive Interface**: Adaptive design for different screen sizes
- **RESTful API**: Endpoints for managing jokes

## 🚀 Technologies Used
- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: Integrated data system
- **Deploy**: Vercel (recommended)

## 📋 Prerequisites
- Node.js 18+
- npm, yarn or pnpm

## 🛠️ How to Run

### 1. Clone the repository
```bash
git clone https://github.com/Ze-brzl/sixth-floor-jokes.git
cd sixth-floor-jokes
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

### 4. Access the application
Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 How to Use
1. **Home Page**: Navigate through the application
2. **Find Joke**: Access `/find-joke` and enter the joke number
3. **New Joke**: Access `/new-joke` to add new jokes
4. **Counter**: Click "Increase count" to register that the joke was told

## 🏗️ Project Structure
```
src/
├── app/
│   ├── api/jokes/          # API endpoints for jokes
│   ├── components/         # Reusable components
│   ├── find-joke/         # Joke search page
│   ├── new-joke/          # Page to add jokes
│   └── lib/               # Utilities and configurations
├── models/                # Data models
└── globals.css           # Global styles
```

## 🔧 Available Scripts
- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run start` - Production server
- `npm run lint` - Code verification

## 🌐 Deploy

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy will be automatic with each push
3. Access: [https://vercel.com](https://vercel.com)

### Other Platforms
- **Netlify**: Compatible with Next.js
- **Railway**: Simple and fast deploy
- **AWS/GCP**: For enterprise projects

## 🤝 Contributing
1. Fork the project
2. Create a branch for your feature (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License
This project is under the MIT license. See the `LICENSE` file for more details.

## 👨‍💻 Author
**Ze-brzl** - [GitHub](https://github.com/Ze-brzl)

---
⭐ If this project helped you, consider giving it a star in the repository!
