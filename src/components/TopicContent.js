import React from 'react';

export const TopicContent = ({ content }) => {
  const createMarkup = () => {
    return {__html: content};
  };
  return (
    <div dangerouslySetInnerHTML={createMarkup()}/>
  );
}
