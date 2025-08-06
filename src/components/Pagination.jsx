

function Pagination({ currentPage, setCurrentPage, totalPages }) {
    const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };
  return (
     <div className="inline-flex justify-center items-center border border-[#BDBDBD] shadow-[0px_2px_4px_rgba(0,0,0,0.1)] rounded-md ">
        <button onClick={() => goToPage(1)} disabled={currentPage === 1}
            className="px-6 py-6 text-[#BDBDBD] text-sm font-bold border border-[#E9E9E9] bg-[#F3F3F3] 0 hover:bg-gray-100">
            First
        </button>
        {[...Array(totalPages)].map((_, i) => {
            const page = i + 1;
            return (
                <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-5 py-6  border border-[#E9E9E9] text-sm ${
                    page === currentPage ? "bg-[#23A6F0] text-white " : "text-[#23A6F0] bg-white"
                }`}
                >
                {page}
                </button>
            );
        })}
        <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-6 py-6 font-bold border border-[#E9E9E9] bg-[#F3F3F3]  hover:bg-gray-100 text-sm text-[#23A6F0]"
        >
        Next
        </button>
      </div>
  )
}

export default Pagination