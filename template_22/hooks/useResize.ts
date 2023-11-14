import { useState } from 'react';

export const useResize = (initialWidth: number, initialHeight: number) => {
  const [width, setWidth] = useState<number>(initialWidth);
  const [height, setHeight] = useState<number>(initialHeight);

  const handleMouseVertically = (e: React.MouseEvent<HTMLDivElement>) => {
    let startY = e.clientY;
    const handleMouseMove = (e: MouseEvent) => {
      const deltaY = e.clientY - startY;
      const newHeight = Math.max(height + deltaY, 36);
      setHeight(newHeight);
      startY = e.clientY;
    };
    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseHorizontally = (e: React.MouseEvent<HTMLDivElement>) => {
    let startX = e.clientX;
    const handleMouseMove = (e: MouseEvent) => {
      const deltaX = e.clientX - startX;
      setWidth((prevWidth) => prevWidth + deltaX);
      startX = e.clientX;
    };
    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseDiagonally = (e: React.MouseEvent<HTMLDivElement>) => {
    let startX = e.clientX;
    let startY = e.clientY;
    const handleMouseMove = (e: MouseEvent) => {
      const deltaX = e.clientX - startX;
      const deltaY = e.clientY - startY;
      const newWidth = width + deltaX;
      const newHeight = Math.max(height + deltaY, 36); // Установка минимальной высоты
      setWidth(newWidth);
      setHeight(newHeight);
      startX = e.clientX;
      startY = e.clientY;
    };
    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return {
    width,
    height,
    handleMouseVertically,
    handleMouseHorizontally,
    handleMouseDiagonally,
  };
};
