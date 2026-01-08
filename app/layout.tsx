import "./globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen p-0 m-0 flex">
        {children}
      </body>
    </html>
  );
}
