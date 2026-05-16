function TopBar() {
    return (
        <div className="topbar-container">
            <div className="topbar-left">
                <span style={{ fontWeight: 600, fontSize: '16px' }}>Zerodha</span>
            </div>
            <div className="topbar-right">
                <span style={{ fontSize: '14px', color: '#666' }}>Welcome</span>
            </div>
        </div>
    );
}

export default TopBar;
