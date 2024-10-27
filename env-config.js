const prod = (process.env.NODE_ENV === 'production');

export const prodObject = {
    'process.env.BACKEND_URL': (prod ? '/wm-addon-box' : ''),
};