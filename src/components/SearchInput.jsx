import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";

import MicIcon from "../assets/mic.svg";
import ImageIcon from "../assets/image.svg";

const SearchInput = () => {
  const { query, startIndex } = useParams();
  const [searchQuery, setSearchQuery] = useState(query || "");
  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && searchQuery.length > 0) {
      navigate(`/${searchQuery}/${1}`);
    }
  };
  return (
    <div
      className="h-[46px] w-full md:w-[584px] flex items-center gap-3 px-4 border border-sky-400  font-mono rounded-3xl
        hover:bg-white hover:shadow-c hover:border-0  "
      id="searchBox"
    >
      <AiOutlineSearch size={18} color="blue" />
      <input
        type="text"
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyUp={searchQueryHandler}
        value={searchQuery}
        autoFocus
        className="grow outline-0 text-red-800"
      />
      <div className="flex items-center gap-3">
        {searchQuery && (
          <IoMdClose
            size={24}
            color="blue"
            className="cursor-pointer"
            onClick={() => setSearchQuery("")}
          />
        )}
        <img className="h-6 w-6 cursor-pointer" src={MicIcon} />
        <img className="h-6 w-6 cursor-pointer" src={ImageIcon} />
      </div>
    </div>
  );
};

export default SearchInput;
