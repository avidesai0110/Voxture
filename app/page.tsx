import Link from "next/link"
import {
  Mic,
  Bell,
  Settings,
  Home,
  ClipboardCheck,
  BarChart3,
  Database,
  AlertTriangle,
  AlertCircle,
  Clock,
  ChevronDown,
  ChevronRight,
  Play,
  TrendingUp,
  TrendingDown,
} from "lucide-react"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-200">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 h-14 bg-[#1a1a1a] border-b border-zinc-800 z-50 flex items-center justify-between px-6">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <Mic className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Voxture</span>
          </div>

          {/* Connected Bot Indicator */}
          <div className="flex items-center gap-2 bg-zinc-900 px-3 py-1.5 rounded-lg border border-zinc-800">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-zinc-400">Voice Bot:</span>
            <span className="text-sm font-medium text-white">ConstructBot v2</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-zinc-400 hover:text-white transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <Link
            href="/settings"
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <Settings className="w-5 h-5" />
            <span className="text-sm">Settings</span>
          </Link>
        </div>
      </nav>

      <div className="flex pt-14">
        {/* Left Sidebar */}
        <aside className="fixed left-0 top-14 bottom-0 w-56 bg-[#1a1a1a] border-r border-zinc-800 p-4">
          <nav className="space-y-1">
            <Link
              href="/"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20"
            >
              <Home className="w-5 h-5" />
              <span className="font-medium">Home</span>
            </Link>
            <Link
              href="/test-runs"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-colors"
            >
              <ClipboardCheck className="w-5 h-5" />
              <span>Test Runs</span>
            </Link>
            <Link
              href="/analytics"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-colors"
            >
              <BarChart3 className="w-5 h-5" />
              <span>Analytics</span>
            </Link>
            <Link
              href="/dataset"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-colors"
            >
              <Database className="w-5 h-5" />
              <span>Dataset</span>
            </Link>
            <Link
              href="/settings"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-colors"
            >
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </Link>
          </nav>

          {/* Upgrade CTA */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-4">
              <p className="text-sm font-medium text-white mb-1">Need more tests?</p>
              <p className="text-xs text-zinc-400 mb-3">Upgrade for unlimited test runs</p>
              <button className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors">
                Upgrade Plan
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="ml-56 mr-80 flex-1 p-6 min-h-screen">
          {/* Status Overview Cards */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {/* Latest Test Run Card */}
            <div className="bg-[#1a1a1a] border border-zinc-800 rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-zinc-400">Latest Test Run</span>
                <Clock className="w-5 h-5 text-zinc-500" />
              </div>
              <p className="text-2xl font-semibold text-white mb-1">2 hours ago</p>
              <p className="text-sm text-zinc-400">
                <span className="font-mono">1,000</span> scenarios tested
              </p>
            </div>

            {/* Pass Rate Card */}
            <div className="bg-[#1a1a1a] border border-zinc-800 rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-zinc-400">Pass Rate</span>
                <AlertTriangle className="w-5 h-5 text-amber-500" />
              </div>
              <p className="text-2xl font-semibold text-white mb-1 font-mono">82.3%</p>
              <p className="text-sm text-amber-500 flex items-center gap-1">
                <TrendingDown className="w-4 h-4" /> Below target (95%)
              </p>
            </div>

            {/* Critical Issues Card */}
            <div className="bg-[#1a1a1a] border border-zinc-800 rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-zinc-400">Critical Issues</span>
                <AlertCircle className="w-5 h-5 text-red-500" />
              </div>
              <p className="text-2xl font-semibold text-white mb-1 font-mono">7 failures</p>
              <p className="text-sm text-red-500 flex items-center gap-1">
                <span className="w-2 h-2 bg-red-500 rounded-full" /> Safety risk detected
              </p>
            </div>
          </div>

          {/* Test Results Section */}
          <div className="bg-[#1a1a1a] border border-zinc-800 rounded-xl p-6 mb-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-lg font-semibold text-white mb-1">
                  Test Run #47 - Construction Use Case
                </h2>
                <p className="text-sm text-zinc-400">
                  Completed: Feb 4, 2026 2:34 PM - Duration: 4m 32s
                </p>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 text-sm text-zinc-400 hover:text-white border border-zinc-700 rounded-lg hover:bg-zinc-800 transition-colors">
                  Export Report
                </button>
                <button className="px-3 py-1.5 text-sm text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors flex items-center gap-1">
                  <Play className="w-4 h-4" /> Re-run Test
                </button>
              </div>
            </div>

            {/* Overall Performance */}
            <div className="bg-zinc-900/50 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-zinc-300">Overall Performance</span>
                <span className="font-mono text-lg font-semibold text-white">
                  82.3% <span className="text-zinc-500 text-sm font-normal">(823/1000 passed)</span>
                </span>
              </div>
              <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full"
                  style={{ width: "82.3%" }}
                />
              </div>
            </div>

            {/* Breakdown */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-zinc-900/50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span className="text-sm text-zinc-400">Real-world samples</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-xl font-semibold text-white">164/200</span>
                  <span className="text-sm text-zinc-500">passed</span>
                  <span className="font-mono text-sm text-amber-500 ml-auto">(82.0%)</span>
                </div>
                <div className="w-full h-1.5 bg-zinc-800 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: "82%" }} />
                </div>
              </div>
              <div className="bg-zinc-900/50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full" />
                  <span className="text-sm text-zinc-400">Synthetic variations</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-xl font-semibold text-white">659/800</span>
                  <span className="text-sm text-zinc-500">passed</span>
                  <span className="font-mono text-sm text-amber-500 ml-auto">(82.4%)</span>
                </div>
                <div className="w-full h-1.5 bg-zinc-800 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-purple-500 rounded-full" style={{ width: "82.4%" }} />
                </div>
              </div>
            </div>
          </div>

          {/* Failure Categories */}
          <FailureCategories />
        </main>

        {/* Right Panel - Transcript */}
        <TranscriptPanel />
      </div>
    </div>
  )
}

function FailureCategories() {
  const categories = [
    {
      id: "safety",
      icon: <span className="text-red-500">●</span>,
      label: "Safety-Critical",
      count: 7,
      severity: "red",
      description: '"Stop the crane" misheard in 88dB noise environment',
      urgency: "High urgency",
      action: "Fix before production deployment",
    },
    {
      id: "accent",
      icon: <span className="text-amber-500">●</span>,
      label: "Accent Recognition",
      count: 45,
      severity: "amber",
      description: "Heavy Hispanic accent handling shows consistent recognition gaps",
      urgency: "Moderate priority",
      action: "Consider accent-specific training data",
    },
    {
      id: "noise",
      icon: <span className="text-amber-500">●</span>,
      label: "Noise Interference",
      count: 89,
      severity: "amber",
      description: "Machinery background noise above 75dB causing transcription errors",
      urgency: "Moderate priority",
      action: "Implement noise cancellation preprocessing",
    },
    {
      id: "context",
      icon: <span className="text-zinc-500">●</span>,
      label: "Context Misunderstanding",
      count: 36,
      severity: "gray",
      description: "Domain-specific terminology being misinterpreted",
      urgency: "Low priority",
      action: "Add construction glossary to training",
    },
  ]

  return (
    <div className="bg-[#1a1a1a] border border-zinc-800 rounded-xl p-6 mb-6">
      <h2 className="text-lg font-semibold text-white mb-4">Failure Categories</h2>

      <div className="space-y-3">
        {categories.map((category) => (
          <details key={category.id} className="border border-zinc-800 rounded-lg overflow-hidden group">
            <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-zinc-800/30 transition-colors list-none">
              <div className="flex items-center gap-3">
                {category.icon}
                <span className="font-medium text-white">{category.label}</span>
                <span
                  className={`font-mono text-sm px-2 py-0.5 rounded ${
                    category.severity === "red"
                      ? "text-red-400 bg-red-500/10"
                      : category.severity === "amber"
                        ? "text-amber-400 bg-amber-500/10"
                        : "text-zinc-400 bg-zinc-500/10"
                  }`}
                >
                  {category.count} failures
                </span>
              </div>
              <ChevronDown className="w-5 h-5 text-zinc-500 transition-transform group-open:rotate-180" />
            </summary>
            <div className="px-4 pb-4 border-t border-zinc-800 pt-3">
              <p className="text-sm text-zinc-400 mb-2">{category.description}</p>
              <div className="flex items-center gap-2">
                <span
                  className={`text-xs px-2 py-1 rounded ${
                    category.severity === "red"
                      ? "bg-red-500/10 text-red-400"
                      : category.severity === "amber"
                        ? "bg-amber-500/10 text-amber-400"
                        : "bg-zinc-500/10 text-zinc-400"
                  }`}
                >
                  {category.urgency}
                </span>
                <span className="text-xs text-zinc-500">→ {category.action}</span>
              </div>
            </div>
          </details>
        ))}
      </div>
    </div>
  )
}

function TranscriptPanel() {
  const transcriptItems = [
    {
      speaker: "Worker",
      text: "Stop the crane now!",
      timestamp: "0:00",
      status: "correct",
    },
    {
      speaker: "Bot",
      text: "I heard: 'Stop the rain now'",
      timestamp: "0:01",
      status: "error",
      expected: "Stop the crane now",
    },
    {
      speaker: "Worker",
      text: "No, CRANE! C-R-A-N-E!",
      timestamp: "0:03",
      status: "correct",
    },
    {
      speaker: "Bot",
      text: "Understood. Sending crane stop command.",
      timestamp: "0:05",
      status: "recovered",
    },
  ]

  return (
    <aside className="fixed right-0 top-14 bottom-0 w-80 bg-[#1a1a1a] border-l border-zinc-800 flex flex-col">
      <div className="p-4 border-b border-zinc-800">
        <h3 className="text-sm font-semibold text-white mb-1">Transcript Viewer</h3>
        <p className="text-xs text-zinc-400">Safety-Critical Failure #1</p>
      </div>

      <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900/50 border-b border-zinc-800">
        <button className="p-1.5 rounded hover:bg-zinc-800 transition-colors">
          <Play className="w-4 h-4 text-zinc-400" />
        </button>
        <div className="flex-1 h-1 bg-zinc-800 rounded-full">
          <div className="w-1/3 h-full bg-blue-500 rounded-full" />
        </div>
        <span className="text-xs text-zinc-500 font-mono">0:05 / 0:12</span>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {transcriptItems.map((item, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg ${
              item.status === "error"
                ? "bg-red-500/10 border border-red-500/20"
                : item.status === "recovered"
                  ? "bg-green-500/10 border border-green-500/20"
                  : "bg-zinc-900/50"
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span
                className={`text-xs font-medium ${
                  item.speaker === "Worker" ? "text-blue-400" : "text-purple-400"
                }`}
              >
                {item.speaker}
              </span>
              <span className="text-xs text-zinc-500 font-mono">{item.timestamp}</span>
            </div>
            <p className="text-sm text-zinc-200">{item.text}</p>
            {item.expected && (
              <p className="text-xs text-red-400 mt-1">Expected: {item.expected}</p>
            )}
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-zinc-800 space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-zinc-400">Environment</span>
          <span className="text-white font-mono">88dB construction site</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-zinc-400">Speaker accent</span>
          <span className="text-white">Southern US</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-zinc-400">Recovery time</span>
          <span className="text-amber-400 font-mono">3.2s</span>
        </div>
      </div>
    </aside>
  )
}
