import { useState } from "react";
import {
  BookOpen,
  LayoutDashboard,
  ClipboardList,
  BarChart2,
  Calendar,
  Bell,
  Search,
  Clock,
  AlertCircle,
  TrendingUp,
  Award,
  Eye,
  EyeOff,
  LogIn,
  GraduationCap,
  Shield,
  Users,
  BrainCircuit,
  Settings,
  ChevronRight,
  Activity,
  UserPlus,
  FileEdit,
  CheckCircle,
  Menu,
  X,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  LineChart,
  Line,
  AreaChart,
  Area,
  RadialBarChart,
  RadialBar,
} from "recharts";

// ─── Login Page ───────────────────────────────────────────────────────────────

function LoginPage({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      if (email.includes("@") && password.length >= 6) {
        onLogin();
      } else {
        setError("Invalid email or password. Please try again.");
        setLoading(false);
      }
    }, 900);
  };

  return (
    <div
      className="min-h-full flex bg-background"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Left panel */}
      <div className="hidden lg:flex flex-col justify-between w-[420px] flex-shrink-0 bg-card border-r border-border p-10">
        <div>
          <div className="flex items-center gap-2.5 mb-16">
            <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
              <BookOpen size={15} className="text-white" />
            </div>
            <span className="text-sm font-bold text-foreground">SCM Portal</span>
          </div>

          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground leading-tight">
                Your academic journey,<br />
                <span style={{ color: "#6366f1" }}>all in one place.</span>
              </h1>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                Track courses, assignments, grades, and deadlines from a single dashboard designed for students.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: GraduationCap, label: "Course Progress", desc: "Real-time completion tracking across all enrolled courses" },
                { icon: ClipboardList, label: "Assignment Center", desc: "Never miss a deadline with smart due date alerts" },
                { icon: BarChart2, label: "Grade Analytics", desc: "Detailed GPA breakdown and academic standing" },
              ].map((f) => (
                <div key={f.label} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <f.icon size={14} style={{ color: "#6366f1" }} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{f.label}</div>
                    <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Shield size={11} />
          <span>Secured with 256-bit encryption · FERPA compliant</span>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-sm">
          <div className="flex items-center gap-2.5 mb-10 lg:hidden">
            <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
              <BookOpen size={13} className="text-white" />
            </div>
            <span className="text-sm font-bold text-foreground">SCM Portal</span>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground">Sign in</h2>
            <p className="text-sm text-muted-foreground mt-1">Access your student portal</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wider"
                style={{ fontFamily: "'Geist Mono', monospace" }}>
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@university.com"
                className="w-full bg-muted border border-border rounded-md px-3 py-2.5 text-sm text-foreground placeholder-muted-foreground outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                autoComplete="email"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  Password
                </label>
                <button type="button" className="text-xs text-primary hover:underline">
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full bg-muted border border-border rounded-md px-3 py-2.5 pr-10 text-sm text-foreground placeholder-muted-foreground outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="flex items-start gap-2 px-3 py-2.5 rounded-md bg-destructive/10 border border-destructive/20 text-xs"
                style={{ color: "#ef4444" }}>
                <AlertCircle size={13} className="mt-0.5 flex-shrink-0" />
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground text-sm font-semibold rounded-md py-2.5 hover:bg-primary/90 active:scale-[0.99] transition-all disabled:opacity-60 disabled:cursor-not-allowed mt-2"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Signing in...
                </span>
              ) : (
                <>
                  <LogIn size={14} />
                  Sign in to Portal
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-border text-center text-xs text-muted-foreground">
            {"Don't have an account? "}
            <button className="text-primary hover:underline font-medium">
              Create account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Dashboard Data ───────────────────────────────────────────────────────────

const PERFORMANCE_DATA = [
  { subject: "C", score: 78 },
  { subject: "C++", score: 85 },
  { subject: "Java", score: 72 },
  { subject: "Python", score: 90 },
  { subject: "SQL", score: 68 },
  { subject: "DBMS", score: 74 },
  { subject: "JS", score: 88 },
  { subject: "HTML/CSS", score: 95 },
];

const RECENT_ACTIVITIES = [
  { icon: UserPlus, color: "#10b981", title: "New student enrolled", sub: "Advanced Mathematics", time: "2 min ago" },
  { icon: FileEdit, color: "#6366f1", title: "Marks updated", sub: "Physics — Midterm Exam", time: "18 min ago" },
  { icon: CheckCircle, color: "#f59e0b", title: "Assignment submitted", sub: "CS 3420 — Dijkstra Implementation", time: "1 hr ago" },
  { icon: UserPlus, color: "#10b981", title: "New student enrolled", sub: "Operating Systems", time: "2 hr ago" },
  { icon: FileEdit, color: "#6366f1", title: "Course updated", sub: "Linear Algebra — Syllabus revision", time: "3 hr ago" },
];

const NAV_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "courses", label: "Courses", icon: BookOpen },
  { id: "students", label: "Students", icon: Users },
  { id: "assignments", label: "Assignments", icon: ClipboardList },
  { id: "ai", label: "AI Predictions", icon: BrainCircuit },
  { id: "grades", label: "Grades", icon: BarChart2 },
  { id: "analytics", label: "Analytics", icon: Activity },
  { id: "settings", label: "Settings", icon: Settings },
];

// ─── Assignments Data ─────────────────────────────────────────────────────────

const ASSIGNMENTS_DATA = [
  // Aptitude
  {
    id: "A001", category: "Aptitude", tag: "Quantitative",
    title: "Number System & Divisibility",
    desc: "Problems on LCM, HCF, remainders, prime factorization, and divisibility rules used in campus placements.",
    difficulty: "Easy", duration: "45 min", questions: 20,
    company: null, color: "#6366f1",
    link: "https://www.indiabix.com/aptitude/numbers/",
  },
  {
    id: "A002", category: "Aptitude", tag: "Logical Reasoning",
    title: "Blood Relations & Directions",
    desc: "Logical reasoning problems covering family relationships and direction-sense commonly asked in TCS, Infosys.",
    difficulty: "Medium", duration: "30 min", questions: 15,
    company: null, color: "#6366f1",
    link: "https://www.indiabix.com/logical-reasoning/blood-relation/",
  },
  {
    id: "A003", category: "Aptitude", tag: "Verbal",
    title: "Sentence Completion & Analogies",
    desc: "Verbal ability questions on synonyms, antonyms, sentence correction, and reading comprehension.",
    difficulty: "Medium", duration: "40 min", questions: 25,
    company: null, color: "#6366f1",
    link: "https://www.indiabix.com/verbal-ability/synonyms/",
  },
  {
    id: "A004", category: "Aptitude", tag: "Data Interpretation",
    title: "Pie Charts, Bar Graphs & Tables",
    desc: "Interpret data from charts and tables to answer quantitative questions — pattern common in Wipro, Capgemini.",
    difficulty: "Hard", duration: "60 min", questions: 18,
    company: null, color: "#6366f1",
    link: "https://www.indiabix.com/data-interpretation/bar-charts/",
  },
  // Language Coding
  {
    id: "B001", category: "Coding", tag: "Python",
    title: "Python: Lists, Dicts & Comprehensions",
    desc: "Solve 10 problems using Python list operations, dictionary manipulation, and list comprehension patterns.",
    difficulty: "Easy", duration: "60 min", questions: 10,
    company: null, color: "#3b82f6",
    link: "https://www.hackerrank.com/domains/python",
  },
  {
    id: "B002", category: "Coding", tag: "Java",
    title: "Java OOP & Collections Challenge",
    desc: "Problems on inheritance, interfaces, ArrayList, HashMap, and Iterator — foundational Java for interviews.",
    difficulty: "Medium", duration: "90 min", questions: 8,
    company: null, color: "#f59e0b",
    link: "https://www.hackerrank.com/domains/java",
  },
  {
    id: "B003", category: "Coding", tag: "C++",
    title: "C++ STL: Vectors, Sets & Maps",
    desc: "Use STL containers and algorithms to solve competitive-style problems involving sorting, searching, and graphs.",
    difficulty: "Hard", duration: "120 min", questions: 6,
    company: null, color: "#10b981",
    link: "https://www.hackerrank.com/domains/cpp",
  },
  {
    id: "B004", category: "Coding", tag: "SQL",
    title: "SQL Joins, Subqueries & Aggregates",
    desc: "Write queries using INNER/LEFT JOIN, GROUP BY, HAVING, and correlated subqueries on an employee database.",
    difficulty: "Medium", duration: "60 min", questions: 12,
    company: null, color: "#ec4899",
    link: "https://www.hackerrank.com/domains/sql",
  },
  {
    id: "B005", category: "Coding", tag: "DSA",
    title: "Arrays & Strings Problem Set",
    desc: "Classic problems — two pointers, sliding window, anagram detection, and subarray sum. Language of your choice.",
    difficulty: "Medium", duration: "90 min", questions: 10,
    company: null, color: "#8b5cf6",
    link: "https://leetcode.com/tag/array/",
  },
  // MNC Company
  {
    id: "C001", category: "MNC", tag: "TCS",
    title: "TCS NQT — Full Mock Test",
    desc: "Full-length TCS National Qualifier Test simulation: Numerical ability, Verbal, Reasoning, Programming Logic, and Coding.",
    difficulty: "Hard", duration: "180 min", questions: 65,
    company: "TCS", color: "#14b8a6",
    link: "https://www.tcsionhub.in/NQTIT/",
  },
  {
    id: "C002", category: "MNC", tag: "Infosys",
    title: "Infosys Springboard Aptitude Pack",
    desc: "Infosys placement prep: Quantitative, Logical, Verbal + Pseudocode + Puzzle sections as per latest exam pattern.",
    difficulty: "Medium", duration: "150 min", questions: 55,
    company: "Infosys", color: "#14b8a6",
    link: "https://infosysbpm.com/offerings/functions/learning-and-development/infosys-springboard.html",
  },
  {
    id: "C003", category: "MNC", tag: "Wipro",
    title: "Wipro NLTH Coding Round",
    desc: "Wipro National Level Talent Hunt — two coding problems (Easy + Medium) to be solved in 60 minutes.",
    difficulty: "Medium", duration: "60 min", questions: 2,
    company: "Wipro", color: "#14b8a6",
    link: "https://www.geeksforgeeks.org/wipro-recruitment-process/",
  },
  {
    id: "C004", category: "MNC", tag: "Amazon",
    title: "Amazon SDE Online Assessment",
    desc: "Two LeetCode-style problems (arrays/trees/graphs) + work-style survey. Timed 105 minutes. High difficulty.",
    difficulty: "Hard", duration: "105 min", questions: 2,
    company: "Amazon", color: "#f97316",
    link: "https://leetcode.com/company/amazon/",
  },
  {
    id: "C005", category: "MNC", tag: "Google",
    title: "Google Kickstart Practice Round",
    desc: "Competitive programming problems from Google Kickstart archive — algorithmic, combinatorics, and geometry.",
    difficulty: "Hard", duration: "180 min", questions: 3,
    company: "Google", color: "#f97316",
    link: "https://codingcompetitions.withgoogle.com/kickstart",
  },
  {
    id: "C006", category: "MNC", tag: "Cognizant",
    title: "Cognizant GenC — Aptitude & Coding",
    desc: "CTS GenC placement test simulation — quant, reasoning, English, automata fix, and coding sections.",
    difficulty: "Easy", duration: "100 min", questions: 40,
    company: "Cognizant", color: "#14b8a6",
    link: "https://www.geeksforgeeks.org/cognizant-placement-paper/",
  },
];

// ─── Assignments View ─────────────────────────────────────────────────────────

function AssignmentsView() {
  const [activeTab, setActiveTab] = useState<"All" | "Aptitude" | "Coding" | "MNC">("All");
  const [activeDiff, setActiveDiff] = useState("All");

  const tabs = ["All", "Aptitude", "Coding", "MNC"] as const;
  const diffs = ["All", "Easy", "Medium", "Hard"];

  const diffColor: Record<string, string> = {
    Easy: "#10b981",
    Medium: "#f59e0b",
    Hard: "#ef4444",
  };
  const diffBg: Record<string, string> = {
    Easy: "rgba(16,185,129,0.12)",
    Medium: "rgba(245,158,11,0.12)",
    Hard: "rgba(239,68,68,0.12)",
  };

  const catColor: Record<string, string> = {
    Aptitude: "#6366f1",
    Coding: "#3b82f6",
    MNC: "#14b8a6",
  };

  const filtered = ASSIGNMENTS_DATA.filter((a) => {
    const matchTab = activeTab === "All" || a.category === activeTab;
    const matchDiff = activeDiff === "All" || a.difficulty === activeDiff;
    return matchTab && matchDiff;
  });

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-lg font-bold text-white">Assignments</h2>
        <p className="text-xs mt-0.5" style={{ color: "#475569" }}>
          Aptitude practice, language coding challenges, and MNC company assessments
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 items-center">
        <div className="flex gap-1 rounded-md p-1" style={{ backgroundColor: "#0f1623", border: "1px solid rgba(255,255,255,0.06)" }}>
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className="text-xs px-3 py-1.5 rounded font-medium transition-colors"
              style={{
                backgroundColor: activeTab === t ? "#10b981" : "transparent",
                color: activeTab === t ? "#fff" : "#64748b",
              }}
            >
              {t === "All" ? `All (${ASSIGNMENTS_DATA.length})` : `${t} (${ASSIGNMENTS_DATA.filter(a => a.category === t).length})`}
            </button>
          ))}
        </div>
        <div className="flex gap-1 rounded-md p-1" style={{ backgroundColor: "#0f1623", border: "1px solid rgba(255,255,255,0.06)" }}>
          {diffs.map((d) => (
            <button
              key={d}
              onClick={() => setActiveDiff(d)}
              className="text-xs px-3 py-1.5 rounded transition-colors"
              style={{
                backgroundColor: activeDiff === d ? "rgba(255,255,255,0.08)" : "transparent",
                color: activeDiff === d ? "#fff" : "#64748b",
              }}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((a) => (
          <div
            key={a.id}
            className="rounded-lg p-4 flex flex-col gap-3 transition-all"
            style={{ backgroundColor: "#0f1623", border: "1px solid rgba(255,255,255,0.06)" }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${a.color}50`)}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)")}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span
                  className="text-xs px-2 py-0.5 rounded font-medium"
                  style={{ backgroundColor: `${catColor[a.category]}15`, color: catColor[a.category], fontFamily: "'Geist Mono', monospace" }}
                >
                  {a.tag}
                </span>
                {a.company && (
                  <span className="text-xs px-2 py-0.5 rounded font-bold"
                    style={{ backgroundColor: "rgba(20,184,166,0.12)", color: "#14b8a6", fontFamily: "'Geist Mono', monospace" }}>
                    {a.company}
                  </span>
                )}
              </div>
              <span
                className="text-xs px-2 py-0.5 rounded flex-shrink-0 font-medium"
                style={{ backgroundColor: diffBg[a.difficulty], color: diffColor[a.difficulty], fontFamily: "'Geist Mono', monospace" }}
              >
                {a.difficulty}
              </span>
            </div>

            {/* Title + desc */}
            <div className="flex-1">
              <h3 className="text-sm font-bold text-white leading-snug">{a.title}</h3>
              <p className="text-xs mt-1.5 leading-relaxed" style={{ color: "#64748b" }}>{a.desc}</p>
            </div>

            {/* Meta */}
            <div className="flex items-center gap-3 text-xs pt-2" style={{ borderTop: "1px solid rgba(255,255,255,0.05)", color: "#475569", fontFamily: "'Geist Mono', monospace" }}>
              <span className="flex items-center gap-1">
                <Clock size={10} /> {a.duration}
              </span>
              <span className="flex items-center gap-1">
                <ClipboardList size={10} /> {a.questions} {a.questions === 1 ? "problem" : "Qs"}
              </span>
              <span className="ml-auto" style={{ color: "#334155" }}>{a.id}</span>
            </div>

            {/* CTA */}
            <a
              href={a.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2 rounded-md text-xs font-semibold transition-colors"
              style={{ backgroundColor: `${a.color}18`, color: a.color }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = `${a.color}30`)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = `${a.color}18`)}
            >
              Start Assignment <ChevronRight size={12} />
            </a>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-16 text-center text-sm" style={{ color: "#475569" }}>
          No assignments match the selected filters.
        </div>
      )}
    </div>
  );
}

// ─── AI Predictions View ─────────────────────────────────────────────────────

const PI_PASS_FAIL = [
  { name: "Pass", value: 78, color: "#10b981" },
  { name: "At Risk", value: 14, color: "#f59e0b" },
  { name: "Fail", value: 8, color: "#ef4444" },
];
const PI_PLACEMENT = [
  { name: "Highly Likely", value: 42, color: "#6366f1" },
  { name: "Likely", value: 31, color: "#3b82f6" },
  { name: "Moderate", value: 17, color: "#f59e0b" },
  { name: "Unlikely", value: 10, color: "#ef4444" },
];
const PI_DROPOUT = [
  { name: "Low Risk", value: 65, color: "#10b981" },
  { name: "Medium Risk", value: 24, color: "#f59e0b" },
  { name: "High Risk", value: 11, color: "#ef4444" },
];
const PI_PERFORMANCE = [
  { name: "Excellent (A)", value: 22, color: "#10b981" },
  { name: "Good (B)", value: 35, color: "#6366f1" },
  { name: "Average (C)", value: 28, color: "#f59e0b" },
  { name: "Below Avg (D)", value: 15, color: "#ef4444" },
];

const PREDICTION_TREND = [
  { month: "Jan", accuracy: 74 }, { month: "Feb", accuracy: 78 },
  { month: "Mar", accuracy: 80 }, { month: "Apr", accuracy: 82 },
  { month: "May", accuracy: 85 }, { month: "Jun", accuracy: 87 },
  { month: "Jul", accuracy: 89 },
];

const AT_RISK_STUDENTS = [
  { name: "Vikram Rao", id: "STU007", risk: "High", course: "JavaScript", score: 58, reason: "Low attendance + missed 3 assignments" },
  { name: "Pooja Bhat", id: "STU014", risk: "High", course: "DBMS", score: 61, reason: "Declining quiz scores over 4 weeks" },
  { name: "Karan Singh", id: "STU005", risk: "Medium", course: "C", score: 67, reason: "Below average in 2 consecutive tests" },
  { name: "Nikhil Desai", id: "STU015", risk: "Medium", course: "C", score: 69, reason: "Missed 2 lab sessions" },
];

function PieCard({ title, data, sub }: { title: string; data: typeof PI_PASS_FAIL; sub: string }) {
  return (
    <div className="rounded-lg p-5" style={{ backgroundColor: "#0f1623", border: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="mb-1">
        <h3 className="text-sm font-semibold text-white">{title}</h3>
        <p className="text-xs mt-0.5" style={{ color: "#475569" }}>{sub}</p>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" innerRadius={52} outerRadius={80} paddingAngle={3} dataKey="value">
            {data.map((entry, i) => <Cell key={i} fill={entry.color} />)}
          </Pie>
          <Tooltip
            formatter={(value: number, name: string) => [`${value}%`, name]}
            contentStyle={{ backgroundColor: "#131b2d", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 6, fontSize: 12 }}
            labelStyle={{ color: "#94a3b8" }}
            itemStyle={{ color: "#e8edf5" }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-1 justify-center">
        {data.map((d) => (
          <div key={d.name} className="flex items-center gap-1.5 text-xs" style={{ color: "#64748b" }}>
            <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: d.color }} />
            <span>{d.name}</span>
            <span className="font-bold" style={{ color: d.color, fontFamily: "'Geist Mono', monospace" }}>{d.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AIPredictionsView() {
  const riskColor: Record<string, string> = { High: "#ef4444", Medium: "#f59e0b", Low: "#10b981" };
  const riskBg: Record<string, string> = { High: "rgba(239,68,68,0.12)", Medium: "rgba(245,158,11,0.12)", Low: "rgba(16,185,129,0.12)" };
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-lg font-bold text-white">AI Predictions</h2>
        <p className="text-xs mt-0.5" style={{ color: "#475569" }}>Machine learning insights — model accuracy 89% (updated daily)</p>
      </div>

      {/* Summary chips */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { label: "Predicted to Pass", value: "78%", color: "#10b981", bg: "rgba(16,185,129,0.1)" },
          { label: "Placement Likely", value: "73%", color: "#6366f1", bg: "rgba(99,102,241,0.1)" },
          { label: "Dropout Risk", value: "11%", color: "#ef4444", bg: "rgba(239,68,68,0.1)" },
          { label: "Model Accuracy", value: "89%", color: "#f59e0b", bg: "rgba(245,158,11,0.1)" },
        ].map((s) => (
          <div key={s.label} className="rounded-lg p-4" style={{ backgroundColor: "#0f1623", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="text-xs mb-2" style={{ color: "#475569" }}>{s.label}</div>
            <div className="text-3xl font-bold" style={{ color: s.color, fontFamily: "'Geist Mono', monospace" }}>{s.value}</div>
            <div className="h-1 mt-3 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
              <div className="h-full rounded-full" style={{ width: s.value, backgroundColor: s.color }} />
            </div>
          </div>
        ))}
      </div>

      {/* Pie charts grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <PieCard title="Pass / Fail Prediction" data={PI_PASS_FAIL} sub="End-of-semester forecast" />
        <PieCard title="Placement Readiness" data={PI_PLACEMENT} sub="Campus recruitment likelihood" />
        <PieCard title="Dropout Risk" data={PI_DROPOUT} sub="Engagement & attendance model" />
        <PieCard title="Performance Band" data={PI_PERFORMANCE} sub="Predicted grade distribution" />
      </div>

      {/* Model accuracy trend + at-risk table */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div className="lg:col-span-2 rounded-lg p-5" style={{ backgroundColor: "#0f1623", border: "1px solid rgba(255,255,255,0.06)" }}>
          <h3 className="text-sm font-semibold text-white mb-1">Model Accuracy Trend</h3>
          <p className="text-xs mb-4" style={{ color: "#475569" }}>Monthly prediction accuracy (%)</p>
          <ResponsiveContainer width="100%" height={160}>
            <AreaChart data={PREDICTION_TREND} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="accGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="rgba(255,255,255,0.04)" vertical={false} />
              <XAxis dataKey="month" tick={{ fill: "#475569", fontSize: 11, fontFamily: "'Geist Mono', monospace" }} axisLine={false} tickLine={false} />
              <YAxis domain={[60, 100]} tick={{ fill: "#475569", fontSize: 11, fontFamily: "'Geist Mono', monospace" }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ backgroundColor: "#131b2d", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 6, fontSize: 12 }} itemStyle={{ color: "#e8edf5" }} />
              <Area type="monotone" dataKey="accuracy" stroke="#6366f1" strokeWidth={2} fill="url(#accGrad)" dot={{ fill: "#6366f1", r: 3 }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="lg:col-span-3 rounded-lg p-5" style={{ backgroundColor: "#0f1623", border: "1px solid rgba(255,255,255,0.06)" }}>
          <h3 className="text-sm font-semibold text-white mb-1">At-Risk Students</h3>
          <p className="text-xs mb-4" style={{ color: "#475569" }}>Students flagged by the AI model for immediate attention</p>
          <div className="space-y-2">
            {AT_RISK_STUDENTS.map((s) => (
              <div key={s.id} className="flex items-start gap-3 p-3 rounded-md" style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)" }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{ backgroundColor: riskBg[s.risk], color: riskColor[s.risk] }}>
                  {s.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm font-medium text-white">{s.name}</span>
                    <span className="text-xs" style={{ color: "#475569", fontFamily: "'Geist Mono', monospace" }}>{s.id}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full font-medium ml-auto" style={{ backgroundColor: riskBg[s.risk], color: riskColor[s.risk] }}>
                      {s.risk} Risk
                    </span>
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: "#64748b" }}>{s.course} — Score: <span style={{ color: riskColor[s.risk], fontFamily: "'Geist Mono', monospace" }}>{s.score}%</span></div>
                  <div className="text-xs mt-0.5" style={{ color: "#475569" }}>{s.reason}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Grades View ──────────────────────────────────────────────────────────────

const GRADES_DATA = [
  { id: "STU001", name: "Aryan Mehta", course: "Python", mid: 82, assign: 88, final: 79, attendance: 92, grade: "A", gpa: 3.8 },
  { id: "STU002", name: "Priya Sharma", course: "Java", mid: 74, assign: 80, final: 71, attendance: 87, grade: "B+", gpa: 3.5 },
  { id: "STU003", name: "Rohan Verma", course: "C++", mid: 68, assign: 72, final: 65, attendance: 78, grade: "B", gpa: 3.2 },
  { id: "STU004", name: "Sneha Patel", course: "HTML/CSS", mid: 91, assign: 95, final: 89, attendance: 97, grade: "A+", gpa: 4.0 },
  { id: "STU005", name: "Karan Singh", course: "C", mid: 63, assign: 67, final: 60, attendance: 72, grade: "C+", gpa: 3.1 },
  { id: "STU006", name: "Anjali Nair", course: "DBMS", mid: 85, assign: 90, final: 83, attendance: 94, grade: "A", gpa: 3.7 },
  { id: "STU007", name: "Vikram Rao", course: "JavaScript", mid: 55, assign: 60, final: 52, attendance: 63, grade: "C", gpa: 2.8 },
  { id: "STU008", name: "Deepa Krishnan", course: "Python", mid: 96, assign: 98, final: 94, attendance: 99, grade: "A+", gpa: 4.0 },
  { id: "STU009", name: "Aditya Kumar", course: "SQL", mid: 71, assign: 76, final: 69, attendance: 83, grade: "B", gpa: 3.4 },
  { id: "STU010", name: "Meera Joshi", course: "Java", mid: 80, assign: 85, final: 78, attendance: 90, grade: "A-", gpa: 3.6 },
  { id: "STU011", name: "Rahul Gupta", course: "C++", mid: 70, assign: 74, final: 67, attendance: 80, grade: "B", gpa: 3.3 },
  { id: "STU012", name: "Nisha Reddy", course: "HTML/CSS", mid: 88, assign: 92, final: 86, attendance: 95, grade: "A", gpa: 3.8 },
  { id: "STU013", name: "Siddharth Iyer", course: "JavaScript", mid: 76, assign: 82, final: 73, attendance: 85, grade: "B+", gpa: 3.5 },
  { id: "STU014", name: "Pooja Bhat", course: "DBMS", mid: 61, assign: 65, final: 58, attendance: 68, grade: "C+", gpa: 2.9 },
  { id: "STU015", name: "Nikhil Desai", course: "C", mid: 65, assign: 70, final: 62, attendance: 75, grade: "C+", gpa: 3.0 },
  { id: "STU016", name: "Kavya Menon", course: "Python", mid: 90, assign: 94, final: 88, attendance: 96, grade: "A+", gpa: 3.9 },
  { id: "STU017", name: "Tanmay Shah", course: "SQL", mid: 72, assign: 77, final: 70, attendance: 82, grade: "B", gpa: 3.2 },
  { id: "STU018", name: "Isha Pillai", course: "Java", mid: 83, assign: 87, final: 80, attendance: 91, grade: "A-", gpa: 3.7 },
];

const GRADE_DIST = [
  { grade: "A+", count: 3, color: "#10b981" },
  { grade: "A", count: 3, color: "#6366f1" },
  { grade: "A-", count: 2, color: "#3b82f6" },
  { grade: "B+", count: 2, color: "#f59e0b" },
  { grade: "B", count: 4, color: "#f97316" },
  { grade: "C+", count: 3, color: "#ef4444" },
  { grade: "C", count: 1, color: "#dc2626" },
];

function GradesView() {
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState<"name" | "gpa" | "final">("gpa");

  const gradeColor = (g: string) => {
    if (g.startsWith("A")) return "#10b981";
    if (g.startsWith("B")) return "#6366f1";
    if (g.startsWith("C")) return "#f59e0b";
    return "#ef4444";
  };

  const avgGPA = (GRADES_DATA.reduce((s, g) => s + g.gpa, 0) / GRADES_DATA.length).toFixed(2);
  const topStudents = [...GRADES_DATA].sort((a, b) => b.gpa - a.gpa).slice(0, 3);

  const filtered = [...GRADES_DATA]
    .filter((g) =>
      g.name.toLowerCase().includes(search.toLowerCase()) ||
      g.course.toLowerCase().includes(search.toLowerCase()) ||
      g.id.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => (b[sortKey] as number) - (a[sortKey] as number));

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-lg font-bold text-white">Grades</h2>
        <p className="text-xs mt-0.5" style={{ color: "#475569" }}>Academic performance records for all enrolled students</p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { label: "Avg GPA", value: avgGPA, color: "#10b981" },
          { label: "Top Score", value: "96%", color: "#6366f1" },
          { label: "Pass Rate", value: "89%", color: "#f59e0b" },
          { label: "Distinction", value: "8 students", color: "#ec4899" },
        ].map((s) => (
          <div key={s.label} className="rounded-lg p-4" style={{ backgroundColor: "#0f1623", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="text-xs mb-1" style={{ color: "#475569" }}>{s.label}</div>
            <div className="text-2xl font-bold" style={{ color: s.color, fontFamily: "'Geist Mono', monospace" }}>{s.value}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Grade distribution chart */}
        <div className="rounded-lg p-5" style={{ backgroundColor: "#0f1623", border: "1px solid rgba(255,255,255,0.06)" }}>
          <h3 className="text-sm font-semibold text-white mb-1">Grade Distribution</h3>
          <p className="text-xs mb-3" style={{ color: "#475569" }}>All students by letter grade</p>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={GRADE_DIST} barSize={28} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
              <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.04)" />
              <XAxis dataKey="grade" tick={{ fill: "#475569", fontSize: 11, fontFamily: "'Geist Mono', monospace" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#475569", fontSize: 11, fontFamily: "'Geist Mono', monospace" }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ backgroundColor: "#131b2d", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 6, fontSize: 12 }} itemStyle={{ color: "#e8edf5" }} />
              <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                {GRADE_DIST.map((entry, i) => <Cell key={i} fill={entry.color} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Top performers */}
        <div className="lg:col-span-2 rounded-lg p-5" style={{ backgroundColor: "#0f1623", border: "1px solid rgba(255,255,255,0.06)" }}>
          <h3 className="text-sm font-semibold text-white mb-4">Top Performers</h3>
          <div className="space-y-3">
            {topStudents.map((s, i) => (
              <div key={s.id} className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{ backgroundColor: ["rgba(245,158,11,0.2)","rgba(148,163,184,0.2)","rgba(180,134,80,0.2)"][i], color: ["#f59e0b","#94a3b8","#b48650"][i] }}>
                  {i + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-white">{s.name}</div>
                  <div className="text-xs" style={{ color: "#475569" }}>{s.course} · {s.id}</div>
                  <div className="h-1 mt-1.5 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
                    <div className="h-full rounded-full" style={{ width: `${s.gpa / 4 * 100}%`, backgroundColor: gradeColor(s.grade) }} />
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-sm font-bold" style={{ color: gradeColor(s.grade), fontFamily: "'Geist Mono', monospace" }}>{s.grade}</div>
                  <div className="text-xs" style={{ color: "#475569", fontFamily: "'Geist Mono', monospace" }}>GPA {s.gpa}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full grades table */}
      <div className="rounded-lg overflow-hidden" style={{ backgroundColor: "#0f1623", border: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="flex items-center justify-between px-5 py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <span className="text-sm font-semibold text-white">All Student Grades</span>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-md px-3 py-1.5 text-xs"
              style={{ backgroundColor: "#131b2d", border: "1px solid rgba(255,255,255,0.06)" }}>
              <Search size={11} style={{ color: "#475569" }} />
              <input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)}
                className="bg-transparent outline-none w-32 text-white placeholder-[#475569] text-xs" />
            </div>
            <select value={sortKey} onChange={(e) => setSortKey(e.target.value as any)}
              className="text-xs rounded-md px-2 py-1.5 outline-none"
              style={{ backgroundColor: "#131b2d", border: "1px solid rgba(255,255,255,0.06)", color: "#94a3b8" }}>
              <option value="gpa">Sort by GPA</option>
              <option value="final">Sort by Final</option>
              <option value="name">Sort by Name</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ backgroundColor: "rgba(255,255,255,0.02)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                {["ID", "Student", "Course", "Mid-term", "Assignments", "Final", "Attendance", "Grade", "GPA"].map((h) => (
                  <th key={h} className="text-left px-4 py-2.5 text-xs font-medium uppercase tracking-wider whitespace-nowrap"
                    style={{ color: "#475569", fontFamily: "'Geist Mono', monospace" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((s, i) => (
                <tr key={s.id}
                  style={{ borderBottom: i < filtered.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.02)")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                >
                  <td className="px-4 py-3 text-xs" style={{ color: "#10b981", fontFamily: "'Geist Mono', monospace" }}>{s.id}</td>
                  <td className="px-4 py-3 text-sm font-medium text-white whitespace-nowrap">{s.name}</td>
                  <td className="px-4 py-3 text-xs" style={{ color: "#64748b" }}>{s.course}</td>
                  {[s.mid, s.assign, s.final].map((v, vi) => (
                    <td key={vi} className="px-4 py-3 text-sm" style={{ color: v >= 80 ? "#10b981" : v >= 65 ? "#f59e0b" : "#ef4444", fontFamily: "'Geist Mono', monospace" }}>{v}%</td>
                  ))}
                  <td className="px-4 py-3 text-sm" style={{ color: s.attendance >= 85 ? "#10b981" : "#f59e0b", fontFamily: "'Geist Mono', monospace" }}>{s.attendance}%</td>
                  <td className="px-4 py-3">
                    <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ backgroundColor: `${gradeColor(s.grade)}15`, color: gradeColor(s.grade), fontFamily: "'Geist Mono', monospace" }}>{s.grade}</span>
                  </td>
                  <td className="px-4 py-3 text-sm font-bold" style={{ color: gradeColor(s.grade), fontFamily: "'Geist Mono', monospace" }}>{s.gpa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ─── Analytics View ───────────────────────────────────────────────────────────

const ENROLLMENT_TREND = [
  { month: "Jan", students: 980 }, { month: "Feb", students: 1020 },
  { month: "Mar", students: 1085 }, { month: "Apr", students: 1120 },
  { month: "May", students: 1190 }, { month: "Jun", students: 1240 },
  { month: "Jul", students: 1284 },
];

const COURSE_ENROLL = [
  { course: "HTML/CSS", students: 342 },
  { course: "Python", students: 310 },
  { course: "JavaScript", students: 287 },
  { course: "Java", students: 205 },
  { course: "SQL", students: 176 },
  { course: "C++", students: 118 },
  { course: "DBMS", students: 134 },
  { course: "C", students: 142 },
];

const ATTENDANCE_WEEKLY = [
  { week: "Wk1", rate: 91 }, { week: "Wk2", rate: 88 }, { week: "Wk3", rate: 93 },
  { week: "Wk4", rate: 90 }, { week: "Wk5", rate: 92 }, { week: "Wk6", rate: 95 },
];

const SUBJECT_PASS = [
  { name: "HTML/CSS", value: 96, fill: "#14b8a6" },
  { name: "Python", value: 91, fill: "#3b82f6" },
  { name: "JavaScript", value: 84, fill: "#f97316" },
  { name: "Java", value: 87, fill: "#f59e0b" },
];

function AnalyticsView() {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-lg font-bold text-white">Analytics</h2>
        <p className="text-xs mt-0.5" style={{ color: "#475569" }}>Portal-wide insights — enrollment, attendance, performance, and engagement</p>
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { label: "Total Enrollments", value: "1,284", delta: "▲ 31% YoY", color: "#10b981" },
          { label: "Avg Attendance", value: "91.5%", delta: "▲ 2.3% vs last sem", color: "#6366f1" },
          { label: "Course Completion", value: "84%", delta: "▲ 5% improvement", color: "#f59e0b" },
          { label: "Active Instructors", value: "38", delta: "6 added this sem", color: "#ec4899" },
        ].map((k) => (
          <div key={k.label} className="rounded-lg p-4" style={{ backgroundColor: "#0f1623", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="text-xs mb-1" style={{ color: "#475569" }}>{k.label}</div>
            <div className="text-2xl font-bold" style={{ color: k.color, fontFamily: "'Geist Mono', monospace" }}>{k.value}</div>
            <div className="text-xs mt-1" style={{ color: "#475569" }}>{k.delta}</div>
          </div>
        ))}
      </div>

      {/* Enrollment trend + Course distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="rounded-lg p-5" style={{ backgroundColor: "#0f1623", border: "1px solid rgba(255,255,255,0.06)" }}>
          <h3 className="text-sm font-semibold text-white mb-1">Student Enrollment Trend</h3>
          <p className="text-xs mb-4" style={{ color: "#475569" }}>Jan – Jul 2026</p>
          <ResponsiveContainer width="100%" height={180}>
            <AreaChart data={ENROLLMENT_TREND} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="enrollGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="rgba(255,255,255,0.04)" vertical={false} />
              <XAxis dataKey="month" tick={{ fill: "#475569", fontSize: 11, fontFamily: "'Geist Mono', monospace" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#475569", fontSize: 11, fontFamily: "'Geist Mono', monospace" }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ backgroundColor: "#131b2d", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 6, fontSize: 12 }} itemStyle={{ color: "#e8edf5" }} />
              <Area type="monotone" dataKey="students" stroke="#10b981" strokeWidth={2} fill="url(#enrollGrad)" dot={{ fill: "#10b981", r: 3 }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="rounded-lg p-5" style={{ backgroundColor: "#0f1623", border: "1px solid rgba(255,255,255,0.06)" }}>
          <h3 className="text-sm font-semibold text-white mb-1">Enrollment by Course</h3>
          <p className="text-xs mb-4" style={{ color: "#475569" }}>Students per subject</p>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={COURSE_ENROLL} layout="vertical" barSize={12} margin={{ top: 4, right: 16, left: 10, bottom: 0 }}>
              <CartesianGrid horizontal={false} stroke="rgba(255,255,255,0.04)" />
              <XAxis type="number" tick={{ fill: "#475569", fontSize: 10, fontFamily: "'Geist Mono', monospace" }} axisLine={false} tickLine={false} />
              <YAxis type="category" dataKey="course" tick={{ fill: "#94a3b8", fontSize: 11 }} axisLine={false} tickLine={false} width={65} />
              <Tooltip contentStyle={{ backgroundColor: "#131b2d", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 6, fontSize: 12 }} itemStyle={{ color: "#e8edf5" }} />
              <Bar dataKey="students" fill="#6366f1" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Attendance + Pass rate radial */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="rounded-lg p-5" style={{ backgroundColor: "#0f1623", border: "1px solid rgba(255,255,255,0.06)" }}>
          <h3 className="text-sm font-semibold text-white mb-1">Weekly Attendance Rate</h3>
          <p className="text-xs mb-4" style={{ color: "#475569" }}>Semester Weeks 1–6 (%)</p>
          <ResponsiveContainer width="100%" height={160}>
            <LineChart data={ATTENDANCE_WEEKLY} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
              <CartesianGrid stroke="rgba(255,255,255,0.04)" vertical={false} />
              <XAxis dataKey="week" tick={{ fill: "#475569", fontSize: 11, fontFamily: "'Geist Mono', monospace" }} axisLine={false} tickLine={false} />
              <YAxis domain={[80, 100]} tick={{ fill: "#475569", fontSize: 11, fontFamily: "'Geist Mono', monospace" }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ backgroundColor: "#131b2d", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 6, fontSize: 12 }} itemStyle={{ color: "#e8edf5" }} />
              <Line type="monotone" dataKey="rate" stroke="#f59e0b" strokeWidth={2} dot={{ fill: "#f59e0b", r: 4 }} activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="rounded-lg p-5" style={{ backgroundColor: "#0f1623", border: "1px solid rgba(255,255,255,0.06)" }}>
          <h3 className="text-sm font-semibold text-white mb-1">Pass Rate by Subject</h3>
          <p className="text-xs mb-4" style={{ color: "#475569" }}>Top 4 courses — semester pass %</p>
          <ResponsiveContainer width="100%" height={160}>
            <RadialBarChart innerRadius="30%" outerRadius="90%" data={SUBJECT_PASS} startAngle={180} endAngle={0}>
              <RadialBar dataKey="value" cornerRadius={4} label={{ position: "insideStart", fill: "#fff", fontSize: 10 }} />
              <Legend iconSize={8} wrapperStyle={{ fontSize: 11, color: "#64748b", paddingTop: 8 }} />
              <Tooltip contentStyle={{ backgroundColor: "#131b2d", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 6, fontSize: 12 }} itemStyle={{ color: "#e8edf5" }} />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Quick metrics table */}
      <div className="rounded-lg p-5" style={{ backgroundColor: "#0f1623", border: "1px solid rgba(255,255,255,0.06)" }}>
        <h3 className="text-sm font-semibold text-white mb-4">Portal Activity Summary</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { label: "Assignments Posted", value: "124" },
            { label: "Submissions Today", value: "47" },
            { label: "Avg Completion", value: "78%" },
            { label: "New Registrations", value: "18" },
            { label: "Active Sessions", value: "312" },
            { label: "Support Tickets", value: "5" },
          ].map((m) => (
            <div key={m.label} className="text-center p-3 rounded-md" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.04)" }}>
              <div className="text-xl font-bold text-white" style={{ fontFamily: "'Geist Mono', monospace" }}>{m.value}</div>
              <div className="text-xs mt-1 leading-snug" style={{ color: "#475569" }}>{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Settings View ────────────────────────────────────────────────────────────

function Toggle({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button
      onClick={onChange}
      className="relative w-10 h-5 rounded-full flex-shrink-0 transition-colors duration-200"
      style={{ backgroundColor: checked ? "#10b981" : "rgba(255,255,255,0.1)" }}
    >
      <span
        className="absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform duration-200"
        style={{ transform: checked ? "translateX(22px)" : "translateX(2px)" }}
      />
    </button>
  );
}

function SectionCard({ title, desc, children }: { title: string; desc: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg overflow-hidden" style={{ backgroundColor: "#0f1623", border: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="px-5 py-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <h3 className="text-sm font-semibold text-white">{title}</h3>
        <p className="text-xs mt-0.5" style={{ color: "#475569" }}>{desc}</p>
      </div>
      <div className="px-5 py-4 space-y-4">{children}</div>
    </div>
  );
}

function SettingRow({ label, desc, children }: { label: string; desc?: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium text-white">{label}</div>
        {desc && <div className="text-xs mt-0.5" style={{ color: "#475569" }}>{desc}</div>}
      </div>
      <div className="flex-shrink-0">{children}</div>
    </div>
  );
}

function InputField({ defaultValue, placeholder, type = "text" }: { defaultValue?: string; placeholder?: string; type?: string }) {
  const [val, setVal] = useState(defaultValue ?? "");
  return (
    <input
      type={type}
      value={val}
      onChange={(e) => setVal(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-md px-3 py-2 text-sm text-white outline-none transition-colors"
      style={{ backgroundColor: "#131b2d", border: "1px solid rgba(255,255,255,0.08)", fontFamily: type === "text" && val.match(/\d/) ? "'Geist Mono', monospace" : "inherit" }}
      onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(99,102,241,0.5)")}
      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
    />
  );
}

function SettingsView() {
  const TABS = [
    { id: "profile", label: "Profile" },
    { id: "account", label: "Account & Security" },
    { id: "notifications", label: "Notifications" },
    { id: "appearance", label: "Appearance" },
    { id: "system", label: "System" },
    { id: "privacy", label: "Privacy" },
  ];

  const [tab, setTab] = useState("profile");
  const [notifs, setNotifs] = useState({
    emailAssign: true, emailGrade: true, emailAnnounce: true,
    smsReminder: false, smsExam: true,
    pushAll: true, pushDeadline: true, pushNewCourse: false,
  });
  const [appearance, setAppearance] = useState({
    theme: "dark", language: "en", timezone: "IST", density: "comfortable", fontSize: "medium",
  });
  const [system, setSystem] = useState({
    autoSave: true, sessionTimeout: true, analytics: true, betaFeatures: false, twoFactor: true, loginAlerts: true,
  });
  const [privacy, setPrivacy] = useState({
    showProfile: true, showGrades: false, showAttendance: true, dataCollection: false, activityLog: true,
  });
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const toggle = (obj: any, setObj: any, key: string) => setObj({ ...obj, [key]: !obj[key] });

  const inputClass = "w-full rounded-md px-3 py-2 text-sm text-white outline-none transition-colors";
  const inputStyle = { backgroundColor: "#131b2d", border: "1px solid rgba(255,255,255,0.08)" };
  const selectStyle = { backgroundColor: "#131b2d", border: "1px solid rgba(255,255,255,0.08)", color: "#e8edf5" };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h2 className="text-lg font-bold text-white">Settings</h2>
          <p className="text-xs mt-0.5" style={{ color: "#475569" }}>Manage your portal preferences and account configuration</p>
        </div>
        <button
          onClick={handleSave}
          className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-md transition-all"
          style={{ backgroundColor: saved ? "#10b981" : "#6366f1", color: "#fff" }}
        >
          {saved ? <><CheckCircle size={14} /> Saved!</> : "Save Changes"}
        </button>
      </div>

      {/* Tab bar */}
      <div className="flex gap-1 flex-wrap rounded-md p-1" style={{ backgroundColor: "#0f1623", border: "1px solid rgba(255,255,255,0.06)" }}>
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className="text-xs px-3 py-1.5 rounded font-medium transition-colors"
            style={{
              backgroundColor: tab === t.id ? "#10b981" : "transparent",
              color: tab === t.id ? "#fff" : "#64748b",
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* ── PROFILE ── */}
      {tab === "profile" && (
        <div className="space-y-4">
          <SectionCard title="Profile Information" desc="Update your personal details visible across the portal">
            <div className="flex items-center gap-4 pb-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold text-white flex-shrink-0"
                style={{ backgroundColor: "#10b981" }}>AU</div>
              <div>
                <div className="text-sm font-semibold text-white">Admin User</div>
                <div className="text-xs mt-0.5" style={{ color: "#475569" }}>admin@scms.com</div>
                <button className="text-xs mt-2 px-3 py-1 rounded-md transition-colors"
                  style={{ backgroundColor: "rgba(99,102,241,0.12)", color: "#6366f1" }}>
                  Change Photo
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div><label className="text-xs text-muted-foreground mb-1.5 block" style={{ color: "#475569" }}>First Name</label><InputField defaultValue="Admin" /></div>
              <div><label className="text-xs text-muted-foreground mb-1.5 block" style={{ color: "#475569" }}>Last Name</label><InputField defaultValue="User" /></div>
              <div><label className="text-xs text-muted-foreground mb-1.5 block" style={{ color: "#475569" }}>Email Address</label><InputField defaultValue="admin@scms.com" type="email" /></div>
              <div><label className="text-xs text-muted-foreground mb-1.5 block" style={{ color: "#475569" }}>Phone Number</label><InputField defaultValue="+91 98765 43210" /></div>
              <div><label className="text-xs text-muted-foreground mb-1.5 block" style={{ color: "#475569" }}>Employee ID</label><InputField defaultValue="EMP20240001" /></div>
              <div><label className="text-xs text-muted-foreground mb-1.5 block" style={{ color: "#475569" }}>Department</label>
                <select className="w-full rounded-md px-3 py-2 text-sm outline-none" style={selectStyle}>
                  <option>Computer Science</option><option>Information Technology</option><option>Data Science</option><option>Electronics</option>
                </select>
              </div>
            </div>
            <div><label className="text-xs mb-1.5 block" style={{ color: "#475569" }}>Bio / About</label>
              <textarea rows={3} defaultValue="Senior administrator at SCMS portal. Responsible for course management and student records."
                className="w-full rounded-md px-3 py-2 text-sm text-white outline-none resize-none"
                style={inputStyle} />
            </div>
          </SectionCard>

          <SectionCard title="Role & Permissions" desc="Your current access level and assigned roles">
            <div className="space-y-2">
              {[
                { role: "Super Admin", desc: "Full access to all portal modules", active: true },
                { role: "Course Manager", desc: "Create, edit, and archive courses", active: true },
                { role: "Grade Auditor", desc: "View and export student grade reports", active: true },
                { role: "Analytics Viewer", desc: "Access to analytics and AI prediction dashboards", active: false },
              ].map((r) => (
                <div key={r.role} className="flex items-center justify-between p-3 rounded-md"
                  style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)" }}>
                  <div>
                    <div className="text-sm font-medium text-white">{r.role}</div>
                    <div className="text-xs mt-0.5" style={{ color: "#475569" }}>{r.desc}</div>
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded-full font-medium"
                    style={{ backgroundColor: r.active ? "rgba(16,185,129,0.12)" : "rgba(255,255,255,0.05)", color: r.active ? "#10b981" : "#475569" }}>
                    {r.active ? "Assigned" : "Not Assigned"}
                  </span>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>
      )}

      {/* ── ACCOUNT & SECURITY ── */}
      {tab === "account" && (
        <div className="space-y-4">
          <SectionCard title="Change Password" desc="Use a strong password of at least 8 characters">
            <div className="space-y-3 max-w-md">
              <div><label className="text-xs mb-1.5 block" style={{ color: "#475569" }}>Current Password</label><InputField type="password" placeholder="••••••••" /></div>
              <div><label className="text-xs mb-1.5 block" style={{ color: "#475569" }}>New Password</label><InputField type="password" placeholder="••••••••" /></div>
              <div><label className="text-xs mb-1.5 block" style={{ color: "#475569" }}>Confirm New Password</label><InputField type="password" placeholder="••••••••" /></div>
              <button className="text-sm font-semibold px-4 py-2 rounded-md" style={{ backgroundColor: "rgba(99,102,241,0.15)", color: "#6366f1" }}>Update Password</button>
            </div>
          </SectionCard>

          <SectionCard title="Security Settings" desc="Protect your account with additional security layers">
            <SettingRow label="Two-Factor Authentication" desc="Require OTP via email or SMS on every login">
              <Toggle checked={system.twoFactor} onChange={() => toggle(system, setSystem, "twoFactor")} />
            </SettingRow>
            <SettingRow label="Login Alerts" desc="Receive an email when a new device logs into your account">
              <Toggle checked={system.loginAlerts} onChange={() => toggle(system, setSystem, "loginAlerts")} />
            </SettingRow>
            <SettingRow label="Session Timeout" desc="Automatically log out after 30 minutes of inactivity">
              <Toggle checked={system.sessionTimeout} onChange={() => toggle(system, setSystem, "sessionTimeout")} />
            </SettingRow>
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 16 }}>
              <div className="text-xs font-medium text-white mb-2">Active Sessions</div>
              {[
                { device: "Chrome on Windows 11", location: "Bengaluru, India", time: "Now (current)", current: true },
                { device: "Safari on iPhone 14", location: "Chennai, India", time: "2 hours ago", current: false },
                { device: "Firefox on macOS", location: "Hyderabad, India", time: "Yesterday, 6:42 PM", current: false },
              ].map((s) => (
                <div key={s.device} className="flex items-center justify-between py-2.5"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                  <div>
                    <div className="text-sm text-white">{s.device}</div>
                    <div className="text-xs mt-0.5" style={{ color: "#475569" }}>{s.location} · {s.time}</div>
                  </div>
                  {s.current
                    ? <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: "rgba(16,185,129,0.12)", color: "#10b981" }}>Active</span>
                    : <button className="text-xs px-2 py-0.5 rounded-md" style={{ backgroundColor: "rgba(239,68,68,0.1)", color: "#ef4444" }}>Revoke</button>}
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Danger Zone" desc="Irreversible account actions — proceed with caution">
            <div className="flex items-center justify-between p-3 rounded-md" style={{ backgroundColor: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.15)" }}>
              <div>
                <div className="text-sm font-medium" style={{ color: "#ef4444" }}>Deactivate Account</div>
                <div className="text-xs mt-0.5" style={{ color: "#475569" }}>Temporarily disable your portal access</div>
              </div>
              <button className="text-xs px-3 py-1.5 rounded-md font-medium" style={{ backgroundColor: "rgba(239,68,68,0.12)", color: "#ef4444" }}>Deactivate</button>
            </div>
          </SectionCard>
        </div>
      )}

      {/* ── NOTIFICATIONS ── */}
      {tab === "notifications" && (
        <div className="space-y-4">
          <SectionCard title="Email Notifications" desc="Choose which events trigger an email to your inbox">
            <SettingRow label="Assignment Posted" desc="When a new assignment is created in your courses"><Toggle checked={notifs.emailAssign} onChange={() => toggle(notifs, setNotifs, "emailAssign")} /></SettingRow>
            <SettingRow label="Grade Published" desc="When your marks or grades are updated by an instructor"><Toggle checked={notifs.emailGrade} onChange={() => toggle(notifs, setNotifs, "emailGrade")} /></SettingRow>
            <SettingRow label="Announcements" desc="Portal-wide notices and important academic alerts"><Toggle checked={notifs.emailAnnounce} onChange={() => toggle(notifs, setNotifs, "emailAnnounce")} /></SettingRow>
          </SectionCard>

          <SectionCard title="SMS Notifications" desc="Text alerts for time-sensitive events">
            <SettingRow label="Assignment Reminders" desc="SMS 24 hours before assignment deadline"><Toggle checked={notifs.smsReminder} onChange={() => toggle(notifs, setNotifs, "smsReminder")} /></SettingRow>
            <SettingRow label="Exam Alerts" desc="Receive SMS the day before a scheduled exam"><Toggle checked={notifs.smsExam} onChange={() => toggle(notifs, setNotifs, "smsExam")} /></SettingRow>
          </SectionCard>

          <SectionCard title="Push Notifications" desc="In-browser push alerts while using the portal">
            <SettingRow label="All Push Notifications" desc="Master toggle for all browser push alerts"><Toggle checked={notifs.pushAll} onChange={() => toggle(notifs, setNotifs, "pushAll")} /></SettingRow>
            <SettingRow label="Deadline Reminders" desc="Push alert 1 hour before any submission deadline"><Toggle checked={notifs.pushDeadline} onChange={() => toggle(notifs, setNotifs, "pushDeadline")} /></SettingRow>
            <SettingRow label="New Course Enrollment" desc="Alert when a student enrolls in your course"><Toggle checked={notifs.pushNewCourse} onChange={() => toggle(notifs, setNotifs, "pushNewCourse")} /></SettingRow>
          </SectionCard>

          <SectionCard title="Notification Schedule" desc="Quiet hours — suppress all notifications during this window">
            <div className="grid grid-cols-2 gap-4 max-w-sm">
              <div><label className="text-xs mb-1.5 block" style={{ color: "#475569" }}>Quiet From</label>
                <input type="time" defaultValue="22:00" className="w-full rounded-md px-3 py-2 text-sm text-white outline-none" style={inputStyle} /></div>
              <div><label className="text-xs mb-1.5 block" style={{ color: "#475569" }}>Quiet Until</label>
                <input type="time" defaultValue="07:00" className="w-full rounded-md px-3 py-2 text-sm text-white outline-none" style={inputStyle} /></div>
            </div>
          </SectionCard>
        </div>
      )}

      {/* ── APPEARANCE ── */}
      {tab === "appearance" && (
        <div className="space-y-4">
          <SectionCard title="Theme" desc="Choose your portal color scheme">
            <div className="flex gap-3">
              {[
                { id: "dark", label: "Dark", bg: "#080c18", border: "#1a2236" },
                { id: "light", label: "Light", bg: "#f8fafc", border: "#e2e8f0" },
                { id: "system", label: "System", bg: "linear-gradient(135deg,#080c18 50%,#f8fafc 50%)", border: "#334155" },
              ].map((t) => (
                <button key={t.id} onClick={() => setAppearance({ ...appearance, theme: t.id })}
                  className="flex flex-col items-center gap-2">
                  <div className="w-16 h-10 rounded-md transition-all" style={{
                    background: t.bg, border: `2px solid ${appearance.theme === t.id ? "#10b981" : "rgba(255,255,255,0.08)"}`,
                  }} />
                  <span className="text-xs" style={{ color: appearance.theme === t.id ? "#10b981" : "#475569" }}>{t.label}</span>
                </button>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Display Preferences" desc="Customize how information is presented">
            <SettingRow label="Language">
              <select value={appearance.language} onChange={(e) => setAppearance({ ...appearance, language: e.target.value })}
                className="rounded-md px-3 py-1.5 text-sm outline-none" style={selectStyle}>
                <option value="en">English</option><option value="hi">Hindi</option><option value="ta">Tamil</option><option value="te">Telugu</option>
              </select>
            </SettingRow>
            <SettingRow label="Timezone">
              <select value={appearance.timezone} onChange={(e) => setAppearance({ ...appearance, timezone: e.target.value })}
                className="rounded-md px-3 py-1.5 text-sm outline-none" style={selectStyle}>
                <option value="IST">IST (UTC+5:30)</option><option value="UTC">UTC</option><option value="EST">EST (UTC-5)</option>
              </select>
            </SettingRow>
            <SettingRow label="Layout Density">
              <select value={appearance.density} onChange={(e) => setAppearance({ ...appearance, density: e.target.value })}
                className="rounded-md px-3 py-1.5 text-sm outline-none" style={selectStyle}>
                <option value="compact">Compact</option><option value="comfortable">Comfortable</option><option value="spacious">Spacious</option>
              </select>
            </SettingRow>
            <SettingRow label="Font Size">
              <select value={appearance.fontSize} onChange={(e) => setAppearance({ ...appearance, fontSize: e.target.value })}
                className="rounded-md px-3 py-1.5 text-sm outline-none" style={selectStyle}>
                <option value="small">Small</option><option value="medium">Medium</option><option value="large">Large</option>
              </select>
            </SettingRow>
          </SectionCard>
        </div>
      )}

      {/* ── SYSTEM ── */}
      {tab === "system" && (
        <div className="space-y-4">
          <SectionCard title="System Preferences" desc="Control portal-level behaviors and features">
            <SettingRow label="Auto-Save" desc="Automatically save form data as you type"><Toggle checked={system.autoSave} onChange={() => toggle(system, setSystem, "autoSave")} /></SettingRow>
            <SettingRow label="Usage Analytics" desc="Allow SCMS to collect anonymous usage data for improvement"><Toggle checked={system.analytics} onChange={() => toggle(system, setSystem, "analytics")} /></SettingRow>
            <SettingRow label="Beta Features" desc="Get early access to experimental features before public release"><Toggle checked={system.betaFeatures} onChange={() => toggle(system, setSystem, "betaFeatures")} /></SettingRow>
          </SectionCard>

          <SectionCard title="Data & Storage" desc="Manage your portal data and exports">
            <div className="space-y-3">
              {[
                { label: "Export Student Records", desc: "Download all student data as CSV", color: "#6366f1" },
                { label: "Export Grade Reports", desc: "Download grade sheets in Excel format", color: "#10b981" },
                { label: "Export Assignment Logs", desc: "Download submission history as PDF", color: "#f59e0b" },
                { label: "Backup Portal Data", desc: "Create a full backup of all portal data", color: "#3b82f6" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between p-3 rounded-md"
                  style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)" }}>
                  <div>
                    <div className="text-sm font-medium text-white">{item.label}</div>
                    <div className="text-xs mt-0.5" style={{ color: "#475569" }}>{item.desc}</div>
                  </div>
                  <button className="text-xs px-3 py-1.5 rounded-md font-medium"
                    style={{ backgroundColor: `${item.color}15`, color: item.color }}>Download</button>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Portal Information" desc="Current system version and status">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { label: "Version", value: "v2.4.1" },
                { label: "Last Updated", value: "Jul 1, 2026" },
                { label: "Server Status", value: "Operational" },
                { label: "Database", value: "PostgreSQL 16" },
                { label: "Storage Used", value: "4.2 GB / 20 GB" },
                { label: "Uptime", value: "99.94%" },
              ].map((info) => (
                <div key={info.label} className="p-3 rounded-md" style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)" }}>
                  <div className="text-xs" style={{ color: "#475569" }}>{info.label}</div>
                  <div className="text-sm font-semibold text-white mt-0.5" style={{ fontFamily: "'Geist Mono', monospace" }}>{info.value}</div>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>
      )}

      {/* ── PRIVACY ── */}
      {tab === "privacy" && (
        <div className="space-y-4">
          <SectionCard title="Profile Visibility" desc="Control what other users can see about you">
            <SettingRow label="Public Profile" desc="Make your profile visible to other portal users"><Toggle checked={privacy.showProfile} onChange={() => toggle(privacy, setPrivacy, "showProfile")} /></SettingRow>
            <SettingRow label="Show Grades" desc="Allow other students to see your grade summary"><Toggle checked={privacy.showGrades} onChange={() => toggle(privacy, setPrivacy, "showGrades")} /></SettingRow>
            <SettingRow label="Show Attendance" desc="Display your attendance percentage on your profile"><Toggle checked={privacy.showAttendance} onChange={() => toggle(privacy, setPrivacy, "showAttendance")} /></SettingRow>
          </SectionCard>

          <SectionCard title="Data & Tracking" desc="Manage how your activity data is used">
            <SettingRow label="Data Collection" desc="Allow SCMS to collect behavioral data for AI predictions"><Toggle checked={privacy.dataCollection} onChange={() => toggle(privacy, setPrivacy, "dataCollection")} /></SettingRow>
            <SettingRow label="Activity Log" desc="Keep a log of all your actions in the portal"><Toggle checked={privacy.activityLog} onChange={() => toggle(privacy, setPrivacy, "activityLog")} /></SettingRow>
          </SectionCard>

          <SectionCard title="Data Rights" desc="Your rights under institutional data policy">
            <div className="space-y-2">
              {[
                { label: "Request My Data", desc: "Download a full copy of your personal data", color: "#6366f1" },
                { label: "Delete Activity History", desc: "Permanently erase your activity logs", color: "#f59e0b" },
                { label: "Withdraw Consent", desc: "Opt out of all optional data processing", color: "#ef4444" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between p-3 rounded-md"
                  style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)" }}>
                  <div>
                    <div className="text-sm font-medium text-white">{item.label}</div>
                    <div className="text-xs mt-0.5" style={{ color: "#475569" }}>{item.desc}</div>
                  </div>
                  <button className="text-xs px-3 py-1.5 rounded-md font-medium"
                    style={{ backgroundColor: `${item.color}12`, color: item.color }}>{item.label.split(" ")[0]}</button>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>
      )}
    </div>
  );
}

// ─── Courses Data ─────────────────────────────────────────────────────────────

const COURSES_DATA = [
  {
    id: "c",
    name: "C Programming",
    code: "CS101",
    color: "#6366f1",
    students: 142,
    duration: "12 weeks",
    level: "Beginner",
    desc: "Fundamentals of C programming including pointers, memory management, and data structures.",
    pdfs: [
      { title: "C Programming Basics", url: "https://www.learn-c.org/static/getting_started.pdf" },
      { title: "Pointers & Memory Management", url: "https://www.cs.yale.edu/homes/aspnes/pinewiki/C.html" },
      { title: "C Data Structures Guide", url: "https://publications.gbdirect.co.uk/c_book/" },
    ],
    links: [
      { title: "Learn-C.org (Interactive)", url: "https://www.learn-c.org" },
      { title: "C Reference — cppreference.com", url: "https://en.cppreference.com/w/c" },
      { title: "GeeksforGeeks C Tutorial", url: "https://www.geeksforgeeks.org/c-programming-language/" },
      { title: "TutorialsPoint C", url: "https://www.tutorialspoint.com/cprogramming/index.htm" },
    ],
  },
  {
    id: "cpp",
    name: "C++ Programming",
    code: "CS102",
    color: "#10b981",
    students: 118,
    duration: "14 weeks",
    level: "Intermediate",
    desc: "Object-oriented programming in C++ covering classes, inheritance, templates, and STL.",
    pdfs: [
      { title: "C++ OOP Concepts", url: "https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2013/n3797.pdf" },
      { title: "STL Reference Guide", url: "https://www.cplusplus.com/reference/stl/" },
      { title: "C++ Templates Deep Dive", url: "https://www.cs.binghamton.edu/~rhagy/teaching/cs580s11/C++Templates.pdf" },
    ],
    links: [
      { title: "cplusplus.com", url: "https://www.cplusplus.com/doc/tutorial/" },
      { title: "cppreference — C++", url: "https://en.cppreference.com/w/cpp" },
      { title: "LearnCpp.com", url: "https://www.learncpp.com" },
      { title: "GeeksforGeeks C++", url: "https://www.geeksforgeeks.org/c-plus-plus/" },
    ],
  },
  {
    id: "java",
    name: "Java Programming",
    code: "CS201",
    color: "#f59e0b",
    students: 205,
    duration: "16 weeks",
    level: "Intermediate",
    desc: "Java fundamentals, OOP, collections framework, exception handling, and multithreading.",
    pdfs: [
      { title: "Java SE 17 Language Spec", url: "https://docs.oracle.com/javase/specs/jls/se17/jls17.pdf" },
      { title: "Java Collections Framework", url: "https://docs.oracle.com/javase/8/docs/technotes/guides/collections/overview.html" },
      { title: "Effective Java — Summary", url: "https://www.cs.cmu.edu/~charlie/courses/15-214/2016-fall/slides/effective-java.pdf" },
    ],
    links: [
      { title: "Oracle Java Tutorials", url: "https://docs.oracle.com/javase/tutorial/" },
      { title: "GeeksforGeeks Java", url: "https://www.geeksforgeeks.org/java/" },
      { title: "W3Schools Java", url: "https://www.w3schools.com/java/" },
      { title: "Baeldung Java Guides", url: "https://www.baeldung.com" },
    ],
  },
  {
    id: "python",
    name: "Python Programming",
    code: "CS202",
    color: "#3b82f6",
    students: 310,
    duration: "10 weeks",
    level: "Beginner",
    desc: "Python scripting, data structures, file I/O, libraries, and introduction to data science.",
    pdfs: [
      { title: "Python 3 Official Docs (PDF)", url: "https://docs.python.org/3/archives/python-3.12.0-docs-pdf-a4.zip" },
      { title: "Python Data Structures", url: "https://greenteapress.com/thinkpython2/thinkpython2.pdf" },
      { title: "Automate the Boring Stuff", url: "https://automatetheboringstuff.com/2e/chapter0/" },
    ],
    links: [
      { title: "Python.org Official Docs", url: "https://docs.python.org/3/" },
      { title: "Real Python Tutorials", url: "https://realpython.com" },
      { title: "W3Schools Python", url: "https://www.w3schools.com/python/" },
      { title: "GeeksforGeeks Python", url: "https://www.geeksforgeeks.org/python-programming-language/" },
    ],
  },
  {
    id: "sql",
    name: "SQL & Databases",
    code: "DB301",
    color: "#ec4899",
    students: 176,
    duration: "8 weeks",
    level: "Beginner",
    desc: "Structured Query Language — SELECT, JOIN, subqueries, indexing, and transactions.",
    pdfs: [
      { title: "SQL Fundamentals Guide", url: "https://www.w3schools.com/sql/sql_quickref.asp" },
      { title: "MySQL Reference Manual", url: "https://downloads.mysql.com/docs/refman-8.0-en.pdf" },
      { title: "SQL Performance Explained", url: "https://use-the-index-luke.com/sql/preface" },
    ],
    links: [
      { title: "SQLZoo — Interactive SQL", url: "https://sqlzoo.net" },
      { title: "W3Schools SQL Tutorial", url: "https://www.w3schools.com/sql/" },
      { title: "Mode SQL Tutorial", url: "https://mode.com/sql-tutorial/" },
      { title: "GeeksforGeeks SQL", url: "https://www.geeksforgeeks.org/sql-tutorial/" },
    ],
  },
  {
    id: "dbms",
    name: "DBMS",
    code: "DB302",
    color: "#8b5cf6",
    students: 134,
    duration: "12 weeks",
    level: "Intermediate",
    desc: "Database Management Systems — ER models, normalization, transactions, concurrency control.",
    pdfs: [
      { title: "DBMS Concepts — Silberschatz", url: "https://codex.cs.yale.edu/avi/db-book/db7/slide-dir/index.html" },
      { title: "Normalization Guide", url: "https://www.cs.uct.ac.za/mit_notes/database/htmls/chp12.html" },
      { title: "Transaction Management", url: "https://www.db-book.com/slides-dir/PDF-dir/ch14.pdf" },
    ],
    links: [
      { title: "GeeksforGeeks DBMS", url: "https://www.geeksforgeeks.org/dbms/" },
      { title: "JavaTPoint DBMS", url: "https://www.javatpoint.com/dbms-tutorial" },
      { title: "TutorialsPoint DBMS", url: "https://www.tutorialspoint.com/dbms/index.htm" },
      { title: "DB-Engines Ranking", url: "https://db-engines.com/en/ranking" },
    ],
  },
  {
    id: "js",
    name: "JavaScript",
    code: "WD401",
    color: "#f97316",
    students: 287,
    duration: "12 weeks",
    level: "Intermediate",
    desc: "Modern JavaScript — ES6+, DOM manipulation, async/await, fetch API, and frameworks intro.",
    pdfs: [
      { title: "JavaScript: The Definitive Guide", url: "https://pepa.holla.cz/wp-content/uploads/2016/01/JavaScript-The-Definitive-Guide-6th-Edition.pdf" },
      { title: "You Don't Know JS — Up & Going", url: "https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/up%20%26%20going/README.md" },
      { title: "MDN JavaScript Guide", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" },
    ],
    links: [
      { title: "MDN Web Docs — JS", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { title: "JavaScript.info", url: "https://javascript.info" },
      { title: "Eloquent JavaScript", url: "https://eloquentjavascript.net" },
      { title: "W3Schools JavaScript", url: "https://www.w3schools.com/js/" },
    ],
  },
  {
    id: "htmlcss",
    name: "HTML / CSS",
    code: "WD101",
    color: "#14b8a6",
    students: 342,
    duration: "8 weeks",
    level: "Beginner",
    desc: "Web foundations — semantic HTML5, CSS3, flexbox, grid, responsive design, and animations.",
    pdfs: [
      { title: "HTML5 Specification Overview", url: "https://html.spec.whatwg.org/print.pdf" },
      { title: "CSS Grid Layout Guide", url: "https://css-tricks.com/snippets/css/complete-guide-grid/" },
      { title: "Responsive Design Handbook", url: "https://www.smashingmagazine.com/printed-books/responsive-web-design/" },
    ],
    links: [
      { title: "MDN HTML Reference", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { title: "MDN CSS Reference", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      { title: "CSS-Tricks", url: "https://css-tricks.com" },
      { title: "W3Schools HTML/CSS", url: "https://www.w3schools.com/html/" },
    ],
  },
];

// ─── Students Data ────────────────────────────────────────────────────────────

const STUDENTS_DATA = [
  { id: "STU001", name: "Aryan Mehta", year: "1st Year", course: "Python", email: "aryan.m@university.com", status: "Active", gpa: 3.8 },
  { id: "STU002", name: "Priya Sharma", year: "2nd Year", course: "Java", email: "priya.s@university.com", status: "Active", gpa: 3.5 },
  { id: "STU003", name: "Rohan Verma", year: "3rd Year", course: "C++", email: "rohan.v@university.com", status: "Active", gpa: 3.2 },
  { id: "STU004", name: "Sneha Patel", year: "2nd Year", course: "HTML/CSS", email: "sneha.p@university.com", status: "Active", gpa: 3.9 },
  { id: "STU005", name: "Karan Singh", year: "1st Year", course: "C", email: "karan.s@university.com", status: "Active", gpa: 3.1 },
  { id: "STU006", name: "Anjali Nair", year: "4th Year", course: "DBMS", email: "anjali.n@university.com", status: "Active", gpa: 3.7 },
  { id: "STU007", name: "Vikram Rao", year: "3rd Year", course: "JavaScript", email: "vikram.r@university.com", status: "Inactive", gpa: 2.8 },
  { id: "STU008", name: "Deepa Krishnan", year: "1st Year", course: "Python", email: "deepa.k@university.com", status: "Active", gpa: 4.0 },
  { id: "STU009", name: "Aditya Kumar", year: "2nd Year", course: "SQL", email: "aditya.k@university.com", status: "Active", gpa: 3.4 },
  { id: "STU010", name: "Meera Joshi", year: "4th Year", course: "Java", email: "meera.j@university.com", status: "Active", gpa: 3.6 },
  { id: "STU011", name: "Rahul Gupta", year: "3rd Year", course: "C++", email: "rahul.g@university.com", status: "Active", gpa: 3.3 },
  { id: "STU012", name: "Nisha Reddy", year: "1st Year", course: "HTML/CSS", email: "nisha.r@university.com", status: "Active", gpa: 3.8 },
  { id: "STU013", name: "Siddharth Iyer", year: "2nd Year", course: "JavaScript", email: "siddharth.i@university.com", status: "Active", gpa: 3.5 },
  { id: "STU014", name: "Pooja Bhat", year: "4th Year", course: "DBMS", email: "pooja.b@university.com", status: "Inactive", gpa: 2.9 },
  { id: "STU015", name: "Nikhil Desai", year: "1st Year", course: "C", email: "nikhil.d@university.com", status: "Active", gpa: 3.0 },
  { id: "STU016", name: "Kavya Menon", year: "3rd Year", course: "Python", email: "kavya.m@university.com", status: "Active", gpa: 3.9 },
  { id: "STU017", name: "Tanmay Shah", year: "2nd Year", course: "SQL", email: "tanmay.s@university.com", status: "Active", gpa: 3.2 },
  { id: "STU018", name: "Isha Pillai", year: "4th Year", course: "Java", email: "isha.p@university.com", status: "Active", gpa: 3.7 },
];

// ─── Course Detail View ───────────────────────────────────────────────────────

function CourseDetail({ course, onBack }: { course: typeof COURSES_DATA[0]; onBack: () => void }) {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-3">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md transition-colors"
          style={{ backgroundColor: "rgba(255,255,255,0.05)", color: "#94a3b8" }}
        >
          ← Back to Courses
        </button>
        <div className="h-4 w-px" style={{ backgroundColor: "rgba(255,255,255,0.08)" }} />
        <span className="text-xs" style={{ color: "#475569", fontFamily: "'Geist Mono', monospace" }}>{course.code}</span>
      </div>

      <div className="rounded-lg p-5" style={{ backgroundColor: "#0f1623", border: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 text-lg font-bold text-white"
            style={{ backgroundColor: `${course.color}25` }}>
            <BookOpen size={22} style={{ color: course.color }} />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-bold text-white">{course.name}</h2>
            <p className="text-sm mt-1" style={{ color: "#64748b" }}>{course.desc}</p>
            <div className="flex flex-wrap gap-4 mt-3">
              {[
                { label: "Students", value: course.students },
                { label: "Duration", value: course.duration },
                { label: "Level", value: course.level },
                { label: "Code", value: course.code },
              ].map((m) => (
                <div key={m.label}>
                  <div className="text-xs" style={{ color: "#475569" }}>{m.label}</div>
                  <div className="text-sm font-semibold text-white mt-0.5" style={{ fontFamily: "'Geist Mono', monospace" }}>{m.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* PDFs */}
        <div className="rounded-lg p-5" style={{ backgroundColor: "#0f1623", border: "1px solid rgba(255,255,255,0.06)" }}>
          <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
            <span className="w-5 h-5 rounded flex items-center justify-center text-xs" style={{ backgroundColor: `${course.color}20`, color: course.color }}>📄</span>
            Study Materials (PDF)
          </h3>
          <div className="space-y-2">
            {course.pdfs.map((pdf, i) => (
              <a
                key={i}
                href={pdf.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-md group transition-colors"
                style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${course.color}40`)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)")}
              >
                <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0 text-xs font-bold"
                  style={{ backgroundColor: `${course.color}15`, color: course.color }}>
                  PDF
                </div>
                <span className="text-sm text-white flex-1">{pdf.title}</span>
                <ChevronRight size={14} style={{ color: "#475569" }} />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="rounded-lg p-5" style={{ backgroundColor: "#0f1623", border: "1px solid rgba(255,255,255,0.06)" }}>
          <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
            <span className="w-5 h-5 rounded flex items-center justify-center text-xs" style={{ backgroundColor: `${course.color}20`, color: course.color }}>🔗</span>
            Useful Links
          </h3>
          <div className="space-y-2">
            {course.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-md transition-colors"
                style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${course.color}40`)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)")}
              >
                <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0 text-xs"
                  style={{ backgroundColor: `${course.color}15`, color: course.color }}>
                  🌐
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-white truncate">{link.title}</div>
                  <div className="text-xs truncate mt-0.5" style={{ color: "#475569", fontFamily: "'Geist Mono', monospace" }}>
                    {link.url.replace("https://", "").split("/")[0]}
                  </div>
                </div>
                <ChevronRight size={14} style={{ color: "#475569" }} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Courses Grid View ────────────────────────────────────────────────────────

function CoursesView() {
  const [selected, setSelected] = useState<typeof COURSES_DATA[0] | null>(null);

  if (selected) return <CourseDetail course={selected} onBack={() => setSelected(null)} />;

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-lg font-bold text-white">Courses</h2>
        <p className="text-xs mt-0.5" style={{ color: "#475569" }}>{COURSES_DATA.length} courses available — click a course to view materials</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {COURSES_DATA.map((c) => (
          <button
            key={c.id}
            onClick={() => setSelected(c)}
            className="text-left rounded-lg p-5 flex flex-col gap-4 transition-all hover:scale-[1.02] active:scale-[0.99]"
            style={{ backgroundColor: "#0f1623", border: "1px solid rgba(255,255,255,0.06)" }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${c.color}50`)}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)")}
          >
            <div className="flex items-start justify-between">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${c.color}20` }}>
                <BookOpen size={18} style={{ color: c.color }} />
              </div>
              <span className="text-xs px-2 py-0.5 rounded-full font-medium"
                style={{ backgroundColor: `${c.color}15`, color: c.color, fontFamily: "'Geist Mono', monospace" }}>
                {c.level}
              </span>
            </div>
            <div>
              <div className="text-xs mb-1" style={{ color: "#475569", fontFamily: "'Geist Mono', monospace" }}>{c.code}</div>
              <div className="text-sm font-bold text-white">{c.name}</div>
              <p className="text-xs mt-1.5 line-clamp-2 leading-relaxed" style={{ color: "#64748b" }}>{c.desc}</p>
            </div>
            <div className="flex items-center justify-between pt-2" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="flex items-center gap-1.5 text-xs" style={{ color: "#64748b" }}>
                <Users size={11} />
                <span style={{ fontFamily: "'Geist Mono', monospace" }}>{c.students} students</span>
              </div>
              <div className="text-xs" style={{ color: "#64748b" }}>{c.duration}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Students View ────────────────────────────────────────────────────────────

function StudentsView() {
  const [search, setSearch] = useState("");
  const [yearFilter, setYearFilter] = useState("All");

  const years = ["All", "1st Year", "2nd Year", "3rd Year", "4th Year"];

  const filtered = STUDENTS_DATA.filter((s) => {
    const matchSearch =
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.id.toLowerCase().includes(search.toLowerCase()) ||
      s.course.toLowerCase().includes(search.toLowerCase());
    const matchYear = yearFilter === "All" || s.year === yearFilter;
    return matchSearch && matchYear;
  });

  const gpaColor = (gpa: number) =>
    gpa >= 3.7 ? "#10b981" : gpa >= 3.0 ? "#6366f1" : gpa >= 2.5 ? "#f59e0b" : "#ef4444";

  return (
    <div className="space-y-5">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h2 className="text-lg font-bold text-white">Students</h2>
          <p className="text-xs mt-0.5" style={{ color: "#475569" }}>{filtered.length} of {STUDENTS_DATA.length} students enrolled</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <div className="flex items-center gap-2 rounded-md px-3 py-1.5 text-xs"
            style={{ backgroundColor: "#0f1623", border: "1px solid rgba(255,255,255,0.06)" }}>
            <Search size={12} style={{ color: "#475569" }} />
            <input
              type="text"
              placeholder="Search name, ID, course..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent outline-none w-44 text-white placeholder-[#475569] text-xs"
            />
          </div>
          <div className="flex gap-1 rounded-md p-1" style={{ backgroundColor: "#0f1623", border: "1px solid rgba(255,255,255,0.06)" }}>
            {years.map((y) => (
              <button
                key={y}
                onClick={() => setYearFilter(y)}
                className="text-xs px-2.5 py-1 rounded transition-colors"
                style={{
                  backgroundColor: yearFilter === y ? "#10b981" : "transparent",
                  color: yearFilter === y ? "#fff" : "#64748b",
                }}
              >
                {y}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-lg overflow-hidden" style={{ backgroundColor: "#0f1623", border: "1px solid rgba(255,255,255,0.06)" }}>
        <table className="w-full">
          <thead>
            <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", backgroundColor: "rgba(255,255,255,0.02)" }}>
              {["Student ID", "Name", "Year", "Enrolled Course", "Email", "GPA", "Status"].map((h) => (
                <th key={h} className="text-left px-4 py-3 text-xs font-medium uppercase tracking-wider"
                  style={{ color: "#475569", fontFamily: "'Geist Mono', monospace" }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((s, i) => (
              <tr
                key={s.id}
                style={{ borderBottom: i < filtered.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.02)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                <td className="px-4 py-3">
                  <span className="text-xs font-medium" style={{ color: "#10b981", fontFamily: "'Geist Mono', monospace" }}>{s.id}</span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                      style={{ backgroundColor: `${["#6366f1","#10b981","#f59e0b","#ec4899","#3b82f6"][i % 5]}30`, color: ["#6366f1","#10b981","#f59e0b","#ec4899","#3b82f6"][i % 5] }}>
                      {s.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <span className="text-sm font-medium text-white">{s.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className="text-xs px-2 py-0.5 rounded" style={{ backgroundColor: "rgba(99,102,241,0.1)", color: "#6366f1", fontFamily: "'Geist Mono', monospace" }}>
                    {s.year}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="text-sm" style={{ color: "#94a3b8" }}>{s.course}</span>
                </td>
                <td className="px-4 py-3">
                  <span className="text-xs" style={{ color: "#475569", fontFamily: "'Geist Mono', monospace" }}>{s.email}</span>
                </td>
                <td className="px-4 py-3">
                  <span className="text-sm font-bold" style={{ color: gpaColor(s.gpa), fontFamily: "'Geist Mono', monospace" }}>{s.gpa.toFixed(1)}</span>
                </td>
                <td className="px-4 py-3">
                  <span className="text-xs px-2 py-0.5 rounded-full font-medium"
                    style={{
                      backgroundColor: s.status === "Active" ? "rgba(16,185,129,0.12)" : "rgba(239,68,68,0.12)",
                      color: s.status === "Active" ? "#10b981" : "#ef4444",
                    }}>
                    {s.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <div className="py-12 text-center text-sm" style={{ color: "#475569" }}>
            No students match your search.
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Custom Tooltip ───────────────────────────────────────────────────────────

function CustomTooltip({ active, payload, label }: any) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-md px-3 py-2 text-xs"
        style={{ fontFamily: "'Geist Mono', monospace" }}>
        <div className="text-muted-foreground mb-0.5">{label}</div>
        <div className="text-foreground font-bold">{payload[0].value}%</div>
      </div>
    );
  }
  return null;
}

// ─── Main Dashboard ───────────────────────────────────────────────────────────

function MainApp() {
  const [activeNav, setActiveNav] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const now = new Date();
  const dateStr = now.toLocaleDateString("en-US", {
    weekday: "long", month: "long", day: "numeric", year: "numeric",
  });

  return (
    <div
      className="flex h-full bg-background text-foreground overflow-hidden"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Sidebar */}
      <aside
        className={`${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 fixed lg:relative z-30 flex flex-col h-full transition-transform duration-200`}
        style={{ width: 220, backgroundColor: "#080c18", borderRight: "1px solid rgba(255,255,255,0.06)" }}
      >
        {/* Logo */}
        <div className="px-5 py-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-md flex items-center justify-center" style={{ backgroundColor: "#10b981" }}>
              <BookOpen size={14} className="text-white" />
            </div>
            <div>
              <div className="text-sm font-bold text-white leading-none">SCMS</div>
              <div className="text-xs mt-0.5" style={{ color: "#475569" }}>Management System</div>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const active = activeNav === item.id;
            return (
              <button
                key={item.id}
                onClick={() => { setActiveNav(item.id); setSidebarOpen(false); }}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors text-left"
                style={{
                  backgroundColor: active ? "rgba(16,185,129,0.12)" : "transparent",
                  color: active ? "#10b981" : "#64748b",
                }}
                onMouseEnter={(e) => { if (!active) (e.currentTarget as HTMLElement).style.color = "#94a3b8"; }}
                onMouseLeave={(e) => { if (!active) (e.currentTarget as HTMLElement).style.color = "#64748b"; }}
              >
                <Icon size={15} />
                <span className="font-medium">{item.label}</span>
                {active && <ChevronRight size={12} className="ml-auto" style={{ color: "#10b981" }} />}
              </button>
            );
          })}
        </nav>

        {/* User */}
        <div className="px-4 py-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
              style={{ backgroundColor: "#10b981" }}>
              AU
            </div>
            <div className="min-w-0">
              <div className="text-xs font-semibold text-white truncate">Admin User</div>
              <div className="text-xs truncate" style={{ color: "#475569", fontFamily: "'Geist Mono', monospace" }}>
                admin@scms.com
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-20 bg-black/60 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top bar */}
        <header
          className="flex items-center gap-3 px-5 py-3 flex-shrink-0"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", backgroundColor: "#080c18" }}
        >
          <button
            className="lg:hidden p-1.5 text-muted-foreground hover:text-foreground"
            onClick={() => setSidebarOpen((v) => !v)}
          >
            {sidebarOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

          <div className="flex-1">
            <h1 className="text-sm font-semibold text-white">
              Student Course Management System
            </h1>
            <p className="text-xs" style={{ color: "#475569", fontFamily: "'Geist Mono', monospace" }}>
              {dateStr}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 rounded-md px-3 py-1.5 text-xs"
              style={{ backgroundColor: "#0f1623", border: "1px solid rgba(255,255,255,0.06)" }}>
              <Search size={12} style={{ color: "#475569" }} />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none w-28 text-foreground placeholder-[#475569]"
              />
            </div>
            <button className="relative p-2 rounded-md transition-colors hover:bg-white/5"
              style={{ color: "#475569" }}>
              <Bell size={16} />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#10b981" }} />
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto px-6 py-5 space-y-5" style={{ backgroundColor: "#0a0e1a" }}>

          {activeNav === "courses" ? (
            <CoursesView />
          ) : activeNav === "students" ? (
            <StudentsView />
          ) : activeNav === "assignments" ? (
            <AssignmentsView />
          ) : activeNav === "ai" ? (
            <AIPredictionsView />
          ) : activeNav === "grades" ? (
            <GradesView />
          ) : activeNav === "analytics" ? (
            <AnalyticsView />
          ) : activeNav === "settings" ? (
            <SettingsView />
          ) : (
            <>
          {/* Page title */}
          <div>
            <h2 className="text-lg font-bold text-white">Overview</h2>
            <p className="text-xs mt-0.5" style={{ color: "#475569" }}>
              Welcome back — here is what is happening today.
            </p>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { label: "Active Courses", value: "24", delta: "+2 this month", icon: BookOpen, color: "#6366f1", bg: "rgba(99,102,241,0.1)" },
              { label: "Total Students", value: "1,284", delta: "+45.2% enrolled", icon: Users, color: "#10b981", bg: "rgba(16,185,129,0.1)" },
              { label: "Avg. Performance", value: "81.2%", delta: "Strategic goals met", icon: TrendingUp, color: "#f59e0b", bg: "rgba(245,158,11,0.1)" },
              { label: "Attendance Rate", value: "92.8%", delta: "+1.4% vs last term", icon: Award, color: "#ec4899", bg: "rgba(236,72,153,0.1)" },
            ].map((s) => (
              <div key={s.label}
                className="rounded-lg p-4 flex flex-col gap-3"
                style={{ backgroundColor: "#0f1623", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest" style={{ color: "#475569", fontFamily: "'Geist Mono', monospace" }}>
                    {s.label}
                  </span>
                  <div className="w-7 h-7 rounded-md flex items-center justify-center" style={{ backgroundColor: s.bg }}>
                    <s.icon size={13} style={{ color: s.color }} />
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white" style={{ fontFamily: "'Geist Mono', monospace" }}>
                    {s.value}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: s.color }}>{s.delta}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Chart + Activities */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Bar chart */}
            <div className="lg:col-span-2 rounded-lg p-5"
              style={{ backgroundColor: "#0f1623", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="text-sm font-semibold text-white">Average Performance by Subject</h3>
                  <p className="text-xs mt-0.5" style={{ color: "#475569" }}>Current semester scores</p>
                </div>
                <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: "rgba(16,185,129,0.1)", color: "#10b981", fontFamily: "'Geist Mono', monospace" }}>
                  Live
                </span>
              </div>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={PERFORMANCE_DATA} barSize={22} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                  <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.04)" />
                  <XAxis
                    dataKey="subject"
                    tick={{ fill: "#475569", fontSize: 11, fontFamily: "'Geist Mono', monospace" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    domain={[0, 100]}
                    tick={{ fill: "#475569", fontSize: 11, fontFamily: "'Geist Mono', monospace" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(255,255,255,0.03)" }} />
                  <Bar dataKey="score" fill="#10b981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Recent activities */}
            <div className="rounded-lg p-5 flex flex-col"
              style={{ backgroundColor: "#0f1623", border: "1px solid rgba(255,255,255,0.06)" }}>
              <h3 className="text-sm font-semibold text-white mb-4">Recent Activities</h3>
              <div className="space-y-3 flex-1">
                {RECENT_ACTIVITIES.map((a, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: `${a.color}18` }}>
                      <a.icon size={13} style={{ color: a.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-medium text-white leading-snug">{a.title}</div>
                      <div className="text-xs truncate mt-0.5" style={{ color: "#475569" }}>{a.sub}</div>
                    </div>
                    <div className="text-xs flex-shrink-0" style={{ color: "#334155", fontFamily: "'Geist Mono', monospace" }}>
                      {a.time}
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-4 text-xs font-medium flex items-center gap-1 hover:underline"
                style={{ color: "#10b981" }}>
                View all activity <ChevronRight size={11} />
              </button>
            </div>
          </div>
          </>
          )}

        </main>
      </div>
    </div>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return <LoginPage onLogin={() => setLoggedIn(true)} />;
  }

  return <MainApp />;
}
