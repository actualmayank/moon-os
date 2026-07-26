import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/moon-os/",
  plugins: [react()],
  define: {
    "process.env": {},
  },
});
