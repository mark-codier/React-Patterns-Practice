import { useState } from "react";
export default function SearchList({ items, itemKeyFn, children }) {
  const [searchState, setSearchState] = useState({ term: "", timeout: null });
  function handleChange(e) {
    if (searchState.timeout) {
        clearTimeout(searchState.timeout);
    }
    setSearchState((prev) => {
      return { ...prev, timeout: timer };
    });
    const timer = setTimeout(() => {
      setSearchState({ timeout: null, term: e.target.value });
    }, 1000);
  };
  const result = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchState.term.toLowerCase())
  );
  return (
    <div className="searchable-list">
      <input onChange={handleChange} type="text" placeholder="Search..." />
      <ul className="places">
        {result.map((item) => (
          <li className="place" key={itemKeyFn(item)}>
            {children(item)}
          </li>
        ))}
      </ul>
    </div>
  );
}
