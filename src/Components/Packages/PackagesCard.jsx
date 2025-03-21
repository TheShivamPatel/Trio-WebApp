import React, { useState } from "react";

function PackageCard({ packageData }) {
  return (
    <div className="rounded-md">
      <div className="relative min-w-40 h-70 rounded-md shadow-lg">
      <img
        src={packageData.image}
        alt={packageData.name}
        className=" h-full w-full object-cover"
      />
      <div className="absolute  h-23 bottom-0 left-0 right-0 bg-black opacity-75 text-white p-3">
        <h3 className="text-md font-bold">{packageData.name}</h3>
        {packageData.price && <p className="text-xs">Starting at {packageData.price} Per person</p>}
      </div>
      </div>
    </div>
  );
}

function Packages() {
  const [searchTerm, setSearchTerm] = useState("");
  const packages = [
    { name: "Thailand", price: "₹59,700", image: "https://images.unsplash.com/photo-1643967377110-c17a5ddf14f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Maldives", price: "₹1,06,300", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Sri Lanka", price: "₹69,000", image: "https://plus.unsplash.com/premium_photo-1728752327220-b739a960efec?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Vietnam", price: "₹11,700", image: "https://images.unsplash.com/photo-1588497840684-5ee30964bef4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Almaty", price: "₹65,300", image: "https://images.unsplash.com/photo-1588497876452-306b53a300bb?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Hong Kong", price: "18,000", image: "https://plus.unsplash.com/premium_photo-1697730180268-074f29522eab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Malaysia", price: "₹53,000", image: "https://images.unsplash.com/photo-1528228953047-fb292ecb300f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Seychelles", price: "23,000", image: "https://images.unsplash.com/photo-1696087636176-b689cb60b9b1?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
  ];

  const filteredPackages = packages.filter((pkg) =>
    pkg.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-3">
      <h2 className="text-2xl text-gray-700 pl-10 font-bold">Travel Packages</h2>
      <input
        type="text"
        placeholder="Search destination..."
        className="w-1/2 flex  place-self-center p-2 my-12 border rounded-lg"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="flex gap-2 pl-10 overflow-x-auto mt-4 scrollbar-hide">
        {filteredPackages.length > 0 ? (
          filteredPackages.map((pkg, index) => <PackageCard key={index} packageData={pkg} />)
        ) : (
          <p className="text-gray-500">No packages found</p>
        )}
      </div>
    </div>
  );
}

export default Packages;
