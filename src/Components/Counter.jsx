import React, { useEffect, useRef, useState } from 'react';

const Counter = () => {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);
  const [years, setYears] = useState(0);
  const [awards, setAwards] = useState(0);

  // Intersection Observer to trigger counting
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Count-up animation logic
  useEffect(() => {
    if (startCount) {
      let startYears = 0;
      let startAwards = 0;
      const duration = 1600;
      const frameRate = 30;
      const totalFrames = duration / frameRate;
      const yearsTarget = 20;
      const awardsTarget = 7;

      const interval = setInterval(() => {
        startYears += yearsTarget / totalFrames;
        startAwards += awardsTarget / totalFrames;
        setYears(Math.ceil(startYears));
        setAwards(Math.ceil(startAwards));

        if (startYears >= yearsTarget && startAwards >= awardsTarget) {
          clearInterval(interval);
        }
      }, frameRate);
    }
  }, [startCount]);

  return (
    <section
      ref={sectionRef}
      className="dtr-section py-[100px] bg-[#f5eae6]"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row text-center md:text-left justify-between items-start gap-12">
          {/* Column 1 */}
          <div className="w-full md:w-1/3">
            <h6 className="mt-[35px] text-lg leading-relaxed text-[#4A060D]">
              Love to create one-of-a-kind websites that deliver meaningful digital experiences and have thoughtful design.
            </h6>
          </div>

          {/* Column 2 */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative min-w-[200px] text-center">
              <p className="text-[180px] font-bold text-[#4A060D] leading-none">
                {years}
              </p>
              <h6 className="absolute top-1/2 left-0 w-full text-[15px] bg-[#f5eae6] text-[#333] px-2 py-1 transform -translate-y-[45%]">
                Years Experience
              </h6>
            </div>
          </div>

          {/* Column 3 */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative min-w-[200px] text-center">
              <p className="text-[180px] font-bold text-[#4A060D] leading-none">
                {awards}
              </p>
              <h6 className="absolute top-1/2 left-0 w-full text-[15px] bg-[#f5eae6] text-[#333] px-2 py-1 transform -translate-y-[45%]">
                Best Design Awards
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
