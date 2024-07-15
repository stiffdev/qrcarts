import Image from "next/image";

const features = [
  "Powerfull online protection.",
  "Internet without borders.",
  "Supercharged VPN",
  "No specific time limits."
]

const Feature = () => {

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <div className="flex w-full justify-end">
          <div className="h-full w-full p-4" >
            <Image
              src="/hero.gif"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </div>
        </div>
        <div>
        <div className="flex flex-col items-end justify-center ml-auto w-full max-w-3xl px-6 py-8 bg-white rounded-lg ">
      <h3 className="text-3xl lg:text-4xl font-semibold leading-tight text-gray-800">
        We Provide Many Features You Can Use
      </h3>
      <p className="mt-4 text-lg text-gray-600">
        You can explore the features that we provide with fun and have their own functions each feature.
      </p>
      <ul className="mt-8 space-y-4 text-gray-600 list-disc list-none w-full">
        {features.map((feature, index) => (
          <li className="relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-green-500" key={index}>
            {feature}
          </li>
        ))}
      </ul>
    </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;