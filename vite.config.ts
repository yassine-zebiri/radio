import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";


const manifestForPlugIn:any = {
  registerType:'prompt',
  includeAssests:['favicon.ico', "apple-touc-icon.png", "masked-icon.svg"],
  manifest:{
    name:"radio App",
    short_name:"radio-app",
    description:"تطبيق لاذاعة",
    icons:[{
      src: '/icon.svg',
      sizes:'192x192',
      type:'image/svg+xml',
      purpose:'favicon'
    },
    {
      src:'/icon.svg',
      sizes:'512x512',
      type:'image/svg+xml',
      purpose:'favicon'
    },
    {
      src: '/icon.svg',
      sizes:'180x180',
      type:'image/svg+xml',
      purpose:'apple touch icon',
    },
    {
      src: '/icon.svg',
      sizes:'512x512',
      type:'image/svg+xml',
      purpose:'any maskable',
    }
  ],
  theme_color:'#171717',
  background_color:'#f0e7db',
  display:"standalone",
  scope:'/',
  start_url:"/radio",
  orientation:'portrait'
  }
}







// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),VitePWA(manifestForPlugIn)],
  base:""
})
