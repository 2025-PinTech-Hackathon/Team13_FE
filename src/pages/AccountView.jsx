import React from 'react';

const AcountView = () => {
    return (
        <main className="w-[480px] h-[100vh] flex justify-center">
            {/* 입출금 계좌 박스 */}
            <div className="w-[432px] h-[226px] rounded-[10px] border border-main bg-bg">
                <div className="w-full h-[56px] rounded-t-[10px] rounded-b-none bg-main flex items-center">
                    <p className="Pr_Re_20 text-txt-black ml-[16px]">입출금 계좌</p>
                </div>

                <div className="bg-gray2 relative h-[30px]">
                    <div className="flex justify-start">
                        <div className="w-[48px] h-[48px] rounded-full bg-sub_green m-3"><p className="text-white text-center mt-3">내돈</p></div>
                        <div className="m-3">
                            <p>최준혁</p>
                            <p>내돈은행 000000-00-000000</p>
                        </div>
                    </div>

                    <div className="absolute bottom-0 right-0">
                        43,300원
                    </div>
                </div>
            </div>

            {/*  */}
        </main>
        
    );
}

export default AcountView;