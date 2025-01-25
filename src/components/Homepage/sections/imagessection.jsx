import Image from "next/image";

export default function Images() {
  const imageStrapi = [
    {
      Image: {
        data: [
          { attributes: { url: "/homepage_images/image_1.jpeg" } },
          { attributes: { url: "/homepage_images/image_2.jpeg" } },
          { attributes: { url: "/homepage_images/image_3.jpeg" } },
          { attributes: { url: "/homepage_images/image_4.jpeg" } },
          { attributes: { url: "/homepage_images/image_5.jpeg" } },
          { attributes: { url: "/homepage_images/image_6.jpeg" } },
        ],
      },
    },
  ];

  return (
    <div className="bg-black text-white w-full h-full py-4 md:py-6 lg:py-10">
      <div className="overflow-hidden">
        <div className="lg:grid-cols-6 hidden lg:grid">
          {imageStrapi[0].Image.data.slice(0, 6).map((item, index) => (
            <div key={index} className="w-full h-24 md:h-44 lg:h-80 relative">
              <Image
                src={item.attributes.url}
                layout="fill"
                objectFit="cover"
                alt="Displayed image"
              />
            </div>
          ))}
        </div>
        <div className="md:grid-cols-6 hidden md:grid lg:hidden">
          {imageStrapi[0].Image.data.slice(0, 6).map((item, index) => (
            <div key={index} className="w-full h-24 md:h-44 lg:h-52 relative">
              <Image
                src={item.attributes.url}
                layout="fill"
                objectFit="cover"
                alt="Displayed image"
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-4 md:hidden">
          {imageStrapi[0].Image.data.slice(0, 4).map((item, index) => (
            <div key={index} className="w-full h-24 md:h-44 lg:h-52 relative">
              <Image
                src={item.attributes.url}
                layout="fill"
                objectFit="cover"
                alt="Displayed image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
