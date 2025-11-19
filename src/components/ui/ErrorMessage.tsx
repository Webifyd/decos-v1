import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
  className?: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, className = '' }) => {
  return (
    <div className={`flex items-center justify-center p-8 ${className}`}>
      <div className="flex items-center gap-2 text-industrial-red">
        <AlertCircle className="h-5 w-5" />
        <p className="text-center">{message}</p>
      </div>
    </div>
  );
};