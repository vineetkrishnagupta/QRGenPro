import { create } from 'zustand';
import { QrData, QrOptions, defaultQrOptions } from '../types/qr';

interface QrStore {
  qrData: QrData;
  qrOptions: QrOptions;
  setQrData: (data: Partial<QrData>) => void;
  setQrOptions: (options: Partial<QrOptions>) => void;
  setDeepQrOptions: (category: keyof QrOptions, options: Record<string, unknown>) => void;
  getPayloadString: () => string;
}

export const useQrStore = create<QrStore>((set, get) => ({
  qrData: {
    type: 'url',
    url: 'https://example.com'
  },
  qrOptions: defaultQrOptions,
  
  setQrData: (data) => set((state) => {
    const updatedData = { ...state.qrData, ...data };
    return { 
      qrData: updatedData,
      qrOptions: { ...state.qrOptions, data: generatePayload(updatedData) }
    };
  }),
  
  setQrOptions: (options) => set((state) => ({ 
    qrOptions: { ...state.qrOptions, ...options } 
  })),

  setDeepQrOptions: (category, options) => set((state) => {
    const currentCategoryVal = state.qrOptions[category];
    if (typeof currentCategoryVal === 'object' && currentCategoryVal !== null) {
      return {
        qrOptions: {
          ...state.qrOptions,
          [category]: {
            ...currentCategoryVal,
            ...options
          }
        }
      };
    }
    return {
      qrOptions: {
        ...state.qrOptions,
        [category]: options
      }
    };
  }),

  getPayloadString: () => generatePayload(get().qrData)
}));

/**
 * Escapes special characters for WiFi QR specification: \ ; , : "
 */
function escapeWifiString(str: string): string {
  return str.replace(/([\\;,":])/g, '\\$1');
}

/**
 * Formats QR payload string based on data type standards.
 */
export function generatePayload(data: QrData): string {
  switch (data.type) {
    case 'text':
      return data.text || '';
    
    case 'url':
      return data.url || '';
      
    case 'email': {
      if (!data.email) return '';
      let mailto = `mailto:${encodeURIComponent(data.email)}`;
      const params: string[] = [];
      if (data.subject) params.push(`subject=${encodeURIComponent(data.subject)}`);
      if (data.message) params.push(`body=${encodeURIComponent(data.message)}`);
      if (params.length > 0) mailto += `?${params.join('&')}`;
      return mailto;
    }
      
    case 'phone':
      return data.phone ? `tel:${data.phone.trim()}` : '';
      
    case 'sms':
      if (!data.phone) return '';
      return `SMSTO:${data.phone.trim()}:${data.message || ''}`;
      
    case 'wifi': {
      if (!data.ssid) return '';
      const type = data.encryption === 'nopass' ? 'nopass' : (data.encryption || 'WPA');
      const escapedSsid = escapeWifiString(data.ssid);
      const escapedPassword = data.password ? escapeWifiString(data.password) : '';
      return `WIFI:T:${type};S:${escapedSsid};${type !== 'nopass' ? `P:${escapedPassword};` : ''}${data.hidden ? 'H:true;' : ''};`;
    }
      
    case 'vcard': {
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
    }
      
    case 'location':
      return (data.latitude && data.longitude) ? `geo:${data.latitude},${data.longitude}` : '';
      
    case 'whatsapp': {
      if (!data.phone) return '';
      let waUrl = `https://wa.me/${data.phone.replace(/[^0-9]/g, '')}`;
      if (data.message) waUrl += `?text=${encodeURIComponent(data.message)}`;
      return waUrl;
    }
      
    case 'upi': {
      if (!data.upiId) return '';
      let upiUrl = `upi://pay?pa=${encodeURIComponent(data.upiId)}`;
      if (data.payeeName) upiUrl += `&pn=${encodeURIComponent(data.payeeName)}`;
      if (data.amount) upiUrl += `&am=${encodeURIComponent(data.amount)}`;
      upiUrl += '&cu=INR';
      if (data.transactionNote) upiUrl += `&tn=${encodeURIComponent(data.transactionNote)}`;
      return upiUrl;
    }
      
    default:
      return '';
  }
}
