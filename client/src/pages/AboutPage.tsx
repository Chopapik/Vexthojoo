import image from "../assets/images/look.png";

const AboutPage = () => {
  return (
    <div className="text-white w-full flex flex-col flex-1 justify-center items-center font-roboto">
      <div className="space-y-10">
        <div>
          <p className="text-4xl font-bold">VEXTHOJOO V 1.0.0</p>
          <p className="text-2xl text-neutral-500">31.12.2024</p>
        </div>
        <ul>
          <li>tego typu</li>
        </ul>
        <div className="w-full flex justify-center">
          <img src={image} alt=":?!" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
