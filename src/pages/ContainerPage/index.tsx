export const ContainerPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-screen bg-black  dark:bg-[#cecec0]">
      <div className="w-full h-screen p-5 flex">{children}</div>
    </div>
  );
};
