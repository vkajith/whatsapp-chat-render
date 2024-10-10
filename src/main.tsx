// src/main.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import WhatsappChatRender from './WhatsappChatRender';
import WhatsappChat from './components/WhatsappChat';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center">
            <WhatsappChatRender>
                <div className="flex flex-col gap-2">
                    <WhatsappChat message="Hi, Whatsapp message preview!" />
                </div>
            </WhatsappChatRender>
    </div>
  );
};

const container = document.getElementById('app');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
} else {
  console.error('Failed to find the root element');
}
