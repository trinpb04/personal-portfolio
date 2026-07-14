import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Pagination({ 
  totalItems, 
  itemsPerPage, 
  currentPage, 
  setItemsPerPage, 
  setCurrentPage 
}) {
  const { t } = useLanguage();
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalItems === 0) return null;

  const handlePrev = () => setCurrentPage((p) => Math.max(1, p - 1));
  const handleNext = () => setCurrentPage((p) => Math.min(totalPages, p + 1));
  const handlePageSelect = (page) => setCurrentPage(page);
  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page when changing page size
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    // Show max 5 pages buttons, centered around current if possible
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, start + 4);
    
    if (end - start < 4) {
      start = Math.max(1, end - 4);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  const pages = getPageNumbers();

  return (
    <div className="mt-10 pt-6 border-t border-card-border flex flex-col sm:flex-row items-center justify-between gap-4">
      {/* Items Per Page Selector */}
      <div className="flex items-center gap-2 text-sm text-text-secondary">
        <label htmlFor="itemsPerPage">{t.pagination.itemsPerPage}:</label>
        <select
          id="itemsPerPage"
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
          className="bg-card border border-card-border rounded-md px-2 py-1 outline-none focus:border-accent"
        >
          {[2, 3, 4, 6, 8].map(size => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="p-1.5 rounded-md hover:bg-card border border-transparent hover:border-card-border disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:border-transparent transition-colors text-text-secondary hover:text-primary"
          aria-label={t.pagination.prev}
        >
          <ChevronLeft size={20} />
        </button>
        
        <div className="flex items-center gap-1">
          {pages.map(page => (
            <button
              key={page}
              onClick={() => handlePageSelect(page)}
              className={`w-8 h-8 flex items-center justify-center rounded-md text-sm font-medium transition-colors ${
                currentPage === page
                  ? 'bg-accent text-white'
                  : 'hover:bg-card border border-transparent hover:border-card-border text-text-secondary hover:text-primary'
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="p-1.5 rounded-md hover:bg-card border border-transparent hover:border-card-border disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:border-transparent transition-colors text-text-secondary hover:text-primary"
          aria-label={t.pagination.next}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
