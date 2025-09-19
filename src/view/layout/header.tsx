import Gradientbutton from '@/Components/ui/gradientbutton';

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-10 bg-background">
      <div className="w-full px-4 md:px-8 py-4">
        <div className="flex items-center justify-between text-white">
          {/* Logo and Brand - Left with padding */}
          <div className="flex items-center gap-2 shrink-0 pl-2 md:pl-4">
            <img
              src={'/images/logo.png'}
              alt="Logo"
              className="h-6 w-8 md:h-8 md:w-10"
            />
            <span className="w-1/2 text-white font-sora text-sm md:text-lg font-semibold">
              Open Source Economy
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm lg:text-base absolute left-1/2 transform -translate-x-1/2">
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#solutions">Solutions</a>
            <a href="#contact">Contact Us</a>
          </nav>

          {/* Sign In Button */}
          <div className="shrink-0 pr-2 md:pr-4">
            <Gradientbutton className="text-xs md:text-sm px-3 md:px-4 py-2">
              Sign In
            </Gradientbutton>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
