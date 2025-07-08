export default function Footer() {
  return (
    <footer className="border-t border-gray-700/50 bg-gradient-to-b from-gray-950 to-black relative">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/2 via-green-500/2 to-blue-500/2 blur-3xl"></div>
      <div className="container mx-auto px-6 py-8 relative">
        <div className="flex justify-center items-center">
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} RGB++ Protocol. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
} 