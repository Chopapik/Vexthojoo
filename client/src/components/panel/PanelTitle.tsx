const PanelTitle = ({ title }: { title: string }) => {
  return (
    <div className="w-full h-fit space-y-[1px] ">
      <span className="text-neutral-700 font-bold font-times italic text-2xl uppercase leading-none">
        {title}
      </span>
      <hr className="border-neutral-700 w-full sm:max-w-[270px] border-t-neutral-700" />
    </div>
  );
};

export default PanelTitle;
