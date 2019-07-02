const MoltinGateway = require('@moltin/sdk').gateway;

let client_id = 'j6hSilXRQfxKohTndUuVrErLcSJWP15P347L6Im0M4';

if (process.env.REACT_APP_MOLTIN_CLIENT_ID) {
  client_id = process.env.REACT_APP_MOLTIN_CLIENT_ID;
}

const Moltin = MoltinGateway({
  client_id,
  application: 'react-demo-store'
});

export const GetProducts = () =>
  Moltin.Products.With('files, main_images, collections').All();

export const GetProduct = ID => Moltin.Products.Get(ID);

export const GetCategories = () => Moltin.Categories.With('products').All();

export const GetCategory = ID => Moltin.Categories.Get(ID);

export const GetCollections = () => Moltin.Collections.With('products').All();

export const GetBrands = () => Moltin.Brands.All();

export const GetFile = ID => Moltin.Files.Get(ID);

export const AddCart = (id, quantity) => Moltin.Cart().AddProduct(id, quantity);

export const UpdateCartPlus = (ID, quantity) =>
  Moltin.Cart().UpdateItemQuantity(ID, quantity + 1);

export const UpdateCartMinus = (ID, quantity) =>
  Moltin.Cart().UpdateItemQuantity(ID, quantity - 1);

export const UpdateCart = (ID, quantity) =>
  Moltin.Cart().UpdateItemQuantity(ID, quantity);

export const GetCartItems = () => Moltin.Cart().Items();

export const Checkout = data => Moltin.Cart().Checkout(data);

export const GetOrder = ID => Moltin.Orders.Get(ID);

export const OrderPay = (ID, data) => Moltin.Orders.Payment(ID, data);

export const DeleteCart = () => Moltin.Cart().Delete();

// Mock API functions:

export const GetProductRestocks = ID => {
  // returns a list of upcoming restocking events and quantity by date, for product ID
  switch (ID) {
    // MOCKED:
    case '05033a69-bf62-4f38-a9fb-c87c5060da7f':
      return [
        {
          expected_date: '2019-07-28T04:45:51+00:00',
          quantity: 100
        },
        {
          expected_date: '2019-08-29T04:45:51+00:00',
          quantity: 200
        }
      ];
    case '996a0dd3-d83a-4391-b5aa-a28f87997027':
      return [
        {
          expected_date: '2019-05-28T04:45:51+00:00',
          quantity: 100
        },
        {
          expected_date: '2019-08-29T04:45:51+00:00',
          quantity: 200
        }
      ];
    default:
      return [];
  }
};
