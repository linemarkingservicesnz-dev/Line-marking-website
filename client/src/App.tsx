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
import Blog from "@/pages/Blog";
import BlogPostPage from "@/pages/BlogPost";
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

          <Route path="/car-park-line-marking/" component={LineMarking} />
          <Route path="/warehouse-line-marking/" component={Industrial} />
          <Route path="/non-slip-flooring/" component={NonSlipFlooring} />
          <Route path="/protective-concrete-coatings/" component={ProtectiveCoatings} />
          <Route path="/line-removal/" component={LineAndMarkingRemovals} />
          <Route path="/sports-court-line-marking/" component={SportsCourtLineMarking} />
          <Route path="/playground-markings/" component={PlaygroundGames} />
          <Route path="/epoxy-flooring/" component={EpoxyFlooring} />
          <Route path="/pedestrian-walkways/" component={PedestrianWalkways} />

          <Route path="/rolleston-line-marking/">
            {() => <RegionalLanding location="Rolleston" />}
          </Route>
          <Route path="/greymouth-line-marking/">
            {() => <RegionalLanding location="Greymouth" />}
          </Route>
          <Route path="/rangiora-line-marking/">
            {() => <RegionalLanding location="Rangiora" />}
          </Route>
          <Route path="/ashburton-line-marking/">
            {() => <RegionalLanding location="Ashburton" />}
          </Route>
          <Route path="/blenheim-line-marking/">
            {() => <RegionalLanding location="Blenheim" />}
          </Route>
          <Route path="/kaiapoi-line-marking/">
            {() => <RegionalLanding location="Kaiapoi" />}
          </Route>
          <Route path="/nelson-line-marking/">
            {() => <RegionalLanding location="Nelson" />}
          </Route>
          <Route path="/richmond-line-marking/">
            {() => <RegionalLanding location="Richmond" />}
          </Route>
          <Route path="/timaru-line-marking/">
            {() => <RegionalLanding location="Timaru" />}
          </Route>
          <Route path="/westport-line-marking/">
            {() => <RegionalLanding location="Westport" />}
          </Route>

          <Route path="/auckland-line-marking/">
            {() => <RegionalLanding location="Auckland" region="auckland" />}
          </Route>
          <Route path="/north-shore-line-marking/">
            {() => <RegionalLanding location="North Shore" region="auckland" />}
          </Route>
          <Route path="/south-auckland-line-marking/">
            {() => <RegionalLanding location="South Auckland" region="auckland" />}
          </Route>
          <Route path="/hamilton-line-marking/">
            {() => <RegionalLanding location="Hamilton" region="auckland" />}
          </Route>

          <Route path="/About-Us/" component={About} />
          <Route path="/Contact/" component={Contact} />

          <Route path="/blog/" component={Blog} />
          <Route path="/blog/:slug/">
            {(params) => <BlogPostPage slug={params.slug} />}
          </Route>

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
