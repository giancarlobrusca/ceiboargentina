import "./filmgrain.css";

import { type ReactNode } from "react";

export const FilmGrain = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grain-background">
      <div style={{ zIndex: 2, backgroundColor: "#373737" }}>{children}</div>
    </div>
  );
};
