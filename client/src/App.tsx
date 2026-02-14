import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

// Pages
import Home from "@/pages/Home";
import LineMarking from "@/pages/LineMarking";
import Industrial from "@/pages/Industrial";
import NonSlipFlooring from "@/pages/NonSlipFlooring";
import ProtectiveCoatings from "@/pages/ProtectiveCoatings";
import EpoxyFlooring from "@/pages/EpoxyFlooring";
import PedestrianWalkways from "@/pages/PedestrianWalkways";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import RegionalLanding from "@/pages/RegionalLanding";
import NotFound from "@/pages/not-found";

// Scroll to top on route change
function ScrollToTop() {
  const [pathname] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navigation />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          
          {/* Services */}
          <Route path="/Our-Services/Line-Marking/" component={LineMarking} />
          <Route path="/Our-Services/Industrial/" component={Industrial} />
          <Route path="/Our-Services/Non-Slip-Flooring/" component={NonSlipFlooring} />
          <Route path="/Our-Services/Protective-Concrete-Coatings/" component={ProtectiveCoatings} />
          <Route path="/line-marking-epoxy-flooring/" component={EpoxyFlooring} />
          <Route path="/line-marking-pedestrian-walkways/" component={PedestrianWalkways} />
          
          {/* Regional Landing Pages */}
          <Route path="/line-marking-rolleston/">
            {() => <RegionalLanding location="Rolleston" />}
          </Route>
          <Route path="/line-marking-greymouth/">
            {() => <RegionalLanding location="Greymouth" />}
          </Route>
          <Route path="/line-marking-rangiora">
            {() => <RegionalLanding location="Rangiora" />}
          </Route>

          {/* General */}
          <Route path="/About-Us/" component={About} />
          <Route path="/contact" component={Contact} />
          
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
