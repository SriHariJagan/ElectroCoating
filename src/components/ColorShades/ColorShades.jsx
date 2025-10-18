import React, { useState, useMemo } from "react";
import styles from "./ColorShades.module.css";
import { colorShadeColors } from "../../data";

const COLORS_PER_PAGE = 49;

export default function ColorShades() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Compute categories
  const categories = useMemo(
    () => ["All", ...new Set(colorShadeColors.map((c) => c.category))],
    []
  );

  // Map category to first color in that category for consistent button colors
  const categoryColors = useMemo(() => {
    const map = {};
    colorShadeColors.forEach((c) => {
      if (!map[c.category]) map[c.category] = c.code;
    });
    return map;
  }, []);

  // Determine readable text color based on background
  const getTextColor = (hex) => {
    if (!hex) return "#fff";
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.6 ? "#111" : "#fff";
  };

  // Normalize string for comparisons
  const normalize = (str) => str.toLowerCase().replace(/\s+/g, " ").trim();

  // Filter colors by category and search term
  const filteredColors = useMemo(() => {
    const normalizedSearch = normalize(searchTerm);
    return colorShadeColors.filter((c) => {
      const normalizedName = normalize(c.name);
      const normalizedCategory = normalize(c.category);

      const matchesCategory =
        selectedCategory === "All"
          ? true
          : normalizedCategory === normalize(selectedCategory);

      const matchesSearch = normalizedName.includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);


  

  // Pagination
  const totalPages = Math.ceil(filteredColors.length / COLORS_PER_PAGE);
  const paginatedColors = filteredColors.slice(
    (currentPage - 1) * COLORS_PER_PAGE,
    currentPage * COLORS_PER_PAGE
  );

  // Copy color code to clipboard
  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    alert(`${code} copied to clipboard!`);
  };

  // Handle category selection
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  // Handle pagination
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Highlight matched search term
  const highlightMatch = (name) => {
    if (!searchTerm) return name;
    const normalizedSearch = normalize(searchTerm);
    const regex = new RegExp(`(${normalizedSearch.split(" ").join("|")})`, "gi");
    return name.split(regex).map((part, idx) =>
      regex.test(part) ? (
        <span key={idx} className={styles.highlight}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Explore Our Premium Color Shades</h2>
      <p className={styles.subtitle}>
        Click a color to copy its code. Filter by category or search by name.
      </p>

      {/* Search */}
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search color..."
          className={styles.searchInput}
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      {/* Category Filter */}
      <div className={styles.filter}>
        {categories.map((cat) => {
          const catColor = cat === "All" ? "#facc15" : categoryColors[cat] || "#ccc";
          const textColor = selectedCategory === cat ? getTextColor(catColor) : "#ccc";

          return (
            <button
              key={cat}
              style={{
                backgroundColor: selectedCategory === cat ? catColor : "#1a1a1a",
                color: textColor,
                borderColor: catColor,
              }}
              className={styles.filterBtn}
              onClick={() => handleCategoryChange(cat)}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Color Grid */}
      <div className={styles.grid}>
        {paginatedColors.length > 0 ? (
          paginatedColors.map((shade) => (
            <div key={`${shade.category}-${shade.code}`} className={styles.cardWrapper}>
              <div
                className={styles.card}
                style={{ backgroundColor: shade.code, color: getTextColor(shade.code) }}
                onClick={() => handleCopy(shade.code)}
                title={`Click to copy ${shade.code}`}
              >
                <span className={styles.code}>{shade.code}</span>
                <span className={styles.name}>{highlightMatch(shade.name)}</span>
              </div>
            </div>
          ))
        ) : (
          <div className={styles.noResults}>
            No colors found in {selectedCategory} matching "{searchTerm}".
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button
            className={styles.pageBtn}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`${styles.pageBtn} ${currentPage === page ? styles.activePage : ""}`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}

          <button
            className={styles.pageBtn}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
}
