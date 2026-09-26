import { lazy } from "react";
import AnimatedBackground from './AnimatedBackground'

// three.js scenes are heavy, so load them in separate chunks on demand
const EarthCanvas = lazy(() => import("./Earth"));
const BallCanvas = lazy(() => import("./Ball"));
const ComputersCanvas = lazy(() => import("./Computers"));
const StarsCanvas = lazy(() => import("./Stars"));

export { EarthCanvas, BallCanvas, ComputersCanvas, StarsCanvas ,AnimatedBackground };
