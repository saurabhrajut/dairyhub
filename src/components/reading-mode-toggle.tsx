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

  body.theme-sepia {
    --background: 44 23% 85%; /* Lighter Sepia */
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
    --background: 220 13% 18%; /* Dark Slate Gray */
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
    --background: 50 33% 95%; /* Creamy Paper */
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
    --background: 140 30% 95%; /* Light Mint */
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
    --background: 220 14% 10%; /* Very Dark Blue */
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
body.theme-night .glass-card {
    background: rgba(30, 30, 40, 0.6);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.1);
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

/* ===== START: टेबल को ठीक करने के लिए यह कोड जोड़ा गया है ===== */
.table-container {
  overflow-x: auto; /* यह हॉरिजॉन्टल स्क्रॉल बार जोड़ता है */
  -webkit-overflow-scrolling: touch; /* iOS पर स्मूथ स्क्रॉलिंग के लिए */
  border: 1px solid hsl(var(--border)); /* आपकी थीम जैसा बॉर्डर */
  border-radius: var(--radius); /* आपकी थीम जैसा गोल कोना */
}

.force-wrap {
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-all; /* यह सबसे ज़रूरी है, यह किसी भी लंबे शब्द को तोड़ देता है */
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
/* ===== END: नया कोड यहाँ खत्म हुआ ===== */

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

/* ===== START: मोबाइल ओवरफ्लो के लिए फिक्स ===== */
.flex {
    min-width: 0;
}
/* ===== END: फिक्स यहाँ खत्म हुआ ===== */
