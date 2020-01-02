import { useEffect } from 'react';

export const useEffectAsync = (func, condition) => {
  useEffect(() => {
    func();
  }, condition);
}
