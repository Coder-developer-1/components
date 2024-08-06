import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Data {
  id: number;
  name: string;
  email: string;
}

const mockData: Data[] = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Doe", email: "jane@example.com" },
  { id: 3, name: "Bob Smith", email: "bob@example.com" },
  { id: 4, name: "Alice Johnson", email: "alice@example.com" },
  { id: 5, name: "Mike Brown", email: "mike@example.com" },
  { id: 6, name: "Emma Davis", email: "emma@example.com" },
  { id: 7, name: "Tom Harris", email: "tom@example.com" },
  { id: 8, name: "Linda Martin", email: "linda@example.com" },
  { id: 9, name: "David Lee", email: "david@example.com" },
  { id: 10, name: "Sophia Patel", email: "sophia@example.com" },
  { id: 11, name: "Ganesh", email: "bappa@gmail.com" },
];

const App = () => {
  const [data, setData] = useState(mockData);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const filteredData = data.filter((item) => {
    return (
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      item.email.toLowerCase().includes(filter.toLowerCase())
    );
  });

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex justify-between mb-4">
        <input
          type="search"
          value={search}
          onChange={handleSearch}
          placeholder="Search by name"
          className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2 pl-10 text-sm text-gray-700"
        />
        <select
          value={filter}
          onChange={handleFilter}
          className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2 pl-10 text-sm text-gray-700"
        >
          <option value="">Filter by email</option>
          <option value="@example.com">@example.com</option>
          <option value="@gmail.com">@gmail.com</option>
        </select>
      </div>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item) => (
            <tr key={item.id}>
              <td className="border px-4 py-2">{item.id}</td>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="disabled:opacity-50 disabled:cursor-not-allowed p-2 pl-10 text-sm text-gray-700"
        >
          <ChevronLeft size={20} />
        </button>
        <span className="text-sm text-gray-700">
          Page {currentPage} of {Math.ceil(filteredData.length / itemsPerPage)}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(filteredData.length / itemsPerPage)}
          className="disabled:opacity-50 disabled:cursor-not-allowed p-2 pl-10 text-sm text-gray-700"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default App;