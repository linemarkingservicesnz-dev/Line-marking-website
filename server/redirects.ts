import type { Express } from "express";

const REDIRECTS: Record<string, string> = {
  "/Our-Services/Line-Marking/": "/car-park-line-marking/",
  "/Our-Services/Industrial/": "/warehouse-line-marking/",
  "/Our-Services/Non-Slip-Flooring/": "/non-slip-flooring/",
  "/Our-Services/Protective-Concrete-Coatings/": "/protective-concrete-coatings/",
  "/Our-Services/Line-And-Marking-Removals/": "/line-removal/",
  "/Our-Services/sports-court-line-marking/": "/sports-court-line-marking/",
  "/Our-Services/playground-games/": "/playground-markings/",
  "/line-marking-epoxy-flooring/": "/epoxy-flooring/",
  "/line-marking-pedestrian-walkways/": "/pedestrian-walkways/",

  "/line-marking-rolleston/": "/rolleston-line-marking/",
  "/line-marking-greymouth/": "/greymouth-line-marking/",
  "/line-marking-rangiora/": "/rangiora-line-marking/",
  "/line-marking-ashburton/": "/ashburton-line-marking/",
  "/line-marking-blenheim/": "/blenheim-line-marking/",
  "/line-marking-kaiapoi/": "/kaiapoi-line-marking/",
  "/line-marking-nelson/": "/nelson-line-marking/",
  "/line-marking-richmond/": "/richmond-line-marking/",
  "/line-marking-timaru/": "/timaru-line-marking/",
  "/line-marking-westport/": "/westport-line-marking/",
  "/line-marking-auckland/": "/auckland-line-marking/",
  "/line-marking-north-shore/": "/north-shore-line-marking/",
  "/line-marking-south-auckland/": "/south-auckland-line-marking/",
  "/line-marking-hamilton/": "/hamilton-line-marking/",

  "/about/": "/About-Us/",
  "/about-us/": "/About-Us/",
  "/contact/": "/Contact/",
  "/services/": "/car-park-line-marking/",
};

export function registerRedirects(app: Express) {
  app.use((req, res, next) => {
    const normalized = req.path.endsWith("/") ? req.path : req.path + "/";
    const target = REDIRECTS[normalized] || REDIRECTS[req.path];
    if (target) {
      return res.redirect(301, target);
    }
    next();
  });
}
