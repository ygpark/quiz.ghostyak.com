"use client";
import { countryList, CountryInfo } from "@/components/countries";
import { useState, useRef } from "react";

export default function Home() {
  const length = countryList.length;
  const index = 0;
  const capitalRef = useRef<HTMLHeadingElement>(null);
  const [isStarted, setIsStarted] = useState(false);
  const [countryInfo, setCountryInfo] = useState<CountryInfo>(
    countryList[index],
  );

  const handleStart = () => {
    // 퀴즈 시작 상태로 변경
    setIsStarted(true);

    if (capitalRef.current) {
      capitalRef.current.classList.add("hidden");
    }

    //다음 문제 랜덤으로
    const randomIndex = Math.floor(Math.random() * length);
    setCountryInfo(countryList[randomIndex]);
  };

  const handleShowAnswer = () => {
    if (capitalRef.current) {
      capitalRef.current.classList.remove("hidden");
    }
  };

  return (
    <>
      <div>
        {/* container */}
        <div className="container mx-auto p-4 ">
          <div className="flex flex-col items-center gap-4 mb-4">
            {isStarted == false && (
              <div className="min-h-20 flex items-center justify-center ">
                <h1>시작 버튼을 눌러주세요</h1>
              </div>
            )}

            {isStarted == true && (
              <div>
                <div className="min-h-20 flex items-center justify-center ">
                  <h1>{countryInfo.countryKr}</h1>
                </div>
                <div className="min-h-20 flex items-center justify-center ">
                  <h1 ref={capitalRef} className="hidden">
                    {countryInfo.capitalKr}
                  </h1>
                </div>
              </div>
            )}
          </div>

          <div className="flex gap-4 justify-center">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleShowAnswer}
            >
              보기
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleStart}
            >
              {(isStarted == true && "다음 문제") || "시작하기"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
