import React, { useState } from 'react';
import './index.css';
import {
    Bell,
    ChevronDown,
    LayoutDashboard,
    GraduationCap,
    MessageSquare,
    Blocks,
    Users,
    Search,
    ChevronRight,
    User,
    Settings,
    AlertTriangle,
    BookOpen,
    BarChart2,
    Calendar,
    FileText
} from 'lucide-react';

const SidebarItem = ({ icon: Icon, label, active = false }) => (
    <div className={`sidebar-item ${active ? 'active' : ''}`}>
        <Icon size={18} className="sidebar-icon" />
        <span>{label}</span>
    </div>
);

const StudentCard = ({ name, matric, program }) => (
    <div className="student-card">
        <div className="student-info">
            <div className="student-avatar-placeholder">
                {name.charAt(0)}
            </div>
            <div>
                <h3 className="student-name">{name}</h3>
                <p className="student-details">{matric} • {program}</p>
            </div>
        </div>
        <ChevronRight className="card-arrow" />
    </div>
);

function App() {
    const students = [
        { name: 'Ali Bin Abu', matric: 'A12345678', program: 'Bachelor of Computer Science' },
        { name: 'Siti Aminah', matric: 'A23456789', program: 'Bachelor of Information Systems' },
        { name: 'Ahmad Fauzi', matric: 'A34567890', program: 'Bachelor of Software Engineering' },
        { name: 'Nurul Izzah', matric: 'A45678901', program: 'Bachelor of Data Science' },
        { name: 'Muhammad Haris', matric: 'A56789012', program: 'Bachelor of Computer Science' },
        { name: 'Fatimah Zahra', matric: 'A67890123', program: 'Bachelor of Artificial Intelligence' },
    ];

    return (
        <div className="dashboard-layout">
            {/* Top Navigation Bar */}
            <header className="top-nav">
                <div className="nav-brand">Advising Portal</div>
                <nav className="nav-links">
                    <a href="#" className="nav-link active">Dashboard</a>
                    <a href="#" className="nav-link">Academic & Learning</a>
                    <a href="#" className="nav-link">Communication</a>
                    <a href="#" className="nav-link">Add-On Modules</a>
                    <a href="#" className="nav-link">Accounts</a>
                </nav>
                <div className="nav-actions">
                    <div className="language-selector">ENG <ChevronDown size={14} /></div>
                    <div className="notification-bell">
                        <Bell size={20} />
                        <span className="badge">3</span>
                    </div>
                    <div className="user-profile-mini">
                        <img src="https://ui-avatars.com/api/?name=Ahmad+Albab&background=random" alt="Profile" className="avatar-mini" />
                    </div>
                </div>
            </header>

            <div className="main-container">
                {/* Left Sidebar */}
                <aside className="sidebar">
                    <div className="sidebar-header">
                        <h2>Academic Advising</h2>
                        <p className="subtitle">Advisor Portal</p>
                    </div>

                    <div className="advisor-profile-card">
                        <img src="https://ui-avatars.com/api/?name=Ahmad+Albab&background=0D8ABC&color=fff" alt="Advisor" className="advisor-avatar" />
                        <div className="advisor-info">
                            <h3>Dr. Ahmad Albab</h3>
                            <p>Academic Advisor (FSKTM)</p>
                        </div>
                    </div>

                    <nav className="sidebar-nav">
                        <SidebarItem icon={Calendar} label="Manage Availability" />
                        <SidebarItem icon={Users} label="My Students" />
                        <SidebarItem icon={FileText} label="Advising Records" active={true} />
                        <SidebarItem icon={BarChart2} label="Analytics" />
                        <SidebarItem icon={BookOpen} label="Course Management" />
                        <SidebarItem icon={AlertTriangle} label="Early Warning Alerts" />
                        <SidebarItem icon={Settings} label="Settings" />
                    </nav>
                </aside>

                {/* Main Content Area */}
                <main className="content-area">
                    <div className="content-header">
                        <h1>Student List</h1>
                        <p>Select a student to view advising notes and recommendations</p>
                    </div>

                    <div className="search-section">
                        <div className="search-bar">
                            <Search className="search-icon" size={20} />
                            <input type="text" placeholder="Search student by name or matric number" />
                        </div>
                    </div>

                    <div className="student-list">
                        {students.map((student, index) => (
                            <StudentCard key={index} {...student} />
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}



export default App;
