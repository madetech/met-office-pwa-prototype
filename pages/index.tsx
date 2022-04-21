import { Index } from '../components';

interface HomeProps {
  hasReadPermission: boolean;
}

export default function Home({ hasReadPermission }: HomeProps) {
  return <Index hasReadPermission={hasReadPermission} />;
}
