export default function Footer() {
  return (
    <footer className="font-montserrat text-white bg-gray-900 px-8 py-12">

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-2">Consulting Agency For Your Business</h2>
          <p className="text-sm text-gray-300">
            Consulting Agency For Your Business the quick fox jumps over the lazy dog
          </p>
        </div>
        <div className="md:w-1/4">
          <button className="bg-white text-gray-900 font-bold px-10 py-3.5 rounded-lg">
            Contact Us
          </button>
        </div>
      </div>


      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-12">
        <div>
          <h4 className="text-lg font-bold mb-4">Company Info</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Carrier</a></li>
            <li><a href="#">We are hiring</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
 
        <div></div>
        <div></div>
        <div></div>
      </div>
    </footer>
  );
}
