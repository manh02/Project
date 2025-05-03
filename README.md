# Beauty Garage E-commerce Website

A modern e-commerce website for beauty and hair care products, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Responsive design
- Product catalog
- Shopping cart functionality
- User authentication
- Order management
- Admin dashboard

## Tech Stack

- Next.js 13+
- TypeScript
- Tailwind CSS
- Headless UI
- Heroicons
- Framer Motion

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/beauty-garage.git
cd beauty-garage
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your environment variables:
```env
NEXT_PUBLIC_API_URL=your_api_url
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
beauty-garage/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   └── ProductCard.tsx
│   ├── lib/
│   │   └── utils.ts
│   └── styles/
│       └── globals.css
├── public/
│   └── images/
├── package.json
├── tsconfig.json
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 