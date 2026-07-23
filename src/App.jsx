import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import AlumniDirectory from "./components/AlumniDirectory/AlumniDirectory";
import News from "./components/News/News";
import Articles from "./components/Articles/Articles";
import Resources from "./components/Resources/Resources";
import Event from "./components/Event/Event";
import "./App.css";

const ACCOUNTS = {
  admin: { password: "admin", role: "admin", name: "Portal Admin" },
  deyo: { password: "deyo", role: "alumni", name: "Deyo Thomas" },
};

const initialEvents = [
  {
    id: 1,
    title: "Annual Alumni Leadership Forum",
    date: "2026-08-18",
    time: "10:00 AM",
    location: "PSG Convention Centre",
    type: "Leadership",
    attendees: 250,
    description: "Meet industry leaders and alumni for an inspiring day of ideas, mentorship, and meaningful connections.",
  },
  {
    id: 2,
    title: "Technology Alumni Networking Evening",
    date: "2026-09-06",
    time: "05:30 PM",
    location: "Innovation Hall, Coimbatore",
    type: "Networking",
    attendees: 180,
    description: "A curated networking evening for technology alumni, founders, and emerging professionals.",
  },
  {
    id: 3,
    title: "Career Mentorship Workshop",
    date: "2026-10-11",
    time: "11:00 AM",
    location: "Virtual event",
    type: "Career",
    attendees: 300,
    description: "Practical guidance from experienced alumni on career growth, transitions, and leadership readiness.",
  },
];

const initialNews = [
  {
    id: 1,
    title: "PSG alumni chapters expand to five new international cities",
    category: "Community",
    author: "Alumni Office",
    date: "2026-07-18",
    status: "Published",
    description: "New chapters will help graduates build stronger professional and community connections across the globe.",
  },
  {
    id: 2,
    title: "Executive mentorship applications are now open",
    category: "Mentorship",
    author: "Alumni Office",
    date: "2026-07-12",
    status: "Published",
    description: "Alumni mentors and early-career graduates can now apply for the upcoming mentorship cohort.",
  },
  {
    id: 3,
    title: "Four alumni receive national innovation awards",
    category: "Achievement",
    author: "Alumni Office",
    date: "2026-07-05",
    status: "Published",
    description: "The awardees were recognised for meaningful contributions to technology, healthcare, and research.",
  },
];

const initialResources = [
  { id: 1, title: "Alumni Mentorship Playbook", type: "PDF Guide", size: "2.4 MB", downloads: 328 },
  { id: 2, title: "Executive Career Transitions", type: "eBook", size: "5.1 MB", downloads: 214 },
  { id: 3, title: "Chapter Leadership Toolkit", type: "Toolkit", size: "1.8 MB", downloads: 176 },
];

const initialAlumni = [
  { id: 1, name: "Deyo Thomas", batch: "2021", department: "Computer Science", role: "Product Designer", company: "Nexa Labs", location: "Bengaluru", email: "deyo@psgalumni.org", status: "Active" },
  { id: 2, name: "Dr. Meera Shah", batch: "2002", department: "Biomedical Engineering", role: "Chief Strategy Officer", company: "NovaCare Health", location: "Mumbai", email: "meera@psgalumni.org", status: "Active" },
  { id: 3, name: "Arvind Rao", batch: "1998", department: "Mechanical Engineering", role: "Managing Director", company: "Northstar Capital", location: "Singapore", email: "arvind@psgalumni.org", status: "Active" },
  { id: 4, name: "Nandita Krishnan", batch: "2005", department: "Information Technology", role: "VP, Enterprise Technology", company: "Aster Cloud", location: "Bengaluru", email: "nandita@psgalumni.org", status: "Active" },
];

const navByRole = {
  admin: [
    ["overview", "grid", "Overview"],
    ["events", "calendar", "Events"],
    ["resources", "folder", "Resources"],
    ["alumni", "users", "Alumni directory"],
    ["news", "news", "News & updates"],
  ],
  alumni: [
    ["home", "home", "My home"],
    ["events", "calendar", "Events for me"],
    ["news", "news", "News & updates"],
    ["profile", "user", "My profile"],
  ],
};

const iconPaths = {
  grid: <><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M16 3v4M8 3v4M3 10h18"/></>,
  folder: <path d="M3 6a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v9a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Z"/>,
  users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>,
  news: <><path d="M4 4h16v16H4z"/><path d="M8 8h8M8 12h8M8 16h5"/></>,
  home: <><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10M9 20v-6h6v6"/></>,
  user: <><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></>,
  logout: <><path d="M10 17l5-5-5-5M15 12H3"/><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/></>,
  plus: <path d="M12 5v14M5 12h14"/>,
  arrow: <path d="m9 18 6-6-6-6"/>,
  clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
  pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2"/></>,
  search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>,
  bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/></>,
  check: <path d="m5 12 4 4L19 6"/>,
  upload: <><path d="M12 16V4M7 9l5-5 5 5"/><path d="M4 15v5h16v-5"/></>,
  trash: <><path d="M4 7h16M9 7V4h6v3M6 7l1 14h10l1-14M10 11v6M14 11v6"/></>,
  menu: <path d="M4 7h16M4 12h16M4 17h16"/>,
  close: <path d="m6 6 12 12M18 6 6 18"/>,
};

function Icon({ name, size = 20 }) {
  return <svg className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{iconPaths[name]}</svg>;
}

function PublicHome({ onLogin }) {
  return (
    <div id="psg-public-site">
      <Header onAuthOpen={onLogin} />
      <section id="home"><Hero onAuthOpen={onLogin} /></section>
      <section id="about"><About /></section>
      <section id="directory"><AlumniDirectory /></section>
      <section id="news"><News /></section>
      <section id="articles"><Articles /></section>
      <section id="resources"><Resources /></section>
      <section id="event"><Event /></section>
    </div>
  );
}

function useStoredState(key, fallback) {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue];
}

function Login({ onLogin, onBack }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    const key = username.trim().toLowerCase();
    if (!ACCOUNTS[key] || ACCOUNTS[key].password !== password) {
      setError("The username or password is incorrect. Please try again.");
      return;
    }
    onLogin({ username: key, ...ACCOUNTS[key] });
  };

  return (
    <main id="psg-role-login" className="role-ui login-page">
      <section className="login-story">
        <div className="brand brand--light"><span className="brand-mark">P</span><span><strong>PSG Alumni</strong><small>Connected for life</small></span></div>
        <div className="story-copy">
          <span className="kicker kicker--light">PSG ALUMNI NETWORK</span>
          <h1>Where every journey<br/>stays <em>connected.</em></h1>
          <p>One trusted space for our alumni community to share stories, discover events, and keep meaningful connections growing.</p>
          <div className="story-proof"><div className="avatar-stack"><span>DT</span><span>MS</span><span>AR</span><span>+2k</span></div><p><strong>2,400+ alumni</strong><br/>growing together worldwide</p></div>
        </div>
        <div className="story-orb story-orb--one"/><div className="story-orb story-orb--two"/>
        <p className="story-foot">A community built on shared roots and new possibilities.</p>
      </section>
      <section className="login-panel">
        <button className="login-back" type="button" onClick={onBack}>
          <Icon name="arrow" size={17}/> Back to alumni home
        </button>
        <div className="mobile-brand brand"><span className="brand-mark">P</span><span><strong>PSG Alumni</strong><small>Connected for life</small></span></div>
        <form className="login-card" onSubmit={submit}>
          <span className="kicker">MEMBER PORTAL</span>
          <h2>Welcome back</h2>
          <p className="login-intro">Sign in to continue to your alumni network.</p>
          {error && <div className="form-error" role="alert">{error}</div>}
          <label>Username<input value={username} onChange={(e) => { setUsername(e.target.value); setError(""); }} placeholder="Enter your username" autoComplete="username" autoFocus /></label>
          <label>Password<div className="password-field"><input value={password} onChange={(e) => { setPassword(e.target.value); setError(""); }} placeholder="Enter your password" type={showPassword ? "text" : "password"} autoComplete="current-password"/><button type="button" onClick={() => setShowPassword(!showPassword)}>{showPassword ? "Hide" : "Show"}</button></div></label>
          <div className="login-options"><label className="check-label"><input type="checkbox"/> <span>Remember me</span></label><button type="button" className="text-button">Forgot password?</button></div>
          <button className="primary-button login-submit" type="submit">Sign in <Icon name="arrow" size={18}/></button>
          <div className="demo-access"><span>Demo access</span><p>Admin: <button type="button" onClick={() => { setUsername("admin"); setPassword("admin"); }}>admin / admin</button></p><p>Alumni: <button type="button" onClick={() => { setUsername("deyo"); setPassword("deyo"); }}>deyo / deyo</button></p></div>
        </form>
        <p className="login-help">Need help? <button className="text-button">Contact the Alumni Office</button></p>
      </section>
    </main>
  );
}

function Shell({ user, active, setActive, onLogout, children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = navByRole[user.role];
  const pageName = nav.find((item) => item[0] === active)?.[2] || "Portal";
  return (
    <div id="psg-role-portal" className={`role-ui portal ${menuOpen ? "menu-open" : ""}`}>
      <aside className="sidebar">
        <div className="brand"><span className="brand-mark">P</span><span><strong>PSG Alumni</strong><small>{user.role === "admin" ? "Administration" : "Member portal"}</small></span></div>
        <nav className="side-nav" aria-label="Main navigation">
          <span className="nav-caption">WORKSPACE</span>
          {nav.map(([key, icon, label]) => <button className={active === key ? "active" : ""} key={key} onClick={() => { setActive(key); setMenuOpen(false); }}><Icon name={icon}/><span>{label}</span>{active === key && <Icon name="arrow" size={16}/>}</button>)}
        </nav>
        <div className="sidebar-user"><span className="user-avatar">{user.role === "admin" ? "AD" : "DT"}</span><span><strong>{user.name}</strong><small>{user.role === "admin" ? "Super administrator" : "Class of 2021"}</small></span><button aria-label="Log out" onClick={onLogout}><Icon name="logout" size={19}/></button></div>
      </aside>
      <div className="portal-main">
        <header className="topbar"><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu"><Icon name={menuOpen ? "close" : "menu"}/></button><div><span className="topbar-label">{user.role === "admin" ? "ADMIN PORTAL" : "ALUMNI PORTAL"}</span><strong>{pageName}</strong></div><div className="top-actions"><button aria-label="Notifications" className="icon-button"><Icon name="bell"/><i/></button><span className="top-avatar">{user.role === "admin" ? "AD" : "DT"}</span></div></header>
        <main className="content">{children}</main>
      </div>
      {menuOpen && <button className="menu-backdrop" onClick={() => setMenuOpen(false)} aria-label="Close menu"/>}
    </div>
  );
}

function PageHeader({ eyebrow, title, description, action, onAction }) {
  return <div className="page-heading"><div><span className="kicker">{eyebrow}</span><h1>{title}</h1><p>{description}</p></div>{action && <button className="primary-button" onClick={onAction}><Icon name="plus" size={18}/>{action}</button>}</div>;
}

function StatCard({ label, value, note, icon, tone }) {
  return <article className="stat-tile"><span className={`stat-icon ${tone}`}><Icon name={icon}/></span><div><span>{label}</span><strong>{value}</strong><small>{note}</small></div></article>;
}

function AdminOverview({ events, resources, alumni, news, setActive }) {
  const recent = [...news].slice(-3).reverse();
  return <>
    <PageHeader eyebrow="OVERVIEW" title="Good morning, Admin" description="Here’s what’s happening across your alumni community today."/>
    <div className="stats-grid"><StatCard label="Registered alumni" value={alumni.length.toLocaleString()} note="Verified community members" icon="users" tone="purple"/><StatCard label="Upcoming events" value={events.length} note="Across the next 90 days" icon="calendar" tone="orange"/><StatCard label="Shared resources" value={resources.length} note="Available to all members" icon="folder" tone="green"/><StatCard label="Published updates" value={news.filter((item) => item.status === "Published").length} note="News in the community feed" icon="news" tone="blue"/></div>
    <div className="overview-grid">
      <section className="panel"><div className="panel-head"><div><span className="panel-kicker">LATEST ACTIVITY</span><h2>Recent news updates</h2></div><button className="text-button" onClick={() => setActive("news")}>View all <Icon name="arrow" size={15}/></button></div><div className="activity-list">{recent.map(item => <div className="activity-row" key={item.id}><span className="activity-icon"><Icon name="news" size={18}/></span><div><strong>{item.title}</strong><p>Posted by {item.author} · {formatDate(item.date)}</p></div><span className="status-pill">{item.status}</span></div>)}</div></section>
      <section className="panel quick-panel"><div className="panel-head"><div><span className="panel-kicker">QUICK ACTIONS</span><h2>Create new content</h2></div></div><div className="quick-list">{[["events","calendar","Add an event","Publish an upcoming alumni event"],["resources","folder","Upload a resource","Share a guide or document"],["alumni","users","Add alumni details","Create a directory profile"],["news","news","Post news update","Share community news"]].map(([key, icon, title, copy]) => <button key={key} onClick={() => setActive(key)}><span><Icon name={icon}/></span><div><strong>{title}</strong><small>{copy}</small></div><Icon name="arrow" size={17}/></button>)}</div></section>
    </div>
  </>;
}

function Modal({ title, description, onClose, children }) {
  return <div className="dialog-backdrop" onMouseDown={onClose}><section className="dialog" onMouseDown={(e) => e.stopPropagation()}><div className="dialog-head"><div><span className="kicker">CREATE NEW</span><h2>{title}</h2><p>{description}</p></div><button className="icon-button" onClick={onClose} aria-label="Close"><Icon name="close"/></button></div>{children}</section></div>;
}

function Field({ label, children, wide = false }) { return <label className={wide ? "field wide" : "field"}><span>{label}</span>{children}</label>; }

function EmptyState({ title }) { return <div className="empty-state"><Icon name="search" size={28}/><strong>No results found</strong><p>No {title.toLowerCase()} match your current search.</p></div>; }

function ManagementPage({ type, items, setItems }) {
  const config = {
    events: { eyebrow: "EVENT MANAGEMENT", title: "Events", description: "Create and manage events for the alumni community.", action: "Add event" },
    resources: { eyebrow: "RESOURCE LIBRARY", title: "Resources", description: "Upload and organise useful content for alumni members.", action: "Upload resource" },
    alumni: { eyebrow: "COMMUNITY DIRECTORY", title: "Alumni details", description: "Maintain verified alumni profiles and professional details.", action: "Add alumni" },
    news: { eyebrow: "COMMUNITY CONTENT", title: "News & updates", description: "Publish announcements, achievements, and alumni stories.", action: "Post update" },
  }[type];
  const [query, setQuery] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const filtered = items.filter(item => Object.values(item).join(" ").toLowerCase().includes(query.toLowerCase()));
  const remove = (id) => setItems(items.filter(item => item.id !== id));

  return <>
    <PageHeader {...config} onAction={() => setModalOpen(true)}/>
    <section className="panel management-panel"><div className="table-tools"><div className="search-box"><Icon name="search" size={18}/><input placeholder={`Search ${config.title.toLowerCase()}...`} value={query} onChange={(e) => setQuery(e.target.value)}/></div><span>{filtered.length} {filtered.length === 1 ? "record" : "records"}</span></div>{filtered.length ? <div className="table-wrap"><table><thead><tr>{type === "events" && <><th>Event</th><th>Date & time</th><th>Location</th><th>Type</th></>}{type === "resources" && <><th>Resource</th><th>Format</th><th>File size</th><th>Downloads</th></>}{type === "alumni" && <><th>Alumni</th><th>Batch & department</th><th>Professional details</th><th>Status</th></>}{type === "news" && <><th>Update</th><th>Category</th><th>Author</th><th>Status</th></>}<th><span className="sr-only">Actions</span></th></tr></thead><tbody>{filtered.map(item => <tr key={item.id}>{type === "events" && <><td><strong>{item.title}</strong><small>{item.attendees} interested</small></td><td>{formatDate(item.date)}<small>{item.time}</small></td><td>{item.location}</td><td><span className="soft-pill">{item.type}</span></td></>}{type === "resources" && <><td><strong>{item.title}</strong></td><td><span className="soft-pill">{item.type}</span></td><td>{item.size}</td><td>{item.downloads}</td></>}{type === "alumni" && <><td><div className="person-cell"><span>{initials(item.name)}</span><div><strong>{item.name}</strong><small>{item.email}</small></div></div></td><td>{item.batch}<small>{item.department}</small></td><td>{item.role}<small>{item.company} · {item.location}</small></td><td><span className="status-pill">{item.status}</span></td></>}{type === "news" && <><td><strong>{item.title}</strong><small>{formatDate(item.date)}</small></td><td><span className="soft-pill">{item.category}</span></td><td>{item.author}</td><td><span className="status-pill">{item.status}</span></td></>}<td><button className="delete-button" onClick={() => remove(item.id)} aria-label={`Delete ${item.title || item.name}`}><Icon name="trash" size={18}/></button></td></tr>)}</tbody></table></div> : <EmptyState title={config.title}/>}</section>
    {modalOpen && <CreateForm type={type} onClose={() => setModalOpen(false)} onCreate={(item) => { setItems([...items, { ...item, id: Date.now() }]); setModalOpen(false); }}/>} 
  </>;
}

function CreateForm({ type, onClose, onCreate, alumniAuthor = false }) {
  const defaults = type === "events" ? { title:"", date:"", time:"", location:"", type:"Networking", attendees:0, description:"" } : type === "resources" ? { title:"", type:"PDF Guide", size:"—", downloads:0 } : type === "alumni" ? { name:"", batch:"", department:"", role:"", company:"", location:"", email:"", status:"Active" } : { title:"", category:"Community", author: alumniAuthor ? "Deyo Thomas" : "Portal Admin", date:new Date().toISOString().slice(0,10), status:"Published", description:"" };
  const [form, setForm] = useState(defaults);
  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });
  const title = type === "events" ? "Add an event" : type === "resources" ? "Upload a resource" : type === "alumni" ? "Add alumni details" : "Post a news update";
  const submit = (e) => { e.preventDefault(); onCreate(form); };
  return <Modal title={title} description="Complete the details below. Your new content will appear immediately." onClose={onClose}><form className="create-form" onSubmit={submit}>
    {type === "events" && <><Field label="Event title" wide><input required value={form.title} onChange={update("title")} placeholder="Enter event title"/></Field><Field label="Date"><input required type="date" value={form.date} onChange={update("date")}/></Field><Field label="Time"><input required type="time" value={form.time} onChange={update("time")}/></Field><Field label="Location" wide><input required value={form.location} onChange={update("location")} placeholder="Venue or virtual event"/></Field><Field label="Event type"><select value={form.type} onChange={update("type")}><option>Networking</option><option>Leadership</option><option>Career</option><option>Community</option></select></Field><Field label="Expected attendees"><input type="number" min="0" value={form.attendees} onChange={update("attendees")}/></Field><Field label="Description" wide><textarea required value={form.description} onChange={update("description")} placeholder="Tell alumni what to expect"/></Field></>}
    {type === "resources" && <><Field label="Resource title" wide><input required value={form.title} onChange={update("title")} placeholder="Enter resource title"/></Field><Field label="Resource type"><select value={form.type} onChange={update("type")}><option>PDF Guide</option><option>eBook</option><option>Toolkit</option><option>Video</option></select></Field><Field label="Upload file"><div className="file-input"><Icon name="upload" size={18}/><input required type="file" onChange={(e) => { const file = e.target.files[0]; if (file) setForm({...form, size: `${(file.size / 1024 / 1024).toFixed(1)} MB`}); }}/></div></Field></>}
    {type === "alumni" && <><Field label="Full name" wide><input required value={form.name} onChange={update("name")} placeholder="Alumni full name"/></Field><Field label="Graduation year"><input required value={form.batch} onChange={update("batch")} placeholder="e.g. 2022"/></Field><Field label="Department"><input required value={form.department} onChange={update("department")} placeholder="Department"/></Field><Field label="Current role"><input required value={form.role} onChange={update("role")} placeholder="Job title"/></Field><Field label="Company"><input required value={form.company} onChange={update("company")} placeholder="Company name"/></Field><Field label="Location"><input required value={form.location} onChange={update("location")} placeholder="City, country"/></Field><Field label="Email"><input required type="email" value={form.email} onChange={update("email")} placeholder="name@example.com"/></Field></>}
    {type === "news" && <><Field label="Headline" wide><input required value={form.title} onChange={update("title")} placeholder="Write a clear headline"/></Field><Field label="Category"><select value={form.category} onChange={update("category")}><option>Community</option><option>Achievement</option><option>Mentorship</option><option>Institute</option><option>Career</option></select></Field><Field label="Publish date"><input required type="date" value={form.date} onChange={update("date")}/></Field><Field label="News description" wide><textarea required value={form.description} onChange={update("description")} placeholder="Share the full update with the alumni community"/></Field></>}
    <div className="form-actions"><button type="button" className="secondary-button" onClick={onClose}>Cancel</button><button className="primary-button" type="submit"><Icon name="check" size={18}/>Publish</button></div>
  </form></Modal>;
}

function AdminApp({ user, onLogout, data }) {
  const [active, setActive] = useState("overview");
  return <Shell user={user} active={active} setActive={setActive} onLogout={onLogout}>{active === "overview" ? <AdminOverview events={data.events[0]} resources={data.resources[0]} alumni={data.alumni[0]} news={data.news[0]} setActive={setActive}/> : <ManagementPage type={active} items={data[active][0]} setItems={data[active][1]}/>}</Shell>;
}

function EventCard({ event, registered, onRegister }) {
  return <article className="event-card"><div className="date-card"><strong>{new Date(`${event.date}T00:00:00`).getDate()}</strong><span>{new Date(`${event.date}T00:00:00`).toLocaleString("en", { month:"short" }).toUpperCase()}</span></div><div className="event-copy"><div className="event-title-row"><span className="soft-pill">{event.type}</span>{registered && <span className="registered-pill"><Icon name="check" size={13}/>Registered</span>}</div><h3>{event.title}</h3><p>{event.description}</p><div className="event-meta"><span><Icon name="clock" size={16}/>{event.time}</span><span><Icon name="pin" size={16}/>{event.location}</span></div></div><button className={registered ? "secondary-button" : "primary-button"} onClick={() => onRegister(event.id)}>{registered ? "Cancel registration" : "Register"}</button></article>;
}

function AlumniHome({ events, news, registered, toggleRegistration, setActive }) {
  const nextEvent = events[0];
  return <>
    <section className="member-hero"><div><span className="kicker kicker--light">WELCOME BACK, DEYO</span><h1>Your alumni community,<br/><em>made personal.</em></h1><p>Discover events selected for your interests, celebrate alumni stories, and stay close to the PSG community.</p><button onClick={() => setActive("events")}>Explore your events <Icon name="arrow" size={17}/></button></div><div className="profile-snapshot"><div className="profile-avatar">DT<span/></div><h2>Deyo Thomas</h2><p>Product Designer at Nexa Labs</p><div><span><strong>2021</strong><small>Graduation year</small></span><span><strong>CS</strong><small>Department</small></span><span><strong>{registered.length}</strong><small>Events joined</small></span></div></div></section>
    <div className="member-section-head"><div><span className="kicker">COMING UP FOR YOU</span><h2>Your next alumni experience</h2></div><button className="text-button" onClick={() => setActive("events")}>See all events <Icon name="arrow" size={15}/></button></div>
    {nextEvent && <EventCard event={nextEvent} registered={registered.includes(nextEvent.id)} onRegister={toggleRegistration}/>} 
    <div className="member-section-head"><div><span className="kicker">COMMUNITY STORIES</span><h2>Latest from your network</h2></div><button className="text-button" onClick={() => setActive("news")}>View news <Icon name="arrow" size={15}/></button></div>
    <div className="news-grid">{news.slice(-3).reverse().map(item => <NewsCard key={item.id} item={item}/>)}</div>
  </>;
}

function NewsCard({ item }) { return <article className="news-tile"><div><span className="soft-pill">{item.category}</span><small>{formatDate(item.date)}</small></div><h3>{item.title}</h3><p>{item.description}</p><footer><span className="mini-avatar">{initials(item.author)}</span><span><strong>{item.author}</strong><small>Contributor</small></span></footer></article>; }

function AlumniEvents({ events, registered, toggleRegistration }) { return <><PageHeader eyebrow="PERSONALISED FOR DEYO" title="Events for you" description="Based on your profile, interests, and PSG alumni community."/><div className="filter-chips"><button className="active">All events</button><button>Networking</button><button>Career</button><button>Leadership</button></div><div className="event-list">{events.map(event => <EventCard key={event.id} event={event} registered={registered.includes(event.id)} onRegister={toggleRegistration}/>)}</div></>; }

function AlumniNews({ news, setNews }) {
  const [modalOpen, setModalOpen] = useState(false);
  return <><PageHeader eyebrow="ALUMNI VOICES" title="News & updates" description="Read community stories and contribute an update of your own." action="Share an update" onAction={() => setModalOpen(true)}/><div className="news-grid news-grid--full">{news.slice().reverse().map(item => <NewsCard key={item.id} item={item}/>)}</div>{modalOpen && <CreateForm type="news" alumniAuthor onClose={() => setModalOpen(false)} onCreate={(item) => { setNews([...news, {...item, id:Date.now()}]); setModalOpen(false); }}/>}</>;
}

function AlumniProfile() { return <><PageHeader eyebrow="MEMBER PROFILE" title="My profile" description="Your information helps us personalise your alumni experience."/><section className="panel profile-panel"><div className="profile-cover"><div className="large-avatar">DT</div></div><div className="profile-content"><div className="profile-name"><div><h2>Deyo Thomas</h2><p>Product Designer at Nexa Labs</p></div><span className="status-pill"><Icon name="check" size={14}/>Verified alumni</span></div><div className="profile-fields"><div><span>Graduation year</span><strong>2021</strong></div><div><span>Department</span><strong>Computer Science</strong></div><div><span>Email</span><strong>deyo@psgalumni.org</strong></div><div><span>Location</span><strong>Bengaluru, India</strong></div><div><span>Current role</span><strong>Product Designer</strong></div><div><span>Company</span><strong>Nexa Labs</strong></div></div><div className="interest-block"><span>Interests</span><div><em>Design leadership</em><em>Technology</em><em>Mentorship</em><em>Startups</em></div></div></div></section></>; }

function AlumniApp({ user, onLogout, events, newsState }) {
  const [active, setActive] = useState("home");
  const [registered, setRegistered] = useStoredState("psg-registered-events", [1]);
  const toggleRegistration = (id) => setRegistered(registered.includes(id) ? registered.filter(item => item !== id) : [...registered, id]);
  const pages = { home:<AlumniHome events={events} news={newsState[0]} registered={registered} toggleRegistration={toggleRegistration} setActive={setActive}/>, events:<AlumniEvents events={events} registered={registered} toggleRegistration={toggleRegistration}/>, news:<AlumniNews news={newsState[0]} setNews={newsState[1]}/>, profile:<AlumniProfile/> };
  return <Shell user={user} active={active} setActive={setActive} onLogout={onLogout}>{pages[active]}</Shell>;
}

function formatDate(date) { if (!date) return "—"; return new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", { day:"numeric", month:"short", year:"numeric" }); }
function initials(name = "") { return name.split(" ").filter(Boolean).map(part => part[0]).slice(0,2).join("").toUpperCase(); }

export default function App() {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const events = useStoredState("psg-events", initialEvents);
  const resources = useStoredState("psg-resources", initialResources);
  const alumni = useStoredState("psg-alumni", initialAlumni);
  const news = useStoredState("psg-news", initialNews);
  const data = useMemo(() => ({ events, resources, alumni, news }), [events, resources, alumni, news]);
  const openLogin = () => {
    setShowLogin(true);
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  const logout = () => {
    setUser(null);
    setShowLogin(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  if (!user && !showLogin) return <PublicHome onLogin={openLogin}/>;
  if (!user) return <Login onLogin={setUser} onBack={() => setShowLogin(false)}/>;
  return user.role === "admin" ? <AdminApp user={user} onLogout={logout} data={data}/> : <AlumniApp user={user} onLogout={logout} events={events[0]} newsState={news}/>;
}
