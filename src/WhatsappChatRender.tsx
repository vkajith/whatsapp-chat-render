import React from 'react';

const WhatsappChatRender: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-[url('/illustrations/iPhonePro.svg')] h-[466px] w-[313px] bg-cover">
        <div className="h-[466px] w-[313px] rounded-t-[30px]">
          <div className="flex items-center justify-between px-4 py-2 mt-[45px] ml-[18px]">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
              <span className="ml-2 text-sm font-medium text-gray-800">Contact Name</span>
            </div>
            <div className="flex items-center pr-[14px]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
          </div>
          <div className="h-[381px] w-[313px]  flex items-center justify-center pl-[28px]">
            <div 
              className="h-full w-full overflow-y-auto transition-[padding-top,padding-bottom] duration-300"
              style={{ paddingTop: '10px', paddingBottom: '10px' }}
              onScroll={(e) => {
                const target = e.target as HTMLDivElement;
                if (target.scrollTop > 0) {
                  target.style.paddingTop = '0px';
                  target.style.paddingBottom = '0px';
                } else {
                  target.style.paddingTop = '10px';
                  target.style.paddingBottom = '10px';
                }
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsappChatRender;
