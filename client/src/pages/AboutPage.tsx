import version_1_0_0_image from "../assets/versionImages/1.0.0.png";
import version_1_0_1_image from "../assets/versionImages/1.0.1.png";

import { useState } from "react";

const AboutPage = () => {
  interface versionType {
    version: string;
    image: string;
    description: string[];
    date: string;
  }

  const versions: versionType[] = [
    {
      version: "1.0.1",
      image: version_1_0_1_image,
      description: ["wprowadzono zmiany w wyglądzie"],
      date: "03.01.2025",
    },
    {
      version: "1.0.0",
      image: version_1_0_0_image,
      description: ["tego typu"],
      date: "31.12.2024",
    },
  ];

  const [version, setVersion] = useState<string>("1.0.1");

  // selectedVersion returns the index of the selected version
  const selectedVersion = () => {
    return versions.findIndex((v) => v.version === version);
  };

  return (
    <div className="text-white w-full flex flex-col flex-1 items-center font-roboto">
      <div className="flex flex-col items-center w-full space-y-[200px]">
        <div className="space-y-10 mt-[200px]">
          {/* version div */}
          <div>
            <p className="text-4xl font-bold">
              VEXTHOJOO W. {versions[selectedVersion()].version}
            </p>
            <p className="text-2xl text-neutral-500 font-poppins">
              {versions[selectedVersion()].date}
            </p>
          </div>
          {/* description */}
          <div>
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
          <span className="font-bold text-md">popzednie wersje:</span>
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
      </div>
    </div>
  );
};

export default AboutPage;
