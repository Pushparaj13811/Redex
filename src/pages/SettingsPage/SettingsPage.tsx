import React, { useState } from 'react';
import { PageHeader, Card, Button, FormControl, FormLabel } from '../../components/ui';
import SEOHead from '../../components/seo/SEOHead';

interface NotificationSettings {
    emailMarketing: boolean;
    emailOrders: boolean;
    pushNotifications: boolean;
    smsAlerts: boolean;
}

interface PrivacySettings {
    shareDataForAnalytics: boolean;
    shareDataForMarketing: boolean;
    allowLocationTracking: boolean;
}

interface DisplaySettings {
    darkMode: boolean;
    highContrast: boolean;
    fontSize: 'small' | 'medium' | 'large';
    language: string;
}

const SettingsPage: React.FC = () => {

    // Settings state
    const [notificationSettings, setNotificationSettings] = useState<NotificationSettings>({
        emailMarketing: true,
        emailOrders: true,
        pushNotifications: true,
        smsAlerts: false
    });

    const [privacySettings, setPrivacySettings] = useState<PrivacySettings>({
        shareDataForAnalytics: true,
        shareDataForMarketing: false,
        allowLocationTracking: true
    });

    const [displaySettings, setDisplaySettings] = useState<DisplaySettings>({
        darkMode: false,
        highContrast: false,
        fontSize: 'medium',
        language: 'en'
    });

    const [activeTab, setActiveTab] = useState('notifications');
    const [isSaving, setIsSaving] = useState(false);

    // Handle toggle changes
    const handleToggleChange = (
        settingType: 'notification' | 'privacy' | 'display',
        field: string,
        checked: boolean
    ) => {
        if (settingType === 'notification') {
            setNotificationSettings(prev => ({
                ...prev,
                [field]: checked
            }));
        } else if (settingType === 'privacy') {
            setPrivacySettings(prev => ({
                ...prev,
                [field]: checked
            }));
        } else if (settingType === 'display') {
            setDisplaySettings(prev => ({
                ...prev,
                [field]: checked
            }));
        }
    };

    // Handle select changes
    const handleSelectChange = (field: string, value: string) => {
        setDisplaySettings(prev => ({
            ...prev,
            [field]: value
        }));
    };

    // Save settings
    const saveSettings = () => {
        setIsSaving(true);

        // Simulate API call
        setTimeout(() => {
            setIsSaving(false);
            // Show success message or handle response
        }, 1000);
    };

    // Render the current tab content
    const renderTabContent = () => {
        switch (activeTab) {
            case 'notifications':
                return (
                    <Card>
                        <div className="p-6 border-b border-brand-border">
                            <h2 className="text-xl font-semibold text-brand-text">Notification Preferences</h2>
                            <p className="text-sm text-brand-muted mt-1">Manage how you receive notifications and updates</p>
                        </div>

                        <div className="divide-y divide-brand-border">
                            <div className="p-6 flex justify-between items-center">
                                <div>
                                    <h3 className="font-medium text-brand-text">Email Marketing</h3>
                                    <p className="text-sm text-brand-muted">Receive offers, promotions, and newsletters</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={notificationSettings.emailMarketing}
                                        onChange={(e) => handleToggleChange('notification', 'emailMarketing', e.target.checked)}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-brand-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-primary"></div>
                                </label>
                            </div>

                            <div className="p-6 flex justify-between items-center">
                                <div>
                                    <h3 className="font-medium text-brand-text">Order Updates</h3>
                                    <p className="text-sm text-brand-muted">Receive emails about your orders and deliveries</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={notificationSettings.emailOrders}
                                        onChange={(e) => handleToggleChange('notification', 'emailOrders', e.target.checked)}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-brand-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-primary"></div>
                                </label>
                            </div>

                            <div className="p-6 flex justify-between items-center">
                                <div>
                                    <h3 className="font-medium text-brand-text">Push Notifications</h3>
                                    <p className="text-sm text-brand-muted">Receive notifications on your device</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={notificationSettings.pushNotifications}
                                        onChange={(e) => handleToggleChange('notification', 'pushNotifications', e.target.checked)}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-brand-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-primary"></div>
                                </label>
                            </div>

                            <div className="p-6 flex justify-between items-center">
                                <div>
                                    <h3 className="font-medium text-brand-text">SMS Alerts</h3>
                                    <p className="text-sm text-brand-muted">Receive text messages for important updates</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={notificationSettings.smsAlerts}
                                        onChange={(e) => handleToggleChange('notification', 'smsAlerts', e.target.checked)}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-brand-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-primary"></div>
                                </label>
                            </div>
                        </div>

                        <div className="p-6 border-t border-brand-border">
                            <Button
                                variant="solid"
                                colorScheme="primary"
                                isLoading={isSaving}
                                onClick={saveSettings}
                            >
                                Save Preferences
                            </Button>
                        </div>
                    </Card>
                );
            case 'privacy':
                return (
                    <Card>
                        <div className="p-6 border-b border-brand-border">
                            <h2 className="text-xl font-semibold text-brand-text">Privacy Settings</h2>
                            <p className="text-sm text-brand-muted mt-1">Control how your information is used</p>
                        </div>

                        <div className="divide-y divide-brand-border">
                            <div className="p-6 flex justify-between items-center">
                                <div>
                                    <h3 className="font-medium text-brand-text">Analytics Data Sharing</h3>
                                    <p className="text-sm text-brand-muted">Allow us to use your data to improve our services</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={privacySettings.shareDataForAnalytics}
                                        onChange={(e) => handleToggleChange('privacy', 'shareDataForAnalytics', e.target.checked)}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-brand-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-primary"></div>
                                </label>
                            </div>

                            <div className="p-6 flex justify-between items-center">
                                <div>
                                    <h3 className="font-medium text-brand-text">Marketing Data Sharing</h3>
                                    <p className="text-sm text-brand-muted">Allow us to share your data with marketing partners</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={privacySettings.shareDataForMarketing}
                                        onChange={(e) => handleToggleChange('privacy', 'shareDataForMarketing', e.target.checked)}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-brand-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-primary"></div>
                                </label>
                            </div>

                            <div className="p-6 flex justify-between items-center">
                                <div>
                                    <h3 className="font-medium text-brand-text">Location Tracking</h3>
                                    <p className="text-sm text-brand-muted">Allow us to track your location for better delivery service</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={privacySettings.allowLocationTracking}
                                        onChange={(e) => handleToggleChange('privacy', 'allowLocationTracking', e.target.checked)}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-brand-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-primary"></div>
                                </label>
                            </div>
                        </div>

                        <div className="p-6 border-t border-brand-border">
                            <Button
                                variant="solid"
                                colorScheme="primary"
                                isLoading={isSaving}
                                onClick={saveSettings}
                            >
                                Save Privacy Settings
                            </Button>
                        </div>
                    </Card>
                );
            case 'display':
                return (
                    <Card>
                        <div className="p-6 border-b border-brand-border">
                            <h2 className="text-xl font-semibold text-brand-text">Display & Accessibility</h2>
                            <p className="text-sm text-brand-muted mt-1">Customize your viewing experience</p>
                        </div>

                        <div className="divide-y divide-brand-border">
                            <div className="p-6 flex justify-between items-center">
                                <div>
                                    <h3 className="font-medium text-brand-text">Dark Mode</h3>
                                    <p className="text-sm text-brand-muted">Use a darker color scheme</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={displaySettings.darkMode}
                                        onChange={(e) => handleToggleChange('display', 'darkMode', e.target.checked)}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-brand-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-primary"></div>
                                </label>
                            </div>

                            <div className="p-6 flex justify-between items-center">
                                <div>
                                    <h3 className="font-medium text-brand-text">High Contrast Mode</h3>
                                    <p className="text-sm text-brand-muted">Increase contrast for better visibility</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={displaySettings.highContrast}
                                        onChange={(e) => handleToggleChange('display', 'highContrast', e.target.checked)}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-brand-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-primary"></div>
                                </label>
                            </div>

                            <div className="p-6">
                                <div className="mb-4">
                                    <h3 className="font-medium text-brand-text">Font Size</h3>
                                    <p className="text-sm text-brand-muted">Adjust the text size</p>
                                </div>
                                <div className="flex space-x-4">
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name="fontSize"
                                            value="small"
                                            checked={displaySettings.fontSize === 'small'}
                                            onChange={() => handleSelectChange('fontSize', 'small')}
                                            className="w-4 h-4 text-brand-primary border-brand-border focus:ring-brand-primary"
                                        />
                                        <span className="ml-2 text-sm text-brand-text">Small</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name="fontSize"
                                            value="medium"
                                            checked={displaySettings.fontSize === 'medium'}
                                            onChange={() => handleSelectChange('fontSize', 'medium')}
                                            className="w-4 h-4 text-brand-primary border-brand-border focus:ring-brand-primary"
                                        />
                                        <span className="ml-2 text-brand-text">Medium</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name="fontSize"
                                            value="large"
                                            checked={displaySettings.fontSize === 'large'}
                                            onChange={() => handleSelectChange('fontSize', 'large')}
                                            className="w-4 h-4 text-brand-primary border-brand-border focus:ring-brand-primary"
                                        />
                                        <span className="ml-2 text-lg text-brand-text">Large</span>
                                    </label>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="mb-4">
                                    <h3 className="font-medium text-brand-text">Language</h3>
                                    <p className="text-sm text-brand-muted">Select your preferred language</p>
                                </div>
                                <select
                                    value={displaySettings.language}
                                    onChange={(e) => handleSelectChange('language', e.target.value)}
                                    className="w-full md:w-64 px-4 py-2 border border-brand-border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                >
                                    <option value="en">English</option>
                                    <option value="es">Español</option>
                                    <option value="fr">Français</option>
                                    <option value="de">Deutsch</option>
                                    <option value="hi">हिन्दी</option>
                                </select>
                            </div>
                        </div>

                        <div className="p-6 border-t border-brand-border">
                            <Button
                                variant="solid"
                                colorScheme="primary"
                                isLoading={isSaving}
                                onClick={saveSettings}
                            >
                                Save Display Settings
                            </Button>
                        </div>
                    </Card>
                );
            case 'security':
                return (
                    <Card>
                        <div className="p-6 border-b border-brand-border">
                            <h2 className="text-xl font-semibold text-brand-text">Security Settings</h2>
                            <p className="text-sm text-brand-muted mt-1">Manage your account security</p>
                        </div>

                        <div className="divide-y divide-brand-border">
                            <div className="p-6">
                                <h3 className="font-medium text-brand-text mb-4">Change Password</h3>
                                <form className="space-y-4">
                                    <FormControl isRequired>
                                        <FormLabel htmlFor="currentPassword">Current Password</FormLabel>
                                        <input
                                            id="currentPassword"
                                            type="password"
                                            className="w-full px-4 py-2 border border-brand-border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                        />
                                    </FormControl>

                                    <FormControl isRequired>
                                        <FormLabel htmlFor="newPassword">New Password</FormLabel>
                                        <input
                                            id="newPassword"
                                            type="password"
                                            className="w-full px-4 py-2 border border-brand-border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                        />
                                    </FormControl>

                                    <FormControl isRequired>
                                        <FormLabel htmlFor="confirmPassword">Confirm New Password</FormLabel>
                                        <input
                                            id="confirmPassword"
                                            type="password"
                                            className="w-full px-4 py-2 border border-brand-border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                        />
                                    </FormControl>

                                    <Button
                                        type="submit"
                                        variant="solid"
                                        colorScheme="primary"
                                    >
                                        Update Password
                                    </Button>
                                </form>
                            </div>

                            <div className="p-6">
                                <h3 className="font-medium text-brand-text mb-2">Two-Factor Authentication</h3>
                                <p className="text-sm text-brand-muted mb-4">Add an extra layer of security to your account</p>
                                <Button
                                    variant="outline"
                                    colorScheme="primary"
                                >
                                    Enable 2FA
                                </Button>
                            </div>

                            <div className="p-6">
                                <h3 className="font-medium text-brand-text mb-2">Login Sessions</h3>
                                <p className="text-sm text-brand-muted mb-4">Manage devices where you're currently logged in</p>
                                <Button
                                    variant="outline"
                                    colorScheme="error"
                                >
                                    Log Out All Devices
                                </Button>
                            </div>
                        </div>
                    </Card>
                );
            default:
                return null;
        }
    };

    return (
        <>
            <SEOHead
                title="Account Settings"
                description="Manage your account settings for 10-minute grocery delivery service. Update your preferences, notifications, and privacy settings."
                keywords="account settings, notification preferences, privacy settings, user preferences"
                noIndex={true}
            />

            <div className="max-w-7xl mx-auto">
                <PageHeader
                    title="Account Settings"
                    subtitle="Manage your account preferences and settings"
                    breadcrumbs={[
                        { label: 'Home', href: '/' },
                        { label: 'Dashboard', href: '/dashboard' },
                        { label: 'Settings' }
                    ]}
                />

                {/* Tab Navigation */}
                <div className="mb-6 border-b border-brand-border">
                    <div className="flex flex-wrap -mb-px">
                        <button
                            onClick={() => setActiveTab('notifications')}
                            className={`mr-2 inline-flex items-center px-4 py-3 border-b-2 ${
                                activeTab === 'notifications'
                                    ? 'border-brand-primary text-brand-primary'
                                    : 'border-transparent text-brand-muted hover:text-brand-text hover:border-brand-border'
                            }`}
                            aria-selected={activeTab === 'notifications'}
                            role="tab"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            Notifications
                        </button>
                        <button
                            onClick={() => setActiveTab('privacy')}
                            className={`mr-2 inline-flex items-center px-4 py-3 border-b-2 ${
                                activeTab === 'privacy'
                                    ? 'border-brand-primary text-brand-primary'
                                    : 'border-transparent text-brand-muted hover:text-brand-text hover:border-brand-border'
                            }`}
                            aria-selected={activeTab === 'privacy'}
                            role="tab"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            Privacy
                        </button>
                        <button
                            onClick={() => setActiveTab('display')}
                            className={`mr-2 inline-flex items-center px-4 py-3 border-b-2 ${
                                activeTab === 'display'
                                    ? 'border-brand-primary text-brand-primary'
                                    : 'border-transparent text-brand-muted hover:text-brand-text hover:border-brand-border'
                            }`}
                            aria-selected={activeTab === 'display'}
                            role="tab"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Display & Accessibility
                        </button>
                        <button
                            onClick={() => setActiveTab('security')}
                            className={`mr-2 inline-flex items-center px-4 py-3 border-b-2 ${
                                activeTab === 'security'
                                    ? 'border-brand-primary text-brand-primary'
                                    : 'border-transparent text-brand-muted hover:text-brand-text hover:border-brand-border'
                            }`}
                            aria-selected={activeTab === 'security'}
                            role="tab"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            Security
                        </button>
                    </div>
                </div>

                {/* Tab Content */}
                {renderTabContent()}
            </div>
        </>
    );
};

export default SettingsPage; 