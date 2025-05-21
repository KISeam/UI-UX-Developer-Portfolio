const Clients = () => {
  const clients = [
    { id: 1, logo: "/assets/images/client-1.png", name: "Danshur" },
    { id: 2, logo: "/assets/images/client-2.png", name: "Aumn" },
    { id: 3, logo: "/assets/images/client-3.png", name: "Ministry of Motion" },
    { id: 4, logo: "/assets/images/client-4.png", name: "Foundant Factory" }
  ];

  return (
    <section className="py-[100px]">
      <div className="container">
        <div className="text-center mb-[50px]">
          <h2 className="text-[4.067em]">My Clients</h2>
          <p className="max-w-2xl mx-auto">
            There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {clients.map((client) => (
            <div key={client.id} className="h-[200px] flex items-center justify-center bg-secondary-light relative group">
              <img src={client.logo} alt={client.name} className="max-h-[80px]" />
              <div className="absolute inset-0 bg-secondary text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <h5 className="text-xl font-bold">{client.name}</h5>
                <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur adipiscing</p>
                <a href="#" className="absolute bottom-4 right-4 text-white">
                  <i className="icon-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;