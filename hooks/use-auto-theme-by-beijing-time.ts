import { useEffect } from 'react';
import { useTheme } from 'next-themes';

/**
 * 根据东八区（北京时间）自动切换主题：
 * 06:00-18:00 为 light，其他时间为 dark。
 */
export default function useAutoThemeByBeijingTime() {
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    function getBeijingHour() {
      const now = new Date();
      return (now.getUTCHours() + 8) % 24;
    }

    function autoSetTheme() {
      const hour = getBeijingHour();
      if (hour >= 6 && hour < 18) {
        if (resolvedTheme !== 'light') setTheme('light');
      } else {
        if (resolvedTheme !== 'dark') setTheme('dark');
      }
    }

    autoSetTheme();
    const timer = setInterval(autoSetTheme, 30 * 60 * 1000); // 每30分钟检查一次
    return () => clearInterval(timer);
  }, [setTheme, resolvedTheme]);
} 