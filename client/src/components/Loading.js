import React from 'react';
import { ClipLoader } from 'react-spinners';

const Loading = (props) => {
    return (
            <ClipLoader
                sizeUnit={"px"}
                size={100}
                color={'#4A90E2'}
                loading={props.loading}
            />
    );
};

export default Loading;