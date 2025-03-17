import { withAuth } from "next-auth/middleware"

export default withAuth({
  pages: {
    signIn: "/login", // Redirect ke halaman login jika tidak autentikasi
  },
})

// Tentukan route mana yang menggunakan middleware ini
export const config = {
  matcher: ["/apps/home"], // Hanya /dashboard dan sub-route-nya yang terlindungi
}
