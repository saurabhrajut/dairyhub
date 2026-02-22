@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 231 15% 95%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 231 48% 50%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 201 50% 48%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
  }
 
  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
  }

  /* ───── EXISTING THEMES ───── */

  body.theme-sepia {
    --background: 44 23% 85%;
    --foreground: 44 20% 20%;
    --card: 44 23% 90%;
    --card-foreground: 44 20% 20%;
    --primary: 39 70% 45%;
    --primary-foreground: 44 23% 98%;
    --secondary: 44 23% 92%;
    --muted: 44 23% 92%;
    --accent: 39 60% 55%;
    --border: 44 23% 75%;
    --input: 44 23% 75%;
    --ring: 39 70% 45%;
  }

  body.theme-slate {
    --background: 220 13% 18%;
    --foreground: 220 10% 80%;
    --card: 220 13% 22%;
    --card-foreground: 220 10% 85%;
    --primary: 210 40% 70%;
    --primary-foreground: 220 13% 10%;
    --secondary: 220 13% 28%;
    --muted: 220 13% 28%;
    --accent: 210 40% 60%;
    --border: 220 13% 32%;
    --input: 220 13% 32%;
    --ring: 210 40% 70%;
  }

  body.theme-paper {
    --background: 50 33% 95%;
    --foreground: 40 10% 25%;
    --card: 50 33% 98%;
    --card-foreground: 40 10% 25%;
    --primary: 35 50% 50%;
    --primary-foreground: 50 33% 98%;
    --secondary: 50 33% 92%;
    --muted: 50 33% 92%;
    --accent: 35 60% 60%;
    --border: 50 33% 85%;
    --input: 50 33% 85%;
    --ring: 35 50% 50%;
  }
  
  body.theme-mint {
    --background: 140 30% 95%;
    --foreground: 140 20% 15%;
    --card: 140 30% 98%;
    --card-foreground: 140 20% 15%;
    --primary: 150 50% 45%;
    --primary-foreground: 140 30% 98%;
    --secondary: 140 30% 92%;
    --muted: 140 30% 92%;
    --accent: 150 60% 55%;
    --border: 140 30% 85%;
    --input: 140 30% 85%;
    --ring: 150 50% 45%;
  }
  
  body.theme-night {
    --background: 220 14% 10%;
    --foreground: 220 10% 75%;
    --card: 220 14% 14%;
    --card-foreground: 220 10% 80%;
    --primary: 210 40% 65%;
    --primary-foreground: 220 14% 5%;
    --secondary: 220 14% 20%;
    --muted: 220 14% 20%;
    --accent: 210 40% 55%;
    --border: 220 14% 24%;
    --input: 220 14% 24%;
    --ring: 210 40% 65%;
  }

  /* ───── NEW THEMES ───── */

  /* 🌸 Rose — Soft warm pink, aankhon ke liye gentle */
  body.theme-rose {
    --background: 350 60% 96%;       /* very light blush pink */
    --foreground: 350 30% 20%;       /* deep rose-brown text */
    --card: 350 60% 98%;
    --card-foreground: 350 30% 20%;
    --popover: 350 60% 98%;
    --popover-foreground: 350 30% 20%;
    --primary: 350 65% 55%;          /* rose pink buttons */
    --primary-foreground: 0 0% 100%;
    --secondary: 350 40% 92%;
    --secondary-foreground: 350 30% 20%;
    --muted: 350 40% 93%;
    --muted-foreground: 350 20% 45%;
    --accent: 340 70% 65%;
    --accent-foreground: 0 0% 100%;
    --border: 350 40% 86%;
    --input: 350 40% 86%;
    --ring: 350 65% 55%;
  }

  /* 🌲 Forest — Deep dark green, low blue light, perfect night reading */
  body.theme-forest {
    --background: 150 25% 12%;       /* very dark forest green */
    --foreground: 120 15% 82%;       /* soft sage text */
    --card: 150 25% 16%;
    --card-foreground: 120 15% 85%;
    --popover: 150 25% 16%;
    --popover-foreground: 120 15% 85%;
    --primary: 140 45% 55%;          /* medium green accent */
    --primary-foreground: 150 25% 8%;
    --secondary: 150 20% 22%;
    --secondary-foreground: 120 15% 82%;
    --muted: 150 20% 20%;
    --muted-foreground: 120 10% 55%;
    --accent: 160 50% 45%;
    --accent-foreground: 0 0% 100%;
    --border: 150 20% 26%;
    --input: 150 20% 26%;
    --ring: 140 45% 55%;
  }

  /* 🍦 Cream — Warm ivory, purest eye-comfort for long reading */
  body.theme-cream {
    --background: 48 80% 97%;        /* warm ivory white */
    --foreground: 35 25% 18%;        /* dark warm brown text */
    --card: 48 80% 99%;
    --card-foreground: 35 25% 18%;
    --popover: 48 80% 99%;
    --popover-foreground: 35 25% 18%;
    --primary: 32 70% 48%;           /* amber/honey buttons */
    --primary-foreground: 48 80% 98%;
    --secondary: 45 50% 93%;
    --secondary-foreground: 35 25% 18%;
    --muted: 45 50% 93%;
    --muted-foreground: 35 15% 45%;
    --accent: 28 80% 58%;
    --accent-foreground: 0 0% 100%;
    --border: 45 35% 86%;
    --input: 45 35% 86%;
    --ring: 32 70% 48%;
  }
}
 
@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
}

.glass-card {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.dark .glass-card,
body.theme-slate .glass-card,
body.theme-night .glass-card,
body.theme-forest .glass-card {
    background: rgba(20, 35, 25, 0.6);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.08);
}

body.theme-sepia .glass-card {
    background: rgba(240, 230, 210, 0.6);
    border: 1px solid rgba(210, 190, 170, 0.3);
}
body.theme-paper .glass-card {
    background: rgba(252, 251, 244, 0.7);
    border: 1px solid rgba(240, 235, 220, 0.4);
}
body.theme-mint .glass-card {
    background: rgba(230, 250, 240, 0.7);
    border: 1px solid rgba(200, 230, 210, 0.4);
}
body.theme-rose .glass-card {
    background: rgba(255, 240, 242, 0.7);
    border: 1px solid rgba(240, 200, 210, 0.4);
}
body.theme-cream .glass-card {
    background: rgba(255, 253, 240, 0.75);
    border: 1px solid rgba(235, 220, 190, 0.4);
}


.card-enter {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

.card-enter-active {
  opacity: 1;
  transform: translateY(0);
}

pre {
  @apply whitespace-pre-wrap break-words p-4 rounded-lg border;
  background-color: hsl(var(--secondary));
  border-color: hsl(var(--border));
  overflow-x: auto;
}

pre code {
  @apply break-all;
  background-color: transparent;
  color: hsl(var(--secondary-foreground));
}

.table-container {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  border: 1px solid hsl(var(--border));
  border-radius: var(--radius);
}

.force-wrap {
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-all;
}

@keyframes text-3d-pop {
  0% {
    opacity: 0;
    transform: translateY(20px) rotateX(90deg) scale(0.8);
  }
  50% {
    transform: translateY(-5px) rotateX(0deg) scale(1.1);
  }
  100% {
    opacity: 1;
    transform: translateY(0) rotateX(0deg) scale(1);
  }
}

@keyframes fade-out {
  from { opacity: 1; }
  to { opacity: 0; }
}

@keyframes fade-in-out {
  0% { opacity: 0; }
  25% { opacity: 1; }
  75% { opacity: 1; }
  100% { opacity: 0; }
}

@keyframes draw-outline {
  to {
    stroke-dashoffset: 0;
  }
}

.flex {
    min-width: 0;
}
