import Footer from "./Footer";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <div className="max-w-full max-h-full">
      <Header />
      <div className="w-full h-full">{children}</div>
      <Footer />
    </div>
  );
}
