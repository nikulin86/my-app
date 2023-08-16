export { default } from "next-auth/middleware"

// это приватные роуты
export const config = { matcher: ['/profile'] }