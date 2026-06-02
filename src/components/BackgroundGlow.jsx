export const BackgroundGlow = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Glow Blob 1 - Top Left/Center */}
      <div 
        className="absolute top-[-10%] left-[-10%] md:left-[5%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full mix-blend-screen filter blur-[80px] md:blur-[130px] opacity-25 md:opacity-20 animate-pulse-slow transition-colors duration-500"
        style={{
          background: 'radial-gradient(circle, rgba(var(--accent), 0.8) 0%, rgba(var(--accent), 0) 70%)'
        }}
      />
      
      {/* Glow Blob 2 - Bottom Right/Center */}
      <div 
        className="absolute bottom-[-15%] right-[-10%] md:right-[5%] w-[400px] md:w-[700px] h-[400px] md:h-[700px] rounded-full mix-blend-screen filter blur-[80px] md:blur-[140px] opacity-25 md:opacity-20 animate-pulse-slow transition-colors duration-500"
        style={{
          background: 'radial-gradient(circle, rgba(var(--accent-secondary), 0.8) 0%, rgba(var(--accent-secondary), 0) 70%)',
          animationDelay: '-4s'
        }}
      />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] transition-opacity duration-500"
        style={{
          backgroundImage: `radial-gradient(rgba(var(--accent), 0.15) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />
    </div>
  );
};
