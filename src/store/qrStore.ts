import { create } from 'zustand';
import { QrData, QrOptions, defaultQrOptions } from '../types/qr';

interface QrStore {
  qrData: QrData;
  qrOptions: QrOptions;
  setQrData: (data: Partial<QrData>) => void;
  setQrOptions: (options: Partial<QrOptions>) => void;
  setDeepQrOptions: (category: keyof QrOptions, options: any) => void;
  getPayloadString: () => string;
}

export const useQrStore = create<QrStore>((set, get) => ({
  qrData: {
    type: 'url',
    url: 'https://example.com'
  },
  qrOptions: defaultQrOptions,
  
  setQrData: (data) => set((state) => ({ 
    qrData: { ...state.qrData, ...data },
    qrOptions: { ...state.qrOptions, data: generatePayload({ ...state.qrData, ...data }) }
  })),
  
  setQrOptions: (options) => set((state) => ({ 
    qrOptions: { ...state.qrOptions, ...options } 
  })),

  setDeepQrOptions: (category, options) => set((state) => ({
    qrOptions: {
      ...state.qrOptions,
      [category]: {
        ...(state.qrOptions[category] as any),
        ...options
      }
    }
  })),

  getPayloadString: () => generatePayload(get().qrData)
}));

// Helper to format payload based on type
function generatePayload(data: QrData): string {
  switch (data.type) {
    case 'text':
      return data.text || '';
    
    case 'url':
      return data.url || '';
      
    case 'email':
      if (!data.email) return '';
      let mailto = `mailto:${data.email}`;
      const params = [];
      if (data.subject) params.push(`subject=${encodeURIComponent(data.subject)}`);
      if (data.message) params.push(`body=${encodeURIComponent(data.message)}`);
      if (params.length > 0) mailto += `?${params.join('&')}`;
      return mailto;
      
    case 'phone':
      return data.phone ? `tel:${data.phone}` : '';
      
    case 'sms':
      if (!data.phone) return '';
      return `SMSTO:${data.phone}:${data.message || ''}`;
      
    case 'wifi':
      if (!data.ssid) return '';
      const type = data.encryption === 'nopass' ? 'nopass' : (data.encryption || 'WPA');
      return `WIFI:T:${type};S:${data.ssid};${type !== 'nopass' ? `P:${data.password};` : ''}${data.hidden ? 'H:true;' : ''};`;
      
    case 'vcard':
      const vcard = [
        'BEGIN:VCARD',
        'VERSION:3.0',
        `FN:${data.firstName || ''} ${data.lastName || ''}`.trim(),
        data.phone ? `TEL:${data.phone}` : '',
        data.email ? `EMAIL:${data.email}` : '',
        data.company ? `ORG:${data.company}` : '',
        data.jobTitle ? `TITLE:${data.jobTitle}` : '',
        data.website ? `URL:${data.website}` : '',
        data.address ? `ADR:;;${data.address};;;;` : '',
        'END:VCARD'
      ].filter(Boolean).join('\n');
      return vcard;
      
    case 'location':
      return (data.latitude && data.longitude) ? `geo:${data.latitude},${data.longitude}` : '';
      
    case 'whatsapp':
      if (!data.phone) return '';
      let waUrl = `https://wa.me/${data.phone.replace(/[^0-9]/g, '')}`;
      if (data.message) waUrl += `?text=${encodeURIComponent(data.message)}`;
      return waUrl;
      
    case 'upi':
      if (!data.upiId) return '';
      let upiUrl = `upi://pay?pa=${data.upiId}`;
      if (data.payeeName) upiUrl += `&pn=${encodeURIComponent(data.payeeName)}`;
      if (data.amount) upiUrl += `&am=${data.amount}`;
      upiUrl += '&cu=INR';
      if (data.transactionNote) upiUrl += `&tn=${encodeURIComponent(data.transactionNote)}`;
      return upiUrl;
      
    default:
      return '';
  }
}
