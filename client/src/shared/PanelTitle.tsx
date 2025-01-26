const PanelTitle = ({ title }: { title: string }) => {
  return (
    <div className="w-full">
      <span className="text-neutral-500 font-bold font-serif italic text-2xl ml-1 uppercase">
        {title}
      </span>
      <hr className="border-neutral-500 w-3/4 border-t-neutral-400" />
    </div>
  );
};

export default PanelTitle;
