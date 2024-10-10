import React from 'react';

const WhatsappChat: React.FC<{ message: string }> = ({ message }) => (
  <div className="flex flex-row items-start text-[13px]">
    <img
      src="/illustrations/speech-tail.svg"
      className="pt-[10px]"
      alt="Speech tail"
      style={{ transform: "scale(1.5)" }}
    />
    <div className="bg-[#F9F9F9] p-[9px] max-w-[200px] rounded-lg shadow-[0px_0.4px_0.4px_0px_rgba(0,0,0,0.20)] leading-[16px] font-normal">
      {message}
      <div className="text-right text-gray-400 mt-[4px] text-[10px]">
        11:00 AM
      </div>
    </div>
  </div>
);

export default WhatsappChat;