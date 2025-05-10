import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader, Card, Button } from '../../components/ui';
import SEOHead from '../../components/seo/SEOHead';
import theme from '../../config/theme';

interface OrderSummary {
  id: string;
  date: string;
  status: 'delivered' | 'processing' | 'cancelled';
  total: number;
}

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: {
    value: number;
    isPositive: boolean;
  };
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, icon, change }) => {
  return (
    <Card className="p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-brand-muted text-sm font-medium">{title}</h3>
        <div className="text-brand-primary bg-brand-primary/10 p-2 rounded-full">
          {icon}
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold text-brand-text">{value}</span>
        {change && (
          <div className="flex items-center mt-1">
            <span className={`text-xs font-medium ${change.isPositive ? 'text-brand-success' : 'text-brand-error'}`}>
              {change.isPositive ? '+' : ''}{change.value}%
            </span>
            <span className="text-xs text-brand-muted ml-1">from last month</span>
          </div>
        )}
      </div>
    </Card>
  );
};

const RecentOrderCard: React.FC<{ order: OrderSummary }> = ({ order }) => {
  const getStatusColor = () => {
    switch (order.status) {
      case 'delivered': return theme.colors.brand.success;
      case 'processing': return theme.colors.brand.warning;
      case 'cancelled': return theme.colors.brand.error;
      default: return theme.colors.brand.muted;
    }
  };

  return (
    <div className="p-4 border-b border-brand-border last:border-b-0">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-medium text-brand-text">Order #{order.id}</p>
          <p className="text-sm text-brand-muted">{order.date}</p>
        </div>
        <div className="flex items-center">
          <span className="text-brand-text font-medium mr-3">₹{order.total.toFixed(2)}</span>
          <span className="text-xs px-2 py-1 rounded-full capitalize" style={{ 
            color: getStatusColor(), 
            backgroundColor: `${getStatusColor()}20` 
          }}>
            {order.status}
          </span>
        </div>
      </div>
    </div>
  );
};

const DashboardPage: React.FC = () => {
  // Mock data
  const recentOrders: OrderSummary[] = [
    { id: '72385', date: '15 May 2023, 10:30 AM', status: 'delivered', total: 356.50 },
    { id: '72183', date: '12 May 2023, 2:45 PM', status: 'processing', total: 420.75 },
    { id: '71999', date: '10 May 2023, 9:15 AM', status: 'delivered', total: 215.20 },
    { id: '71890', date: '8 May 2023, 7:30 PM', status: 'cancelled', total: 189.00 }
  ];

  return (
    <>
      <SEOHead
        title="Dashboard"
        description="View your order history, track deliveries, and manage your account with 10-minute grocery delivery service."
        keywords="account dashboard, order tracking, grocery delivery, order history"
      />

      <div className="max-w-7xl mx-auto px-4 py-6">
        <PageHeader
          title="Dashboard"
          subtitle="Welcome back! Check your orders and account performance"
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Dashboard', href: '/dashboard' }
          ]}
        />

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Total Orders"
            value="24"
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>}
            change={{ value: 12, isPositive: true }}
          />
          <MetricCard
            title="Delivery Saved"
            value="₹490"
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
            change={{ value: 8, isPositive: true }}
          />
          <MetricCard
            title="Average Delivery Time"
            value="9 mins"
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
            change={{ value: 5, isPositive: true }}
          />
          <MetricCard
            title="Active Subscriptions"
            value="1"
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Orders */}
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <div className="p-6 border-b border-brand-border">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-brand-text">Recent Orders</h2>
                  <Link to="/orders" className="text-brand-primary text-sm font-medium flex items-center">
                    View All
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </Link>
                </div>
              </div>

              <div className="divide-y divide-brand-border">
                {recentOrders.map((order) => (
                  <RecentOrderCard key={order.id} order={order} />
                ))}
              </div>

              {recentOrders.length === 0 && (
                <div className="p-6 text-center text-brand-muted">
                  No orders yet. Start shopping to see your orders here.
                </div>
              )}
            </Card>

            {/* Frequently Bought */}
            <Card>
              <div className="p-6 border-b border-brand-border">
                <h2 className="text-xl font-semibold text-brand-text">Frequently Bought Items</h2>
              </div>
              <div className="p-6">
                <div className="text-center py-8">
                  <p className="text-brand-muted mb-4">Your frequently bought items will appear here after you've made a few orders.</p>
                  <Link to="/shop">
                    <Button colorScheme="primary" variant="solid">Start Shopping</Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>

          {/* Account Sidebar */}
          <div>
            <Card className="mb-6">
              <div className="p-6 border-b border-brand-border">
                <h2 className="text-xl font-semibold text-brand-text">Account</h2>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center mr-4">
                    <span className="text-brand-primary font-semibold text-lg">DK</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-brand-text">Demo Kumar</h3>
                    <p className="text-sm text-brand-muted">demo@example.com</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Link to="/profile" className="flex items-center py-2 px-3 rounded-md hover:bg-brand-surface text-brand-text">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    Profile Settings
                  </Link>
                  <Link to="/orders" className="flex items-center py-2 px-3 rounded-md hover:bg-brand-surface text-brand-text">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                    Order History
                  </Link>
                  <Link to="/addresses" className="flex items-center py-2 px-3 rounded-md hover:bg-brand-surface text-brand-text">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    Addresses
                  </Link>
                  <Link to="/payment-methods" className="flex items-center py-2 px-3 rounded-md hover:bg-brand-surface text-brand-text">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                    Payment Methods
                  </Link>
                  <button className="w-full text-left flex items-center py-2 px-3 rounded-md hover:bg-brand-surface text-brand-error">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                    Logout
                  </button>
                </div>
              </div>
            </Card>

            {/* Redex Premium Subscription */}
            <Card className="bg-gradient-to-br from-brand-primary to-[#A10D2F] text-brand-textLight">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <h2 className="text-xl font-semibold">Redex Premium</h2>
                </div>
                <p className="mb-4">Get free delivery, exclusive discounts and priority service with Redex Premium membership.</p>
                <Button variant="solid" colorScheme="primary" className="bg-white text-brand-primary hover:bg-opacity-90">
                  Try Free for 30 Days
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage; 