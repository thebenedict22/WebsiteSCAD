import { AlertTriangle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="text-center py-16">
      <div className="w-16 h-16 bg-red-500/20 border-2 border-red-500 mx-auto mb-4 flex items-center justify-center">
        <AlertTriangle className="w-8 h-8 text-red-500" />
      </div>
      <h3 className="font-bebas-neue text-2xl text-white mb-2">
        ERROR LOADING RESIDENTS
      </h3>
      <p className="font-roboto text-[#4A4A4A] max-w-md mx-auto">
        {message}
      </p>
    </div>
  );
}