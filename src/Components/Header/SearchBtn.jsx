import React from "react";

function SearchBtn({ onSearch }) {
  return (
    <>
      <div className="h-4">
        <button
          onClick={onSearch}
          className="drop-shadow-[0_-2px_16px_rgba(0,0,0,0.2)] border-none rounded-3xl h-12 font-semibold text-xl w-44 bg-indigo-500 hover:bg-fuchsia-500 text-white flex place-self-center px-13 py-2 justify-center"
        >
          SEARCH
        </button>
      </div>
    </>
  );
}

export default SearchBtn;