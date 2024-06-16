const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-10">
      <footer className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Explore Rooms */}
          <div className="space-y-4">
            <h2 className="font-medium">Explore Rooms</h2>
            <div className="flex flex-col space-y-2 text-sm">
              <a href="#">View Rooms</a>
              <a href="#">Room Types</a>
              <a href="#">Special Offers</a>
              <a href="#">Book Now</a>
            </div>
          </div>

          {/* Discover Destinations */}
          <div className="space-y-4">
            <h2 className="font-medium">Discover Destinations</h2>
            <div className="flex flex-col space-y-2 text-sm">
              <a href="#">Popular Destinations</a>
              <a href="#">Local Attractions</a>
              <a href="#">Guided Tours</a>
              <a href="#">Book Activities</a>
            </div>
          </div>

          {/* About Us */}
          <div className="space-y-4">
            <h2 className="font-medium">About Us</h2>
            <div className="flex flex-col space-y-2 text-sm">
              <a href="#">Our Story</a>
              <a href="#">Team Members</a>
              <a href="#">Events & News</a>
              <a href="#">Customer Reviews</a>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h2 className="font-medium">Connect With Us</h2>
            <div className="flex flex-col space-y-2 text-sm">
              <a href="#">Contact Us</a>
              <a href="#">FAQs</a>
              <a href="#">Subscribe to Newsletter</a>
              <a href="#">Follow Us on Social Media</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex items-center justify-center mt-8 text-sm">
          <span>&copy; {new Date().getFullYear()} Wanderlust Booking. All Rights Reserved.</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
