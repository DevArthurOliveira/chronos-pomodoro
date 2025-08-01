import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "../../pages/Home";
import { AboutPomodoro } from "../../pages/AboutPomodoro";
import { ScrollToTop } from "../../utils/ScrollToTop";
import { History } from "../../pages/History";
import { NotFound } from "../../pages/NotFound";
import { Settings } from "../../pages/Settings";

export function MainRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-pomodoro/" element={<AboutPomodoro />} />
        <Route path="/history/" element={<History />} />
        <Route path="/settings/" element={<Settings />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
