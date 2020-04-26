import React from 'react';
import data from "../data/mock.json";
import {
  useParams
} from "react-router-dom";
import { TopicContent } from './TopicContent';

export const TopicPage = () => {
  const { topicId } = useParams();
  const { content, title, subtitle } = data.find(item => item.id === topicId);

  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <TopicContent content={content} />
    </div>
  );
}
