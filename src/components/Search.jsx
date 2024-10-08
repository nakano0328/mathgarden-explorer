import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // ここに検索ロジックを実装します
    console.log('Searching for:', searchTerm);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center">
      <Input
        type="text"
        placeholder="サイト内検索..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mr-2"
      />
      <Button type="submit" size="icon">
        <SearchIcon className="h-4 w-4" />
      </Button>
    </form>
  );
};

export default Search;