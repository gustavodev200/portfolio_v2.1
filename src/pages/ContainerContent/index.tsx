export const ContainerContent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full h-full bg-inherit  dark:bg-[#cecec0] overflow-hidden">
      <div className="w-full h-screen ml-32 pt-5 pb-14 flex max-lg:ml-2">
        {children}
      </div>
    </div>
  );
};
