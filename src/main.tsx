import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Tell Prerender.io to wait until the page is fully loaded
declare global {
  interface Window {
    prerenderReady: boolean;
  }
}
window.prerenderReady = false;

createRoot(document.getElementById("root")!).render(<App />);
