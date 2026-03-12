import { BrowserRouter, Routes, Route } from "react-router";
import { ThemeProvider } from "@/hooks/useTheme";
import { RootLayout } from "@/components/layout/RootLayout";
import { HomePage } from "@/pages/HomePage";
import { AboutPage } from "@/pages/AboutPage";
import { ProjectsPage } from "@/pages/ProjectsPage";
import { ProjectDetailPage } from "@/pages/ProjectDetailPage";
import { SkillsPage } from "@/pages/SkillsPage";
import { ExperiencePage } from "@/pages/ExperiencePage";
import { WritingPage } from "@/pages/WritingPage";
import { ContactPage } from "@/pages/ContactPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ArticleDetailPage } from "@/pages/ArticleDetailPage";
import { ChatWidget } from "@/components/chat/ChatWidget";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="projects/:slug" element={<ProjectDetailPage />} />
            <Route path="skills" element={<SkillsPage />} />
            <Route path="experience" element={<ExperiencePage />} />
            <Route path="writing" element={<WritingPage />} />
            <Route path="writing/:slug" element={<ArticleDetailPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
        <ChatWidget />
      </BrowserRouter>
    </ThemeProvider>
  );
}
