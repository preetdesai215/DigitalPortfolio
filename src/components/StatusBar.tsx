const StatusBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-primary/20 bg-background/90 backdrop-blur-sm px-4 py-2">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <span className="font-mono-tech text-[10px] md:text-xs text-primary/70 tracking-widest">
          LOC: GANDHINAGAR, IN // STATUS: ACTIVE_RESEARCH // SYSTEM_READY
        </span>
        <span className="font-mono-tech text-[10px] md:text-xs text-muted-foreground hidden md:block">
          &copy; 2025 PREET DESAI
        </span>
      </div>
    </div>
  );
};

export default StatusBar;
