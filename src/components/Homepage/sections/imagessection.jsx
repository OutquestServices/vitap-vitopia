import Image from "next/image";

export default function Images() {
  const imageStrapi = [
    {
      Image: {
        data: [
          { attributes: { url: "https://universitywebsitbucket.s3.ap-south-1.amazonaws.com/vitopia/vitopia+-+POWERLIFTING.png" } },
          { attributes: { url: "https://universitywebsitbucket.s3.ap-south-1.amazonaws.com/vitopia/vitopia+-+KARATE+2.png" } },
          { attributes: { url: "https://universitywebsitbucket.s3.ap-south-1.amazonaws.com/vitopia/vitopia+-+FOOTBALL.png" } },
          { attributes: { url: "https://universitywebsitbucket.s3.ap-south-1.amazonaws.com/vitopia/vitopia+-+CRICKET.png" } },
          { attributes: { url: "https://universitywebsitbucket.s3.ap-south-1.amazonaws.com/vitopia/vitopia+-+kabaddi.png" } },
          { attributes: { url: "https://universitywebsitbucket.s3.ap-south-1.amazonaws.com/vitopia/vitopia+-+CHESS.png" } },
          { attributes: { url: "https://universitywebsitbucket.s3.ap-south-1.amazonaws.com/vitopia/vitopia+-+TRIPLE+JUMP.png" } },
        ],
      },
    },
  ];

  return (
    <div className="bg-black text-white w-full h-full py-4 md:py-6 lg:py-10">
      <div className="overflow-hidden">
        <div className="lg:grid-cols-7 hidden lg:grid">
          {imageStrapi[0].Image.data.slice(0, 7).map((item, index) => (
            <div key={index} className="w-full h-24 md:h-44 lg:h-80 relative">
              <Image
                src={item.attributes.url}
                layout="fill"
                objectFit="contain"
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
                objectFit="contain"
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
                objectFit="contain"
                alt="Displayed image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
