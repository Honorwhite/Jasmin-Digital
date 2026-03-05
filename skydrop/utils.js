const Utils = {
    generateId: () => {
        return Math.random().toString(36).substring(2, 9);
    },

    getDeviceName: () => {
        const ua = navigator.userAgent;
        if (/android/i.test(ua)) return "Android Device";
        if (/iPad|iPhone|iPod/.test(ua)) return "iOS Device";
        if (/Windows/i.test(ua)) return "Windows PC";
        if (/Mac/i.test(ua)) return "MacBook";
        if (/Linux/i.test(ua)) return "Linux System";
        return "Unknown Device";
    },

    formatBytes: (bytes, decimals = 2) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    },

    // In a real app, this would be fetched from a server
    // For this demo, we use a simple hash of the public IP if possible
    // Or we use a fallback if IP is blocked by CORS
    getNetworkHash: async () => {
        try {
            const response = await fetch('https://api.ipify.org?format=json');
            const data = await response.json();
            return `skydrop-${data.ip.replace(/\./g, '-')}`;
        } catch (e) {
            console.warn("Could not get public IP, defaulting to global room");
            return "skydrop-global";
        }
    },

    formatTime: (seconds) => {
        if (!isFinite(seconds) || seconds < 0) return "";
        if (seconds < 60) return `${Math.round(seconds)}s`;
        const mins = Math.floor(seconds / 60);
        const secs = Math.round(seconds % 60);
        return `${mins}m ${secs}s`;
    }
};
