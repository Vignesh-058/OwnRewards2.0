import React from 'react';
import { 
  LayoutDashboard, Users, PieChart, Package, FileText, 
  ArrowRightLeft, Award, Gift, Ticket, MessageSquare, 
  ChevronLeft, Search, Settings, Store, Calendar, 
  RefreshCw, Info, Receipt, Banknote, Star, Inbox
} from 'lucide-react';
import './AnalyticsDashboardMock.css';

const AnalyticsDashboardMock = () => {
  return (
    <section id="analytics-dashboard-mock" className="ad-mock-section">
      <div className="container">
        <div 
          className="db-window"
          
          
          
          
        >
          {/* SIDEBAR */}
          <div className="db-sidebar">
            <div className="db-sidebar-header">
              <div className="db-logo-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor"/>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div className="db-logo-text">Own<br/>Rewards</div>
            </div>

            <div className="db-nav-group">
              <div className="db-nav-title">OVERVIEW</div>
              <div className="db-nav-item active">
                <LayoutDashboard size={18} /> Dashboard
              </div>
            </div>

            <div className="db-nav-group">
              <div className="db-nav-title">CUSTOMER HUB</div>
              <div className="db-nav-item">
                <Users size={18} /> Members
              </div>
              <div className="db-nav-item">
                <PieChart size={18} /> Segments
              </div>
            </div>

            <div className="db-nav-group">
              <div className="db-nav-title">LOYALTY PROGRAM</div>
              <div className="db-nav-item">
                <Package size={18} /> Products
              </div>
              <div className="db-nav-item">
                <FileText size={18} /> Rules
              </div>
              <div className="db-nav-item">
                <ArrowRightLeft size={18} /> Transaction
              </div>
              <div className="db-nav-item">
                <Award size={18} /> Rewards
              </div>
              <div className="db-nav-item">
                <Gift size={18} /> Redemption
              </div>
              <div className="db-nav-item">
                <Ticket size={18} /> Coupon
              </div>
            </div>

            <div className="db-nav-group">
              <div className="db-nav-title">CUSTOMER FEEDBACK</div>
              <div className="db-nav-item">
                <MessageSquare size={18} /> Feedback
              </div>
            </div>

            <div className="db-sidebar-footer">
              <button id="analyticsdashboardmock-btn-1" className="db-collapse-btn">
                <ChevronLeft size={20} />
              </button>
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="db-main">
            {/* TOPBAR */}
            <div className="db-topbar">
              <div className="db-search">
                <Search size={16} className="db-search-icon" />
                <input type="text" placeholder="Search OwnRewards" />
                <div className="db-search-shortcut">
                  <span>Ctrl</span><span>K</span>
                </div>
              </div>
              <div className="db-topbar-actions">
                <div className="db-outlet-selector">
                  <Store size={14} /> OwnRewards ▾
                </div>
                <button id="analyticsdashboardmock-btn-2" className="db-icon-btn"><Settings size={18} /></button>
                <div className="db-user-profile">
                  <div className="db-user-avatar">
                    <UserIcon />
                  </div>
                  Vignesh R ▾
                </div>
              </div>
            </div>

            {/* CONTENT AREA */}
            <div className="db-content">
              <div className="db-page-header">
                <div className="db-page-title-wrap">
                  <h2 className="db-page-title">Dashboard Overview</h2>
                  <p className="db-page-subtitle">Monitor sales, orders, and outlet performance across your business at a glance.</p>
                </div>
                <div className="db-page-actions">
                  <div className="db-date-filter">
                    <Calendar size={16} /> 
                    <div className="db-date-text">
                      <span className="db-date-label">DATE FILTER</span>
                      <span className="db-date-val">Today ▾</span>
                    </div>
                  </div>
                  <button id="analyticsdashboardmock-btn-3" className="db-icon-btn outline"><RefreshCw size={16} /></button>
                </div>
              </div>

              <div className="db-section-label">SALES SUMMARY</div>

              <div className="db-grid-top animate-on-scroll fade-up">
                <div id="analyticsdashboardmock-div-4" className="db-card db-sales-glance animate-on-scroll fade-up">
                  <h3>Your sales at a glance</h3>
                  <p>Total Revenue is the money your store earned in the selected period. The breakdown below shows total bills, average order value, and bill totals—so you can quickly see what is driving your business.</p>
                  <div className="db-glance-note">
                    Figures reflect <strong>today</strong> performance across completed orders at this outlet.
                  </div>
                </div>
                <div id="analyticsdashboardmock-div-5" className="db-card db-total-revenue animate-on-scroll fade-up">
                  <div id="analyticsdashboardmock-div-6" className="db-card-header right-align animate-on-scroll fade-up">
                    <div className="db-tr-label"><span className="rupee">₹</span> TOTAL REVENUE <span className="db-tag">SALES</span></div>
                    <Info size={14} className="info-icon" />
                  </div>
                  <div className="db-big-metric">₹0</div>
                </div>
              </div>

              <div className="db-grid-4 animate-on-scroll fade-up">
                <MetricCard icon={<Receipt size={16} />} color="cyan" title="Total Bills" value="0" subtitle="Total number of bills generated in this period" />
                <MetricCard icon={<Store size={16} />} color="green" title="Avg Order" value="₹0" subtitle="Average amount customers spend per order" />
                <MetricCard icon={<FileText size={16} />} color="purple" title="Net Bills" value="₹0" subtitle="Bill value after net adjustments are applied" />
                <MetricCard icon={<Banknote size={16} />} color="orange" title="Gross Bills" value="₹0" subtitle="Total bill value before adjustments are applied" />
              </div>

              <div className="db-grid-2 animate-on-scroll fade-up">
                <div id="analyticsdashboardmock-div-7" className="db-card db-panel animate-on-scroll fade-up">
                  <div id="analyticsdashboardmock-div-8" className="db-panel-header">
                    <div id="analyticsdashboardmock-div-9" className="db-panel-title"><Star size={18} className="purple-icon"/> Reward Analytics</div>
                    <div id="analyticsdashboardmock-div-10" className="db-panel-actions">
                      <div className="db-tag outline">TOTAL ISSUED <span className="db-tag-count purple-bg">0</span></div>
                      <Info size={14} className="info-icon" />
                    </div>
                  </div>
                  <div className="db-chart-container">
                    <div className="db-donut-chart">
                      <div className="db-donut-hole">
                        <span>78%</span>
                      </div>
                    </div>
                    <div className="db-chart-legend">
                      <div className="db-legend-item"><span className="dot dot-primary"></span> Redeemed</div>
                      <div className="db-legend-item"><span className="dot dot-secondary"></span> Expired</div>
                      <div className="db-legend-item"><span className="dot dot-tertiary"></span> Pending</div>
                    </div>
                  </div>
                </div>

                <div id="analyticsdashboardmock-div-11" className="db-card db-panel animate-on-scroll fade-up">
                  <div id="analyticsdashboardmock-div-12" className="db-panel-header">
                    <div id="analyticsdashboardmock-div-13" className="db-panel-title"><Ticket size={18} className="orange-icon"/> Best Coupons</div>
                    <div id="analyticsdashboardmock-div-14" className="db-panel-actions">
                      <div className="db-tag outline">TOTAL ISSUED <span className="db-tag-count orange-bg">1,204</span></div>
                      <Info size={14} className="info-icon" />
                    </div>
                  </div>
                  <div className="db-bar-chart">
                    <div className="db-bar-row">
                      <span className="db-bar-label">WELCOME20</span>
                      <div className="db-bar-track"><div className="db-bar-fill orange-bg" style={{width: '85%'}}></div></div>
                      <span className="db-bar-val">850</span>
                    </div>
                    <div className="db-bar-row">
                      <span className="db-bar-label">VIP10</span>
                      <div className="db-bar-track"><div className="db-bar-fill orange-bg" style={{width: '65%'}}></div></div>
                      <span className="db-bar-val">650</span>
                    </div>
                    <div className="db-bar-row">
                      <span className="db-bar-label">BOGO50</span>
                      <div className="db-bar-track"><div className="db-bar-fill orange-bg" style={{width: '40%'}}></div></div>
                      <span className="db-bar-val">400</span>
                    </div>
                    <div className="db-bar-row">
                      <span className="db-bar-label">FREESHIP</span>
                      <div className="db-bar-track"><div className="db-bar-fill orange-bg" style={{width: '25%'}}></div></div>
                      <span className="db-bar-val">250</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const MetricCard = ({ icon, color, title, value, subtitle }) => (
  <div id="analyticsdashboardmock-div-15" className="db-card animate-on-scroll fade-up">
    <div id="analyticsdashboardmock-div-16" className="db-card-header animate-on-scroll fade-up">
      <div className="db-metric-title">
        <div className={`db-metric-icon ${color}`}>{icon}</div>
        {title}
      </div>
      <Info size={14} className="info-icon" />
    </div>
    <div className="db-metric-val">{value}</div>
    <div className="db-metric-sub">{subtitle}</div>
  </div>
);

export default AnalyticsDashboardMock;
