const Footer = () => {
    return (
      <div className="bg-gray-800 text-white py-10">
        <footer className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Getting Started */}
            <div className="space-y-4">
              <h2 className="font-medium">Buying Property</h2>
              <div className="flex flex-col space-y-2 text-sm">
                <a href="#">Search Listings</a>
                <a href="#">Mortgage Calculator</a>
                <a href="#">Home Buying Guide</a>
                <a href="#">Open Houses</a>
              </div>
            </div>
  
            <div className="space-y-4">
              <h2 className="font-medium">Selling Property</h2>
              <div className="flex flex-col space-y-2 text-sm">
                <a href="#">List Your Property</a>
                <a href="#">Home Valuation</a>
                <a href="#">Seller s Guide</a>
                <a href="#">Marketing Strategies</a>
              </div>
            </div>
  
            <div className="space-y-4">
              <h2 className="font-medium">Real Estate Services</h2>
              <div className="flex flex-col space-y-2 text-sm">
                <a href="#">Property Management</a>
                <a href="#">Investment Opportunities</a>
                <a href="#">Commercial Real Estate</a>
                <a href="#">Real Estate Consultation</a>
              </div>
            </div>
  
            <div className="space-y-4">
              <h2 className="font-medium">Connect With Us</h2>
              <div className="flex flex-col space-y-2 text-sm">
                <a href="#">Contact Us</a>
                <a href="#">About Our Team</a>
                <a href="#">Testimonials</a>
                <a href="#">Blog</a>
              </div>
            </div>
          </div>
  
          <div className="flex items-center justify-center mt-8 text-sm">
            <span>&copy; {new Date().getFullYear()} Your Real Estate Company. All Rights Reserved.</span>
          </div>
        </footer>
      </div>
    );
  };
  
  export default Footer;
  