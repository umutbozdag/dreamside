import SearchIcon from "./icons/search";

const Search = () => {
  return (
    <div className="flex items-center justify-between bg-neutral-50 border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700/40 shadow-md dark:shadow-neutral-900/20 rounded w-[400px]">
      <input
        className="h-10 px-4 pr-16 text-sm focus:outline-none bg-neutral-50 w-full text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 rounded"
        name="search"
        placeholder="Search"
      />
      <button className="mr-4">
        <SearchIcon className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
      </button>
    </div>
  );
};

export default Search;
