
import type { ModifiedCategory } from "../types/types/notes";

  export function getModifiedCategory(date: Date): ModifiedCategory {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Hoje'

    if (diffDays === 1) return 'Ontem'
    
    if (diffDays <= 7) return 'Ultimos 7 dias'
    
    if (now.getMonth() === date.getMonth() && now.getFullYear() === date.getFullYear()) {
      return 'Esse mês';
    }
    
    return 'Mais de um mês';
  }