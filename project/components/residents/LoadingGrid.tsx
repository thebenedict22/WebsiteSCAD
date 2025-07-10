export default function LoadingGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="bg-[#4A4A4A]/10 border-2 border-[#4A4A4A] animate-pulse">
          <div className="aspect-square bg-[#4A4A4A]/20"></div>
          <div className="p-6">
            <div className="h-6 bg-[#4A4A4A]/30 mb-2"></div>
            <div className="space-y-2">
              <div className="h-4 bg-[#4A4A4A]/20"></div>
              <div className="h-4 bg-[#4A4A4A]/20 w-3/4"></div>
              <div className="h-4 bg-[#4A4A4A]/20 w-1/2"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}