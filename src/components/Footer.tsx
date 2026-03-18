import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t bg-cactus-900 text-cactus-100">
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-display text-xl font-bold text-cactus-50">Cacti Stock</h3>
          <p className="mt-2 text-sm text-cactus-200">
            แหล่งรวมกระบองเพชรหายากคุณภาพสูง สำหรับนักสะสมตัวจริง
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-cactus-50">ลิงก์ด่วน</h4>
          <div className="mt-2 flex flex-col gap-1">
            <Link to="/catalogue" className="text-sm text-cactus-200 hover:text-cactus-50 transition-colors">แคตตาล็อก</Link>
            <Link to="/about" className="text-sm text-cactus-200 hover:text-cactus-50 transition-colors">เกี่ยวกับเรา</Link>
            <Link to="/blog" className="text-sm text-cactus-200 hover:text-cactus-50 transition-colors">บล็อก</Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-cactus-50">ติดต่อเรา</h4>
          <p className="mt-2 text-sm text-cactus-200">cactistockfiles@gmail.com</p>
        </div>
      </div>
      <div className="mt-8 border-t border-cactus-700 pt-4 text-center text-xs text-cactus-200">
        © 2026 Cacti Stock. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
