import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const ImageOverride = ({
  src: srcSet,
  width: widthSet,
  height,
  alt,
  ...rest
}) => {
  const { basePath } = useRouter();
  const loader = ({ src, width, quality }) => {
    return `${basePath}${src}?w=${width}&q=${quality || 75}`;
  };
  return (
    <>
      <Image
        src={srcSet}
        alt={alt}
        width={widthSet}
        height={height}
        loader={loader}
        objectFit="cover"
        {...rest}
      />
    </>
  );
};

export default ImageOverride;

ImageOverride.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  alt: PropTypes.string.isRequired,
};
