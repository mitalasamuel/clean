// app/layout.js
import "./global.css";
export default function StyledRootLayout({ children }) {
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  )
}