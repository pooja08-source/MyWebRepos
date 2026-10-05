import { useState } from "react";
import { packages } from "../data/packagesData";
import PackageCard from "./PackageCard";
import SearchBar from "./SearchBar";
import FilterPanel from "./FilterPanel";
import "./components.css";

function PackageList() {
  const [filteredPackages, setFilteredPackages] =
    useState(packages);

  return (
    <div className="package-list">

      <h2>Explore Our Destinations</h2>

      <SearchBar
        packages={packages}
        onFilter={setFilteredPackages}
      />

      <FilterPanel
        packages={packages}
        onFilter={setFilteredPackages}
      />

      <div className="packages-grid">
        {filteredPackages.map((pkg) => (
          <PackageCard
            key={pkg.id}
            pkg={pkg}
          />
        ))}
      </div>

    </div>
  );
}

export default PackageList;