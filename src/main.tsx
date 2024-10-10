// src/main.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'  // Add this line
import { WhatsappChatRender, WhatsappChat } from 'whatsapp-chat-render';


const App = () => {
  return (
    <div>
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
