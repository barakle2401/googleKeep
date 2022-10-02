import Layout from '@/components/layout/Layout';
import CreateNote from '@/components/notes/CreateNote';
import Notes from '@/components/notes/Notes';

function Home() {
  return (
    <Layout>
      <>
        <CreateNote />
        <Notes />
      </>
    </Layout>
  );
}

export default Home;
