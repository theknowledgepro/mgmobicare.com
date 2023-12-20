import Image from 'next/image';
import React from 'react';

const ImageTag = (props) => {
	return <Image {...props} height={400} width={400} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', ...props?.style }} />;
};

export default ImageTag;
