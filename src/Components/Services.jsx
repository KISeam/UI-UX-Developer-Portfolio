const Services = () => {
  const services = [
    {
      title: "Creative Design",
      icon: "icon-spa-solid",
      description: "There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by randomised words.",
      bgColor: "bg-secondary-light"
    },
    {
      title: "Digital Marketing",
      icon: "icon-bullseye-solid",
      description: "There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by randomised words.",
      bgColor: "bg-primary text-white"
    },
    {
      title: "Web Development",
      icon: "icon-window-restore-solid",
      description: "There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by randomised words.",
      bgColor: "bg-secondary text-white"
    }
  ];

  return (
    <section id="services" className="dtr-section py-[100px]">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="dtr-intro w-full md:w-1/2 mx-auto text-center pb-[30px]">
              <h2 className="dtr-intro__heading text-[4.067em] mb-[30px]">My Services</h2>
              <p>There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form</p>
            </div>
          </div>
          <div className="spacer h-[10px]"></div>
          
          {services.map((service, index) => (
            <div key={index} className="col-12 col-md-4 mt-[30px] md:mt-0">
              <div className={`dtr-servicebox-wrapper ${service.bgColor} animate__animated animate__fadeIn ${index === 1 ? 'animate__delay-300ms' : index === 2 ? 'animate__delay-600ms' : ''}`}>
                <div className="dtr-servicebox relative min-h-[420px] overflow-hidden p-[30px]">
                  <div className="dtr-servicebox__icon-wrapper relative w-[60px] h-[60px] z-[80] text-[32px] transition-all duration-400 ease-linear"></div>
                  <div className="dtr-servicebox__icon absolute left-[45px] top-[45px] text-[30px] leading-[30px] z-[80] transition-all duration-400 ease-linear">
                    <i className={service.icon} aria-hidden="true"></i>
                  </div>
                  <h4 className="dtr-servicebox__title absolute left-0 bottom-0 w-full p-[30px] m-0 z-[11] box-border opacity-100 transition-all duration-400 ease-linear">
                    {service.title}
                  </h4>
                  <div className="dtr-servicebox__content absolute left-0 bottom-0 w-full h-full p-[30px] box-border flex flex-col justify-end transition-transform duration-600 transform translate-y-full z-[99]">
                    <h4 className="dtr-servicebox__subtitle m-0 p-0 opacity-0">{service.title}</h4>
                    <div className="dtr-servicebox__desc mt-[20px]">{service.description}</div>
                  </div>
                  <div className="dtr-servicebox__img absolute right-[-30px] bottom-[-30px] z-[9] transition-all duration-400 ease-linear">
                    <img width="223" height="223" src={`/assets/images/shapebg${index+1}-light.png`} alt="image" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;