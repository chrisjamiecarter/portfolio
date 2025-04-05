const Jumbotron = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="py-3 min-h-svh animate-bganimation overflow-hidden"
      style={{
        background:
          "linear-gradient(136deg, rgb(68, 132, 206), rgb(26, 215, 192), rgb(255, 155, 17), rgb(155, 89, 182), rgb(255, 127, 127), rgb(236, 240, 241))",
        backgroundSize: "1200% 1200%",
      }}>
      <div id="stars"></div>
      {children}
    </div>
  );
};

export default Jumbotron;
