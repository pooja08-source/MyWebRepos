import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/MyWebRepos/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'TravelBooking',
        short_name: 'TravelBooking',
        description: 'Travel Booking Application',
        start_url: '/MyWebRepos/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ffffff'
      }
    })
  ]
})