export const ContainerPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-screen bg-[#4d5c61]  dark:bg-[#cecec0]">
      <div className="w-full h-screen p-5 flex max-lg:p-[0.20rem]">
        {children}
      </div>
    </div>
  );
};
