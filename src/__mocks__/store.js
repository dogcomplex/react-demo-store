import createHistory from 'history/createHashHistory';

export const history = createHistory();

export const store = {
  product: {
    quantity: 1
  },
  products: {
    fetching: false,
    fetched: true,
    products: {
      data: [
        {
          type: 'product',
          id: '996a0dd3-d83a-4391-b5aa-a28f87997027',
          name: 'Low Stock Product',
          slug: 'lowstock',
          sku: '4444444',
          manage_stock: true,
          description: "Example of a product that's low in stock",
          price: [
            {
              amount: 1300,
              currency: 'USD',
              includes_tax: true
            }
          ],
          status: 'live',
          commodity_type: 'physical',
          meta: {
            timestamps: {
              created_at: '2019-07-01T03:05:29+00:00',
              updated_at: '2019-07-01T23:38:59+00:00'
            },
            display_price: {
              with_tax: {
                amount: 1300,
                currency: 'USD',
                formatted: '$13.00'
              },
              without_tax: {
                amount: 1300,
                currency: 'USD',
                formatted: '$13.00'
              }
            },
            stock: {
              level: 3,
              availability: 'in-stock'
            }
          },
          relationships: {
            main_image: {
              data: {
                type: 'main_image',
                id: 'ec4359ba-471a-4229-803f-a6d2d5364abf'
              }
            }
          }
        },
        {
          type: 'product',
          id: '05033a69-bf62-4f38-a9fb-c87c5060da7f',
          name: 'Out of Stock Product',
          slug: 'product3',
          sku: '654321',
          manage_stock: true,
          description: "An example of a product that's out of stock",
          price: [
            {
              amount: 500,
              currency: 'USD',
              includes_tax: true
            }
          ],
          status: 'live',
          commodity_type: 'physical',
          meta: {
            timestamps: {
              created_at: '2019-06-28T04:45:51+00:00',
              updated_at: '2019-07-01T23:40:16+00:00'
            },
            display_price: {
              with_tax: {
                amount: 500,
                currency: 'USD',
                formatted: '$5.00'
              },
              without_tax: {
                amount: 500,
                currency: 'USD',
                formatted: '$5.00'
              }
            },
            stock: {
              level: 0,
              availability: 'out-stock'
            }
          },
          relationships: {
            main_image: {
              data: {
                type: 'main_image',
                id: 'af35c812-7aee-407f-9365-73f7939a49c2'
              }
            }
          }
        },
        {
          type: 'product',
          id: '797fe856-1840-49db-a56b-e4804e2822cc',
          name: 'Example Product',
          slug: 'test_product2',
          sku: '88899445',
          manage_stock: true,
          description: 'A description here',
          price: [
            {
              amount: 20013,
              currency: 'USD',
              includes_tax: true
            }
          ],
          status: 'live',
          commodity_type: 'digital',
          meta: {
            timestamps: {
              created_at: '2019-06-28T03:57:26+00:00',
              updated_at: '2019-07-01T23:46:50+00:00'
            },
            display_price: {
              with_tax: {
                amount: 20013,
                currency: 'USD',
                formatted: '$200.13'
              },
              without_tax: {
                amount: 20013,
                currency: 'USD',
                formatted: '$200.13'
              }
            },
            stock: {
              level: 122,
              availability: 'in-stock'
            },
            variations: [
              {
                id: '27fd1c51-07c0-455f-8023-c7847587bd9b',
                name: 'Evolution',
                options: []
              }
            ]
          },
          relationships: {
            files: {
              data: [
                {
                  type: 'file',
                  id: 'e402bc7f-a12f-4e6e-8baf-b8e3fa6b1eca'
                }
              ]
            },
            categories: {
              data: [
                {
                  type: 'category',
                  id: '96faf902-621b-4fa3-8597-bee7739fb1eb'
                },
                {
                  type: 'category',
                  id: '6568072c-67af-4a2d-968c-62bafbc45c86'
                }
              ]
            },
            collections: {
              data: [
                {
                  type: 'collection',
                  id: 'c6836998-61c3-4e9a-8264-7e2f49fdf83a'
                }
              ]
            },
            brands: {
              data: [
                {
                  type: 'brand',
                  id: 'dd7e249d-ae50-4e6e-a5b1-d077ff569cdc'
                }
              ]
            },
            variations: {
              data: [
                {
                  type: 'product-variation',
                  id: '27fd1c51-07c0-455f-8023-c7847587bd9b'
                }
              ]
            },
            main_image: {
              data: {
                type: 'main_image',
                id: '6bfb0986-b5c7-41d0-9381-1d6c8a8edd8f'
              }
            }
          }
        }
      ],
      included: {
        collections: [
          {
            id: 'c6836998-61c3-4e9a-8264-7e2f49fdf83a',
            type: 'collection',
            status: 'live',
            name: 'Top Picks',
            slug: 'top_picks',
            description: 'So it works',
            meta: {
              timestamps: {
                created_at: '2019-06-27T04:38:40+00:00',
                updated_at: '2019-06-28T04:01:53+00:00'
              }
            },
            relationships: {
              products: {
                data: [
                  {
                    type: 'product',
                    id: '797fe856-1840-49db-a56b-e4804e2822cc'
                  }
                ]
              }
            }
          }
        ],
        main_images: [
          {
            type: 'file',
            id: 'ec4359ba-471a-4229-803f-a6d2d5364abf',
            link: {
              href:
                'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/dc91aaed-b28c-4f17-9e9a-5e97aeb6223b/ec4359ba-471a-4229-803f-a6d2d5364abf.jpg'
            },
            file_name: 'bedroom-table-lamps-600x600.jpg',
            mime_type: 'image/jpeg',
            file_size: 26198,
            public: true,
            meta: {
              dimensions: {
                width: 600,
                height: 600
              },
              timestamps: {
                created_at: '2019-07-01T23:38:59.02Z'
              }
            },
            links: {
              self:
                'https://api.moltin.com/v2/files/ec4359ba-471a-4229-803f-a6d2d5364abf'
            }
          },
          {
            type: 'file',
            id: 'af35c812-7aee-407f-9365-73f7939a49c2',
            link: {
              href:
                'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/dc91aaed-b28c-4f17-9e9a-5e97aeb6223b/af35c812-7aee-407f-9365-73f7939a49c2.jpg'
            },
            file_name: 'contemporary-bedside-lamps-600x630.jpg',
            mime_type: 'image/jpeg',
            file_size: 28173,
            public: true,
            meta: {
              dimensions: {
                width: 600,
                height: 630
              },
              timestamps: {
                created_at: '2019-07-01T23:38:06.044Z'
              }
            },
            links: {
              self:
                'https://api.moltin.com/v2/files/af35c812-7aee-407f-9365-73f7939a49c2'
            }
          },
          {
            type: 'file',
            id: '6bfb0986-b5c7-41d0-9381-1d6c8a8edd8f',
            link: {
              href:
                'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/dc91aaed-b28c-4f17-9e9a-5e97aeb6223b/6bfb0986-b5c7-41d0-9381-1d6c8a8edd8f.jpg'
            },
            file_name: '41dqcrp6YwL._SR500,500_.jpg',
            mime_type: 'image/jpeg',
            file_size: 10451,
            public: true,
            meta: {
              dimensions: {
                width: 500,
                height: 500
              },
              timestamps: {
                created_at: '2019-07-01T23:38:30.681Z'
              }
            },
            links: {
              self:
                'https://api.moltin.com/v2/files/6bfb0986-b5c7-41d0-9381-1d6c8a8edd8f'
            }
          }
        ],
        files: [
          {
            type: 'file',
            id: 'e402bc7f-a12f-4e6e-8baf-b8e3fa6b1eca',
            link: {
              href:
                'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/dc91aaed-b28c-4f17-9e9a-5e97aeb6223b/e402bc7f-a12f-4e6e-8baf-b8e3fa6b1eca.jpg'
            },
            file_name:
              'bulbasaur___ivysaur___venusaur_by_mrredbutcher-d7bkmey.jpg',
            mime_type: 'image/jpeg',
            file_size: 93272,
            public: true,
            meta: {
              dimensions: {
                width: 1032,
                height: 774
              },
              timestamps: {
                created_at: '2019-06-28T04:01:08.087Z'
              }
            },
            links: {
              self:
                'https://api.moltin.com/v2/files/e402bc7f-a12f-4e6e-8baf-b8e3fa6b1eca'
            }
          }
        ]
      },
      links: {
        current:
          'https://api.moltin.com/v2/products?page[limit]=100&page[offset]=0&include=files, main_images, collections',
        first:
          'https://api.moltin.com/v2/products?page[limit]=100&page[offset]=0&include=files, main_images, collections',
        last: null
      },
      meta: {
        results: {
          total: 3
        },
        page: {
          limit: 100,
          offset: 0,
          current: 1,
          total: 1
        }
      }
    },
    error: null
  },
  collections: {
    fetching: false,
    fetched: false,
    collections: null,
    error: null
  },
  cart: {
    cart: {
      data: [
        {
          id: '56d2dfac-7f0d-4715-afa4-cea7835eaeb8',
          type: 'cart_item',
          product_id: '996a0dd3-d83a-4391-b5aa-a28f87997027',
          name: 'Low Stock Product',
          description: "Example of a product that's low in stock",
          sku: '4444444',
          image: {
            mime_type: 'image/jpeg',
            file_name: 'bedroom-table-lamps-600x600.jpg',
            href:
              'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/dc91aaed-b28c-4f17-9e9a-5e97aeb6223b/ec4359ba-471a-4229-803f-a6d2d5364abf.jpg'
          },
          quantity: 3,
          manage_stock: true,
          unit_price: {
            amount: 1300,
            currency: 'USD',
            includes_tax: true
          },
          value: {
            amount: 3900,
            currency: 'USD',
            includes_tax: true
          },
          links: {
            product:
              'https://api.moltin.com/v2/products/996a0dd3-d83a-4391-b5aa-a28f87997027'
          },
          meta: {
            display_price: {
              with_tax: {
                unit: {
                  amount: 1300,
                  currency: 'USD',
                  formatted: '$13.00'
                },
                value: {
                  amount: 3900,
                  currency: 'USD',
                  formatted: '$39.00'
                }
              },
              without_tax: {
                unit: {
                  amount: 1300,
                  currency: 'USD',
                  formatted: '$13.00'
                },
                value: {
                  amount: 3900,
                  currency: 'USD',
                  formatted: '$39.00'
                }
              },
              tax: {
                unit: {
                  amount: 0,
                  currency: 'USD',
                  formatted: '$0.00'
                },
                value: {
                  amount: 0,
                  currency: 'USD',
                  formatted: '$0.00'
                }
              }
            },
            timestamps: {
              created_at: '2019-07-01T23:45:19Z',
              updated_at: '2019-07-01T23:45:31Z'
            }
          }
        },
        {
          id: '96e57aff-1fe2-4c8f-81b4-446b881ffafd',
          type: 'cart_item',
          product_id: '797fe856-1840-49db-a56b-e4804e2822cc',
          name: 'Example Product',
          description: 'A description here',
          sku: '88899445',
          image: {
            mime_type: 'image/jpeg',
            file_name: '41dqcrp6YwL._SR500,500_.jpg',
            href:
              'https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/dc91aaed-b28c-4f17-9e9a-5e97aeb6223b/6bfb0986-b5c7-41d0-9381-1d6c8a8edd8f.jpg'
          },
          quantity: 1,
          manage_stock: true,
          unit_price: {
            amount: 20013,
            currency: 'USD',
            includes_tax: true
          },
          value: {
            amount: 20013,
            currency: 'USD',
            includes_tax: true
          },
          links: {
            product:
              'https://api.moltin.com/v2/products/797fe856-1840-49db-a56b-e4804e2822cc'
          },
          meta: {
            display_price: {
              with_tax: {
                unit: {
                  amount: 20013,
                  currency: 'USD',
                  formatted: '$200.13'
                },
                value: {
                  amount: 20013,
                  currency: 'USD',
                  formatted: '$200.13'
                }
              },
              without_tax: {
                unit: {
                  amount: 20013,
                  currency: 'USD',
                  formatted: '$200.13'
                },
                value: {
                  amount: 20013,
                  currency: 'USD',
                  formatted: '$200.13'
                }
              },
              tax: {
                unit: {
                  amount: 0,
                  currency: 'USD',
                  formatted: '$0.00'
                },
                value: {
                  amount: 0,
                  currency: 'USD',
                  formatted: '$0.00'
                }
              }
            },
            timestamps: {
              created_at: '2019-07-01T23:47:20Z',
              updated_at: '2019-07-01T23:47:20Z'
            }
          }
        }
      ],
      meta: {
        display_price: {
          with_tax: {
            amount: 23913,
            currency: 'USD',
            formatted: '$239.13'
          },
          without_tax: {
            amount: 23913,
            currency: 'USD',
            formatted: '$239.13'
          },
          tax: {
            amount: 0,
            currency: 'USD',
            formatted: '$0.00'
          }
        },
        timestamps: {
          created_at: '2019-07-01T23:45:19Z',
          updated_at: '2019-07-01T23:47:20Z'
        }
      }
    },
    fetching: false,
    fetched: true,
    error: null,
    empty: false,
    newQuantity: true,
    counter: 4
  },
  categories: {
    fetching: false,
    fetched: false,
    categories: null,
    error: null
  },
  checkout: {
    form: null,
    error: null
  },
  styles: {
    style: 'Bright',
    header: 'Bright',
    error: null
  },
  payments: {
    processing: false,
    complete: false,
    error: null
  },
  router: {
    location: {
      pathname: '/product/996a0dd3-d83a-4391-b5aa-a28f87997027',
      search: '',
      hash: ''
    }
  },
  form: {}
};

export default store;
