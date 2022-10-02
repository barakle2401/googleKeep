import Header from '@/components/header/Header';
import UpdateModal from '@/components/notes/UpdateModal';
import GlobalStyle from '@/styles/Global';
import { Container } from '@mui/material';

function Layout({ children }: { children: JSX.Element }) {
  return (
    <>
      <GlobalStyle />
      <UpdateModal />
      <Header />
      <Container sx={{ pb: 10 }} fixed>
        {children}
      </Container>
    </>
  );
}

export default Layout;
