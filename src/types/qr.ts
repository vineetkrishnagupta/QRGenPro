export type QrType = 
  | 'text'
  | 'url'
  | 'email'
  | 'phone'
  | 'sms'
  | 'wifi'
  | 'vcard'
  | 'location'
  | 'whatsapp'
  | 'upi';

export type QrData = {
  type: QrType;
  // Text
  text?: string;
  // URL
  url?: string;
  // Email
  email?: string;
  subject?: string;
  message?: string;
  // Phone
  phone?: string;
  // WiFi
  ssid?: string;
  password?: string;
  encryption?: 'WPA' | 'WEP' | 'nopass';
  hidden?: boolean;
  // vCard
  firstName?: string;
  lastName?: string;
  company?: string;
  jobTitle?: string;
  website?: string;
  address?: string;
  // Location
  latitude?: string;
  longitude?: string;
  // UPI
  upiId?: string;
  payeeName?: string;
  amount?: string;
  transactionNote?: string;
};

export type QrOptions = {
  width: number;
  height: number;
  margin: number;
  type?: 'canvas' | 'svg';
  data: string;
  image?: string;
  dotsOptions: {
    color: string;
    type: 'rounded' | 'dots' | 'classy' | 'classy-rounded' | 'square' | 'extra-rounded';
  };
  backgroundOptions: {
    color: string;
  };
  imageOptions: {
    crossOrigin: string;
    margin: number;
    imageSize: number;
  };
  cornersSquareOptions: {
    color: string;
    type: 'dot' | 'square' | 'extra-rounded';
  };
  cornersDotOptions: {
    color: string;
    type: 'dot' | 'square';
  };
  qrOptions: {
    errorCorrectionLevel: 'L' | 'M' | 'Q' | 'H';
  };
};

// Default QR Code Styling options
export const defaultQrOptions: QrOptions = {
  width: 300,
  height: 300,
  margin: 10,
  type: "svg",
  data: 'https://example.com',
  imageOptions: {
    crossOrigin: "anonymous",
    margin: 5,
    imageSize: 0.4
  },
  dotsOptions: {
    color: "#000000",
    type: "square"
  },
  backgroundOptions: {
    color: "#ffffff",
  },
  cornersSquareOptions: {
    color: "#000000",
    type: "square"
  },
  cornersDotOptions: {
    color: "#000000",
    type: "square"
  },
  qrOptions: {
    errorCorrectionLevel: "M"
  }
};
