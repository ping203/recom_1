export default async function getMenuData() {
  return [
    {
      category: true,
      title: 'Dashboards',
    },
    {
      title: 'Dashboards',
      key: 'dashboards',
      icon: 'fe fe-home',
      // roles: ['admin'], // set user roles with access to this route
      count: 4,
      children: [
        {
          title: 'Root Dashboard',
          key: 'dashboard',
          url: '/dashboard/alpha',
        },
       
      ],
    },
    {
      category: true,
      title: 'SETUP',
    },
    {
      title: 'Settings',
      key: 'apps',
      icon: 'fe fe-database',
      children: [
        {
          title: 'Master Settings',
          key: 'appsProfile',
          url: '#',
        },
        {
          title: 'Email Template',
          key: 'appsCalendar',
          url: '#',
        },
        {
          title: 'SMS',
          key: 'appsGallery',
          url: '#',
        },
        {
          title: 'Payment Gateways',
          key: 'appsCart',
          url: '#',
        },
        
      ],
    },
   
    {
      title: 'ECOM',
      key: 'ecommerce',
      icon: 'fe fe-shopping-cart',
      children: [
        {
          title: 'Dashboard',
          key: 'ecommerceDashboard',
          url: '/ecommerce/dashboard',
        },
        {
          title: 'Orders',
          key: 'ecommerceOrders',
          url: '/ecommerce/orders',
        },
        {
          title: 'Propduct Catalog',
          key: 'ecommerceProductCatalog',
          url: '/ecommerce/product-catalog',
        },
        {
          title: 'Product Details',
          key: 'ecommerceProductDetails',
          url: '/ecommerce/product-details',
        },
        {
          title: 'Cart',
          key: 'ecommerceCart',
          url: '/ecommerce/cart',
        },
      ],
    },
    
  ]
}
