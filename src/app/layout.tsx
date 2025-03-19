import type { Metadata } from 'next'
import './styles.css'

export const metadata: Metadata = {
  title: 'Bolt AI - The Future of AI',
  description: 'Bolt AI is revolutionizing how we interact with artificial intelligence. Powerful, intuitive, and designed for the future.',
  keywords: 'AI, artificial intelligence, machine learning, competition, innovation',
  authors: [{ name: 'Bolt AI Team' }],
  openGraph: {
    title: 'Bolt AI - The Future of AI',
    description: 'Join the Bolt AI revolution and be part of the next generation of artificial intelligence innovation.',
    url: 'https://boltai.com',
    siteName: 'Bolt AI',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bolt AI - The Future of AI',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bolt AI - The Future of AI',
    description: 'Join the Bolt AI revolution and be part of the next generation of artificial intelligence innovation.',
    images: ['/twitter-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
