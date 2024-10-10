# WhatsApp Chat Render

WhatsApp Chat Render is a React component library that allows you to easily create and display WhatsApp-style chat interfaces in your web applications.

## Features

- Realistic WhatsApp chat UI
- Customizable chat messages
- Scrollable chat container with dynamic padding
- Responsive design that works on various screen sizes

## Installation

To install WhatsApp Chat Render, run the following command:

```bash
npm install whatsapp-chat-render
```

## Usage

To use WhatsApp Chat Render in your project, follow these steps:

1. Import the component into your React application:

```tsx
import { WhatsAppChatRender } from 'whatsapp-chat-render';
```

2. Use the component in your JSX:

```tsx
<WhatsAppChatRender>
  <div className="flex flex-col gap-2">
    <WhatsAppChat message="Hi, Whatsapp message preview!" />
  </div>
</WhatsAppChatRender>
```

