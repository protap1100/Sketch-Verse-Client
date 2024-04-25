const Footer = () => {
    return (
      <div className="bg-gray-800 text-white py-10">
      <footer className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Browse Art */}
          <div className="space-y-4">
            <h2 className="font-medium">Browse Art</h2>
            <div className="flex flex-col space-y-2 text-sm">
              <a href="#">View Gallery</a>
              <a href="#">Artists & Collections</a>
              <a href="#">Art Styles</a>
              <a href="#">Featured Paintings</a>
            </div>
          </div>
    
          {/* Services */}
          <div className="space-y-4">
            <h2 className="font-medium">Our Services</h2>
            <div className="flex flex-col space-y-2 text-sm">
              <a href="#">Custom Paintings</a>
              <a href="#">Art Restoration</a>
              <a href="#">Commission Artwork</a>
              <a href="#">Art Rental</a>
            </div>
          </div>
    
          {/* About Us */}
          <div className="space-y-4">
            <h2 className="font-medium">About Us</h2>
            <div className="flex flex-col space-y-2 text-sm">
              <a href="#">Our Story</a>
              <a href="#">Meet Our Artists</a>
              <a href="#">Events & Exhibitions</a>
              <a href="#">Blog</a>
            </div>
          </div>
    
          {/* Connect */}
          <div className="space-y-4">
            <h2 className="font-medium">Connect With Us</h2>
            <div className="flex flex-col space-y-2 text-sm">
              <a href="#">Contact Us</a>
              <a href="#">Customer Reviews</a>
              <a href="#">Join Our Newsletter</a>
              <a href="#">Follow Us on Social Media</a>
            </div>
          </div>
        </div>
    
        {/* Copyright */}
        <div className="flex items-center justify-center mt-8 text-sm">
          <span>&copy; {new Date().getFullYear()} Artistry Gallery. All Rights Reserved.</span>
        </div>
      </footer>
    </div>
    
    );
  };
  
  export default Footer;
  