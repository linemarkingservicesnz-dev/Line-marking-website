import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useEffect, lazy, Suspense } from "react";

const Home = lazy(() => import("@/pages/Home"));
const LineMarking = lazy(() => import("@/pages/LineMarking"));
const Industrial = lazy(() => import("@/pages/Industrial"));
const NonSlipFlooring = lazy(() => import("@/pages/NonSlipFlooring"));
const ProtectiveCoatings = lazy(() => import("@/pages/ProtectiveCoatings"));
const EpoxyFlooring = lazy(() => import("@/pages/EpoxyFlooring"));
const PedestrianWalkways = lazy(() => import("@/pages/PedestrianWalkways"));
const LineAndMarkingRemovals = lazy(() => import("@/pages/LineAndMarkingRemovals"));
const SportsCourtLineMarking = lazy(() => import("@/pages/SportsCourtLineMarking"));
const PlaygroundGames = lazy(() => import("@/pages/PlaygroundGames"));
const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));
const RegionalLanding = lazy(() => import("@/pages/RegionalLanding"));
const Blog = lazy(() => import("@/pages/Blog"));
const BlogPostPage = lazy(() => import("@/pages/BlogPost"));
const Gallery = lazy(() => import("@/pages/Gallery"));
const NotFound = lazy(() => import("@/pages/not-found"));

function Redirect({ to }: { to: string }) {
  const [, navigate] = useLocation();
  useEffect(() => { navigate(to, { replace: true }); }, [to, navigate]);
  return null;
}

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
        <Suspense fallback={null}>
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

            <Route path="/gallery/" component={Gallery} />

            <Route path="/blog/" component={Blog} />
            <Route path="/blog/:slug/">
              {(params) => <BlogPostPage slug={params.slug} />}
            </Route>

            {/* Legacy URL redirects — 301 handled server-side, these cover SPA navigation */}
            <Route path="/Our-Services/Line-Marking/">{() => <Redirect to="/car-park-line-marking/" />}</Route>
            <Route path="/Our-Services/Industrial/">{() => <Redirect to="/warehouse-line-marking/" />}</Route>
            <Route path="/Our-Services/Non-Slip-Flooring/">{() => <Redirect to="/non-slip-flooring/" />}</Route>
            <Route path="/Our-Services/Protective-Concrete-Coatings/">{() => <Redirect to="/protective-concrete-coatings/" />}</Route>
            <Route path="/Our-Services/Line-And-Marking-Removals/">{() => <Redirect to="/line-removal/" />}</Route>
            <Route path="/Our-Services/sports-court-line-marking/">{() => <Redirect to="/sports-court-line-marking/" />}</Route>
            <Route path="/Our-Services/playground-games/">{() => <Redirect to="/playground-markings/" />}</Route>
            <Route path="/line-marking-epoxy-flooring/">{() => <Redirect to="/epoxy-flooring/" />}</Route>
            <Route path="/line-marking-pedestrian-walkways/">{() => <Redirect to="/pedestrian-walkways/" />}</Route>
            <Route path="/line-marking-rolleston/">{() => <Redirect to="/rolleston-line-marking/" />}</Route>
            <Route path="/line-marking-greymouth/">{() => <Redirect to="/greymouth-line-marking/" />}</Route>
            <Route path="/line-marking-rangiora/">{() => <Redirect to="/rangiora-line-marking/" />}</Route>
            <Route path="/line-marking-ashburton/">{() => <Redirect to="/ashburton-line-marking/" />}</Route>
            <Route path="/line-marking-blenheim/">{() => <Redirect to="/blenheim-line-marking/" />}</Route>
            <Route path="/line-marking-kaiapoi/">{() => <Redirect to="/kaiapoi-line-marking/" />}</Route>
            <Route path="/line-marking-nelson/">{() => <Redirect to="/nelson-line-marking/" />}</Route>
            <Route path="/line-marking-richmond/">{() => <Redirect to="/richmond-line-marking/" />}</Route>
            <Route path="/line-marking-timaru/">{() => <Redirect to="/timaru-line-marking/" />}</Route>
            <Route path="/line-marking-westport/">{() => <Redirect to="/westport-line-marking/" />}</Route>
            <Route path="/line-marking-auckland/">{() => <Redirect to="/auckland-line-marking/" />}</Route>
            <Route path="/line-marking-north-shore/">{() => <Redirect to="/north-shore-line-marking/" />}</Route>
            <Route path="/line-marking-south-auckland/">{() => <Redirect to="/south-auckland-line-marking/" />}</Route>
            <Route path="/line-marking-hamilton/">{() => <Redirect to="/hamilton-line-marking/" />}</Route>
            <Route path="/about/">{() => <Redirect to="/About-Us/" />}</Route>
            <Route path="/about-us/">{() => <Redirect to="/About-Us/" />}</Route>
            <Route path="/contact/">{() => <Redirect to="/Contact/" />}</Route>
            <Route path="/services/">{() => <Redirect to="/car-park-line-marking/" />}</Route>

            <Route component={NotFound} />
          </Switch>
        </Suspense>
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
