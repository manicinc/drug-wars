import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.manicinc.drugwars',
  appName: 'Drug Wars',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
