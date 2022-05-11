import React from 'react';
import SuperInputText from '../common/c1-SuperInputText/SuperInputText';
import SuperCheckbox from '../common/c3-SuperCheckbox/SuperCheckbox';
import SuperEditableSpan from '../common/c4-SuperEditableSpan/SuperEditableSpan';
import SuperButton from '../common/c2-SuperButton/SuperButton';

export const TestPage = () => {
  return (
    <>
      <div>TestPage</div>
      <SuperEditableSpan value={'super editable span'} />
      <SuperInputText />
      <SuperCheckbox>check</SuperCheckbox>
      <SuperButton onClick={() => alert('hi')}>button</SuperButton>
    </>
  );
};
