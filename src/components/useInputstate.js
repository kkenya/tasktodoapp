import React, { useState } from 'react';

const useInputstate = () => {
	const [value, setValue] = useState('');

	return {
		value,
		onChange: event => {
			setValue(event.target.value);
		},
	};
}

export default useInputstate;
