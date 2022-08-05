/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
  {
    id: 1,
    name: 'Dynamic Wash',
    href: '#',
    imageSrc:
      'https://img.freepik.com/premium-photo/hand-man-car-wash_268174-1201.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$499',
  },
  {
    id: 2,
    name: 'Polishing',
    href: '#',
    imageSrc:
      'https://img.freepik.com/premium-photo/polishing-car-after-painting-detailing-car-from-outside-device-polishing-hands_188969-22.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$399',
  },
  {
    id: 3,
    name: 'Coating',
    href: '#',
    imageSrc:
      'https://cdn-eeeci.nitrocdn.com/jtklKqmwunZWBGmOrckyXSwbSuvViEGf/assets/static/optimized/rev-1650843/wp-content/uploads/2021/12/Red-ceramic-coated-car.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$459',
  },
  {
    id: 4,
    name: 'Clean Interior',
    href: '#',
    imageSrc:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/man-hoovering-seat-of-car-during-car-cleaning-royalty-free-image-1585677173.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$199',
  },
];

function Services() {
  return (
    <div className="">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-2 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Services;
