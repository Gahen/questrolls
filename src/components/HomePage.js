import React, { useState } from 'react';
import { TopicList } from "./TopicList"

export const HomePage = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <h1>Qué tema quieres buscar</h1>
      <input type="text" name="topic" value={search} onChange={(e) => setSearch(e.target.value)} />
      <TopicList search={search} />
    </div>
  );
}
