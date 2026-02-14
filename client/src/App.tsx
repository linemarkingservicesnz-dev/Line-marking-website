import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

import Home from "@/pages/Home";
import LineMarking from "@/pages/LineMarking";
import Industrial from "@/pages/Industrial";
import NonSlipFlooring from "@/pages/NonSlipFlooring";
import ProtectiveCoatings from "@/pages/ProtectiveCoatings";
import EpoxyFlooring from "@/pages/EpoxyFlooring";
import PedestrianWalkways from "@/pages/PedestrianWalkways";
import LineAndMarkingRemovals from "@/pages/LineAndMarkingRemovals";
import SportsCourtLineMarking from "@/pages/SportsCourtLineMarking";
import PlaygroundGames from "@/pages/PlaygroundGames";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import RegionalLanding from "@/pages/RegionalLanding";
import NotFound from "@/pages/not-found";

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

          <Route path="/Our-Services/Line-Marking/" component={LineMarking} />
          <Route path="/Our-Services/Industrial/" component={Industrial} />
          <Route path="/Our-Services/Non-Slip-Flooring/" component={NonSlipFlooring} />
          <Route path="/Our-Services/Protective-Concrete-Coatings/" component={ProtectiveCoatings} />
          <Route path="/Our-Services/Line-And-Marking-Removals/" component={LineAndMarkingRemovals} />
          <Route path="/Our-Services/sports-court-line-marking/" component={SportsCourtLineMarking} />

          <Route path="/Our-Services/playground-games/" component={PlaygroundGames} />

          <Route path="/line-marking-epoxy-flooring/" component={EpoxyFlooring} />
          <Route path="/line-marking-pedestrian-walkways/" component={PedestrianWalkways} />

          <Route path="/line-marking-rolleston/">
            {() => <RegionalLanding location="Rolleston" />}
          </Route>
          <Route path="/line-marking-greymouth/">
            {() => <RegionalLanding location="Greymouth" />}
          </Route>
          <Route path="/line-marking-rangiora/">
            {() => <RegionalLanding location="Rangiora" />}
          </Route>
          <Route path="/line-marking-ashburton/">
            {() => <RegionalLanding location="Ashburton" />}
          </Route>
          <Route path="/line-marking-blenheim/">
            {() => <RegionalLanding location="Blenheim" />}
          </Route>
          <Route path="/line-marking-kaiapoi/">
            {() => <RegionalLanding location="Kaiapoi" />}
          </Route>
          <Route path="/line-marking-nelson/">
            {() => <RegionalLanding location="Nelson" />}
          </Route>
          <Route path="/line-marking-richmond/">
            {() => <RegionalLanding location="Richmond" />}
          </Route>
          <Route path="/line-marking-timaru/">
            {() => <RegionalLanding location="Timaru" />}
          </Route>
          <Route path="/line-marking-westport/">
            {() => <RegionalLanding location="Westport" />}
          </Route>

          <Route path="/line-marking-auckland/">
            {() => <RegionalLanding location="Auckland" region="auckland" />}
          </Route>
          <Route path="/line-marking-north-shore/">
            {() => <RegionalLanding location="North Shore" region="auckland" />}
          </Route>
          <Route path="/line-marking-south-auckland/">
            {() => <RegionalLanding location="South Auckland" region="auckland" />}
          </Route>
          <Route path="/line-marking-hamilton/">
            {() => <RegionalLanding location="Hamilton" region="auckland" />}
          </Route>

          <Route path="/About-Us/" component={About} />
          <Route path="/Contact/" component={Contact} />

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
