import version_1_0_0_image from "../assets/versionImages/1.0.0.png";
import version_1_1_0_image from "../assets/versionImages/1.1.0.png";
import version_1_2_image from "../assets/versionImages/1.2.png";

import { useState } from "react";

const WhatsNewPage = () => {
  interface versionType {
    version: string;
    image: string;
    description: string[];
    date: string;
  }

  const versions: versionType[] = [
    {
      version: "1.2",
      image: version_1_2_image,
      description: ["przebudowano layout strony"],
      date: "26.01.2025",
    },
    {
      version: "1.1",
      image: version_1_1_0_image,
      description: [
        "poprawki w interfejsie",
        "poprawki w wyświetlaniu błedów",
        "zaktualizowano zabezpieczenia",
      ],
      date: "07.01.2025",
    },
    {
      version: "1.0",
      image: version_1_0_0_image,
      description: ["tego typu", "pierwsza iteracja wersji beta aplikacji"],
      date: "31.12.2024",
    },
  ];

  const [version, setVersion] = useState<string>("1.2");

  // selectedVersion returns the index of the selected version
  const selectedVersion = () => {
    return versions.findIndex((v) => v.version === version);
  };

  return (
    <div className="flex-1 flex flex-col items-center mt-15 text-white p-10 space-y-14">
      <div className="space-y-5">
        {/* version div */}
        <div>
          <p className="text-4xl font-bold">
            VEXTHOJOO β {versions[selectedVersion()].version}
          </p>
          <p className="text-2xl text-neutral-500 font-poppins">
            {versions[selectedVersion()].date}
          </p>
        </div>

        {/* description */}
        <div className="ml-5">
          <span className="font-bold text-md">Co nowego?</span>
          <ul className="space-y-2 list-disc text-sm pl-6">
            {versions[selectedVersion()].description.map(
              (description, descriptionIndex) => (
                <li key={descriptionIndex}>{description}</li>
              )
            )}
          </ul>
        </div>
        <div className="w-full flex justify-center">
          <img src={versions[selectedVersion()].image} alt=":?!" />
        </div>
      </div>
      <div className="flex flex-col items-center space-y-5">
        <span className="font-bold text-md">poprzednie wersje:</span>
        <select
          onChange={(e) => setVersion(e.target.value)}
          className="w-[200px] outline-none bg-transparent border-b-2 border-white text-white text-center"
        >
          {versions.map((version, key) => (
            <option
              key={key}
              value={version.version}
              className="bg-transparent text-black"
            >
              {version.version}
            </option>
          ))}
        </select>
      </div>
      <span className="text-neutral-500 italic ">
        Strona jest w wersji beta. Mogą wystąpić błędy.
      </span>
    </div>
  );
};

export default WhatsNewPage;
