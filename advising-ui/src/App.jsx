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
    FileText,
    ArrowLeft,
    Plus
} from 'lucide-react';

const SidebarItem = ({ icon: Icon, label, active = false }) => (
    <div className={`sidebar-item ${active ? 'active' : ''}`}>
        <Icon size={18} className="sidebar-icon" />
        <span>{label}</span>
    </div>
);

const StudentCard = ({ name, matric, program, onClick }) => (
    <div className="student-card" onClick={onClick}>
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

const StatusTag = ({ status }) => {
    let className = 'tag tag-status ';
    if (status === 'Completed') className += 'tag-success';
    else if (status === 'In Progress') className += 'tag-warning';

    return <span className={className}>{status}</span>;
}

const CategoryTag = ({ category }) => {
    const colors = {
        'Academic': 'tag-blue',
        'Career': 'tag-purple',
        'Registration': 'tag-orange',
        'Personal': 'tag-teal'
    };
    return <span className={`tag ${colors[category] || 'tag-gray'}`}>{category}</span>;
}

const AdvisingRecordCard = ({ title, date, category, status }) => (
    <div className="advising-card">
        <div className="advising-card-content">
            <div className="advising-main">
                <h4 className="advising-title">{title}</h4>
                <div className="advising-meta">
                    <span className="advising-date">{date}</span>
                </div>
                <div className="advising-tags">
                    <CategoryTag category={category} />
                    <StatusTag status={status} />
                </div>
            </div>
            <ChevronRight className="card-arrow" />
        </div>
    </div>
);

function App() {
    const [currentView, setCurrentView] = useState('list'); // 'list' or 'detail'
    const [selectedStudent, setSelectedStudent] = useState(null);

    const students = [
        { name: 'Ali Bin Abu', matric: 'A12345678', program: 'Bachelor of Computer Science' },
        { name: 'Siti Aminah', matric: 'A23456789', program: 'Bachelor of Information Systems' },
        { name: 'Ahmad Fauzi', matric: 'A34567890', program: 'Bachelor of Software Engineering' },
        { name: 'Nurul Izzah', matric: 'A45678901', program: 'Bachelor of Data Science' },
        { name: 'Muhammad Haris', matric: 'A56789012', program: 'Bachelor of Computer Science' },
        { name: 'Fatimah Zahra', matric: 'A67890123', program: 'Bachelor of Artificial Intelligence' },
    ];

    const advisingHistory = [
        { title: 'Course Selection Discussion – Semester 2', date: 'January 3, 2026', category: 'Academic', status: 'Completed' },
        { title: 'Academic Performance Review', date: 'December 15, 2025', category: 'Academic', status: 'Completed' },
        { title: 'Career Path Planning', date: 'November 28, 2025', category: 'Career', status: 'In Progress' },
        { title: 'Registration Issues – Missing Prerequisites', date: 'November 10, 2025', category: 'Registration', status: 'Completed' },
        { title: 'Personal Development Check-in', date: 'October 22, 2025', category: 'Personal', status: 'Completed' },
    ];

    const handleStudentClick = (student) => {
        setSelectedStudent(student);
        setCurrentView('detail');
    };

    const handleBackClick = () => {
        setCurrentView('list');
        setSelectedStudent(null);
    };

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
                    {currentView === 'list' ? (
                        <>
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
                                    <StudentCard key={index} {...student} onClick={() => handleStudentClick(student)} />
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="details-view">
                            <button className="back-button" onClick={handleBackClick}>
                                <ArrowLeft size={20} /> Back to Student List
                            </button>

                            <div className="content-header small-margin">
                                <h1>Advising Notes</h1>
                            </div>

                            <div className="student-info-banner">
                                <div className="banner-details">
                                    <h2 className="banner-name">{selectedStudent.name}</h2>
                                    <p className="banner-sub">{selectedStudent.matric} • {selectedStudent.program}</p>
                                </div>
                                <button className="btn-primary">
                                    <Plus size={18} /> Add Advising Note
                                </button>
                            </div>

                            <div className="history-section">
                                <h3>Advising History</h3>
                                <div className="history-list">
                                    {advisingHistory.map((record, index) => (
                                        <AdvisingRecordCard key={index} {...record} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}

export default App;
