import Footer from '../layout/footer';
import Header from './header';
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      {/* <Emailsubscription /> */}
      <Footer />
    </div>
  );
};

export default MainLayout;
