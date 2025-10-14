import dynamic from 'next/dynamic';
// Componente que so pode ser usado no cliente
export const ComponenteSomenteCliente = dynamic(() => import('@/components/header'), {
  ssr: false,
});
