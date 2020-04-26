import React from 'react';
import { Link } from 'react-router-dom';
import data from "../data/mock.json";
import Fuse from "fuse.js";

export const TopicList = ({ search }) => {
  const fuzzySearch = (data, search) => {
    const fuse = new Fuse(data, {
      includeScore: true,
      threshold: 0.4,
      keys: ["title", "subtitle", "content"]
    });
    return fuse.search(search);
  }
  const resultList = fuzzySearch(data, search);

  const resultJSXList = resultList.map(({ item }) => (
    <li key={item.id}>
      <Link to={`/q/${item.id}`}><h4>{item.title}</h4></Link>
      <Link to={`/q/${item.id}`}><h5>{item.subtitle}</h5></Link>
    </li>
  ));
  return (
    <ul>{resultJSXList}</ul>
  )
}

