
import "./globals.css";


export const metadata = {
  title: "Stocktober",
  description: "Simple stock market simulation application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
