import { useEffect, useMemo, useState } from "react";
import { packages } from "../data/packagesData";

function usePackages() {
  const [packageData, setPackageData] = useState([]);
  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState(0);
  const [maxDuration, setMaxDuration] = useState(0);
  const [minRating, setMinRating] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setPackageData(packages);
    setLoading(false);
  }, []);

  const filteredPackages = useMemo(() => {
    return packageData.filter((p) => {
      const matchSearch =
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.destination.toLowerCase().includes(search.toLowerCase());

      const duration = parseInt(p.duration);

      const matchPrice = maxPrice ? p.price <= maxPrice : true;
      const matchDuration = maxDuration ? duration <= maxDuration : true;
      const matchRating = p.rating >= minRating;

      return matchSearch && matchPrice && matchDuration && matchRating;
    });
  }, [packageData, search, maxPrice, maxDuration, minRating]);

  return {
    packages: packageData,
    filteredPackages,
    search,
    setSearch,
    maxPrice,
    setMaxPrice,
    maxDuration,
    setMaxDuration,
    minRating,
    setMinRating,
    loading,
  };
}

export default usePackages;