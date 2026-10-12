import { LanguageProvider, useLanguage } from "./i18n/LanguageContext";
import { useRoute, type Route } from "./router";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ServiceDetail from "./components/ServiceDetail";
import Process from "./components/Process";
import WhyUs from "./components/WhyUs";
import Faq from "./components/Faq";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function HomePage() {
  return (
    <>
      <Hero />
      <Process />
      <WhyUs />
      <Faq />
    </>
  );
}

function PageContent({ route }: { route: Route }) {
  const { t } = useLanguage();

  switch (route.page) {
    case "service": {
      const service = t.services.items.find((s) => s.slug === route.slug);
      return service ? <ServiceDetail service={service} /> : <Services />;
    }
    case "services":
      return <Services />;
    case "about":
      return <About />;
    case "contact":
      return <Contact />;
    default:
      return <HomePage />;
  }
}

export default function App() {
  const route = useRoute();

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-paper">
        <Header page={route.page} />
        <main>
          <PageContent route={route} />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
