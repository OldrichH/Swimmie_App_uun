import { useMediaQuery } from 'react-responsive';

const useMediaQueries = () => {
  const xs = useMediaQuery({ query: '(max-width: 576px)' });
  const sm = useMediaQuery({ query: '(min-width: 576px) and (max-width: 768px)' });
  const md = useMediaQuery({ query: '(min-width: 768px) and (max-width: 992px)' });
  const lg = useMediaQuery({ query: '(min-width: 992px) and (max-width: 1200px)' });
  const xl = useMediaQuery({ query: '(min-width: 1200px)' });

  return { xs, sm, md, lg, xl };
};

export default useMediaQueries;