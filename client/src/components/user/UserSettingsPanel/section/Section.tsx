const Section = ({
  content,
  error,
}: {
  content: React.ReactNode;
  error?: string;
}) => {
  return (
    <div className="w-[300px] xs:w-[375px] space-y-3">
      {/* Container for the main content */}
      <div className="bg-[#121212] w-full space-y-6 px-3 py-4 rounded-xl flex flex-col items-center h-fit">
        {content}
      </div>
      {/* Error message box */}
      <div
        className={`w-full h-10 bg-[#121212] rounded-xl flex items-center justify-center ${
          error ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-red-600 font-roboto font-bold text-sm">
          {error}
        </span>
      </div>
    </div>
  );
};

export default Section;
