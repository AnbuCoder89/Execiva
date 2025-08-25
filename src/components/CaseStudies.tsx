<section
  id="case-studies"
  className="relative w-full min-h-screen flex items-center justify-center bg-white"
  ref={sectionRef}
>
  <div className="container mx-auto px-4">
    <div className="w-full flex flex-col lg:flex-row items-center justify-center">
      
      {/* Left Text Block */}
      <div className="w-full lg:w-1/2 flex items-center justify-end">
        <div className="max-w-lg lg:max-w-[45rem] text-center lg:text-left">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-tight font-sf-pro-display">
            <span className="font-bold">Case Studies</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-sf-pro-text mb-8 text-justify">
            Our case studies showcase how we’ve partnered with businesses to transform their digital presence and drive remarkable growth. Through innovative AI-driven solutions, automation, and data strategies, we solve complex challenges and turn them into scalable opportunities—helping our clients adapt faster, operate smarter, and achieve measurable success.
          </p>
          <div className="pt-4">
            <Button
              variant="vision"
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
              onClick={() => navigate('/case-studies')}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Right Image Block */}
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <img
          src="/assets/images/case-studies/case-1.jpeg"
          alt="Case Studies"
          className="w-[85%] h-auto object-contain rounded-2xl"
        />
      </div>
    </div>
  </div>
</section>
