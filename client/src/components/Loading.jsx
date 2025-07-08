import React from 'react';
import PropTypes from 'prop-types';

const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-10 w-10',
    lg: 'h-16 w-16',
};

const Loading = ({ size = 'md', message = 'טוען...' }) => {
    return (
        <div className="flex flex-col items-center justify-center py-8 text-gray-600">
            <div className="border-4 border-blue-300 border-t-blue-600 rounded-full animate-spi" />
            <p className="mt-4 text-sm">{message}</p>
        </div>
    );
};

Loading.propTypes = {
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    message: PropTypes.string,
};

export default Loading;
