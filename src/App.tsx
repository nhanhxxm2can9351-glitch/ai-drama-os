import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import { ScriptGenerator } from "@/components/ScriptGenerator";
import { StoryboardGenerator } from "@/components/StoryboardGenerator";
import { AssetGenerator } from "@/components/AssetGenerator";
import { VoiceGenerator } from "@/components/VoiceGenerator";
import { VideoGenerator } from "@/components/VideoGenerator";
import Tutorial from "@/pages/Tutorial";
import Cover from "@/pages/Cover";
import Overview from "@/pages/Overview";
import Architecture from "@/pages/Architecture";
import Roadmap from "@/pages/Roadmap";
import Protocol from "@/pages/Protocol";
import Workflow from "@/pages/Workflow";
import Agents from "@/pages/Agents";
import Canvas from "@/pages/Canvas";
import Commercial from "@/pages/Commercial";
import DevPlan from "@/pages/DevPlan";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<ScriptGenerator />} />
          <Route path="/storyboard" element={<StoryboardGenerator />} />
          <Route path="/assets" element={<AssetGenerator />} />
          <Route path="/voice" element={<VoiceGenerator />} />
          <Route path="/video" element={<VideoGenerator />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/cover" element={<Cover />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/protocol" element={<Protocol />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/workflow" element={<Workflow />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/canvas" element={<Canvas />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/devplan" element={<DevPlan />} />
        </Routes>
      </div>
    </Router>
  );
}
