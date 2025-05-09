import React from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { ResearchSummarizer } from './pages/ResearchSummarizer';
import { EventCalendar } from './pages/EventCalendar';
import { FundingOpportunities } from './pages/FundingOpportunities';
import { CommunityForum } from './pages/CommunityForum';
import { Notifications } from './pages/Notifications';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
export function App() {
  return <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/summarizer" element={<ResearchSummarizer />} />
          <Route path="/events" element={<EventCalendar />} />
          <Route path="/funding" element={<FundingOpportunities />} />
          <Route path="/forum" element={<CommunityForum />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </Layout>
    </Router>;
}