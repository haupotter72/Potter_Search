const SearchedItemTemplate = ({ data }) => {
  function createMarkup(html) {
    return { __html: html };
  }
  return (
    <div className="flex flex-col py-3 max-w-[700px]">
      <div
        className="group cursor-pointer"
        onClick={() => window.open(data.link, "_blank")}
      >
        <div className="text-sm truncate text-sky-800">{data.formattedUrl}</div>
        <div className="group-hover:underline pt-2 text-xl text-indigo-700">
          {data.title}
        </div>
      </div>

      <div
        className="text-sm text-zinc-900 leading-6 pt-1"
        dangerouslySetInnerHTML={createMarkup(data.htmlSnippet)}
      />
    </div>
  );
};

export default SearchedItemTemplate;
