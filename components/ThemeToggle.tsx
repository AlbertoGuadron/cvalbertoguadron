'use client';

import {useEffect, useState} from 'react';
import {useTheme} from 'next-themes';
import {Moon, Sun} from 'lucide-react';

export default function ThemeToggle() {
  const {theme, setTheme, resolvedTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === 'dark' || (theme === 'system' && resolvedTheme === 'dark');

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm hover:bg-slate-50
                 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      <span className="hidden sm:inline">{isDark ? 'Light' : 'Dark'}</span>
    </button>
  );
}
