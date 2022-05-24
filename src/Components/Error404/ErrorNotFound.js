import React from 'react';
import errorImg from '../../images/error.png'

const ErrorNotFound = () => {
    return (
        <div>
            <div className="flex flex-wrap justify-center bg-cyan-400">
                <img
                    src={errorImg}
                    className="max-w-sm h-auto"
                    alt=""
                />
            </div>
        </div>
    );
};

export default ErrorNotFound;