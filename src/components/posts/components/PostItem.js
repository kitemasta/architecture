import React from 'react';
import { Checkbox } from 'semantic-ui-react';

const PostItem = ({ id, title, onChange }) => {
  return (
    <div>
      <Checkbox
        id={id}
        label={title}
        onChange={() => onChange(id)}
      />
    </div>
  );
};

export default PostItem;
