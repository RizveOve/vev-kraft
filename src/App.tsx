import { LanguageProvider, useLanguage } from "./i18n/LanguageContext";
import { useEffect } from "react";
import { useRoute, type Route } from "./router";
import { pageMeta } from "./seo";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ServiceDetail from "./components/ServiceDetail";
import WhyVevKraft from "./components/WhyVevKraft";
import HowItWorks from "./components/HowItWorks";
import MeetRizve from "./components/MeetRizve";
import Faq from "./components/Faq";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function HomePage() {
  return (
    <>
      <Hero />
      <WhyVevKraft />
      <HowItWorks />
      <MeetRizve />
      <Faq />
    </>
  );
}

function PageContent({ route }: { route: Route }) {
  const { t } = useLanguage();

  const meta = pageMeta(route, t);
  useEffect(() => {
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", meta.description);
  }, [meta.title, meta.description]);

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
