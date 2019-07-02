import React from 'react';

const ProductImage = ({ product, products, background }) => {
  let file;
  let fileId;
  let placeholder =
    'https://placeholdit.imgix.net/~text?txtsize=69&txt=824%C3%971050&w=824&h=1050';

  let isThereAMainImage = product => {
    fileId = product.relationships.main_image.data.id;

    file = products.included.main_images.find(function(el) {
      return fileId === el.id;
    });

    return (
      (
        <img
          alt={product.name + '-' + product.description}
          src={file.link.href}
          style={{ background: background }}
        />
      ) || <img alt="placeholder" src={placeholder} />
    );
  };

  let isThereAFile = product => {
    try {
      fileId = product.relationships.files.data[0].id;
      file = products.included.files.find(function(el) {
        return fileId === el.id;
      });
      return (
        <img
          alt={product.name + ', ' + product.description}
          src={file.link.href}
          style={{ background: background }}
        />
      );
    } catch (e) {
      return <img alt="placeholder" src={placeholder} />;
    }
  };

  try {
    return isThereAMainImage(product);
  } catch (e) {
    return isThereAFile(product);
  }
};

export default ProductImage;
